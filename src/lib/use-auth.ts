import useSWR, { mutate as globalMutate } from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export interface AuthUser {
  id: number
  github_id: number
  username: string
  avatar_url: string | null
  is_admin: boolean
}

export async function handleUnauthorized() {
  await fetch('/api/auth/logout', { method: 'POST' })
  globalMutate('/api/auth/me', { user: null }, false)
}

export function useAuth() {
  const { data, error, isLoading, mutate } = useSWR<{ user: AuthUser | null }>(
    '/api/auth/me',
    fetcher
  )

  const login = () => {
    window.location.href = '/api/auth/github'
  }

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    mutate({ user: null })
  }

  return {
    user: data?.user || null,
    isLoading,
    error,
    login,
    logout,
    mutate,
  }
}
