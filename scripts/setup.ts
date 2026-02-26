#!/usr/bin/env node

import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import crypto from "crypto";
import yaml from "yaml";

const exec = (cmd: string) => execSync(cmd, { stdio: "inherit" });

function checkDocker() {
  try {
    execSync("docker --version", { stdio: "ignore" });
  } catch {
    console.error("Error: Docker is not installed. Please install Docker first.");
    process.exit(1);
  }

  try {
    execSync("docker compose version", { stdio: "ignore" });
  } catch {
    try {
      execSync("docker-compose --version", { stdio: "ignore" });
    } catch {
      console.error("Error: Docker Compose is not installed. Please install Docker Compose first.");
      process.exit(1);
    }
  }
}

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomBytes = crypto.randomBytes(32);
  let password = "";
  for (let i = 0; i < 32; i++) {
    password += chars[randomBytes[i] % chars.length];
  }
  return password;
}

async function prompt(question: string): Promise<string> {
  const readline = await import("readline");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (answer) => {
    rl.close();
    resolve(answer);
  }));
}

function updateComposeFile(postgresPassword: string, jwtSecret: string, githubClientId: string, githubClientSecret: string, domain: string, acmeEmail: string, discordWebhookUrl: string) {
  const composePath = join(process.cwd(), "docker-compose.yml");
  const composeContent = readFileSync(composePath, "utf-8");
  const compose = yaml.parse(composeContent);

  const isLocalhost = domain.startsWith("localhost");
  const protocol = isLocalhost ? "http" : "https";
  const appUrl = `${protocol}://${domain}`;

  // Configure Traefik
  if (isLocalhost) {
    // For localhost: no TLS, no HTTPS redirect, just port 80
    compose.services.traefik.command = [
      "--api.dashboard=true",
      "--providers.docker=true",
      "--providers.docker.exposedbydefault=false",
      "--entrypoints.web.address=:80",
    ];
    compose.services.traefik.ports = ["80:80"];
    compose.services.app.labels = [
      "traefik.enable=true",
      `traefik.http.routers.app.rule=Host(\`${domain.split(":")[0]}\`)`,
      "traefik.http.routers.app.entrypoints=web",
      "traefik.http.services.app.loadbalancer.server.port=3000",
    ];
  } else {
    // For production: TLS with Let's Encrypt
    compose.services.traefik.command = [
      "--api.dashboard=true",
      "--providers.docker=true",
      "--providers.docker.exposedbydefault=false",
      "--entrypoints.web.address=:80",
      "--entrypoints.websecure.address=:443",
      "--certificatesresolvers.letsencrypt.acme.httpchallenge=true",
      "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web",
      `--certificatesresolvers.letsencrypt.acme.email=${acmeEmail}`,
      "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json",
      "--entrypoints.web.http.redirections.entrypoint.to=websecure",
      "--entrypoints.web.http.redirections.entrypoint.scheme=https",
    ];
    compose.services.traefik.ports = ["80:80", "443:443"];
    compose.services.app.labels = [
      "traefik.enable=true",
      `traefik.http.routers.app.rule=Host(\`${domain}\`)`,
      "traefik.http.routers.app.entrypoints=websecure",
      "traefik.http.routers.app.tls.certresolver=letsencrypt",
      "traefik.http.services.app.loadbalancer.server.port=3000",
    ];
  }

  compose.services.postgres.environment = {
    POSTGRES_USER: "gitrep",
    POSTGRES_PASSWORD: postgresPassword,
    POSTGRES_DB: "gitrep",
  };

  compose.services.app.depends_on = {
    postgres: { condition: "service_healthy" },
  };

  delete compose.services.app.ports;

  compose.services.app.environment = {
    NODE_ENV: "production",
    PORT: "3000",
    DATABASE_URL: `postgresql://gitrep:${postgresPassword}@postgres:5432/gitrep`,
    GITHUB_CLIENT_ID: githubClientId,
    GITHUB_CLIENT_SECRET: githubClientSecret,
    JWT_SECRET: jwtSecret,
    PUBLIC_APP_URL: appUrl,
    GITHUB_CALLBACK_URL: `${appUrl}/api/auth/github/callback`,
    ...(discordWebhookUrl && { DISCORD_WEBHOOK_URL: discordWebhookUrl }),
  };

  writeFileSync(composePath, yaml.stringify(compose));
}

async function main() {
  console.log("=== GitRep Setup ===\n");

  checkDocker();

  console.log("Enter your deployment details:");
  const domain = await prompt("Domain (e.g., example.com or localhost:3000): ");
  const githubClientId = await prompt("GitHub Client ID: ");
  const githubClientSecret = await prompt("GitHub Client Secret: ");
  const postgresPassword = await prompt("PostgreSQL password (leave empty for auto-generated): ");

  const isLocalhost = domain.startsWith("localhost");
  let acmeEmail = "";
  if (!isLocalhost) {
    acmeEmail = await prompt("Email for Let's Encrypt certificates: ");
  }
  const discordWebhookUrl = await prompt("Discord Webhook URL (optional, press Enter to skip): ");

  const finalPostgresPassword = postgresPassword || generatePassword();
  if (!postgresPassword) {
    console.log(`Auto-generated PostgreSQL password: ${finalPostgresPassword}`);
  }

  const jwtSecret = generatePassword();

  updateComposeFile(finalPostgresPassword, jwtSecret, githubClientId, githubClientSecret, domain, acmeEmail, discordWebhookUrl);

  console.log("\nBuilding Docker image...");
  exec("docker compose build");

  console.log("\n=== Starting containers ===");
  exec("docker compose up -d");

  console.log("Waiting for PostgreSQL to be ready...");
  let connected = false;
  for (let i = 0; i < 30; i++) {
    try {
      execSync("docker compose exec -T postgres pg_isready -U gitrep", { stdio: "ignore" });
      connected = true;
      console.log("PostgreSQL is ready!");
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  if (!connected) {
    console.error("Failed to connect to PostgreSQL after 30s");
    process.exit(1);
  }

  const protocol = isLocalhost ? "http" : "https";

  console.log("\n=== Setup Complete ===\n");
  console.log(`App running at: ${protocol}://${domain}`);
  console.log(`GitHub OAuth Callback URL: ${protocol}://${domain}/api/auth/github/callback\n`);
  console.log("To view logs:");
  console.log("  docker compose logs -f\n");
  console.log("To stop:");
  console.log("  docker compose down");
}

main().catch(console.error);
