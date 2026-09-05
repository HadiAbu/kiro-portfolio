# Portfolio Website — Requirements

## Overview

A personal developer portfolio website built with React, TypeScript, and Vite. The site presents the owner's profile, projects, services, and resume across multiple pages with dark/light theme support.

---

## Requirements

### 1. Site-Wide Layout & Navigation

**1.1** The site shall have a persistent sticky navigation bar fixed to the top of the viewport on all pages.

**1.2** The navbar shall contain links to all main pages: Home, Projects, Resume, and Contact.

**1.3** The navbar shall include a theme toggle button to switch between dark and light modes.

**1.4** On mobile viewports the navbar shall collapse into a hamburger menu. The menu shall close when the user presses Escape, clicks outside the menu, or clicks a navigation link.

**1.5** The site shall include a "skip to main content" link as the first focusable element on every page.

**1.6** The site shall include a footer with social links and copyright information.

---

### 2. Theme System

**2.1** The site shall support a dark theme and a light theme.

**2.2** The initial theme shall follow the user's OS/system preference (`prefers-color-scheme`).

**2.3** The user's manual theme choice shall be persisted in `localStorage` under the key `portfolio-theme` and applied on subsequent visits.

**2.4** Theme switching shall apply instantly without a page reload.

**2.5** The correct theme shall be applied before first paint to prevent a flash of incorrect theme. This shall be implemented as a small inline script in `index.html` that reads `localStorage` and sets `data-theme` on `<html>` before React mounts.

**2.6** All color tokens in `variables.css` shall have corresponding dark-mode overrides defined under a `[data-theme="dark"]` selector.

---

### 3. Home Page (`/`)

**3.1** The Home page shall contain a Hero section displaying the owner's name, title, tagline, profile image, and a call-to-action button.

**3.2** The Home page shall contain an About section displaying the owner's bio, metadata (location, availability, age), languages, and extra skills.

**3.3** The Home page shall display a "Featured Projects" section showing a maximum of 3 projects where `featured: true`, rendered as cards.

**3.4** The Home page shall display a Services overview section showing all services as cards with icon, title, and description.

**3.5** Each featured project card shall link to the full `/projects` page.

**3.6** The hero CTA button shall smooth-scroll the user to the Services section (`#services`) on the Home page.

---

### 4. Projects Page (`/projects`)

**4.1** The Projects page shall display all projects from the data source in a responsive grid.

**4.2** Each project card shall show: thumbnail image, name, description, technology tags, and links to demo and/or repository if available.

**4.3** The projects grid shall support filtering by technology tag.

**4.4** Projects shall be sorted by `completionDate` descending (newest first) by default.

**4.5** Featured projects shall be visually distinguished from non-featured ones.

---

### 5. Resume Page (`/resume`)

**5.1** The Resume page shall display all four resume sections: Experience, Education, Skills, and Certifications.

**5.2** Experience and Education entries shall be displayed in reverse-chronological order.

**5.3** Each experience entry shall list the company, position, date range, location, responsibilities, and achievements.

**5.4** Each education entry shall list the institution, degree, field, and date range.

**5.5** Skills shall be grouped by category.

**5.6** Certifications shall display name, issuer, issue date, and a link to the credential URL if available.

**5.7** The Resume page shall include a button that triggers the browser's print dialog (`window.print()`). PDF export is out of scope for this phase.

---

### 6. Contact Page (`/contact`)

**6.1** The Contact page shall display the owner's social links (GitHub, LinkedIn, Twitter, email) sourced from the `Profile` data. Social links absent from the data shall be hidden — no empty or disabled placeholders.

**6.2** Each social link shall open in a new tab with `rel="noopener noreferrer"`.

**6.3** The email link shall use a `mailto:` href.

---

### 7. Data Layer

**7.1** All site content (profile, projects, services, resume) shall be stored as static TypeScript data files in `src/data/`, each exporting a typed constant.

**7.2** Data files shall conform to the type definitions in `src/types/`. Import types from the `@types` alias, import data from the `@data` alias.

**7.3** Data shall be imported directly — no API calls or external CMS in this phase. Never hard-code names, emails, URLs, or project details inside components.

---

### 8. Routing

**8.1** The application shall use React Router v7 for client-side routing.

**8.2** The defined routes shall be: `/`, `/projects`, `/resume`, `/contact`.

**8.3** Any unmatched route shall render a 404 Not Found page with a link back to `/`. The 404 page shall set its `<title>` to `Page Not Found — {Owner Name}`.

**8.4** The active route shall be visually indicated in the navbar.

---

### 9. Performance

**9.1** Images shall use the existing `LazyImage` component with lazy loading.

**9.2** Page-level components shall be code-split using `React.lazy` and `Suspense`.

**9.3** While a lazy page chunk is loading, a consistent full-page loading fallback component shall be displayed.

---

### 10. Accessibility

**10.1** All interactive elements shall be keyboard navigable.

**10.2** All images shall have descriptive `alt` text, or `alt=""` for decorative images.

**10.3** Focus indicators shall meet WCAG AA standards (2px outline, 2px offset) as defined in `global.css`.

**10.4** Color contrast ratios shall meet WCAG AA minimums as defined by the existing design tokens.

**10.5** The page `<title>` shall be updated per route using `react-helmet-async`.

---

### 11. Responsive Design

**11.1** The site shall be fully responsive across mobile (320px+), tablet (768px+), and desktop (1024px+) breakpoints as defined in `breakpoints.css`.

**11.2** The projects grid shall adapt from 1 column (mobile) to 2 columns (tablet) to 3 columns (desktop).

**11.3** Typography and spacing shall scale appropriately across breakpoints.
