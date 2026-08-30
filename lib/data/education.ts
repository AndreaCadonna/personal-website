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
    area: "AI-Augmented Engineering",
    description:
      "Following the evolution of agentic coding tools, patterns, and best practices and how they reshape software engineering work",
  },
  {
    area: "Engineering Evolution",
    description:
      "Exploring the shift from implementation-focused work toward architecture, orchestration, review, and team enablement",
  },
  {
    area: "Development Workflows",
    description:
      "Practicing context engineering, planning, systematic output validation, testing, and responsible use of AI development tools",
  },
  {
    area: "Chess",
    description:
      "Enthusiastic chess player who enjoys the analytical and strategic aspects of the game",
  },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Leadership",
    description:
      "Leading technical initiatives, mentoring developers, and helping teams adopt effective engineering practices",
  },
  {
    name: "Communication",
    description:
      "Working confidently with clients, stakeholders, engineering teams, and colleagues across departments",
  },
  {
    name: "Problem Solving",
    description:
      "Proactively identifying technical and workflow problems, evaluating tradeoffs, and delivering maintainable solutions",
  },
  {
    name: "Adaptability",
    description:
      "Adjusted to different work environments and development paradigms, from traditional coding to AI-assisted workflows",
  },
];
