import { useEffect, useRef, useCallback } from 'react'

type Reputation = { positive: number; negative: number }
type UserRep = { type: 'positive' | 'negative' } | null

interface WsCallbacks {
  onRepUpdate: (reputation: Reputation) => void
  onVoteOk: (userRep: UserRep) => void
  onError: (error: string) => void
}

export function useRepoWs(
  owner: string | undefined,
  repo: string | undefined,
  callbacks: WsCallbacks
) {
  const wsRef = useRef<WebSocket | null>(null)
  const cbRef = useRef(callbacks)
  cbRef.current = callbacks

  useEffect(() => {
    if (!owner || !repo) return

    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    const ws = new WebSocket(`${protocol}//${location.host}/ws/repos/${owner}/${repo}`)
    wsRef.current = ws

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'rep_update') {
          cbRef.current.onRepUpdate(data.reputation)
        } else if (data.type === 'vote_ok') {
          cbRef.current.onVoteOk(data.userRep)
        } else if (data.type === 'error') {
          cbRef.current.onError(data.error)
        }
      } catch {
        // ignore malformed messages
      }
    }

    return () => {
      wsRef.current = null
      ws.close()
    }
  }, [owner, repo])

  const sendVote = useCallback((type: 'positive' | 'negative') => {
    wsRef.current?.send(JSON.stringify({ action: 'vote', type }))
  }, [])

  const sendRemove = useCallback(() => {
    wsRef.current?.send(JSON.stringify({ action: 'remove' }))
  }, [])

  return { sendVote, sendRemove }
}
