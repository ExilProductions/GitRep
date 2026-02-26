import { SignJWT, jwtVerify } from 'jose'

function getJwtSecret(): Uint8Array | null {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    return null
  }
  return new TextEncoder().encode(secret)
}

let JWT_SECRET: Uint8Array | null = null

function getJwtSecretKey(): Uint8Array {
  if (!JWT_SECRET) {
    const secret = getJwtSecret()
    if (!secret) {
      if (process.env.NODE_ENV === 'production') {
        throw new Error(
          'JWT_SECRET environment variable is required in production'
        )
      }
      JWT_SECRET = new TextEncoder().encode(
        'gitrep-dev-secret-do-not-use-in-production'
      )
    } else {
      JWT_SECRET = secret
    }
  }
  return JWT_SECRET
}

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || ''
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || ''

export function getGitHubClientId(): string {
  return GITHUB_CLIENT_ID
}

export function getGitHubClientSecret(): string {
  return GITHUB_CLIENT_SECRET
}

export interface SessionUser {
  id: number
  github_id: number
  username: string
  avatar_url: string | null
}

export async function createSession(user: SessionUser): Promise<string> {
  const token = await new SignJWT({
    id: user.id,
    github_id: user.github_id,
    username: user.username,
    avatar_url: user.avatar_url,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(getJwtSecretKey())

  return token
}

export async function getSession(token: string | undefined): Promise<SessionUser | null> {
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey())
    return {
      id: payload.id as number,
      github_id: payload.github_id as number,
      username: payload.username as string,
      avatar_url: payload.avatar_url as string | null,
    }
  } catch {
    return null
  }
}
