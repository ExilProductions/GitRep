services:
  traefik:
    image: traefik:v3.6.9
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - gitrep-letsencrypt:/letsencrypt
    restart: unless-stopped
  postgres:
    image: postgres:16-alpine
    volumes:
      - gitrep-postgres:/var/lib/postgresql/data
    healthcheck:
      test:
        - CMD-SHELL
        - pg_isready -U gitrep
      interval: 5s
      timeout: 5s
      retries: 5
  app:
    build:
      context: .
      dockerfile: Dockerfile
volumes:
  gitrep-postgres: null
  gitrep-letsencrypt: null
