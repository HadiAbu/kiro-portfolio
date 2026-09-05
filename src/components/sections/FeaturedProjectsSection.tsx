import React from 'react'
import { Link } from 'react-router-dom'
import { LazyImage, Card } from '@components/common'
import { projects } from '@data'
import styles from './FeaturedProjectsSection.module.css'

const MAX_FEATURED = 3

const FeaturedProjectsSection: React.FC = () => {
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)

  if (featured.length === 0) return null

  return (
    <section className={styles.featured} aria-labelledby="featured-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="featured-title">Featured projects</h2>
          <Link to="/projects" className={styles.viewAll}>
            View all projects →
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((project) => (
            <Card key={project.id} hover className={styles.card}>
              <LazyImage
                src={project.thumbnail}
                alt={`${project.name} thumbnail`}
                className={styles.thumb}
              />
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <li key={tech} className={styles.tag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
