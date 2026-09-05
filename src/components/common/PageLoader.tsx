import React from 'react'
import styles from './PageLoader.module.css'

/**
 * Full-viewport centered loading indicator used as the Suspense fallback
 * for all lazy-loaded pages.
 */
const PageLoader: React.FC = () => {
  return (
    <div className={styles.container} role="status" aria-label="Loading page">
      <span className={`spinner ${styles.spinner}`} />
    </div>
  )
}

export default PageLoader
