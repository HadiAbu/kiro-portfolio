import React from 'react'
import { profile } from '@data'
import styles from './AboutSection.module.css'

const AboutSection: React.FC = () => {
  const { bio } = profile.personalInfo
  const { location, freelance, age } = profile.metadata

  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title">About</h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.bio}>{bio}</p>
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Availability</span>
                <span className={styles.metaValue}>{freelance}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Age</span>
                <span className={styles.metaValue}>{age}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.subheading}>Technologies &amp; skills</h3>
            <ul className={styles.tags}>
              {profile.extraSkills.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
