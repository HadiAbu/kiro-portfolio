import type { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '../src/components/layout'
import HomePage from '../src/pages/HomePage'
import ProjectsPage from '../src/pages/ProjectsPage'
import ResumePage from '../src/pages/ResumePage'
import ContactPage from '../src/pages/ContactPage'
import NotFoundPage from '../src/pages/NotFoundPage'

/**
 * Eager (non-lazy) mirror of the route tree in src/main.tsx, used only by
 * scripts/prerender.tsx. Prerendering needs every page component resolved
 * synchronously; the client bundle keeps lazy-loading its routes for
 * navigation performance, unaffected by this file.
 */
export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

/** Every static route that should get its own prerendered HTML file. */
export const PRERENDER_PATHS = ['/', '/projects', '/resume', '/contact'] as const
