import type { Resume } from '@types'

export const resume: Resume = {
  experience: [
    {
      company: 'AI Simple Flow',
      position: 'Fullstack & AI Engineer',
      startDate: '2023-01-01',
      endDate: 'Present',
      location: 'Remote',
      responsibilities: [
        'Architect and deploy production-grade AI Agent workflows and RAG pipelines using Python, FastAPI, and Pinecone.',
        'Build end-to-end full-stack systems with TypeScript, React, and Node.js, delivering REST APIs and microservices.',
        'Evaluate, benchmark, and fine-tune AI coding models using Claude Code and Cursor, debugging edge case failures.',
        'Design automated asynchronous event workflows using n8n and Redis queues.',
        'Collaborate with business stakeholders to translate product requirements into scalable technical specifications.',
      ],
      achievements: [
        'Reduced query latency by 35% and improved response accuracy for commercial clients.',
        'Reduced manual content processing operational overhead by 60% via n8n automation.',
        'Drove features from design through CI/CD production deployment end-to-end.',
      ],
    },
    {
      company: 'Ellipsis Drive',
      position: 'Front-End Developer',
      startDate: '2021-01-01',
      endDate: '2023-01-01',
      location: 'Israel',
      responsibilities: [
        'Engineer high-performance spatial map interfaces and graph visualizations using React, TypeScript, and Node.js.',
        'Integrate complex frontend state management with backend REST APIs for real-time data sync on spatial datasets.',
        'Implement automated UI testing using Jest and React Testing Library.',
      ],
      achievements: [
        'Accelerated onboarding time for new enterprise users.',
        'Maintained 90%+ code coverage standard across critical invoicing modules.',
      ],
    },
    {
      company: 'Shutterfly',
      position: 'Web Developer',
      startDate: '2020-01-01',
      endDate: '2020-12-31',
      location: 'Remote',
      responsibilities: [
        'Prepared marketing campaigns in webpage formats with cross-browser compatibility.',
        'Built backend infrastructure (APIs) as part of the web migration to third-party tools.',
      ],
      achievements: [],
    },
    {
      company: 'Colabo',
      position: 'Front-End Developer',
      startDate: '2019-01-01',
      endDate: '2020-01-01',
      location: 'Israel',
      responsibilities: [
        'Co-develop a scalable customer management platform using React.',
        'Build dashboards and integrate RESTful API services.',
        'Collaborate with backend and QA teams throughout the development cycle.',
      ],
      achievements: [],
    },
  ],
  education: [
    {
      institution: 'SV College (TLV)',
      degree: 'Certificate',
      field: 'DevOps Theory & Practice',
      startDate: '2025-01-01',
      endDate: '2026-01-01',
    },
    {
      institution: 'Tel Aviv University',
      degree: 'BA',
      field: 'Psychology',
      startDate: '2016-01-01',
      endDate: '2018-01-01',
    },
    {
      institution: 'Ort Braude College',
      degree: 'BSc',
      field: 'Software Engineering',
      startDate: '2010-01-01',
      endDate: '2015-01-01',
    },
  ],
  skills: [
    {
      category: 'Frontend & UI',
      skills: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'Jest', 'React Testing Library'],
    },
    {
      category: 'Backend & APIs',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'Microservices', 'Redis'],
    },
    {
      category: 'AI & Agentic',
      skills: [
        'RAG Pipelines',
        'MCP',
        'Agentic Workflows',
        'Pinecone',
        'Claude',
        'Codex',
        'Cursor',
        'n8n',
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD'],
    },
  ],
  certifications: [],
}
