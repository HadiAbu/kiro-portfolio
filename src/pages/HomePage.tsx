import React from 'react'
import { profile } from '@data'
import { Seo, SITE_URL, DEFAULT_OG_IMAGE } from '@components/common'
import {
  HeroSection,
  AboutSection,
  FeaturedProjectsSection,
  ServicesSection,
} from '@components/sections'

const HomePage: React.FC = () => {
  const { name, title, tagline } = profile.personalInfo

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: title,
    description: tagline,
    url: `${SITE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    email: profile.social.find((s) => s.platform === 'email')?.url.replace(/^mailto:/, ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tel Aviv',
      addressCountry: 'IL',
    },
    sameAs: profile.social.filter((s) => s.platform !== 'email').map((s) => s.url),
    knowsAbout: profile.extraSkills,
  }

  return (
    <>
      <Seo title={`${name} — ${title}`} description={tagline} path="/" jsonLd={personJsonLd} />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ServicesSection />
    </>
  )
}

export default HomePage
