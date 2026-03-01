import path from 'path'
import { fileURLToPath } from 'url'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyRateLimit from '@fastify/rate-limit'
import fastifyStatic from '@fastify/static'
import fastifyWebsocket from '@fastify/websocket'
import type { WebSocket } from 'ws'
import { z } from 'zod'
import {
  getRepoReputation,
  getRepoComments,
  getUserRepForRepo,
  addOrUpdateReputation,
  deleteReputation,
  getUserById,
  upsertUser,
  addComment,
  deleteComment,
  searchRepos,
  isUserBanned,
  isUserAdmin,
  banUser,
  unbanUser,
  deleteCommentAdmin,
  getAdminStats,
  getAllUsers,
  getAllComments,
  getModLog,
  getBlockedWords,
  addBlockedWord,
  removeBlockedWord,
} from './db.js'
import {
  createSession,
  getSession,
  getGitHubClientId,
  getGitHubClientSecret,
  type SessionUser,
} from './auth.js'
import { checkComment } from './automod.js'
import { notifyRepGiven, notifyComment } from './discord-webhook.js'

const fastify = Fastify({
  logger: true,
})

await fastify.register(fastifyCookie)

await fastify.register(fastifyCors, {
  origin: process.env.PUBLIC_APP_URL || 'http://localhost:5173',
  credentials: true,
})

await fastify.register(fastifyRateLimit, {
  max: 100,
  timeWindow: '1 minute',
})

await fastify.register(fastifyWebsocket)

// WebSocket subscriptions: repo key -> set of connected sockets
const repoSubscribers = new Map<string, Set<WebSocket>>()

function broadcastRepUpdate(
  owner: string,
  repo: string,
  reputation: { positive: number; negative: number }
) {
  const key = `${owner}/${repo}`
  const subs = repoSubscribers.get(key)
  if (!subs) return
  const msg = JSON.stringify({ type: 'rep_update', owner, repo, reputation })
  for (const ws of subs) {
    if (ws.readyState === ws.OPEN) {
      ws.send(msg)
    }
  }
}

const wsRepSchema = z.object({
  action: z.enum(['vote', 'remove']),
  type: z.enum(['positive', 'negative']).optional(),
})

fastify.get('/ws/repos/:owner/:repo', { websocket: true }, (socket, request) => {
  const { owner, repo } = request.params as { owner: string; repo: string }
  const key = `${owner}/${repo}`

  // Auth: read session cookie from the upgrade request
  const cookieHeader = request.headers.cookie || ''
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=')
      return [k, v.join('=')]
    })
  )
  const sessionToken = cookies.gitrep_session

  if (!repoSubscribers.has(key)) {
    repoSubscribers.set(key, new Set())
  }
  repoSubscribers.get(key)!.add(socket)

  socket.on('message', async (raw) => {
    try {
      const data = JSON.parse(raw.toString())
      const parsed = wsRepSchema.parse(data)

      // Authenticate
      const session = await getSession(sessionToken)
      if (!session) {
        socket.send(JSON.stringify({ type: 'error', error: 'Unauthorized' }))
        return
      }
      const user = await getUserById(session.id)
      if (!user) {
        socket.send(JSON.stringify({ type: 'error', error: 'Session expired' }))
        return
      }

      // Ban check
      if (await isUserBanned(session.id)) {
        socket.send(JSON.stringify({ type: 'error', error: 'You are banned' }))
        return
      }

      if (parsed.action === 'vote') {
        if (!parsed.type) {
          socket.send(JSON.stringify({ type: 'error', error: 'Missing vote type' }))
          return
        }
        if (!(await repoExists(owner, repo))) {
          socket.send(JSON.stringify({ type: 'error', error: 'Repository not found on GitHub' }))
          return
        }
        await addOrUpdateReputation(owner, repo, session.id, parsed.type)
        const reputation = await getRepoReputation(owner, repo)
        broadcastRepUpdate(owner, repo, reputation)
        await notifyRepGiven(
          owner,
          repo,
          user.username,
          user.avatar_url,
          parsed.type,
          reputation.positive - reputation.negative
        )
        socket.send(JSON.stringify({ type: 'vote_ok', userRep: { type: parsed.type } }))
      } else if (parsed.action === 'remove') {
        await deleteReputation(session.id, owner, repo)
        const reputation = await getRepoReputation(owner, repo)
        broadcastRepUpdate(owner, repo, reputation)
        socket.send(JSON.stringify({ type: 'vote_ok', userRep: null }))
      }
    } catch {
      socket.send(JSON.stringify({ type: 'error', error: 'Invalid message' }))
    }
  })

  socket.on('close', () => {
    const subs = repoSubscribers.get(key)
    if (subs) {
      subs.delete(socket)
      if (subs.size === 0) repoSubscribers.delete(key)
    }
  })
})

// Stricter rate limits for auth routes
fastify.after(() => {
  fastify.route({
    method: 'GET',
    url: '/api/auth/github',
    config: {
      rateLimit: { max: 10, timeWindow: '1 minute' },
    },
    handler: authGithubHandler,
  })

  fastify.route({
    method: 'GET',
    url: '/api/auth/github/callback',
    config: {
      rateLimit: { max: 10, timeWindow: '1 minute' },
    },
    handler: authCallbackHandler,
  })
})

async function repoExists(owner: string, repo: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      method: 'HEAD',
      headers: { 'User-Agent': 'gitrep' },
    })
    return res.ok
  } catch {
    return false
  }
}

const repSchema = z.object({
  type: z.enum(['positive', 'negative']),
})

const commentSchema = z.object({
  content: z.string().min(1).max(500),
})

const deleteCommentSchema = z.object({
  commentId: z.number(),
})

// Auth handlers (registered above with stricter rate limits)
import type { FastifyRequest, FastifyReply } from 'fastify'

async function authGithubHandler(request: FastifyRequest, reply: FastifyReply) {
  const clientId = getGitHubClientId()

  if (!clientId) {
    return reply.status(500).send({ error: 'GitHub OAuth is not configured' })
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'read:user',
    redirect_uri:
      process.env.GITHUB_CALLBACK_URL ||
      `${process.env.PUBLIC_APP_URL || 'http://localhost:5173'}/api/auth/github/callback`,
  })

  return reply.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`)
}

async function authCallbackHandler(request: FastifyRequest, reply: FastifyReply) {
  const code = (request.query as { code?: string }).code

  if (!code) {
    return reply.redirect('/?error=no_code')
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: getGitHubClientId(),
        client_secret: getGitHubClientSecret(),
        code,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      return reply.redirect(`/?error=${tokenData.error}`)
    }

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    const userData = await userResponse.json()

    const user = await upsertUser(userData.id, userData.login, userData.avatar_url)

    const token = await createSession({
      id: user.id,
      username: user.username,
      avatar_url: user.avatar_url,
      is_admin: user.is_admin,
    })

    reply.setCookie('gitrep_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return reply.redirect('/')
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    return reply.redirect('/?error=auth_failed')
  }
}

fastify.post('/api/auth/logout', async (request, reply) => {
  reply.clearCookie('gitrep_session', { path: '/' })
  return { success: true }
})

fastify.get('/api/auth/me', async (request, reply) => {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  if (!session) {
    return { user: null }
  }

  // Always check DB for fresh admin status
  const adminStatus = await isUserAdmin(session.id)
  return { user: { ...session, is_admin: adminStatus } }
})

fastify.get('/api/search', async (request, reply) => {
  const { q } = request.query as { q?: string }
  if (!q || q.trim().length < 2) {
    return { results: [] }
  }
  const results = await searchRepos(q.trim())
  return { results }
})

fastify.get('/api/repos/:owner/:repo', async (request, reply) => {
  const { owner, repo } = request.params as { owner: string; repo: string }

  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  const reputation = await getRepoReputation(owner, repo)
  const comments = await getRepoComments(owner, repo, session?.id)

  let userRep = null
  if (session) {
    const rep = await getUserRepForRepo(session.id, owner, repo)
    userRep = rep || null
  }

  return {
    reputation,
    comments,
    userRep,
  }
})

fastify.post('/api/repos/:owner/:repo/rep', async (request, reply) => {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  if (!session) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const user = await getUserById(session.id)
  if (!user) {
    return reply.status(401).send({ error: 'Session expired. Please sign in again.' })
  }

  if (await isUserBanned(session.id)) {
    return reply.status(403).send({ error: 'You are banned' })
  }

  const { owner, repo } = request.params as { owner: string; repo: string }

  if (!(await repoExists(owner, repo))) {
    return reply.status(404).send({ error: 'Repository not found on GitHub' })
  }

  try {
    const body = request.body as Record<string, unknown>
    const parsed = repSchema.parse(body)

    await addOrUpdateReputation(owner, repo, session.id, parsed.type)
    const reputation = await getRepoReputation(owner, repo)
    broadcastRepUpdate(owner, repo, reputation)

    await notifyRepGiven(
      owner,
      repo,
      user.username,
      user.avatar_url,
      parsed.type,
      reputation.positive - reputation.negative
    )

    return { userRep: { type: parsed.type }, reputation }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({ error: 'Invalid input' })
    }
    console.error('POST /rep error:', error)
    return reply.status(500).send({ error: 'Internal server error' })
  }
})

fastify.delete('/api/repos/:owner/:repo/rep', async (request, reply) => {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  if (!session) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const user = await getUserById(session.id)
  if (!user) {
    return reply.status(401).send({ error: 'Session expired. Please sign in again.' })
  }

  const { owner, repo } = request.params as { owner: string; repo: string }

  await deleteReputation(session.id, owner, repo)
  const reputation = await getRepoReputation(owner, repo)
  broadcastRepUpdate(owner, repo, reputation)
  return { success: true }
})

fastify.post('/api/repos/:owner/:repo/comments', async (request, reply) => {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  if (!session) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const user = await getUserById(session.id)
  if (!user) {
    return reply.status(401).send({ error: 'Session expired. Please sign in again.' })
  }

  if (await isUserBanned(session.id)) {
    return reply.status(403).send({ error: 'You are banned' })
  }

  const { owner, repo } = request.params as { owner: string; repo: string }

  try {
    const body = request.body as Record<string, unknown>
    const parsed = commentSchema.parse(body)

    // Auto-moderation
    const modCheck = await checkComment(session.id, parsed.content)
    if (!modCheck.allowed) {
      return reply.status(400).send({ error: modCheck.reason })
    }

    const comment = await addComment(owner, repo, session.id, parsed.content)
    const comments = await getRepoComments(owner, repo, session.id)

    await notifyComment(
      owner,
      repo,
      user.username,
      user.avatar_url,
      parsed.content,
      comments.length
    )

    return { comment }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({ error: 'Invalid input' })
    }
    console.error('POST /comments error:', error)
    return reply.status(500).send({ error: 'Internal server error' })
  }
})

fastify.delete('/api/repos/:owner/:repo/comments', async (request, reply) => {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)

  if (!session) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }

  const user = await getUserById(session.id)
  if (!user) {
    return reply.status(401).send({ error: 'Session expired. Please sign in again.' })
  }

  try {
    const body = request.body as Record<string, unknown>
    const { commentId } = deleteCommentSchema.parse(body)

    const deleted = await deleteComment(commentId, session.id)
    if (!deleted) {
      return reply.status(404).send({ error: 'Comment not found' })
    }

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply.status(400).send({ error: 'Invalid input', details: error.errors })
    }
    return reply.status(500).send({ error: 'Internal server error' })
  }
})

// Admin helper - checks DB for fresh admin status
async function requireAdmin(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<SessionUser | null> {
  const token = request.cookies.gitrep_session
  const session = await getSession(token)
  if (!session) {
    reply.status(403).send({ error: 'Forbidden' })
    return null
  }
  const adminStatus = await isUserAdmin(session.id)
  if (!adminStatus) {
    reply.status(403).send({ error: 'Forbidden' })
    return null
  }
  return session
}

// Admin routes
fastify.get('/api/admin/stats', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  return await getAdminStats()
})

fastify.get('/api/admin/users', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { page, q } = request.query as { page?: string; q?: string }
  return await getAllUsers(parseInt(page || '1'), q)
})

fastify.post('/api/admin/users/:id/ban', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { id } = request.params as { id: string }
  const { reason } = (request.body as { reason?: string }) || {}
  await banUser(parseInt(id), session.id, reason)
  return { success: true }
})

fastify.delete('/api/admin/users/:id/ban', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { id } = request.params as { id: string }
  await unbanUser(parseInt(id), session.id)
  return { success: true }
})

fastify.get('/api/admin/comments', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { page, q } = request.query as { page?: string; q?: string }
  return await getAllComments(parseInt(page || '1'), q)
})

fastify.delete('/api/admin/comments/:id', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { id } = request.params as { id: string }
  const { reason } = (request.body as { reason?: string }) || {}
  const deleted = await deleteCommentAdmin(parseInt(id), session.id, reason)
  if (!deleted) return reply.status(404).send({ error: 'Comment not found' })
  return { success: true }
})

fastify.get('/api/admin/blocked-words', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  return { words: await getBlockedWords() }
})

fastify.post('/api/admin/blocked-words', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { word } = request.body as { word: string }
  if (!word || !word.trim()) return reply.status(400).send({ error: 'Word is required' })
  await addBlockedWord(word)
  return { success: true }
})

fastify.delete('/api/admin/blocked-words', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { word } = request.body as { word: string }
  if (!word) return reply.status(400).send({ error: 'Word is required' })
  await removeBlockedWord(word)
  return { success: true }
})

fastify.get('/api/admin/modlog', async (request, reply) => {
  const session = await requireAdmin(request, reply)
  if (!session) return
  const { page } = request.query as { page?: string }
  return await getModLog(parseInt(page || '1'))
})

// Serve static frontend in production
// In Docker: dist-server/index.js serves dist/index.html + dist/assets/
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const staticRoot = path.join(__dirname, '..', 'dist')

await fastify.register(fastifyStatic, {
  root: staticRoot,
  prefix: '/',
  wildcard: false,
})

// SPA fallback: non-API routes serve index.html
fastify.setNotFoundHandler(async (request, reply) => {
  if (request.url.startsWith('/api/') || request.url.startsWith('/ws/')) {
    return reply.status(404).send({ error: 'Not found' })
  }
  return reply.sendFile('index.html')
})

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3000', 10)
    await fastify.listen({ port, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
