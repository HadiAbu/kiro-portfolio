import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact — {profile.personalInfo.name}</title>
        <meta name="description" content={`Get in touch with ${profile.personalInfo.name}.`} />
      </Helmet>
      <section className="container">
        <h1>Contact</h1>
        {/* TODO Phase 8: social links list */}
      </section>
    </>
  )
}

export default ContactPage
