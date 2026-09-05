# Portfolio Website — Tasks

## Implementation Tasks

### Phase 1: Foundation

- [x] **1. Add FOWT prevention script to `index.html`**
  Add an inline `<script>` inside `<head>` (before any stylesheet) that reads `localStorage` key `portfolio-theme`, falls back to `prefers-color-scheme`, and sets `data-theme="dark"` on `<html>` synchronously before React mounts.
  _Requirement: 2.5_

- [x] **2. Add dark mode tokens to `variables.css`**
  Add `[data-theme="dark"]` block with overrides for background, text, border, and primary color tokens as specified in design.md.
  _Requirement: 2.6_

- [x] **3. Create `useLocalStorage` hook**
  Create `src/hooks/useLocalStorage.ts` — generic hook for reading/writing a typed value to `localStorage` with a fallback default.
  _Requirement: 2.3_

- [x] **4. Create `useTheme` hook**
  Created as `src/hooks/useTheme.tsx` (JSX in provider) exporting `ThemeProvider` and `useTheme`. Uses `useLocalStorage` for `portfolio-theme` key, falls back to `prefers-color-scheme`, sets/removes `data-theme` attribute on `<html>` on every toggle.
  _Requirement: 2.1, 2.2, 2.3, 2.4_

- [x] **5. Update `src/hooks/index.ts` barrel export**
  Export `useTheme`, `useLocalStorage`.

- [x] **6. Populate static data files**
  Create `src/data/profile.ts`, `src/data/projects.ts`, `src/data/services.ts`, `src/data/resume.ts` with realistic placeholder data conforming to the types in `src/types/`. Ensure at least 3 projects have `featured: true`. Update `src/data/index.ts` to re-export all four. Components must always import from `@data`, never from individual files or hardcoded values.
  _Requirement: 7.1, 7.2, 7.3_

- [x] **7. Create utility helpers**
  Create `src/utils/formatDate.ts` (formats ISO date strings for display, e.g. `"Jan 2024"`) and `src/utils/sortByDate.ts` (sorts an array by a string date field descending). Export both from `src/utils/index.ts`.

---

### Phase 2: Common Components

- [x] **8. Create `PageLoader` component**
  Create `src/components/common/PageLoader.tsx` — full-viewport centered loading indicator used as the `Suspense` fallback. Uses the existing `.spinner` CSS class from `global.css`. Container has `role="status"` and `aria-label="Loading page"`. Add `PageLoader.module.css` for centering layout only.
  _Requirement: 9.3_

- [x] **9. Update `src/components/common/index.ts` barrel export**
  Add export for `PageLoader`. Ensure `SkillIndicator` is also exported (it was not included in the initial barrel).

---

### Phase 3: Layout Components

- [x] **10. Create `ThemeToggle` component**
  Create `src/components/layout/ThemeToggle.tsx` — icon-only button showing sun/moon SVG. `aria-label` is dynamic: `"Switch to dark mode"` / `"Switch to light mode"`. Calls `toggleTheme()` from `useTheme`. Add `ThemeToggle.module.css`.
  _Requirement: 1.3, 10.1_

- [x] **11. Create `Navbar` component**
  Create `src/components/layout/Navbar.tsx` — `position: fixed`, full width, `z-index: var(--z-index-fixed)`. Logo/name left, `NavLink` items center, `ThemeToggle` right. Mobile hamburger opens a fullscreen drawer. Drawer closes on: Escape key, outside click, or nav link click. Focus trapped inside drawer while open. Hamburger has `aria-expanded`. Active link has `aria-current="page"`. Add `Navbar.module.css`.
  _Requirement: 1.1, 1.2, 1.3, 1.4, 8.4, 10.1_

- [x] **12. Create `Footer` component**
  Create `src/components/layout/Footer.tsx` — owner name, current copyright year, social icon links from `profile.social`. Only renders links that exist in data. Add `Footer.module.css`.
  _Requirement: 1.6_

- [x] **13. Create `PageLayout` component**
  Create `src/components/layout/PageLayout.tsx` — renders skip-link (`href="#main-content"`), `<Navbar>`, `<main id="main-content">` (renders `<Outlet />`), and `<Footer>`. Note: `ThemeProvider` and `HelmetProvider` are applied at the router root in `main.tsx` (they must wrap `RouterProvider`), not inside `PageLayout`.
  _Requirement: 1.5_

- [x] **14. Update `src/components/layout/index.ts` barrel export**
  Export `Navbar`, `Footer`, `PageLayout`, `ThemeToggle`, `SocialIcon`.

---

### Phase 4: Routing

- [x] **15. Set up React Router and clean up entry point**
  Replace `src/main.tsx` with `createBrowserRouter` defining routes: `/`, `/projects`, `/resume`, `/contact`, `*`. Wrap all routes in `PageLayout`. Page components loaded via `React.lazy`; wrap router in `<Suspense fallback={<PageLoader />}>`. Remove legacy Vite scaffold files: `App.tsx`, `App.css`, `src/style.css`, `src/counter.ts`, `src/main.ts`.
  _Requirement: 8.1, 8.2, 8.3, 9.2, 9.3_

- [x] **16. Create `NotFoundPage`**
  Create `src/pages/NotFoundPage.tsx` — centered "404 — Page Not Found" message with a "Go home" link to `/`. Sets `<title>` to `Page Not Found — {name}` via `react-helmet-async`.
  _Requirement: 8.3, 10.5_

---

### Phase 5: Home Page

- [x] **17. Create `HeroSection` component**
  Create `src/components/sections/HeroSection.tsx` — two-column desktop / stacked mobile layout. Renders name (`h1`), title, tagline, profile image (`LazyImage`), and primary `Button` ("View my work"). Button click handler: `document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })`. Add `HeroSection.module.css`.
  _Requirement: 3.1, 3.6_

- [x] **18. Create `AboutSection` component**
  Create `src/components/sections/AboutSection.tsx` — bio, metadata grid (location, availability, age), `SkillIndicator` bars for languages, extra skills as inline tags. Add `AboutSection.module.css`.
  _Requirement: 3.2_

- [x] **19. Create `FeaturedProjectsSection` component**
  Create `src/components/sections/FeaturedProjectsSection.tsx` — filters `projects` where `featured: true`, slices to max 3. Responsive card grid: each card has thumbnail (`LazyImage`), name, description excerpt, tech tags. "View all projects →" link to `/projects` below the grid. Add `FeaturedProjectsSection.module.css`.
  _Requirement: 3.3, 3.5_

- [x] **20. Create `ServicesSection` component**
  Create `src/components/sections/ServicesSection.tsx` with `id="services"`. Responsive card grid of all services; each `Card` with `hover` enabled showing icon, title, description. Add `ServicesSection.module.css`.
  _Requirement: 3.4_

- [x] **21. Create `HomePage`**
  Create `src/pages/HomePage.tsx` — composes `HeroSection`, `AboutSection`, `FeaturedProjectsSection`, `ServicesSection`. Sets `<title>` to `{name} — {title}`.
  _Requirement: 3.1–3.6, 10.5_

- [x] **22. Update `src/components/sections/index.ts` barrel export**
  Export all section components (plus `ServiceIcon` helper).

---

### Phase 6: Projects Page

- [x] **23. Create `ProjectCard` component**
  Create `src/components/sections/ProjectCard.tsx` — thumbnail (`LazyImage`), name, description, tech tag list, optional demo and repo links. Featured projects have a distinct visual treatment (e.g. badge or border accent). Add `ProjectCard.module.css`.
  _Requirement: 4.2, 4.5_

- [x] **24. Create `ProjectsPage`**
  Create `src/pages/ProjectsPage.tsx` — tag filter bar (unique sorted tags from all projects + "All" option), responsive `ProjectCard` grid sorted by `completionDate` descending. Active filter highlighted; clicking active tag deselects. Sets `<title>` to `Projects — {name}`.
  _Requirement: 4.1, 4.2, 4.3, 4.4, 10.5_

---

### Phase 7: Resume Page

- [ ] **25. Create `TimelineEntry` component**
  Create `src/components/resume/TimelineEntry.tsx` — vertical timeline item with dot/line connector, title, subtitle, date range, optional location, and bullet list. Add `TimelineEntry.module.css`.
  _Requirement: 5.3, 5.4_

- [ ] **26. Create `SkillGroup` component**
  Create `src/components/resume/SkillGroup.tsx` — bold category label + inline skill tags for a single `SkillCategory`. Add `SkillGroup.module.css`.
  _Requirement: 5.5_

- [ ] **27. Create `CertificationCard` component**
  Create `src/components/resume/CertificationCard.tsx` — name, issuer, formatted issue date, optional external credential link. Add `CertificationCard.module.css`.
  _Requirement: 5.6_

- [ ] **28. Update `src/components/resume/index.ts` barrel export**
  Export `TimelineEntry`, `SkillGroup`, `CertificationCard`.

- [ ] **29. Create `ResumePage`**
  Create `src/pages/ResumePage.tsx` — four sequential sections (Experience, Education, Skills, Certifications). Experience and Education in reverse-chronological order. "Print Resume" button at the top calls `window.print()`. Sets `<title>` to `Resume — {name}`.
  _Requirement: 5.1–5.7, 10.5_

---

### Phase 8: Contact Page

- [ ] **30. Create `ContactPage`**
  Create `src/pages/ContactPage.tsx` — centered layout. Renders only social links present in `profile.social` (absent platforms hidden). Each link: icon, label, URL. Email uses `mailto:`. All links open in new tab with `rel="noopener noreferrer"`. Sets `<title>` to `Contact — {name}`.
  _Requirement: 6.1, 6.2, 6.3, 10.5_

---

### Phase 9: Polish & Verification

- [ ] **31. Verify responsive layouts**
  Test all pages at 320px, 768px, and 1024px+. Confirm grid columns, navbar hamburger/collapse, hero layout, and typography scaling match design.md.
  _Requirement: 11.1, 11.2, 11.3_

- [ ] **32. Verify accessibility**
  Confirm: skip link focuses `#main-content`, all icon buttons have `aria-label`, images have correct `alt` text, `aria-current="page"` on active nav link, hamburger has `aria-expanded`, focus is trapped in mobile menu, focus indicators are visible on all interactive elements.
  _Requirement: 1.4, 1.5, 10.1–10.4_

- [ ] **33. Verify theme system**
  Confirm: no flash of wrong theme on load, OS preference respected on first visit, manual toggle switches instantly, choice persists across hard refresh, dark mode tokens applied correctly across all pages.
  _Requirement: 2.1–2.5_

- [ ] **34. Verify `PageLoader` Suspense fallback**
  Confirm the loader appears during navigation to a lazy-loaded route chunk and disappears cleanly once the page mounts.
  _Requirement: 9.2, 9.3_
