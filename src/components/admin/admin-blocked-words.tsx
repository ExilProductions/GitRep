import { useState } from 'react'
import useSWR from 'swr'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AdminBlockedWords() {
  const [newWord, setNewWord] = useState('')
  const { data, mutate, isLoading } = useSWR('/api/admin/blocked-words', fetcher)

  async function addWord(e: React.FormEvent) {
    e.preventDefault()
    if (!newWord.trim()) return
    await fetch('/api/admin/blocked-words', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: newWord.trim() }),
    })
    setNewWord('')
    mutate()
  }

  async function removeWord(word: string) {
    await fetch('/api/admin/blocked-words', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word }),
    })
    mutate()
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={addWord} className="flex gap-2">
        <Input
          placeholder="Add blocked word..."
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          className="font-mono text-sm"
        />
        <Button type="submit" variant="outline">
          Add
        </Button>
      </form>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {data?.words?.map((word: string) => (
            <span
              key={word}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-sm font-mono"
            >
              {word}
              <button
                onClick={() => removeWord(word)}
                className="text-muted-foreground hover:text-destructive"
              >
                x
              </button>
            </span>
          ))}
          {(!data?.words || data.words.length === 0) && (
            <p className="text-sm text-muted-foreground">No blocked words configured.</p>
          )}
        </div>
      )}
    </div>
  )
}
