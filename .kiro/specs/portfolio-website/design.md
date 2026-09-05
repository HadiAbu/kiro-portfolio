# Portfolio Website — Design

## Architecture Overview

Single-page application using React Router v7 for client-side multi-page routing. All data is static TypeScript files. Theme state is managed via a React context and persisted in `localStorage`. No backend.

```
src/
├── components/
│   ├── common/          # Reusable UI primitives (Button, Card, LazyImage, SkillIndicator, PageLoader)
│   ├── layout/          # Navbar, Footer, PageLayout, ThemeToggle
│   ├── sections/        # Page-level section components (HeroSection, AboutSection, etc.)
│   └── resume/          # Resume-specific components (TimelineEntry, SkillGroup, CertificationCard)
├── data/                # Static content files (profile.ts, projects.ts, services.ts, resume.ts)
├── hooks/               # useTheme, useLocalStorage
├── pages/               # Route-level page components (HomePage, ProjectsPage, etc.)
├── styles/              # variables.css, global.css, breakpoints.css
├── types/               # Type definitions (already in place)
└── utils/               # Helpers (formatDate, sortByDate)
```

---

## Routing

Defined in `src/main.tsx` using `createBrowserRouter`.

| Route | Page Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero, About, Featured Projects, Services |
| `/projects` | `ProjectsPage` | Full projects grid with tag filter |
| `/resume` | `ResumePage` | Experience, Education, Skills, Certifications |
| `/contact` | `ContactPage` | Social links |
| `*` | `NotFoundPage` | 404 fallback |

All page components are lazy-loaded via `React.lazy` + `Suspense`. The `Suspense` fallback is a `<PageLoader />` component (see below).

---

## Theme System

### Flash-of-Wrong-Theme Prevention

Before React mounts, an inline `<script>` in `index.html` reads `localStorage` and applies `data-theme` to `<html>` synchronously. This prevents any flash of the wrong theme on load.

```html
<!-- index.html — inside <head>, before any stylesheet -->
<script>
  (function () {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
      if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    } catch (_) {}
  })();
</script>
```

### React Implementation

- `ThemeContext` in `src/hooks/useTheme.ts` provides `theme` (`'light' | 'dark'`) and `toggleTheme`.
- On mount, reads `localStorage` key `portfolio-theme`. Falls back to `window.matchMedia('(prefers-color-scheme: dark)')`.
- Theme applied as `data-theme="dark"` on `<html>`. Light mode is the default (no attribute).
- Dark mode CSS variables defined under `[data-theme="dark"]` in `variables.css`.

### Dark Mode Tokens (add to `variables.css`)

```css
[data-theme="dark"] {
  --color-background: #0f0f0f;
  --color-background-secondary: #1a1a1a;
  --color-background-tertiary: #252525;
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #b0b0b0;
  --color-text-tertiary: #808080;
  --color-border: #2e2e2e;
  --color-border-light: #222222;
  --color-border-dark: #3a3a3a;
  --color-primary: #4d94ff;
  --color-primary-dark: #3385ff;
  --color-primary-light: #66a3ff;
}
```

---

## Component Design

### Common Components (`src/components/common/`)

**`PageLoader`**
Full-viewport centered spinner used as the `Suspense` fallback for all lazy-loaded pages.
- Renders a single animated spinner using the existing `.spinner` class from `global.css`.
- `aria-label="Loading page"` on the container, `role="status"`.
- Add CSS module for layout only (centering); spinner animation reuses global token.

---

### Layout Components (`src/components/layout/`)

**`PageLayout`**
Wraps every page. Renders: skip-link (first focusable element), `<Navbar>`, `<main id="main-content">`, and `<Footer>`. Wraps the app in `ThemeProvider` and `HelmetProvider`.

**`Navbar`**
- `position: fixed`, `top: 0`, full width, `z-index: var(--z-index-fixed)`.
- Layout: logo/name on the left, `NavLink` items in the center, `ThemeToggle` on the right.
- Active link: React Router `NavLink` with `aria-current="page"` when active.
- Desktop (≥ 768px): nav links visible inline.
- Mobile (< 768px): nav links hidden; hamburger button shown. Clicking it opens a fullscreen overlay/drawer.
  - Mobile menu close triggers: Escape key, click outside the drawer, or clicking any nav link.
  - Focus is trapped inside the drawer while open (`tabIndex` management or a focus-trap utility).
  - Hamburger button `aria-expanded` reflects open/closed state.

**`ThemeToggle`**
- Icon-only button showing sun icon (light mode) or moon icon (dark mode).
- `aria-label` is dynamic: `"Switch to dark mode"` when light, `"Switch to light mode"` when dark.
- Calls `toggleTheme()` from `useTheme`.

**`Footer`**
- Displays owner name, current copyright year, and social icon links sourced from `profile.social`.
- Only renders social links present in the data — no empty placeholders.

---

### Section Components (`src/components/sections/`)

**`HeroSection`**
- Two-column layout on desktop (text left, profile image right), stacked on mobile.
- Renders: name (`h1`), title, tagline, profile image (`LazyImage`), and a primary `Button`.
- CTA button label: "View my work". Click handler: `document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })`.

**`AboutSection`**
- Full bio text, metadata grid (location, availability, age), `SkillIndicator` bars for languages, extra skills rendered as inline tags.

**`FeaturedProjectsSection`**
- Filters `projects` where `featured: true`, then takes the first 3 (max).
- Responsive 3-column card grid.
- Each card: thumbnail (`LazyImage`), name, description excerpt, tech tags, link to `/projects`.
- "View all projects →" link below the grid.

**`ServicesSection`**
- `id="services"` — anchor target for hero CTA smooth scroll.
- Responsive card grid of all services; each `Card` has `hover` prop enabled.
- Each card: icon, title, description.

---

### Page Components (`src/pages/`)

**`HomePage`**
Composes: `HeroSection`, `AboutSection`, `FeaturedProjectsSection`, `ServicesSection`. Sets page title to `{name} — {title}`.

**`ProjectsPage`**
- Tag filter bar: unique sorted technology tags derived from all projects. "All" option resets the filter.
- Active filter tag is visually highlighted. Clicking the active tag again deselects it (shows all).
- Project grid sorted by `completionDate` descending. Responsive: 1 col → 2 col → 3 col.
- Sets page title to `Projects — {name}`.

**`ResumePage`**
- Four sequential sections: Experience, Education, Skills, Certifications.
- Experience and Education rendered with `TimelineEntry`, sorted reverse-chronologically.
- Skills rendered with `SkillGroup` (grouped by category).
- Certifications rendered with `CertificationCard`.
- Print button at the top of the page calls `window.print()`. Label: "Print Resume".
- Sets page title to `Resume — {name}`.

**`ContactPage`**
- Centered layout.
- Renders only social links present in `profile.social` — absent platforms are not rendered at all.
- Each link: platform icon, platform name, URL. Email uses `mailto:`. All links open in new tab with `rel="noopener noreferrer"`.
- Sets page title to `Contact — {name}`.

**`NotFoundPage`**
- Centered message: "404 — Page Not Found" with a "Go home" link back to `/`.
- Sets page title to `Page Not Found — {name}`.

---

### Resume Components (`src/components/resume/`)

**`TimelineEntry`**
Props: `title: string`, `subtitle: string`, `dateRange: string`, `location?: string`, `items: string[]`
Renders a vertical timeline item with a dot/line connector, heading, subtitle, date range, optional location, and a bullet list.

**`SkillGroup`**
Props: `category: string`, `skills: string[]`
Renders a bold category label followed by inline skill tags.

**`CertificationCard`**
Props: `cert: Certification`
Renders name, issuer, formatted issue date, and an optional external credential link.

---

## Data Layer

| File | Export | Type |
|---|---|---|
| `src/data/profile.ts` | `profile` | `Profile` |
| `src/data/projects.ts` | `projects` | `Project[]` |
| `src/data/services.ts` | `services` | `Service[]` |
| `src/data/resume.ts` | `resume` | `Resume` |
| `src/data/index.ts` | re-exports all | — |

Import from the barrel alias: `import { profile, projects } from '@data'`. Never import directly from individual data files in components.

---

## SEO

Each page sets `<title>` and `<meta name="description">` via `react-helmet-async`:

| Page | Title |
|---|---|
| Home | `{name} — {title}` |
| Projects | `Projects — {name}` |
| Resume | `Resume — {name}` |
| Contact | `Contact — {name}` |
| 404 | `Page Not Found — {name}` |

---

## Responsive Breakpoints

Mobile-first. Key breakpoints from `breakpoints.css`:

| Name | Width |
|---|---|
| mobile | < 768px |
| tablet | 768px – 1023px |
| desktop | ≥ 1024px |

- Projects grid: 1 col → 2 col → 3 col
- Services grid: 1 col → 2 col → 3 col
- Hero section: stacked → two-column
- Navbar: hamburger menu → inline links

---

## Accessibility Notes

- Skip link (`href="#main-content"`) is the first focusable element in `PageLayout`. `<main>` has `id="main-content"`.
- All icon-only buttons (`ThemeToggle`, hamburger) have dynamic `aria-label`.
- Hamburger button has `aria-expanded` set to `true`/`false`.
- Focus is trapped inside the mobile menu while it is open.
- Decorative images use `alt=""`.
- `NavLink` active state uses `aria-current="page"`.
- `prefers-reduced-motion` already handled globally in `global.css`.
- `PageLoader` uses `role="status"` and `aria-label="Loading page"`.
