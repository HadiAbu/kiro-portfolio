import React from 'react'
import { LazyImage, Card } from '@components/common'
import type { Project } from '@types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardClasses = [styles.card, project.featured && styles.featured].filter(Boolean).join(' ')

  return (
    <Card className={cardClasses}>
      {project.featured && <span className={styles.badge}>Featured</span>}
      <LazyImage
        src={project.thumbnail}
        alt={`${project.name} thumbnail`}
        className={styles.thumb}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags}>
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
        {(project.demoUrl || project.repositoryUrl) && (
          <div className={styles.links}>
            {project.demoUrl && (
              <a
                className={styles.link}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </a>
            )}
            {project.repositoryUrl && (
              <a
                className={styles.link}
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
