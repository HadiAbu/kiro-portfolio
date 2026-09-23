import type { Service } from '@types'

export const services: Service[] = [
  {
    id: 'test-automation',
    title: 'Test Automation & QA Engineering',
    description:
      'Automated test frameworks, regression and integration suites, and object-oriented framework design — built in Python to keep complex systems honest across lab, cloud, and embedded platforms.',
    icon: 'code',
    category: 'development',
  },
  {
    id: 'cicd-lab-infra',
    title: 'CI/CD & Lab Infrastructure',
    description:
      'CI/CD pipelines and lab/staging environments — Jenkins, Docker, GitHub Actions, and AWS — that isolate, reproduce, and catch edge-case bugs before release.',
    icon: 'cloud',
    category: 'development',
  },
  {
    id: 'ai-test-tooling',
    title: 'AI-Assisted Test Tooling',
    description:
      'Kiro Spec-Driven Development alongside Claude Code and Cursor to iterate on test frameworks and debug edge cases faster, plus n8n/Redis pipelines for asynchronous event testing.',
    icon: 'cpu',
    category: 'development',
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    description:
      'Working directly with development teams to assess component testability, mitigate quality risks, and troubleshoot complex system behaviour before release.',
    icon: 'lightbulb',
    category: 'development',
  },
]
