import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './PageLayout.module.css'

/**
 * App shell shared by every route. Renders the skip link, navbar,
 * the routed page content, and the footer.
 *
 * Theme and Helmet providers are applied at the router root in main.tsx.
 */
const PageLayout: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PageLayout
