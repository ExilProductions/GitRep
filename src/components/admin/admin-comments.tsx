import { useState } from 'react'
import useSWR from 'swr'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AdminComments() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const { data, mutate, isLoading } = useSWR(
    `/api/admin/comments?page=${page}${query ? `&q=${encodeURIComponent(query)}` : ''}`,
    fetcher
  )

  async function deleteComment(id: number) {
    await fetch(`/api/admin/comments/${id}`, { method: 'DELETE' })
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
          placeholder="Search comments..."
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
        <div className="flex flex-col gap-2">
          {data?.comments?.map((c: any) => (
            <div key={c.id} className="border border-border rounded-md p-3 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">
                  {c.username} on {c.repo_owner}/{c.repo_name}
                </span>
                <button
                  onClick={() => deleteComment(c.id)}
                  className="text-xs text-destructive underline"
                >
                  Delete
                </button>
              </div>
              <p className="text-sm">{c.content}</p>
              <span className="text-xs text-muted-foreground">
                {new Date(c.created_at).toLocaleString()}
              </span>
            </div>
          ))}
          {(!data?.comments || data.comments.length === 0) && (
            <p className="text-sm text-muted-foreground">No comments found.</p>
          )}
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
