import type { Profile } from '@types'

export const profile: Profile = {
  personalInfo: {
    name: 'Hadi Abu Hamed',
    title: 'AI Systems Engineer',
    profileImage: '/images/profile.jpeg',
    tagline:
      'I design and ship AI-powered systems — agentic workflows, developer tooling, and the infrastructure that runs them in production.',
    bio: "I'm an AI Systems Engineer with over 5 years in industry, building production-grade systems where agentic AI meets solid system design — RAG pipelines, agent workflows, developer tooling, and the microservice infrastructure underneath. I go deep on the technical detail and think in architecture, tradeoffs, and what holds up at scale. My goal is to grow into a solutions architect, surrounded by talented engineers, shipping products that actually work.",
  },
  metadata: {
    age: 32,
    responsive: true,
    freelance: 'Available',
    location: 'Tel Aviv, Israel',
  },
  languages: [
    { name: 'Arabic', proficiency: 95 },
    { name: 'Hebrew', proficiency: 95 },
    { name: 'English', proficiency: 90 },
  ],
  technicalSkills: [
    { name: 'Claude', category: 'other', proficiency: 92 },
    { name: 'Python', category: 'backend', proficiency: 90 },
    { name: 'React', category: 'frontend', proficiency: 90 },
    { name: 'PostgreSQL', category: 'backend', proficiency: 85 },
    { name: 'MongoDB', category: 'backend', proficiency: 80 },
    { name: 'SDD', category: 'other', proficiency: 85 },
    { name: 'AWS', category: 'tools', proficiency: 80 },
    { name: 'FastAPI', category: 'backend', proficiency: 88 },
    { name: 'TypeScript', category: 'frontend', proficiency: 90 },
    { name: 'Docker', category: 'tools', proficiency: 82 },
  ],
  extraSkills: [
    'Claude',
    'Python',
    'React',
    'PostgreSQL',
    'MongoDB',
    'SDD',
    'AWS',
    'FastAPI',
    'TypeScript',
    'Docker',
    'RAG',
    'Agentic Workflows',
    'CI/CD',
  ],
  social: [
    {
      platform: 'github',
      url: 'https://github.com/HadiAbu',
      icon: 'github',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/hadiabu/',
      icon: 'linkedin',
    },
    {
      platform: 'email',
      url: 'mailto:hadi.abuhamed@gmail.com',
      icon: 'email',
    },
  ],
}
