import { useState, useEffect, useRef } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import logo from '@/assets/gitrep-icon.png'
import { useAuth } from '@/lib/use-auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchResult {
  repo_owner: string
  repo_name: string
  score: number
  positive: number
  negative: number
}

export default function Home() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()
  const { user, isLoading, login, logout } = useAuth()
  const abortRef = useRef<AbortController | null>(null)

  if (user?.is_banned) {
    return <Navigate to="/banned" replace />
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
    script.onload = () => {
      ;(window as any).kofiWidgetOverlay.draw('exilproductions', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff',
      })
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
      const frame = document.getElementById('kofi-overlay-frame')
      if (frame) frame.remove()
    }
  }, [])

  useEffect(() => {
    const trimmed = value.trim().replace(/^https?:\/\/github\.com\//, '')
    if (trimmed.length < 2) {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    const timeout = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(trimmed)}`, {
        signal: controller.signal,
      })
        .then((r) => r.json())
        .then((data) => {
          setResults(data.results)
          setSelectedIndex(-1)
        })
        .catch(() => {})
    }, 150)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [value])

  function goToRepo(input: string) {
    setError('')
    const trimmed = input.trim().replace(/^https?:\/\/github\.com\//, '')
    const parts = trimmed.split('/').filter(Boolean)
    if (parts.length < 2) {
      setError('Enter a valid repo like owner/repo')
      return
    }
    navigate(`/${parts[0]}/${parts[1]}`)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (selectedIndex >= 0 && selectedIndex < results.length) {
      const r = results[selectedIndex]
      navigate(`/${r.repo_owner}/${r.repo_name}`)
      return
    }
    goToRepo(value)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => (i < results.length - 1 ? i + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => (i > 0 ? i - 1 : results.length - 1))
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="gitrep logo" className="w-24 h-24" />
          <h1 className="text-3xl font-mono font-bold tracking-tight">gitrep</h1>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Reputation for GitHub repositories.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 relative">
          <Input
            placeholder="owner/repo or GitHub URL"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="font-mono text-sm"
            autoFocus
          />
          {results.length > 0 && (
            <ul className="absolute top-full left-0 right-0 z-10 mt-1 border border-border rounded-md bg-background overflow-hidden shadow-lg">
              {results.map((r, i) => (
                <li key={`${r.repo_owner}/${r.repo_name}`}>
                  <button
                    type="button"
                    onClick={() => navigate(`/${r.repo_owner}/${r.repo_name}`)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full px-3 py-2 flex items-center justify-between text-left text-sm font-mono transition-colors ${
                      i === selectedIndex
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent/50'
                    }`}
                  >
                    <span>
                      <span className="text-muted-foreground">{r.repo_owner}</span>
                      <span className="text-muted-foreground">/</span>
                      <span className="font-semibold">{r.repo_name}</span>
                    </span>
                    <span
                      className={`text-xs ${
                        r.score > 0
                          ? 'text-success'
                          : r.score < 0
                            ? 'text-destructive'
                            : 'text-muted-foreground'
                      }`}
                    >
                      {r.score > 0 ? `+${r.score}` : r.score}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {error && <p className="text-xs text-destructive">{error}</p>}
          <Button type="submit" className="w-full">
            Go
          </Button>
        </form>

        <div className="pt-2">
          {isLoading ? (
            <p className="text-xs text-muted-foreground">Loading...</p>
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                Signed in as <span className="font-mono text-foreground">{user.username}</span>
              </span>
              {user.is_admin && (
                <Link
                  to="/admin"
                  className="text-xs text-muted-foreground underline hover:text-foreground"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-xs text-muted-foreground underline hover:text-foreground"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="text-xs text-muted-foreground underline hover:text-foreground"
            >
              Sign in with GitHub
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
