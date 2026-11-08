# ============================================================================
# Dockerfile - yelfilal-angular
# Build multi-stage pour le développement et la production
# ============================================================================

# ----------------------------------------------------------------------------
# Stage 1 : BASE
# Environnement Node.js commun à tous les stages.
# Node 22 (LTS) : Node 20 n'est plus maintenu depuis le 30 avril 2026.
# ----------------------------------------------------------------------------
FROM node:22-alpine AS base

WORKDIR /app

# Désactive les statistiques du CLI Angular (évite une question interactive)
ENV NG_CLI_ANALYTICS=false

# Rend le CLI Angular du projet (node_modules/.bin) disponible sous le nom
# « ng », sans installation globale
ENV PATH=/app/node_modules/.bin:$PATH

# ----------------------------------------------------------------------------
# Stage 2 : DEPENDENCIES
# Installation des paquets npm (couche en cache tant que package*.json
# ne change pas)
# ----------------------------------------------------------------------------
FROM base AS deps

COPY package.json package-lock.json ./

# npm ci : installation reproductible depuis le lockfile.
# Pas de --omit=dev : le CLI et le compilateur Angular sont des devDependencies.
RUN npm ci --no-audit --no-fund

# ----------------------------------------------------------------------------
# Stage 3 : DEVELOPMENT
# Serveur de dev avec rechargement à chaud
# Usage : docker build --target development -t yelfilal-angular:dev .
# ----------------------------------------------------------------------------
FROM deps AS development

# Sources (remplacées par les volumes montés dans docker-compose)
COPY . .

EXPOSE 4200

# --host 0.0.0.0 : accepte les connexions venant de l'extérieur du conteneur
# --poll 2000 : détection des modifications par polling (Windows/WSL2)
# --disable-host-check : accepte n'importe quel nom d'hôte
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000", "--disable-host-check"]

# ----------------------------------------------------------------------------
# Stage 4 : BUILDER
# Build de production de l'application Angular
# ----------------------------------------------------------------------------
FROM deps AS builder

COPY . .

# Sortie dans /app/dist/yelfilal-angular/browser
RUN npm run build -- --configuration production

# ----------------------------------------------------------------------------
# Stage 5 : PRODUCTION
# Image nginx « unprivileged » maintenue par NGINX : elle tourne déjà en
# utilisateur non-root (nginx, uid 101) et écoute sur 8080, sans chown ni
# réglage du fichier pid à faire.
# Usage : docker build --target production -t yelfilal-angular:prod .
# ----------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:1.29-alpine AS production

# Remplace la configuration par défaut de l'image
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security-headers.conf /etc/nginx/snippets/security-headers.conf

# Fichiers statiques issus du stage builder
COPY --from=builder /app/dist/yelfilal-angular/browser /usr/share/nginx/html

EXPOSE 8080

# 127.0.0.1 et non localhost : dans le conteneur, localhost se résout d'abord
# en ::1 (IPv6), alors que nginx n'écoute qu'en IPv4
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
