import Fastify from 'fastify'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

let initialized = false

async function initDb(): Promise<void> {
  if (initialized) return

  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        github_id INTEGER UNIQUE NOT NULL,
        username TEXT NOT NULL,
        avatar_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS reputation (
        id SERIAL PRIMARY KEY,
        repo_owner TEXT NOT NULL,
        repo_name TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        type TEXT NOT NULL CHECK(type IN ('positive', 'negative')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        UNIQUE(repo_owner, repo_name, user_id)
      );

      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        repo_owner TEXT NOT NULL,
        repo_name TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );

      CREATE INDEX IF NOT EXISTS idx_reputation_repo ON reputation(repo_owner, repo_name);
      CREATE INDEX IF NOT EXISTS idx_reputation_user ON reputation(user_id);
      CREATE INDEX IF NOT EXISTS idx_comments_repo ON comments(repo_owner, repo_name);
      CREATE INDEX IF NOT EXISTS idx_comments_user ON comments(user_id);
      CREATE INDEX IF NOT EXISTS idx_reputation_repo_search ON reputation(lower(repo_owner), lower(repo_name));

      ALTER TABLE users ADD COLUMN IF NOT EXISTS banned_at TIMESTAMP DEFAULT NULL;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

      CREATE TABLE IF NOT EXISTS blocked_words (
        id SERIAL PRIMARY KEY,
        word TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS mod_log (
        id SERIAL PRIMARY KEY,
        admin_user_id INTEGER NOT NULL,
        action TEXT NOT NULL,
        target_user_id INTEGER,
        target_comment_id INTEGER,
        reason TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (admin_user_id) REFERENCES users(id)
      );
    `)

    // Auto-migrate: if ADMIN_USERS env var is set, promote those users in the DB
    const envAdmins = process.env.ADMIN_USERS || ''
    const adminUsernames = envAdmins
      .split(',')
      .map((u) => u.trim().toLowerCase())
      .filter(Boolean)
    if (adminUsernames.length > 0) {
      for (const adminName of adminUsernames) {
        await client.query(
          `UPDATE users SET is_admin = TRUE WHERE lower(username) = $1 AND is_admin = FALSE`,
          [adminName]
        )
      }
    }

    // Auto-admin: if no admin exists at all, promote the first registered user
    const adminCheck = await client.query('SELECT COUNT(*) as cnt FROM users WHERE is_admin = TRUE')
    if (parseInt(adminCheck.rows[0].cnt) === 0) {
      await client.query(
        `UPDATE users SET is_admin = TRUE WHERE id = (SELECT id FROM users ORDER BY created_at ASC LIMIT 1)`
      )
    }

    initialized = true
  } finally {
    client.release()
  }
}

export interface User {
  id: number
  github_id: number
  username: string
  avatar_url: string | null
  created_at: string
  is_admin: boolean
}

export interface ReputationEntry {
  id: number
  repo_owner: string
  repo_name: string
  user_id: number
  type: 'positive' | 'negative'
  created_at: string
  updated_at: string
  username?: string
  avatar_url?: string | null
}

export interface CommentEntry {
  id: number
  repo_owner: string
  repo_name: string
  user_id: number
  content: string
  created_at: string
  username?: string
  avatar_url?: string | null
}

export async function upsertUser(
  githubId: number,
  username: string,
  avatarUrl: string | null
): Promise<User> {
  await initDb()

  // Check if any users exist before inserting (for first-user-is-admin logic)
  const countResult = await pool.query('SELECT COUNT(*) as cnt FROM users')
  const isFirstUser = parseInt(countResult.rows[0].cnt) === 0

  const result = await pool.query(
    `INSERT INTO users (github_id, username, avatar_url, is_admin)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT(github_id) DO UPDATE SET username = excluded.username, avatar_url = excluded.avatar_url
     RETURNING *`,
    [githubId, username, avatarUrl, isFirstUser]
  )
  return result.rows[0]
}

export async function isUserAdmin(userId: number): Promise<boolean> {
  await initDb()
  const result = await pool.query('SELECT is_admin FROM users WHERE id = $1', [userId])
  return result.rows[0]?.is_admin === true
}

export async function getUserById(id: number): Promise<User | undefined> {
  await initDb()
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  return result.rows[0]
}

export async function getRepoReputation(
  owner: string,
  name: string
): Promise<{ positive: number; negative: number }> {
  await initDb()
  const result = await pool.query(
    `SELECT
      COALESCE(SUM(CASE WHEN type = 'positive' THEN 1 ELSE 0 END), 0) as positive,
      COALESCE(SUM(CASE WHEN type = 'negative' THEN 1 ELSE 0 END), 0) as negative
     FROM reputation WHERE repo_owner = $1 AND repo_name = $2`,
    [owner, name]
  )
  return result.rows[0]
}

export async function getUserRepForRepo(
  userId: number,
  owner: string,
  name: string
): Promise<ReputationEntry | undefined> {
  await initDb()
  const result = await pool.query(
    'SELECT * FROM reputation WHERE user_id = $1 AND repo_owner = $2 AND repo_name = $3',
    [userId, owner, name]
  )
  return result.rows[0]
}

export async function addOrUpdateReputation(
  owner: string,
  name: string,
  userId: number,
  type: 'positive' | 'negative'
): Promise<ReputationEntry> {
  await initDb()
  await pool.query(
    `INSERT INTO reputation (repo_owner, repo_name, user_id, type)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT(repo_owner, repo_name, user_id)
     DO UPDATE SET type = excluded.type, updated_at = CURRENT_TIMESTAMP`,
    [owner, name, userId, type]
  )

  const result = await pool.query(
    'SELECT r.*, u.username, u.avatar_url FROM reputation r JOIN users u ON r.user_id = u.id WHERE r.user_id = $1 AND r.repo_owner = $2 AND r.repo_name = $3',
    [userId, owner, name]
  )
  return result.rows[0]
}

export async function deleteReputation(userId: number, owner: string, name: string): Promise<void> {
  await initDb()
  await pool.query(
    'DELETE FROM reputation WHERE user_id = $1 AND repo_owner = $2 AND repo_name = $3',
    [userId, owner, name]
  )
}

export async function getRepoComments(
  owner: string,
  name: string,
  limit = 100
): Promise<CommentEntry[]> {
  await initDb()
  const result = await pool.query(
    `SELECT c.*, u.username, u.avatar_url
     FROM comments c
     JOIN users u ON c.user_id = u.id
     WHERE c.repo_owner = $1 AND c.repo_name = $2
     ORDER BY c.created_at DESC
     LIMIT $3`,
    [owner, name, limit]
  )
  return result.rows
}

export async function addComment(
  owner: string,
  name: string,
  userId: number,
  content: string
): Promise<CommentEntry> {
  await initDb()
  const result = await pool.query(
    `INSERT INTO comments (repo_owner, repo_name, user_id, content)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [owner, name, userId, content]
  )

  const commentResult = await pool.query(
    'SELECT c.*, u.username, u.avatar_url FROM comments c JOIN users u ON c.user_id = u.id WHERE c.id = $1',
    [result.rows[0].id]
  )
  return commentResult.rows[0]
}

export async function deleteComment(commentId: number, userId: number): Promise<boolean> {
  await initDb()
  const result = await pool.query('DELETE FROM comments WHERE id = $1 AND user_id = $2', [
    commentId,
    userId,
  ])
  return result.rowCount ? result.rowCount > 0 : false
}

export async function searchRepos(
  query: string,
  limit = 10
): Promise<
  { repo_owner: string; repo_name: string; score: number; positive: number; negative: number }[]
> {
  await initDb()
  const q = query.toLowerCase()
  // Match against "owner/repo" or just "owner" or just "repo"
  const result = await pool.query(
    `SELECT repo_owner, repo_name,
      SUM(CASE WHEN type = 'positive' THEN 1 ELSE 0 END)::int as positive,
      SUM(CASE WHEN type = 'negative' THEN 1 ELSE 0 END)::int as negative,
      SUM(CASE WHEN type = 'positive' THEN 1 ELSE -1 END)::int as score
     FROM reputation
     WHERE lower(repo_owner || '/' || repo_name) LIKE $1
     GROUP BY repo_owner, repo_name
     ORDER BY COUNT(*) DESC
     LIMIT $2`,
    [`%${q}%`, limit]
  )
  return result.rows
}

// Admin functions

export async function isUserBanned(userId: number): Promise<boolean> {
  await initDb()
  const result = await pool.query('SELECT banned_at FROM users WHERE id = $1', [userId])
  return result.rows[0]?.banned_at != null
}

export async function banUser(userId: number, adminId: number, reason?: string): Promise<void> {
  await initDb()
  await pool.query('UPDATE users SET banned_at = CURRENT_TIMESTAMP WHERE id = $1', [userId])
  await pool.query(
    'INSERT INTO mod_log (admin_user_id, action, target_user_id, reason) VALUES ($1, $2, $3, $4)',
    [adminId, 'ban', userId, reason || null]
  )
}

export async function unbanUser(userId: number, adminId: number): Promise<void> {
  await initDb()
  await pool.query('UPDATE users SET banned_at = NULL WHERE id = $1', [userId])
  await pool.query(
    'INSERT INTO mod_log (admin_user_id, action, target_user_id) VALUES ($1, $2, $3)',
    [adminId, 'unban', userId]
  )
}

export async function deleteCommentAdmin(
  commentId: number,
  adminId: number,
  reason?: string
): Promise<boolean> {
  await initDb()
  const result = await pool.query('DELETE FROM comments WHERE id = $1', [commentId])
  if (result.rowCount && result.rowCount > 0) {
    await pool.query(
      'INSERT INTO mod_log (admin_user_id, action, target_comment_id, reason) VALUES ($1, $2, $3, $4)',
      [adminId, 'delete_comment', commentId, reason || null]
    )
    return true
  }
  return false
}

export async function getAdminStats(): Promise<{
  total_users: number
  total_comments: number
  total_votes: number
  banned_users: number
}> {
  await initDb()
  const result = await pool.query(`
    SELECT
      (SELECT COUNT(*) FROM users)::int as total_users,
      (SELECT COUNT(*) FROM comments)::int as total_comments,
      (SELECT COUNT(*) FROM reputation)::int as total_votes,
      (SELECT COUNT(*) FROM users WHERE banned_at IS NOT NULL)::int as banned_users
  `)
  return result.rows[0]
}

export async function getAllUsers(
  page = 1,
  search?: string
): Promise<{ users: User[]; total: number }> {
  await initDb()
  const limit = 20
  const offset = (page - 1) * limit
  const where = search ? `WHERE lower(username) LIKE $1` : ''
  const params = search ? [`%${search.toLowerCase()}%`] : []

  const countResult = await pool.query(`SELECT COUNT(*) as cnt FROM users ${where}`, params)
  const total = parseInt(countResult.rows[0].cnt)

  const result = await pool.query(
    `SELECT * FROM users ${where} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, limit, offset]
  )
  return { users: result.rows, total }
}

export async function getAllComments(
  page = 1,
  search?: string
): Promise<{ comments: CommentEntry[]; total: number }> {
  await initDb()
  const limit = 20
  const offset = (page - 1) * limit
  const where = search ? `WHERE lower(c.content) LIKE $1 OR lower(u.username) LIKE $1` : ''
  const params = search ? [`%${search.toLowerCase()}%`] : []

  const countResult = await pool.query(
    `SELECT COUNT(*) as cnt FROM comments c JOIN users u ON c.user_id = u.id ${where}`,
    params
  )
  const total = parseInt(countResult.rows[0].cnt)

  const result = await pool.query(
    `SELECT c.*, u.username, u.avatar_url FROM comments c JOIN users u ON c.user_id = u.id ${where} ORDER BY c.created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, limit, offset]
  )
  return { comments: result.rows, total }
}

export async function getModLog(page = 1): Promise<{ entries: any[]; total: number }> {
  await initDb()
  const limit = 20
  const offset = (page - 1) * limit

  const countResult = await pool.query('SELECT COUNT(*) as cnt FROM mod_log')
  const total = parseInt(countResult.rows[0].cnt)

  const result = await pool.query(
    `SELECT m.*, u.username as admin_username, t.username as target_username
     FROM mod_log m
     JOIN users u ON m.admin_user_id = u.id
     LEFT JOIN users t ON m.target_user_id = t.id
     ORDER BY m.created_at DESC
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  )
  return { entries: result.rows, total }
}

export async function getBlockedWords(): Promise<string[]> {
  await initDb()
  const result = await pool.query('SELECT word FROM blocked_words ORDER BY word')
  return result.rows.map((r: any) => r.word)
}

export async function addBlockedWord(word: string): Promise<void> {
  await initDb()
  await pool.query('INSERT INTO blocked_words (word) VALUES ($1) ON CONFLICT (word) DO NOTHING', [
    word.toLowerCase().trim(),
  ])
}

export async function removeBlockedWord(word: string): Promise<void> {
  await initDb()
  await pool.query('DELETE FROM blocked_words WHERE word = $1', [word.toLowerCase().trim()])
}
