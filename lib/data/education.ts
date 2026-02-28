import type { Education, Language, Interest, SoftSkill } from "./types";

export const education: Education[] = [
  {
    institution: "Università degli Studi di Trento",
    degree: "Bachelor of Science",
    field: "Information and Communications Engineering",
    startYear: 2016,
    endYear: 2021,
    thesis: "Device triangulation using embedded hardware",
    location: "Trento, Italy",
  },
];

export const languages: Language[] = [
  { name: "Italian", level: "Native proficiency", code: "it" },
  { name: "English", level: "Advanced (C1)", code: "en" },
];

export const interests: Interest[] = [
  {
    area: "AI-Augmented Development",
    description:
      "Actively tracking evolution of agentic coding tools, patterns, and best practices",
  },
  {
    area: "Engineering Evolution",
    description:
      "Adapting to industry shifts from implementation-focused to architecture and orchestration-focused engineering roles",
  },
  {
    area: "AI Coding Tools",
    description:
      "Continuous learning of GitHub Copilot IDE/CLI, Claude Code, and emerging development assistants",
  },
  {
    area: "Development Workflows",
    description:
      "Studying and practicing prompt engineering, context optimization, and AI output validation techniques",
  },
  {
    area: "Industry Trends",
    description:
      "Following the evolving role of software engineers in AI-augmented development environments",
  },
  {
    area: "Responsible AI Usage",
    description:
      "Understanding capabilities, limitations, and ethical considerations of AI development tools",
  },
  {
    area: "Chess",
    description:
      "Passionate chess player applying analytical thinking to both game improvement and software engineering",
  },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Leadership",
    description:
      "Experience leading technical teams and mentoring developers",
  },
  {
    name: "Communication",
    description:
      "Strong client-facing skills and stakeholder management",
  },
  {
    name: "Problem Solving",
    description:
      "Proactive approach to identifying and resolving technical challenges",
  },
  {
    name: "Adaptability",
    description:
      "Successfully worked in various environments from startups to established companies",
  },
  {
    name: "Business Acumen",
    description:
      "Experience in startup environments, project estimation, cost analysis, and AI integration strategy",
  },
];
