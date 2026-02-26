import { useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useSWR from 'swr'
import { useAuth } from '@/lib/use-auth'
import { useRepoWs } from '@/lib/use-repo-ws'
import { RepActions } from '@/components/rep-actions'
import { CommentForm } from '@/components/comment-form'
import { CommentList } from '@/components/comment-list'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface RepoData {
  reputation: { positive: number; negative: number }
  comments: Array<{
    id: number
    content: string
    created_at: string
    user_id: number
    username: string
    avatar_url: string | null
  }>
  userRep: {
    type: 'positive' | 'negative'
  } | null
}

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

export default function RepoPage() {
  const { owner, repo } = useParams<{ owner: string; repo: string }>()
  const { user, isLoading: authLoading, login, logout } = useAuth()
  const [exists, setExists] = useState<boolean | null>(null)

  useEffect(() => {
    if (owner && repo) {
      repoExists(owner, repo).then(setExists)
    }
  }, [owner, repo])

  const { data, isLoading, mutate } = useSWR<RepoData>(
    owner && repo ? `/api/repos/${owner}/${repo}` : null,
    fetcher
  )

  const handleRepUpdate = useCallback(
    (reputation: { positive: number; negative: number }) => {
      mutate((current) => (current ? { ...current, reputation } : current), false)
    },
    [mutate]
  )

  const handleVoteOk = useCallback(
    (userRep: { type: 'positive' | 'negative' } | null) => {
      mutate((current) => (current ? { ...current, userRep } : current), false)
    },
    [mutate]
  )

  const handleWsError = useCallback((error: string) => {
    console.error('WebSocket error:', error)
  }, [])

  const { sendVote, sendRemove } = useRepoWs(owner, repo, {
    onRepUpdate: handleRepUpdate,
    onVoteOk: handleVoteOk,
    onError: handleWsError,
  })

  if (!owner || !repo) {
    return null
  }

  if (exists === false) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Repository not found</h1>
          <p className="text-muted-foreground mb-4">
            The repository {owner}/{repo} does not exist on GitHub.
          </p>
          <Link to="/" className="text-primary underline">
            Go back home
          </Link>
        </div>
      </main>
    )
  }

  const score = data ? data.reputation.positive - data.reputation.negative : 0

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-lg flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-mono font-bold text-muted-foreground hover:text-foreground"
          >
            gitrep
          </Link>
          {authLoading ? null : user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground font-mono">{user.username}</span>
              {user.is_admin && (
                <Link
                  to="/admin"
                  className="text-xs text-muted-foreground underline hover:text-foreground"
                >
                  admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-xs text-muted-foreground underline hover:text-foreground"
              >
                sign out
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="text-xs text-muted-foreground underline hover:text-foreground"
            >
              sign in
            </button>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <a
            href={`https://github.com/${owner}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg hover:underline"
          >
            <span className="text-muted-foreground">{owner}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-semibold">{repo}</span>
          </a>
        </div>

        {isLoading ? (
          <div className="h-16 flex items-center">
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        ) : (
          <div className="flex items-baseline gap-4">
            <span
              className={`font-mono text-4xl font-bold ${score > 0 ? 'text-success' : score < 0 ? 'text-destructive' : 'text-muted-foreground'}`}
            >
              {score > 0 ? `+${score}` : score}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <span className="text-success">+{data?.reputation.positive ?? 0}</span>
              <span className="text-destructive">-{data?.reputation.negative ?? 0}</span>
            </div>
          </div>
        )}

        <RepActions
          user={user}
          userRep={data?.userRep ?? null}
          onLogin={login}
          onVote={sendVote}
          onRemove={sendRemove}
        />

        <CommentForm owner={owner} repo={repo} user={user} onUpdate={() => mutate()} />

        <CommentList
          owner={owner}
          repo={repo}
          comments={data?.comments ?? []}
          isLoading={isLoading}
          user={user}
          onUpdate={() => mutate()}
        />
      </div>
    </main>
  )
}
