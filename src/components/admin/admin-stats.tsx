import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AdminStats() {
  const { data, isLoading } = useSWR('/api/admin/stats', fetcher)

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading stats...</p>

  return (
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: 'Users', value: data?.total_users ?? 0 },
        { label: 'Comments', value: data?.total_comments ?? 0 },
        { label: 'Votes', value: data?.total_votes ?? 0 },
        { label: 'Banned', value: data?.banned_users ?? 0 },
      ].map((s) => (
        <div key={s.label} className="border border-border rounded-md p-4">
          <p className="text-xs text-muted-foreground">{s.label}</p>
          <p className="text-2xl font-mono font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  )
}
