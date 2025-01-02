# Next.js PWA Application

Cette application est une Progressive Web App (PWA) construite avec Next.js. Elle suit les meilleures pratiques de développement PWA et offre une expérience utilisateur optimale sur tous les appareils.

## Fonctionnalités PWA

- Installation sur l'écran d'accueil
- Fonctionne hors ligne
- Mise en cache automatique
- Interface responsive
- Chargement rapide

## Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn

## Installation

1. Clonez le dépôt :

```bash
git clone [URL_DU_REPO]
cd nextjs-pwa
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Générez les icônes PWA (assurez-vous d'avoir une image app-icon.png dans le dossier public) :

```bash
npm run generate-icons
# ou
yarn generate-icons
```

4. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run start` : Lance la version de production
- `npm run generate-icons` : Génère les icônes PWA

## Structure du projet

```
nextjs-pwa/
├── public/
│   ├── icons/          # Icônes PWA générées
│   ├── manifest.json   # Manifeste PWA
│   └── app-icon.png    # Image source pour les icônes
├── src/
│   └── app/
│       ├── layout.tsx  # Layout principal avec config PWA
│       └── page.tsx    # Page principale
└── scripts/
    └── generate-icons.js # Script de génération d'icônes
```

## Configuration PWA

La configuration PWA est gérée par `next-pwa` et inclut :

- Manifeste Web App
- Service Worker pour le mode hors ligne
- Gestion du cache
- Installation sur l'écran d'accueil

## Déploiement

1. Construisez l'application :

```bash
npm run build
# ou
yarn build
```

2. Testez la version de production :

```bash
npm run start
# ou
yarn start
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

MIT
