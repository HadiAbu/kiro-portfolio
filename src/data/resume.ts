import type { Resume } from '@types'

export const resume: Resume = {
  experience: [
    {
      company: 'AI Simple Flow',
      position: 'Automation & AI Engineer',
      startDate: '2023-01-01',
      endDate: 'Present',
      location: 'Remote',
      responsibilities: [
        'Architected object-oriented test automation workflows and data pipelines using Python, FastAPI, and Linux environments to assess software quality and performance.',
        'Built automated CI/CD pipelines and deployment workflows using Docker, GitHub Actions, and AWS infrastructure to streamline continuous integration and test execution.',
        'Applied the Kiro Spec-Driven Development (SDD) framework alongside AI coding models (Cursor, Claude Code) to rapidly iterate on production-grade features and systematic edge-case debugging.',
        'Orchestrated asynchronous event testing queues using n8n and Redis, reducing manual testing and processing overhead by 60%.',
        'Collaborated directly with developers to evaluate component testability, mitigate risks, and troubleshoot complex system behavior prior to release.',
      ],
      achievements: [
        'Reduced manual testing and processing overhead by 60% via n8n and Redis automation.',
        'Drove features from design through CI/CD production deployment end-to-end.',
      ],
    },
    {
      company: 'Ellipsis Drive',
      position: 'Software Test Developer',
      startDate: '2021-01-01',
      endDate: '2023-01-01',
      location: 'Israel',
      responsibilities: [
        'Built and maintained regression test suites, enforcing strict code quality and testability standards across spatial map rendering and data modules.',
        'Developed automated integration test suites for high-density backend REST APIs and spatial visualization interfaces, maintaining a 90%+ test coverage standard.',
        'Automated lab and staging sync environments to isolate, reproduce, and resolve complex edge-case bugs across frequent software deployments.',
      ],
      achievements: [
        'Maintained a 90%+ test coverage standard across critical backend and spatial-visualization modules.',
      ],
    },
    {
      company: 'Shutterfly',
      position: 'Web & API Developer',
      startDate: '2020-01-01',
      endDate: '2020-12-31',
      location: 'Remote',
      responsibilities: [
        'Built backend API infrastructure and webhook validation suites to automate data integrity checks during core system migration.',
        'Executed cross-platform automated validation and compatibility checks across distributed web applications.',
      ],
      achievements: [],
    },
    {
      company: 'Colabo',
      position: 'Software Developer',
      startDate: '2019-01-01',
      endDate: '2020-01-01',
      location: 'Israel',
      responsibilities: [
        'Strengthened reliability with unit and end-to-end testing (Jest/Enzyme) across core customer management components.',
        'Worked closely with QA and backend developers to establish reproducible test setups and fix high-priority platform defects.',
      ],
      achievements: [],
    },
    {
      company: 'Cisco',
      position: 'Automation Engineer',
      startDate: '2015-01-01',
      endDate: '2017-01-01',
      location: 'Israel',
      responsibilities: [
        'Built, maintained, and expanded core automated test suites using Python and Java for large-scale networking and embedded system components.',
        'Contributed directly to the internal automation testing framework, improving test case execution efficiency and framework maintainability.',
        'Configured, monitored, and optimized continuous integration pipelines in Jenkins to enable automated daily build verification.',
        'Leveraged Selenium to automate web UI tests and end-to-end user workflows across distributed staging environments.',
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
      category: 'Test Automation & Frameworks',
      skills: [
        'Python Test Automation',
        'Object-Oriented Framework Design',
        'Integration Testing',
        'End-to-End Testing',
        'Test Plan Design',
        'Embedded System Testing',
      ],
    },
    {
      category: 'Languages & Scripting',
      skills: ['Python', 'Java', 'Bash Scripting', 'TypeScript', 'JavaScript', 'C/C++'],
    },
    {
      category: 'CI/CD, Infrastructure & Lab Setup',
      skills: [
        'Jenkins',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Linux',
        'AWS',
        'Nginx',
        'Redis',
      ],
    },
    {
      category: 'AI-Assisted Development',
      skills: ['Kiro SDD Framework', 'Claude Code', 'Cursor', 'Agentic Testing Workflows'],
    },
    {
      category: 'Test Tools & Web Automation',
      skills: [
        'Selenium',
        'Jest',
        'React Testing Library',
        'API Testing (FastAPI/REST)',
        'Webhooks',
      ],
    },
  ],
  certifications: [],
}
