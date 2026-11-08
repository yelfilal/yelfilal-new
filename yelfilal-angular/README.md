# 🎯 Yelfilal Angular CV

Application CV/Resume moderne développée avec **Angular 19**.

[![Angular](https://img.shields.io/badge/Angular-19.2-red?logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tests](https://img.shields.io/badge/Tests-85%20passing-green)](./src/app)
[![License](https://img.shields.io/badge/License-Private-gray)]()

---

## ✨ Fonctionnalités

- 📱 **Responsive Design** - Adapté mobile, tablette et desktop
- ⚡ **Performance** - Bundle optimisé ~210 kB, OnPush Change Detection
- 🏗️ **Architecture Moderne** - Standalone Components Angular 19
- 🎨 **Design Professionnel** - Bootstrap 5 + Font Awesome
- ✅ **Tests** - 85 tests unitaires (100% pass)

---

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd yelfilal-angular

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Ouvrez **http://localhost:4200** dans votre navigateur.

---

## 📦 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Serveur de développement avec HMR |
| `npm run build` | Build de production |
| `npm test` | Lancer les tests unitaires |
| `npm run watch` | Build en mode watch |

---

## 🏗️ Structure du Projet

```
src/app/
├── models/              # Interfaces TypeScript (7 interfaces)
├── data/                # Données du CV centralisées
├── services/            # CvDataService injectable
└── components/
    ├── header/          # Navigation sticky + profil
    ├── sections/        # 6 sections du CV
    │   ├── about/
    │   ├── experience/
    │   ├── education/
    │   ├── skills/
    │   ├── interests/
    │   └── awards/
    └── shared/          # 3 composants réutilisables
        ├── experience-item/
        ├── education-item/
        └── award-item/
```

---

## 🎯 Sections du CV

| Section | Description |
|---------|-------------|
| **À propos** | Présentation personnelle + liens sociaux |
| **Expérience** | Parcours professionnel |
| **Formation** | Diplômes et certifications |
| **Compétences** | Technologies et outils maîtrisés |
| **Centres d'intérêt** | Hobbies et passions |
| **Prix & Certifications** | Récompenses et certifications obtenues |

---

## 🔧 Technologies

| Technologie | Version |
|-------------|---------|
| Angular | 19.2.0 |
| TypeScript | 5.7.2 |
| RxJS | 7.8.0 |
| Bootstrap | 5.x |
| Font Awesome | 6.x |
| Karma/Jasmine | 6.4/5.6 |

---

## 🧪 Tests

```bash
# Lancer tous les tests
npm test

# Tests en mode CI (headless)
npm test -- --no-watch --browsers=ChromeHeadless

# Tests avec couverture
npm test -- --code-coverage
```

**Résultats actuels**: 85 tests ✅

---

## 📊 Métriques

| Métrique | Valeur |
|----------|--------|
| Composants | 11 |
| Tests | 85 (100% pass) |
| Bundle (main.js) | 210 kB |
| Bundle (styles.css) | 196 kB |

---

## 🚀 Build Production

```bash
# Créer le build de production
npm run build

# Les fichiers sont générés dans dist/yelfilal-angular/
```

---

## 📖 Documentation

La documentation complète est disponible dans le dossier `docs/` :

- [Documentation principale](../DOCUMENTATION.md)
- [État du projet](../docs/project-status.md)
- [Architecture](../docs/brownfield-architecture.md)
- [PRD](../docs/prd.md)

---

## 👤 Auteur

**Yassine El FILALI** - Fullstack Developer

- 💼 [LinkedIn](https://www.linkedin.com/in/yelfilal)
- 🐙 [GitHub](https://github.com/yelfilal)

---

## 📄 License

Ce projet est privé - Tous droits réservés.
