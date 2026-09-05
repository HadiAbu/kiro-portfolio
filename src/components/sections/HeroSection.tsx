import React from 'react'
import { LazyImage, Button } from '@components/common'
import { profile } from '@data'
import styles from './HeroSection.module.css'

const HeroSection: React.FC = () => {
  const { name, title, tagline, profileImage } = profile.personalInfo

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <p className={styles.tagline}>{tagline}</p>
          <Button onClick={scrollToServices}>View my work</Button>
        </div>
        <div className={styles.imageWrapper}>
          <LazyImage
            src={profileImage}
            alt={`Portrait of ${name}`}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
