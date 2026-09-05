# Hadi Abu Hamed — Portfolio

The personal website of **Hadi Abu Hamed**, a Full Stack & AI Engineer. A single-page,
content-first site that introduces who Hadi is, showcases real projects, and makes it
easy to get in touch.

**Sections:** Hero → About → Featured Projects → Services, with dedicated Projects,
Resume, and Contact pages.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 (React Compiler enabled) |
| Language | TypeScript 6 (strict mode) |
| Build tool | Vite 8 + Rolldown |
| Routing | React Router v7 (`createBrowserRouter`) |
| Styling | CSS Modules + global CSS custom properties |
| SEO | `react-helmet-async` (per-page title & meta) |
| Tooling | ESLint 10, Prettier 3, Terser |

## Features

- **Dark / light theme** — follows OS preference, persists to `localStorage`, and applies
  before first paint (no flash of incorrect theme).
- **Client-side routing** — Home, Projects, Resume, Contact, and a 404 page, all
  code-split with `React.lazy` + `Suspense`.
- **Responsive** — mobile-first layouts at 768px (tablet) and 1024px (desktop) breakpoints.
- **Accessible** — skip link, keyboard-navigable nav with focus-trapped mobile drawer,
  `aria-current` on the active link, descriptive alt text, and WCAG AA focus indicators.
- **Lazy-loaded images** via an Intersection Observer-based `LazyImage` component.
- **Static content** — all profile, project, service, and resume data lives in typed
  files under `src/data/`.

## Project Structure

```
src/
├── components/
│   ├── common/     # Reusable primitives — Button, Card, LazyImage, SkillIndicator, PageLoader
│   ├── layout/     # App shell — Navbar, Footer, PageLayout, ThemeToggle
│   ├── sections/   # Page sections — Hero, About, FeaturedProjects, Services, ProjectCard
│   └── resume/     # Resume components — TimelineEntry, SkillGroup, CertificationCard
├── data/           # Static typed content — profile, projects, services, resume
├── hooks/          # useTheme, useLocalStorage
├── pages/          # Route-level pages — Home, Projects, Resume, Contact, NotFound
├── styles/         # Global CSS — variables, global, breakpoints
├── types/          # TypeScript type definitions
└── utils/          # Pure helpers — formatDate, sortByDate
```

Path aliases (`@components`, `@hooks`, `@utils`, `@data`, `@types`, `@styles`) are
configured in both `vite.config.ts` and `tsconfig.app.json`.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

## Scripts

```bash
npm run dev           # Start the Vite dev server
npm run build         # Type-check and build for production
npm run preview       # Preview the production build
npm run lint          # Run ESLint
npm run lint:fix      # ESLint with auto-fix
npm run format        # Format all source files with Prettier
npm run format:check  # Check formatting without writing
```

## Editing Content

All site content is data-driven — update the typed files in `src/data/` rather than
editing components:

- `profile.ts` — name, title, bio, metadata, skills, social links
- `projects.ts` — project cards (mark `featured: true` to surface on the home page)
- `services.ts` — the services grid
- `resume.ts` — experience, education, skills, and certifications

## License

See [LICENSE](./LICENSE).
