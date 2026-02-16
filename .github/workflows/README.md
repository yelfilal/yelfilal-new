# GitHub Actions Workflows

Ce dossier contient les workflows GitHub Actions pour automatiser le déploiement du projet.

## 📁 Workflows disponibles

### `deploy-github-pages.yml`

Déploie automatiquement l'application Angular sur GitHub Pages.

**Déclencheurs :**
- Push sur la branche `main`
- Déclenchement manuel via l'interface GitHub Actions

**Actions réalisées :**
1. Checkout du code source
2. Installation de Node.js 20
3. Installation des dépendances npm
4. Build de l'application Angular en mode production
5. Configuration de GitHub Pages
6. Upload des artéfacts de build
7. Déploiement sur GitHub Pages

**Permissions requises :**
- `contents: read` - Lecture du code source
- `pages: write` - Écriture sur GitHub Pages
- `id-token: write` - Authentification