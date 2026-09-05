/**
 * Project-related type definitions
 * Defines the structure for project portfolio data
 */

export interface Project {
  id: string
  name: string
  description: string
  thumbnail: string // Image path
  technologies: string[] // e.g., ['React', 'TypeScript', 'Node.js']
  demoUrl?: string
  repositoryUrl?: string
  featured: boolean
  completionDate: string // ISO date string
}
