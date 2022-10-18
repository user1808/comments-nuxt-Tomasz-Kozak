# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Żeby Działało

W pliku

* utils/constants.ts

zmienić port na taki jak się chce, to jest do jakiego będzie uderzała aplikacja po komentarze. 
Można jeszcze pozmieniać base url dla axiosa w pliku

* utils/myAxios.ts

lub zmienić dalszą cześć urla w pliku

* services/comments/CommentsApi.ts

ale raczej nie jest to konieczne. Domyślnie wszystko ustawione jest na
```bash
http://localhost:3000/comments
```
