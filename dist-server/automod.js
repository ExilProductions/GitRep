import pg from 'pg'
const { Pool } = pg
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
function getEnvBlockedWords() {
  const words = process.env.AUTOMOD_BLOCKED_WORDS || ''
  return words
    .split(',')
    .map((w) => w.trim().toLowerCase())
    .filter(Boolean)
}
async function getBlockedWords() {
  const envWords = getEnvBlockedWords()
  const dbResult = await pool.query('SELECT word FROM blocked_words')
  const dbWords = dbResult.rows.map((r) => r.word)
  return [...new Set([...envWords, ...dbWords])]
}
function countUrls(text) {
  const urlPattern = /https?:\/\/[^\s]+/gi
  return (text.match(urlPattern) || []).length
}
export async function checkComment(userId, content) {
  // Word filter
  const blocked = await getBlockedWords()
  const lower = content.toLowerCase()
  for (const word of blocked) {
    if (lower.includes(word)) {
      return { allowed: false, reason: 'Comment contains blocked content' }
    }
  }
  // Link spam: max 3 URLs
  if (countUrls(content) > 3) {
    return { allowed: false, reason: 'Too many links in comment' }
  }
  // Rate limit: max 5 comments per 10 minutes
  const rateResult = await pool.query(
    `SELECT COUNT(*) as cnt FROM comments WHERE user_id = $1 AND created_at > NOW() - INTERVAL '10 minutes'`,
    [userId]
  )
  if (parseInt(rateResult.rows[0].cnt) >= 5) {
    return { allowed: false, reason: 'Too many comments. Please wait before posting again.' }
  }
  // Duplicate detection: same content within 1 hour
  const dupResult = await pool.query(
    `SELECT COUNT(*) as cnt FROM comments WHERE user_id = $1 AND content = $2 AND created_at > NOW() - INTERVAL '1 hour'`,
    [userId, content]
  )
  if (parseInt(dupResult.rows[0].cnt) > 0) {
    return { allowed: false, reason: 'Duplicate comment detected' }
  }
  return { allowed: true }
}
