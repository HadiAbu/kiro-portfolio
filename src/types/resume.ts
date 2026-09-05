/**
 * Resume-related type definitions
 * Defines the structure for resume content including education, experience, skills, and certifications
 */

export interface EducationEntry {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description?: string
}

export interface ExperienceEntry {
  company: string
  position: string
  startDate: string
  endDate: string | 'Present'
  location: string
  responsibilities: string[]
  achievements: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certification {
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialUrl?: string
}

export interface Resume {
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: SkillCategory[]
  certifications: Certification[]
}
