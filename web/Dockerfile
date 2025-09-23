# Multi-stage Dockerfile for Next.js (production server)
# 1) Builder installs deps and builds the app
# 2) Runner serves the optimized standalone build

# ---- Builder ----
FROM node:18-alpine AS builder
WORKDIR /app

# Install OS deps (optional but helps for sharp/next-img when needed)
RUN apk add --no-cache libc6-compat

# Copy package manifests and install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ---- Runner ----
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001

# Copy only the minimal production output from the builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose Next.js port
EXPOSE 3000

# Run as non-root
USER nextjs

# Start the server
CMD ["node", "server.js"]
