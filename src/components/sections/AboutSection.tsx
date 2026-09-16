import React from 'react'
import { profile } from '@data'
import { useInView } from '@hooks'
import styles from './AboutSection.module.css'

const AboutSection: React.FC = () => {
  const { bio } = profile.personalInfo
  const { location, freelance, age } = profile.metadata
  const languages = profile.languages.map((l) => l.name).join(' · ')
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div ref={ref} className={`container revealGroup ${inView ? 'isInView' : ''}`}>
        <p className={styles.label}>01 — About</p>
        <h2 id="about-title" className={styles.heading}>
          About
        </h2>

        <div className={styles.grid}>
          <div className={styles.main}>
            <p className={styles.bio}>{bio}</p>
            <ul className={styles.tags}>
              {profile.extraSkills.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <dl className={styles.stats}>
            <div className={styles.statRow}>
              <dt className={styles.statLabel}>Based in</dt>
              <dd className={styles.statValue}>{location}</dd>
            </div>
            <div className={styles.statRow}>
              <dt className={styles.statLabel}>Availability</dt>
              <dd className={styles.statValue}>{freelance}</dd>
            </div>
            <div className={styles.statRow}>
              <dt className={styles.statLabel}>Languages</dt>
              <dd className={styles.statValue}>{languages}</dd>
            </div>
            <div className={styles.statRow}>
              <dt className={styles.statLabel}>Age</dt>
              <dd className={styles.statValue}>{age}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
