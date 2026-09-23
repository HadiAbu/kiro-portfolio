import type { Profile } from '@types'

export const profile: Profile = {
  personalInfo: {
    name: 'Hadi Abu Hamed',
    title: 'AI Software Test Development Engineer',
    profileImage: '/images/profile.jpeg',
    tagline:
      'I design and maintain automated test frameworks — CI/CD pipelines, lab environments, and the tooling that keeps complex software systems honest.',
    bio: "I'm a Software Test Development Engineer with over 5 years of hands-on experience designing, developing, and maintaining automated test frameworks, lab environments, and CI/CD pipelines. I work in Python test automation and object-oriented framework design, troubleshooting complex systems across lab, cloud, and embedded platforms — and lately pairing that with AI coding agents (Claude Code, Cursor) under the Kiro Spec-Driven Development framework to iterate faster. I work closely with development teams to assess testability and mitigate quality risks, and contribute test-suite improvements and bug fixes to open-source developer tooling on the side.",
  },
  metadata: {
    age: 32,
    responsive: true,
    freelance: 'Available',
    location: 'Tel Aviv, Israel',
  },
  languages: [
    { name: 'English', proficiency: 100 },
    { name: 'Arabic', proficiency: 100 },
    { name: 'Hebrew', proficiency: 90 },
  ],
  technicalSkills: [
    { name: 'Python', category: 'backend', proficiency: 92 },
    { name: 'Selenium', category: 'tools', proficiency: 85 },
    { name: 'Jenkins', category: 'tools', proficiency: 82 },
    { name: 'Docker', category: 'tools', proficiency: 85 },
    { name: 'GitHub Actions', category: 'tools', proficiency: 85 },
    { name: 'AWS', category: 'tools', proficiency: 80 },
    { name: 'Claude Code', category: 'other', proficiency: 90 },
    { name: 'Kiro SDD', category: 'other', proficiency: 85 },
    { name: 'TypeScript', category: 'frontend', proficiency: 85 },
    { name: 'Jest', category: 'frontend', proficiency: 82 },
  ],
  extraSkills: [
    'Python Test Automation',
    'Selenium',
    'Jenkins',
    'Docker',
    'GitHub Actions',
    'AWS',
    'Linux',
    'Kiro SDD',
    'Claude Code',
    'Cursor',
    'Redis',
    'n8n',
    'API Testing',
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
