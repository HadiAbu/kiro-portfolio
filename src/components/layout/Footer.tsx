import React from 'react'
import { profile } from '@data'
import styles from './Footer.module.css'

const PLATFORM_LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  email: 'Email',
}

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const { name } = profile.personalInfo
  const emailLink = profile.social.find((s) => s.platform === 'email')
  const email = emailLink?.url.replace(/^mailto:/, '')

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {email && (
          <div className={styles.cta}>
            <p className={styles.ctaLabel}>Let&rsquo;s work together</p>
            <a className={styles.email} href={emailLink!.url}>
              {email}
            </a>
          </div>
        )}

        <div className={styles.meta}>
          <span>
            © {year} {name}
          </span>

          {profile.social.length > 0 && (
            <ul className={styles.socials}>
              {profile.social.map((link) => {
                const isEmail = link.platform === 'email'
                return (
                  <li key={link.platform}>
                    <a
                      className={styles.socialLink}
                      href={link.url}
                      {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {PLATFORM_LABELS[link.platform] ?? link.platform}
                    </a>
                  </li>
                )
              })}
            </ul>
          )}

          {profile.metadata.freelance === 'Available' && <span>Available for freelance</span>}
        </div>
      </div>
    </footer>
  )
}

export default Footer
