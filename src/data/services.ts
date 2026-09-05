import type { Service } from '@types'

export const services: Service[] = [
  {
    id: 'fullstack-development',
    title: 'Fullstack Development',
    description:
      'End-to-end web applications built with React, TypeScript, and Python — from responsive UIs to REST APIs and microservices.',
    icon: 'code',
    category: 'development',
  },
  {
    id: 'ai-agentic-workflows',
    title: 'AI & Agentic Workflows',
    description:
      'Production-grade RAG pipelines, AI agent systems, and automation workflows using n8n, Pinecone, FastAPI, and MCP.',
    icon: 'cpu',
    category: 'development',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description:
      'Scalable cloud architecture on AWS and Azure, containerised with Docker and delivered through CI/CD pipelines.',
    icon: 'cloud',
    category: 'development',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    description:
      'Translating ambiguous business requirements into clear technical specifications, architecture decisions, and delivery roadmaps.',
    icon: 'lightbulb',
    category: 'development',
  },
]
