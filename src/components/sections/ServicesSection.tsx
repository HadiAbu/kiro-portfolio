import React from 'react'
import { Card } from '@components/common'
import { services } from '@data'
import ServiceIcon from './ServiceIcon'
import styles from './ServicesSection.module.css'

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">What I do</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <Card key={service.id} hover className={styles.card}>
              <ServiceIcon name={service.icon} className={styles.icon} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
