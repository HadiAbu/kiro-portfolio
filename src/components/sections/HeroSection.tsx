import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LazyImage, Button } from '@components/common'
import SocialIcon from '../layout/SocialIcon'
import { profile } from '@data'
import { useParallax } from '@hooks'
import styles from './HeroSection.module.css'

const PLATFORM_LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  email: 'Email',
}

const HeroSection: React.FC = () => {
  const navigate = useNavigate()
  const { name, title, tagline, bio, profileImage } = profile.personalInfo
  const { location, freelance } = profile.metadata
  const parallaxRef = useParallax<HTMLDivElement>(14)

  // Headline is the tagline up to its first em-dash; the remainder becomes the lead.
  const [headline, ...rest] = tagline.split(' — ')
  const lead = rest.length
    ? rest.join(' — ').replace(/^./, (c) => c.toUpperCase())
    : bio.split('. ')[0].replace(/\.$/, '') + '.'

  // Above-the-fold content reveals once on mount rather than on scroll.
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.content} revealGroup ${loaded ? 'isInView' : ''}`}>
          <p className={styles.eyebrow}>
            {title} &nbsp;/&nbsp; {location}
          </p>
          <h1 className={styles.name}>{headline}</h1>
          <p className={styles.tagline}>{lead}</p>
          <div className={styles.actions}>
            <Button onClick={() => navigate('/contact')}>Get in touch</Button>
            <Link to="/projects" className={styles.textLink}>
              View projects
            </Link>
          </div>
          {freelance === 'Available' && (
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Available for freelance
            </p>
          )}
        </div>

        <div
          className={`${styles.aside} reveal ${loaded ? 'isInView' : ''}`}
          style={{ '--reveal-delay': '260ms' } as React.CSSProperties}
        >
          <div ref={parallaxRef} className={styles.imageFrame}>
            <LazyImage
              src={profileImage}
              alt={`Portrait of ${name}`}
              width={440}
              height={440}
              className={styles.image}
            />
          </div>
          <div className={styles.caption}>
            <span className={styles.captionText}>{title}</span>
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
                        <SocialIcon platform={link.platform} className={styles.socialIcon} />
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
