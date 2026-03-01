import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/use-auth'
import { AdminStats } from '@/components/admin/admin-stats'
import { AdminUsers } from '@/components/admin/admin-users'
import { AdminComments } from '@/components/admin/admin-comments'
import { AdminModLog } from '@/components/admin/admin-modlog'
import { AdminBlockedWords } from '@/components/admin/admin-blocked-words'

const tabs = ['Dashboard', 'Users', 'Comments', 'Blocked Words', 'Mod Log'] as const
type Tab = (typeof tabs)[number]

export default function AdminPanel() {
  const { user, isLoading } = useAuth()
  const [tab, setTab] = useState<Tab>('Dashboard')

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </main>
    )
  }

  if (user?.is_banned) {
    return <Navigate to="/banned" replace />
  }

  if (!user?.is_admin) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-mono font-bold text-muted-foreground hover:text-foreground"
          >
            gitrep
          </Link>
          <h1 className="text-lg font-mono font-bold">Admin</h1>
        </div>

        <div className="flex gap-1 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-2 text-sm font-mono transition-colors ${
                tab === t
                  ? 'border-b-2 border-foreground text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Dashboard' && <AdminStats />}
        {tab === 'Users' && <AdminUsers />}
        {tab === 'Comments' && <AdminComments />}
        {tab === 'Blocked Words' && <AdminBlockedWords />}
        {tab === 'Mod Log' && <AdminModLog />}
      </div>
    </main>
  )
}
