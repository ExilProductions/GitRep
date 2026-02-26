# gitrep

Reputation system for GitHub repositories. Users sign in with GitHub and vote on repos.

## Stack

- **Frontend**: React, React Router, Tailwind CSS, SWR
- **Backend**: Fastify, PostgreSQL, WebSockets
- **Auth**: GitHub OAuth, JWT sessions

## Development

```bash
pnpm install
pnpm dev
```

Frontend runs on `http://localhost:80`, API on `http://localhost:3000`. Vite proxies `/api` and `/ws` to the backend.

Requires a PostgreSQL database and GitHub OAuth app. Set these environment variables:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/gitrep
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
JWT_SECRET=...
```

## Production (Docker)

```bash
pnpm run setup
```

This prompts for your domain and GitHub OAuth credentials, configures `docker-compose.yml`, builds the image, and starts everything.

Or manually:

```bash
docker compose build
docker compose up -d
```
