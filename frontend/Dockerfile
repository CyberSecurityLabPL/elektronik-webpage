# -----------------------------
# Base image
# -----------------------------
FROM oven/bun:1 AS base

WORKDIR /app

# Disable Bun telemetry and enforce IPv4 DNS for compatibility
ENV BUN_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3001

# -----------------------------
# Dependencies
# -----------------------------
FROM base AS deps

# Copy dependency files
COPY bun.lock package.json ./

# Install dependencies with Bun
# RUN bun install --frozen-lockfile
RUN bun install

# -----------------------------
# Builder
# -----------------------------
FROM base AS builder

WORKDIR /app

# Copy node_modules and source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build your Next.js app using Bun
RUN bun run build

# -----------------------------
# Runner
# -----------------------------
FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

# Add dedicated non-root user
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 nextjs

# Copy built app from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct permissions
RUN mkdir -p .next && chown -R nextjs:nodejs /app && chmod -R 755 /app/public

USER nextjs

EXPOSE ${PORT}

# Start the app
CMD ["bun", "server.js"]
