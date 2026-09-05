import React from 'react'
import { Helmet } from 'react-helmet-async'
import { profile } from '@data'
import {
  HeroSection,
  AboutSection,
  FeaturedProjectsSection,
  ServicesSection,
} from '@components/sections'

const HomePage: React.FC = () => {
  const { name, title, tagline } = profile.personalInfo

  return (
    <>
      <Helmet>
        <title>
          {name} — {title}
        </title>
        <meta name="description" content={tagline} />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ServicesSection />
    </>
  )
}

export default HomePage
