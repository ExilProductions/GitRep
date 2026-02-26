import { useState } from 'react'
import useSWR from 'swr'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AdminUsers() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const { data, mutate, isLoading } = useSWR(
    `/api/admin/users?page=${page}${query ? `&q=${encodeURIComponent(query)}` : ''}`,
    fetcher
  )

  async function toggleBan(userId: number, isBanned: boolean) {
    if (isBanned) {
      await fetch(`/api/admin/users/${userId}/ban`, { method: 'DELETE' })
    } else {
      await fetch(`/api/admin/users/${userId}/ban`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: 'Banned by admin' }),
      })
    }
    mutate()
  }

  const totalPages = Math.ceil((data?.total ?? 0) / 20)

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setQuery(search)
          setPage(1)
        }}
        className="flex gap-2"
      >
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="font-mono text-sm"
        />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </form>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : (
        <div className="border border-border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-2 font-mono">ID</th>
                <th className="text-left p-2 font-mono">Username</th>
                <th className="text-left p-2 font-mono">Joined</th>
                <th className="text-left p-2 font-mono">Status</th>
                <th className="text-right p-2 font-mono">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.users?.map((u: any) => (
                <tr key={u.id} className="border-t border-border">
                  <td className="p-2 font-mono text-muted-foreground">{u.id}</td>
                  <td className="p-2 font-mono">{u.username}</td>
                  <td className="p-2 text-muted-foreground">
                    {new Date(u.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-2">
                    {u.banned_at ? (
                      <span className="text-destructive text-xs">Banned</span>
                    ) : (
                      <span className="text-success text-xs">Active</span>
                    )}
                  </td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => toggleBan(u.id, !!u.banned_at)}
                      className={`text-xs underline ${u.banned_at ? 'text-success' : 'text-destructive'}`}
                    >
                      {u.banned_at ? 'Unban' : 'Ban'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex gap-2 justify-center">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>
          <span className="text-sm text-muted-foreground py-1">
            {page} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
