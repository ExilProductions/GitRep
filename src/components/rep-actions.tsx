import { Button } from '@/components/ui/button'
import { type AuthUser } from '@/lib/use-auth'

interface RepActionsProps {
  user: AuthUser | null
  userRep: { type: 'positive' | 'negative' } | null
  onLogin: () => void
  onVote: (type: 'positive' | 'negative') => void
  onRemove: () => void
}

export function RepActions({ user, userRep, onLogin, onVote, onRemove }: RepActionsProps) {
  const repType = userRep?.type ?? null

  if (!user) {
    return (
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground">
          <button onClick={onLogin} className="underline hover:text-foreground">
            Sign in with GitHub
          </button>{' '}
          to vote.
        </p>
      </div>
    )
  }

  return (
    <div className="border border-border rounded-md p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          variant={repType === 'positive' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onVote('positive')}
          className={
            repType === 'positive' ? 'bg-success text-success-foreground hover:bg-success/90' : ''
          }
        >
          rep+
        </Button>
        <Button
          variant={repType === 'negative' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onVote('negative')}
          className={
            repType === 'negative'
              ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
              : ''
          }
        >
          rep-
        </Button>
        {repType && (
          <button
            onClick={onRemove}
            className="text-xs text-muted-foreground underline hover:text-foreground ml-2"
          >
            remove
          </button>
        )}
      </div>
    </div>
  )
}
