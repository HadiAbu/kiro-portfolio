---
inclusion: always
---

# Project Structure

## Folder Layout

```
src/
├── components/
│   ├── common/        # Reusable UI primitives — Button, Card, LazyImage, SkillIndicator, PageLoader
│   ├── layout/        # App shell — Navbar, Footer, PageLayout, ThemeToggle
│   ├── sections/      # Page section components — HeroSection, AboutSection, etc.
│   └── resume/        # Resume-specific components — TimelineEntry, SkillGroup, CertificationCard
├── data/              # Static content files — profile.ts, projects.ts, services.ts, resume.ts
├── hooks/             # Custom hooks — useTheme, useLocalStorage
├── pages/             # Route-level page components — HomePage, ProjectsPage, ResumePage, etc.
├── styles/            # Global CSS — variables.css, global.css, breakpoints.css
├── types/             # TypeScript type definitions (all types live here, not co-located)
└── utils/             # Pure helpers — formatDate, sortByDate
```

## Conventions

### Components
- One component per file. Filename matches the export name (PascalCase).
- Every component has a co-located CSS Module: `ComponentName.module.css`.
- Functional components with explicit `React.FC<Props>` typing or typed props inline.
- Use `React.forwardRef` when a component needs to forward a ref (see `Button.tsx`).
- Interactive non-button elements that act as buttons must have `role="button"`, `tabIndex={0}`, and `onKeyDown` for Enter/Space (see `Card.tsx`).

### CSS
- Styles go in CSS Modules — never inline styles except for dynamic values (e.g. `width: \`${value}%\``).
- All design tokens come from CSS custom properties defined in `src/styles/variables.css`.
- Dark mode tokens are defined under `[data-theme="dark"]` in `variables.css`.
- Media queries use the mobile-first min-width breakpoints from `breakpoints.css`: `768px` (tablet) and `1024px` (desktop).
- Class names composed with array + `.filter(Boolean).join(' ')` pattern (see `Button.tsx`, `Card.tsx`).

### TypeScript
- All data shape types live in `src/types/`. Never define domain types inside component files.
- Use `type` imports (`import type { ... }`) for type-only imports — enforced by `verbatimModuleSyntax`.
- Strict mode is on. No `any`, no unused locals/parameters.
- Path aliases must be used — no `../../..` relative imports across feature boundaries.

### Data
- Content is static TypeScript files in `src/data/`, each exporting a typed constant.
- Types come from `src/types/` — `Profile`, `Project[]`, `Service[]`, `Resume`.
- `src/data/index.ts` re-exports everything; import from `@data` not individual files.

### Barrel Exports
- Every folder has an `index.ts` that re-exports its public API.
- Import from the barrel (`@components/common`) not the file directly (`@components/common/Button`).

### Accessibility
- All images: descriptive `alt` text or `alt=""` for decorative ones.
- Icon-only buttons: always include `aria-label`.
- Focus indicators: 2px outline, 2px offset — already in `global.css`, do not override.
- Touch targets: minimum 44×44px (`--touch-target-min`).
- Active nav link: `aria-current="page"` via React Router's `NavLink`.

### Theme
- `ThemeProvider` wraps the app. Consume via `useTheme()` hook.
- Theme applied as `data-theme="dark"` on `<html>`. Never toggle classes on `body`.
- Persisted in `localStorage` under key `portfolio-theme`.
- An inline `<script>` in `index.html` applies the theme before React mounts to prevent a flash of incorrect theme. Do not remove it.

### SEO
- Every page component sets its own title and description using `react-helmet-async`.
- Format: `{Page Name} — {Owner Name}` for inner pages, `{Owner Name} — {Title}` for home.
