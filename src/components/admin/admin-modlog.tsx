import { useState } from 'react'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AdminModLog() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useSWR(`/api/admin/modlog?page=${page}`, fetcher)

  const totalPages = Math.ceil((data?.total ?? 0) / 20)

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : (
        <div className="border border-border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-2 font-mono">Admin</th>
                <th className="text-left p-2 font-mono">Action</th>
                <th className="text-left p-2 font-mono">Target</th>
                <th className="text-left p-2 font-mono">Reason</th>
                <th className="text-left p-2 font-mono">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.entries?.map((e: any) => (
                <tr key={e.id} className="border-t border-border">
                  <td className="p-2 font-mono">{e.admin_username}</td>
                  <td className="p-2">
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        e.action === 'ban'
                          ? 'bg-destructive/10 text-destructive'
                          : e.action === 'unban'
                            ? 'bg-success/10 text-success'
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {e.action}
                    </span>
                  </td>
                  <td className="p-2 font-mono text-muted-foreground">
                    {e.target_username ||
                      (e.target_comment_id ? `comment #${e.target_comment_id}` : '-')}
                  </td>
                  <td className="p-2 text-muted-foreground">{e.reason || '-'}</td>
                  <td className="p-2 text-muted-foreground">
                    {new Date(e.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
              {(!data?.entries || data.entries.length === 0) && (
                <tr>
                  <td colSpan={5} className="p-2 text-muted-foreground text-center">
                    No entries.
                  </td>
                </tr>
              )}
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
