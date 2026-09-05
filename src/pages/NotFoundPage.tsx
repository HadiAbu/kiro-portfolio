import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'
import { Button } from '@components/common'
import styles from './NotFoundPage.module.css'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found — {profile.personalInfo.name}</title>
        <meta name="description" content="The page you were looking for does not exist." />
      </Helmet>
      <section className={styles.container}>
        <h1 className={styles.code}>404 — Page Not Found</h1>
        <p className={styles.message}>
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <Link to="/">
          <Button>Go home</Button>
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
