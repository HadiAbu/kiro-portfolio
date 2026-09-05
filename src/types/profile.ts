/**
 * Profile-related type definitions
 * Defines the structure for profile information, languages, skills, and social links
 */

export interface Language {
  name: string
  proficiency: number // 0-100
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  proficiency: number // 0-100
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email'
  url: string
  icon: string // Icon identifier or SVG
}

export interface Profile {
  personalInfo: {
    name: string
    title: string
    profileImage: string
    tagline: string
    bio: string
  }
  metadata: {
    age: number
    responsive: boolean
    freelance: 'Available' | 'Unavailable'
    location: string
  }
  languages: Language[]
  technicalSkills: Skill[]
  extraSkills: string[]
  social: SocialLink[]
}
