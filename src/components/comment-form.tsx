import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { type AuthUser, handleUnauthorized } from '@/lib/use-auth'

interface CommentFormProps {
  owner: string
  repo: string
  user: AuthUser | null
  onUpdate: () => void
}

export function CommentForm({
  owner,
  repo,
  user,
  onUpdate,
}: CommentFormProps) {
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!user) {
    return null
  }

  async function handleSubmit() {
    const trimmed = content.trim()
    if (!trimmed) return

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`/api/repos/${owner}/${repo}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: trimmed }),
      })
      if (res.status === 401) {
        await handleUnauthorized()
        return
      }
      if (!res.ok) throw new Error('Failed to post comment')
      setContent('')
      onUpdate()
    } catch {
      setError('Failed to post comment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Textarea
        placeholder="Leave a comment (max 500 chars)"
        value={content}
        onChange={(e) => setContent(e.target.value.slice(0, 500))}
        rows={3}
        className="text-sm resize-none"
      />
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          onClick={handleSubmit}
          disabled={!content.trim() || submitting}
        >
          {submitting ? 'Posting...' : 'Comment'}
        </Button>
        <span className="text-xs text-muted-foreground">
          {content.length}/500
        </span>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
