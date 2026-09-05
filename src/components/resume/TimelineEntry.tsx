import React from 'react'
import styles from './TimelineEntry.module.css'

interface TimelineEntryProps {
  title: string
  subtitle: string
  dateRange: string
  location?: string
  items?: string[]
}

/**
 * A vertical timeline item with a dot/line connector, used for
 * experience and education entries on the Resume page.
 */
const TimelineEntry: React.FC<TimelineEntryProps> = ({
  title,
  subtitle,
  dateRange,
  location,
  items,
}) => {
  return (
    <div className={styles.entry}>
      <span className={styles.dot} aria-hidden="true" />
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.dateRange}>{dateRange}</span>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      {location && <p className={styles.location}>{location}</p>}
      {items && items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TimelineEntry
