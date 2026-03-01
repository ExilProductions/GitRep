import { Link } from 'react-router-dom'
import { useAuth } from '@/lib/use-auth'

export default function Banned() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </main>
    )
  }

  // Easter egg: not banned (or not logged in) but visited /banned
  if (!user?.is_banned) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-md flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">&#x1F440;</span>
          <h1 className="text-2xl font-mono font-bold tracking-tight">Looking to get banned?</h1>
          <p className="text-sm text-muted-foreground">
            You're not banned... yet. Keep up the good behavior and you'll never have to see the
            real version of this page.
          </p>
          <Link to="/" className="text-xs text-muted-foreground underline hover:text-foreground">
            Get out of here
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-5xl">&#x26D4;</span>
          <h1 className="text-2xl font-mono font-bold tracking-tight">Account Suspended</h1>
        </div>

        <p className="text-sm text-muted-foreground">
          Your account has been banned from gitrep. You can no longer vote, comment, or interact
          with repositories.
        </p>

        <p className="text-sm text-muted-foreground">
          If you believe this is a mistake, please contact the site administrator.
        </p>

        <span className="pt-2 text-xs text-muted-foreground font-mono">{user.username}</span>
      </div>
    </main>
  )
}
