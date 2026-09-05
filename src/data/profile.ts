import type { Profile } from '@types'

export const profile: Profile = {
  personalInfo: {
    name: 'Hadi Abu Hamed',
    title: 'Full Stack & AI Engineer',
    profileImage: '/images/profile.jpeg',
    tagline: 'I build scalable fullstack systems and AI-powered applications.',
    bio: "I'm a Full Stack & AI Engineer with over 5 years of experience building production-grade systems — from React frontends and Python microservices to agentic AI workflows and RAG pipelines. My goal is to grow into a solutions architect surrounded by talented engineers, shipping products that actually work at scale.",
  },
  metadata: {
    age: 32,
    responsive: true,
    freelance: 'Available',
    location: 'Hazafon, Israel',
  },
  languages: [
    { name: 'Arabic', proficiency: 100 },
    { name: 'Hebrew', proficiency: 95 },
    { name: 'English', proficiency: 90 },
  ],
  technicalSkills: [
    { name: 'React', category: 'frontend', proficiency: 92 },
    { name: 'TypeScript', category: 'frontend', proficiency: 90 },
    { name: 'Next.js', category: 'frontend', proficiency: 82 },
    { name: 'Python', category: 'backend', proficiency: 90 },
    { name: 'FastAPI', category: 'backend', proficiency: 88 },
    { name: 'Node.js', category: 'backend', proficiency: 82 },
    { name: 'AWS', category: 'tools', proficiency: 78 },
    { name: 'Docker', category: 'tools', proficiency: 80 },
    { name: 'n8n', category: 'tools', proficiency: 85 },
    { name: 'RAG Pipelines', category: 'other', proficiency: 88 },
    { name: 'MCP', category: 'other', proficiency: 80 },
  ],
  extraSkills: [
    'React',
    'Python',
    'FastAPI',
    'CI/CD',
    'AWS',
    'Claude',
    'Redis',
    'REST Microservices',
    'SDD',
    'n8n',
    'Docker',
    'Figma',
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
