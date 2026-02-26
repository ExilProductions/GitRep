import { SignJWT, jwtVerify } from 'jose'
function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    return null
  }
  return new TextEncoder().encode(secret)
}
let JWT_SECRET = null
function getJwtSecretKey() {
  if (!JWT_SECRET) {
    const secret = getJwtSecret()
    if (!secret) {
      if (process.env.NODE_ENV === 'production') {
        throw new Error('JWT_SECRET environment variable is required in production')
      }
      JWT_SECRET = new TextEncoder().encode('gitrep-dev-secret-do-not-use-in-production')
    } else {
      JWT_SECRET = secret
    }
  }
  return JWT_SECRET
}
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || ''
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || ''
export function getGitHubClientId() {
  return GITHUB_CLIENT_ID
}
export function getGitHubClientSecret() {
  return GITHUB_CLIENT_SECRET
}
export function isAdmin(username) {
  const admins = process.env.ADMIN_USERS || ''
  return admins
    .split(',')
    .map((u) => u.trim().toLowerCase())
    .filter(Boolean)
    .includes(username.toLowerCase())
}
export async function createSession(user) {
  const token = await new SignJWT({
    id: user.id,
    github_id: user.github_id,
    username: user.username,
    avatar_url: user.avatar_url,
    is_admin: isAdmin(user.username),
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(getJwtSecretKey())
  return token
}
export async function getSession(token) {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey())
    return {
      id: payload.id,
      github_id: payload.github_id,
      username: payload.username,
      avatar_url: payload.avatar_url,
      is_admin: payload.is_admin,
    }
  } catch {
    return null
  }
}
