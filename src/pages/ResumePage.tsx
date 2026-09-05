import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'

const ResumePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resume — {profile.personalInfo.name}</title>
        <meta name="description" content="Experience, education, skills, and certifications." />
      </Helmet>
      <section className="container">
        <h1>Resume</h1>
        {/* TODO Phase 7: Experience, Education, Skills, Certifications + Print button */}
      </section>
    </>
  )
}

export default ResumePage
