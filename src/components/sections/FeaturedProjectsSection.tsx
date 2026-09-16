import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '@data'
import { useInView } from '@hooks'
import styles from './FeaturedProjectsSection.module.css'

const MAX_FEATURED = 3

const FeaturedProjectsSection: React.FC = () => {
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)
  const { ref, inView } = useInView<HTMLDivElement>()

  if (featured.length === 0) return null

  return (
    <section className={styles.featured} aria-labelledby="featured-title">
      <div ref={ref} className={`container revealGroup ${inView ? 'isInView' : ''}`}>
        <p className={styles.label}>02 — Selected work</p>
        <h2 id="featured-title" className={styles.heading}>
          Systems shipped end to end
        </h2>

        <div className={styles.list}>
          {featured.map((project, i) => (
            <article key={project.id} className={styles.row}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div className={styles.meta}>
                <p className={styles.techLine}>{project.technologies.join(' · ')}</p>
                {(project.demoUrl || project.repositoryUrl) && (
                  <div className={styles.links}>
                    {project.demoUrl && (
                      <a
                        className={styles.link}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live ↗
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a
                        className={`${styles.link} ${styles.linkMuted}`}
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
              <span className={styles.rowArrow} aria-hidden="true">
                →
              </span>
            </article>
          ))}
        </div>

        <Link to="/projects" className={styles.footerLink}>
          All projects →
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
