import React from 'react'
import { profile } from '@data'
import SocialIcon from './SocialIcon'
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

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {profile.social.length > 0 && (
          <ul className={styles.socials}>
            {profile.social.map((link) => {
              const isEmail = link.platform === 'email'
              return (
                <li key={link.platform}>
                  <a
                    className={styles.socialLink}
                    href={link.url}
                    aria-label={PLATFORM_LABELS[link.platform] ?? link.platform}
                    {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <SocialIcon platform={link.platform} className={styles.icon} />
                  </a>
                </li>
              )
            })}
          </ul>
        )}
        <p className={styles.copyright}>
          © {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
