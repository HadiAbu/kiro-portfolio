import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'

export const SITE_URL = 'https://kiro-portfolio-two.vercel.app'
export const DEFAULT_OG_IMAGE = `${SITE_URL}${profile.personalInfo.profileImage}`

export interface SeoProps {
  title: string
  description: string
  /** Route path starting with "/", e.g. "/projects". */
  path: string
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Centralizes per-page meta tags (title, description, canonical, Open Graph,
 * Twitter Card, and optional JSON-LD) so every route emits a consistent,
 * complete set instead of the title/description pair Helmet was limited to.
 */
export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}) => {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.personalInfo.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  )
}

export default Seo
