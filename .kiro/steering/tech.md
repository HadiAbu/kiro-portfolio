---
inclusion: always
---

# Tech Stack

## Core

| Layer | Choice |
|---|---|
| Framework | React 19 with React Compiler enabled |
| Language | TypeScript 6 — strict mode, `noImplicitAny`, `strictNullChecks` |
| Build tool | Vite 8 + Rolldown (via `@rolldown/plugin-babel`) |
| Routing | React Router v7 (`createBrowserRouter`) |
| Styling | CSS Modules + global CSS custom properties (no CSS-in-JS, no Tailwind) |
| SEO | `react-helmet-async` |

## Key Libraries

- `react-helmet-async` — per-page `<title>` and meta tags
- `react-router-dom` v7 — client-side routing
- `babel-plugin-react-compiler` — React Compiler Babel transform

## Dev Tools

- ESLint 10 with `@typescript-eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`
- Prettier 3 — formatting enforced via `eslint-plugin-prettier`
- Terser — production minification

## Path Aliases

Defined in both `vite.config.ts` and `tsconfig.app.json`. Always use aliases over relative paths.

| Alias | Resolves to |
|---|---|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@hooks/*` | `src/hooks/*` |
| `@utils/*` | `src/utils/*` |
| `@data/*` | `src/data/*` |
| `@types/*` | `src/types/*` |
| `@styles/*` | `src/styles/*` |

## Common Commands

```bash
# Start dev server
npm run dev

# Type-check + production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Lint with auto-fix
npm run lint:fix

# Format all src files
npm run format

# Check formatting without writing
npm run format:check
```

## Build Notes

- `manualChunks` splits React/ReactDOM into `vendor` chunk and React Router into `router` chunk.
- Chunk size warning threshold: 1000 kB.
- Page-level components must use `React.lazy` + `Suspense` for code splitting.
- Images must use the `LazyImage` component (Intersection Observer-based lazy loading).
