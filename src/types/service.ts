/**
 * Service-related type definitions
 * Defines the structure for service offerings
 */

export interface Service {
  id: string
  title: string
  description: string
  icon: string // Icon identifier or SVG
  category: 'development' | 'design' | 'media' | 'marketing'
}
