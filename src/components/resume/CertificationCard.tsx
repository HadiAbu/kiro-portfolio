import React from 'react'
import type { Certification } from '@types'
import { formatDate } from '@utils'
import styles from './CertificationCard.module.css'

interface CertificationCardProps {
  cert: Certification
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{cert.name}</h4>
      <p className={styles.issuer}>{cert.issuer}</p>
      <p className={styles.date}>Issued {formatDate(cert.issueDate)}</p>
      {cert.credentialUrl && (
        <a
          className={styles.link}
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View credential ↗
        </a>
      )}
    </div>
  )
}

export default CertificationCard
