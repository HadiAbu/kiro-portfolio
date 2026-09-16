import React from 'react'
import { services } from '@data'
import { useInView } from '@hooks'
import styles from './ServicesSection.module.css'

const NUMERALS = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.']

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div ref={ref} className={`container revealGroup ${inView ? 'isInView' : ''}`}>
        <p className={styles.label}>03 — Services</p>
        <h2 id="services-title" className={styles.heading}>
          How I can help
        </h2>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={service.id} className={styles.item}>
              <span className={styles.numeral} aria-hidden="true">
                {NUMERALS[i] ?? `${i + 1}.`}
              </span>
              <h3 className={styles.itemTitle}>{service.title}</h3>
              <p className={styles.itemDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
