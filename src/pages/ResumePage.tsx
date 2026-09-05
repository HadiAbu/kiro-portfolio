import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile, resume } from '@data'
import { sortByDate, formatDateRange } from '@utils'
import { Button } from '@components/common'
import { TimelineEntry, SkillGroup, CertificationCard } from '@components/resume'
import styles from './ResumePage.module.css'

const ResumePage: React.FC = () => {
  const experience = sortByDate(resume.experience, 'startDate')
  const education = sortByDate(resume.education, 'startDate')

  const handlePrint = () => window.print()

  return (
    <>
      <Helmet>
        <title>Resume — {profile.personalInfo.name}</title>
        <meta name="description" content="Experience, education, skills, and certifications." />
      </Helmet>

      <section className={`container ${styles.page}`} aria-labelledby="resume-title">
        <div className={styles.header}>
          <h1 id="resume-title">Resume</h1>
          <Button variant="outline" onClick={handlePrint} className={styles.printButton}>
            Print Resume
          </Button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experience.map((entry) => (
            <TimelineEntry
              key={`${entry.company}-${entry.startDate}`}
              title={entry.position}
              subtitle={entry.company}
              dateRange={formatDateRange(entry.startDate, entry.endDate)}
              location={entry.location}
              items={[...entry.responsibilities, ...entry.achievements]}
            />
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {education.map((entry) => (
            <TimelineEntry
              key={`${entry.institution}-${entry.startDate}`}
              title={`${entry.degree}, ${entry.field}`}
              subtitle={entry.institution}
              dateRange={formatDateRange(entry.startDate, entry.endDate)}
              items={entry.description ? [entry.description] : undefined}
            />
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {resume.skills.map((group) => (
              <SkillGroup key={group.category} category={group.category} skills={group.skills} />
            ))}
          </div>
        </div>

        {resume.certifications.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div className={styles.certGrid}>
              {resume.certifications.map((cert) => (
                <CertificationCard key={cert.name} cert={cert} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default ResumePage
