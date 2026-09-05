import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'
import { SocialIcon } from '@components/layout'
import styles from './ContactPage.module.css'

const PLATFORM_LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  email: 'Email',
}

/** Strips the URL down to a readable handle for display. */
function displayValue(platform: string, url: string): string {
  if (platform === 'email') return url.replace(/^mailto:/, '')
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

const ContactPage: React.FC = () => {
  const { name } = profile.personalInfo

  return (
    <>
      <Helmet>
        <title>Contact — {name}</title>
        <meta name="description" content={`Get in touch with ${name}.`} />
      </Helmet>

      <section className={`container ${styles.page}`} aria-labelledby="contact-title">
        <h1 id="contact-title">Get in touch</h1>
        <p className={styles.intro}>
          I&apos;m open to new opportunities and collaborations. The best way to reach me is through
          any of the channels below.
        </p>

        <ul className={styles.links}>
          {profile.social.map((link) => {
            const isEmail = link.platform === 'email'
            const label = PLATFORM_LABELS[link.platform] ?? link.platform
            return (
              <li key={link.platform}>
                <a
                  className={styles.link}
                  href={link.url}
                  aria-label={`${label}: ${displayValue(link.platform, link.url)}`}
                  {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <SocialIcon platform={link.platform} className={styles.icon} />
                  <span className={styles.label}>{label}</span>
                  <span>{displayValue(link.platform, link.url)}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ContactPage
