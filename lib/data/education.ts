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
    area: "Agentic Coding Tools",
    description:
      "Following the evolution of AI coding assistants like GitHub Copilot and Claude Code, and how they change daily development work",
  },
  {
    area: "Development Workflows",
    description:
      "Exploring how planning, context preparation, and review fit into AI-assisted development",
  },
  {
    area: "AI Coding Ecosystem",
    description:
      "Keeping up with MCP servers, AI agent frameworks, and new tools in the agentic coding space",
  },
  {
    area: "Chess",
    description:
      "Enthusiastic chess player who enjoys the analytical and strategic aspects of the game",
  },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Task Planning",
    description:
      "Breaking down work into manageable steps, defining priorities, and structuring development tasks before execution",
  },
  {
    name: "Multitasking",
    description:
      "Managing multiple parallel workstreams and switching between tasks effectively, especially in agentic coding workflows",
  },
  {
    name: "Delegation",
    description:
      "Distributing work across AI agents and tools, reviewing outputs, and coordinating parallel development efforts",
  },
  {
    name: "Communication",
    description:
      "Comfortable in client interactions, team discussions, and translating requirements into actionable tasks",
  },
  {
    name: "Adaptability",
    description:
      "Adjusted to different work environments and development paradigms, from traditional coding to AI-assisted workflows",
  },
];
