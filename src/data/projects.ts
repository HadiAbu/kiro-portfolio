import type { Project } from '@types'

export const projects: Project[] = [
  {
    id: 'ai-philosophy',
    name: 'AI Philosophy',
    description:
      'An interactive explainer for how modern AI works — 13 modules from neural networks to RAG, each with a live in-browser simulation. Built on React 19 and FastAPI and shipped on a full production stack (Docker, AWS EC2, CI/CD).',
    thumbnail: '/images/projects/ai-philosophy.png',
    technologies: ['React', 'TypeScript', 'FastAPI', 'TensorFlow.js', 'Docker', 'AWS'],
    demoUrl: 'https://hadi-portfolio.vercel.app/',
    repositoryUrl: 'https://github.com/HadiAbu/ai-philosophy',
    featured: true,
    completionDate: '2026-07-05',
  },
  {
    id: 'hadi-os',
    name: 'Hadi-OS',
    description:
      'A personal "Jarvis" — a context-aware assistant centred on the owner\'s software projects and growth as an engineer. Spec-driven build with a chat agent, objectives/actions tracking, and a momentum dashboard, running FastAPI and Turso behind an Nginx-proxied React 19 frontend.',
    thumbnail: '/images/projects/hadi-os.png',
    technologies: ['React', 'FastAPI', 'Turso', 'TypeScript', 'Tailwind CSS', 'Docker'],
    repositoryUrl: 'https://github.com/HadiAbu/Hadi-OS',
    featured: true,
    completionDate: '2026-09-08',
  },
  {
    id: 'manga-scrapper',
    name: 'Manga Search',
    description:
      'A search and reading platform designed for scale — Jikan metadata indexed into OpenSearch for fast full-text queries, a FastAPI service behind Keycloak OIDC and an Nginx load balancer, and a reader that proxies MangaDex with a Comick fallback.',
    thumbnail: '/images/projects/manga-scrapper.png',
    technologies: ['FastAPI', 'OpenSearch', 'Keycloak', 'Nginx', 'Docker', 'Python'],
    repositoryUrl: 'https://github.com/HadiAbu/Manga-Scrapper',
    featured: true,
    completionDate: '2026-06-08',
  },
  {
    id: 'issue-tracker-rabbitmq',
    name: 'Issue Tracker',
    description:
      'A Linear-lite issue tracker built as a distributed system — FastAPI and Postgres behind a React + Vite client, RabbitMQ for async events, and Docker Compose tying it together. JWT auth, project and issue boards, dashboards with charts, and per-project stats.',
    thumbnail: '/images/projects/issue-tracker.jpg',
    technologies: ['FastAPI', 'PostgreSQL', 'React', 'RabbitMQ', 'Docker'],
    repositoryUrl: 'https://github.com/HadiAbu/issue-tracker-rabbitmq',
    featured: false,
    completionDate: '2026-08-23',
  },
  {
    id: 'global-climate-lens',
    name: 'Global Climate Lens',
    description:
      'A data-visualisation project tracking global CO₂ emissions and temperature anomalies from 1750 to 2020.',
    thumbnail: '/images/projects/global-climate-lens.png',
    technologies: ['React', 'TypeScript', 'Data Visualisation'],
    repositoryUrl: 'https://github.com/HadiAbu/global-climate-lens',
    featured: false,
    completionDate: '2026-02-23',
  },
  {
    id: 'n8n-automations',
    name: 'n8n Automation Workflows',
    description:
      'A library of reusable n8n workflows for agentic automation — AI agents, data pipelines, service integrations, and business process automation.',
    thumbnail: '/images/projects/n8n-automations.png',
    technologies: ['n8n', 'Automation', 'AI Agents', 'JSON'],
    repositoryUrl: 'https://github.com/HadiAbu/n8n-automations',
    featured: false,
    completionDate: '2026-03-05',
  },
  {
    id: 'ticketmaster',
    name: 'TicketMaster API',
    description:
      'A backend API for viewing events and booking tickets, designed to handle high-traffic load reliably.',
    thumbnail: '/images/projects/ticketmaster.png',
    technologies: ['Node.js', 'REST APIs', 'Backend'],
    repositoryUrl: 'https://github.com/HadiAbu/TicketMaster',
    featured: false,
    completionDate: '2025-12-20',
  },
  {
    id: 'life-is-music',
    name: 'LifeIsMusic',
    description:
      'A feature-rich music streaming app — modern homepage, full-fledged player, search, lyrics, worldwide top charts, and song exploration. Built with React and Redux Toolkit.',
    thumbnail: '/images/projects/life-is-music.png',
    technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
    repositoryUrl: 'https://github.com/HadiAbu/LifeIsMusic',
    featured: false,
    completionDate: '2025-12-08',
  },
]
