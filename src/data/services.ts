import type { Service } from '@types'

export const services: Service[] = [
  {
    id: 'ai-systems',
    title: 'AI-Powered Systems',
    description:
      'Production RAG pipelines, agent systems, and LLM-backed services — designed, evaluated, and deployed with FastAPI, Pinecone, and MCP.',
    icon: 'cpu',
    category: 'development',
  },
  {
    id: 'agentic-dev-tooling',
    title: 'Agentic Workflows & Dev Tooling',
    description:
      'Autonomous agent workflows and internal developer tools — n8n and Redis event pipelines, model evaluation harnesses, and coding-agent integrations with Claude Code and Cursor.',
    icon: 'code',
    category: 'development',
  },
  {
    id: 'system-design',
    title: 'System Design & Architecture',
    description:
      'End-to-end architecture for services that scale — microservices, async event flows, auth, search, and load balancing, containerised and shipped through CI/CD.',
    icon: 'cloud',
    category: 'development',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    description:
      'Translating ambiguous requirements into clear technical specifications, architecture decisions, and delivery roadmaps.',
    icon: 'lightbulb',
    category: 'development',
  },
]
