import { useState } from 'react'
import { type AuthUser, handleUnauthorized } from '@/lib/use-auth'

interface Comment {
  id: number
  content: string
  created_at: string
  user_id: number
  username: string
  avatar_url: string | null
}

interface CommentListProps {
  owner: string
  repo: string
  comments: Comment[]
  isLoading: boolean
  user: AuthUser | null
  onUpdate: () => void
}

export function CommentList({
  owner,
  repo,
  comments,
  isLoading,
  user,
  onUpdate,
}: CommentListProps) {
  const [deletingId, setDeletingId] = useState<number | null>(null)

  if (isLoading) {
    return (
      <div className="text-sm text-muted-foreground">Loading comments...</div>
    )
  }

  if (comments.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No comments yet.</p>
    )
  }

  async function handleDelete(commentId: number) {
    setDeletingId(commentId)
    try {
      const res = await fetch(`/api/repos/${owner}/${repo}/comments`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commentId }),
      })
      if (res.status === 401) {
        await handleUnauthorized()
        return
      }
      if (res.ok) onUpdate()
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
        Comments ({comments.length})
      </h2>
      <div className="flex flex-col gap-3">
        {comments.map((c) => (
          <div
            key={c.id}
            className="border border-border rounded-md p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {c.avatar_url && (
                  <img
                    src={c.avatar_url}
                    alt={`${c.username}'s avatar`}
                    className="w-5 h-5 rounded-full"
                  />
                )}
                <span className="text-sm font-mono">{c.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <time className="text-xs text-muted-foreground">
                  {new Date(c.created_at).toLocaleDateString()}
                </time>
                {user && user.id === c.user_id && (
                  <button
                    onClick={() => handleDelete(c.id)}
                    disabled={deletingId === c.id}
                    className="text-xs text-destructive underline hover:text-destructive/80"
                  >
                    delete
                  </button>
                )}
              </div>
            </div>
            <p className="text-sm text-foreground">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
