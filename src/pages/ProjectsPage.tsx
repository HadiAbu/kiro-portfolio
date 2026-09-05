import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { profile, projects } from '@data'
import { sortByDate } from '@utils'
import { ProjectCard } from '@components/sections'
import styles from './ProjectsPage.module.css'

const ALL = 'All'

const ProjectsPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>(ALL)

  // Unique, sorted technology tags across all projects.
  const tags = useMemo(() => {
    const unique = new Set<string>()
    projects.forEach((p) => p.technologies.forEach((t) => unique.add(t)))
    return [ALL, ...Array.from(unique).sort((a, b) => a.localeCompare(b))]
  }, [])

  // Sort newest-first, then filter by the active tag.
  const visibleProjects = useMemo(() => {
    const sorted = sortByDate(projects, 'completionDate')
    if (activeTag === ALL) return sorted
    return sorted.filter((p) => p.technologies.includes(activeTag))
  }, [activeTag])

  const handleTagClick = (tag: string) => {
    // Clicking the active tag (other than "All") deselects it.
    setActiveTag((current) => (current === tag && tag !== ALL ? ALL : tag))
  }

  return (
    <>
      <Helmet>
        <title>Projects — {profile.personalInfo.name}</title>
        <meta name="description" content="A selection of projects I've built." />
      </Helmet>
      <section className={`container ${styles.page}`} aria-labelledby="projects-title">
        <h1 id="projects-title">Projects</h1>
        <p className={styles.intro}>
          A selection of things I&apos;ve built — from AI-powered apps to full-stack systems and
          DevOps projects. Filter by technology below.
        </p>

        <ul className={styles.filters} aria-label="Filter projects by technology">
          {tags.map((tag) => {
            const isActive = activeTag === tag
            return (
              <li key={tag}>
                <button
                  type="button"
                  className={[styles.filter, isActive && styles.filterActive]
                    .filter(Boolean)
                    .join(' ')}
                  aria-pressed={isActive}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              </li>
            )
          })}
        </ul>

        {visibleProjects.length > 0 ? (
          <div className={styles.grid}>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No projects match this filter.</p>
        )}
      </section>
    </>
  )
}

export default ProjectsPage
