# ============================================================================
# Dockerfile - yelfilal-angular
# Multi-stage build for development and production
# ============================================================================

# ----------------------------------------------------------------------------
# Stage 1: BASE
# Common Node.js environment shared by all stages
# ----------------------------------------------------------------------------
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install Angular CLI globally for development convenience
RUN npm install -g @angular/cli@19

# Disable Angular CLI analytics (avoid interactive prompt)
ENV NG_CLI_ANALYTICS=false

# ----------------------------------------------------------------------------
# Stage 2: DEPENDENCIES
# Install npm packages (cached layer - rarely changes)
# NOTE: We need ALL dependencies including devDependencies for Angular build
# ----------------------------------------------------------------------------
FROM base AS deps

# Copy package files first for better layer caching
# These files change less frequently than source code
COPY package.json package-lock.json ./

# Use npm ci for reproducible, faster installs
# Do NOT use --omit=dev: Angular CLI and compiler are devDependencies!
RUN npm ci

# ----------------------------------------------------------------------------
# Stage 3: DEVELOPMENT
# Development environment with hot-reload support
# Usage: docker build --target development -t yelfilal-angular:dev .
# ----------------------------------------------------------------------------
FROM deps AS development

# Copy source code (will be overridden by volume mount in docker-compose)
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Start Angular dev server
# --host 0.0.0.0: Allow external connections (required for Docker)
# --poll 2000: Enable polling for file changes (required for Windows/WSL2)
# --disable-host-check: Allow connections from any host
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000", "--disable-host-check"]

# ----------------------------------------------------------------------------
# Stage 4: BUILDER
# Build production-optimized Angular application
# ----------------------------------------------------------------------------
FROM deps AS builder

# Copy all source files
COPY . .

# Build Angular app for production
# Output will be in /app/dist/yelfilal-angular/browser
RUN npm run build -- --configuration production

# ----------------------------------------------------------------------------
# Stage 5: PRODUCTION
# Lightweight Nginx server with static files only
# Usage: docker build --target production -t yelfilal-angular:prod .
# ----------------------------------------------------------------------------
FROM nginx:alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular app from builder stage
COPY --from=builder /app/dist/yelfilal-angular/browser /usr/share/nginx/html

# Set proper permissions for non-root user
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

# Switch to non-root user
USER appuser

# Expose port (non-privileged port for non-root)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

