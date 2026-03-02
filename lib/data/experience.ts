import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "arcoda",
    company: "Arcoda",
    role: "Software Engineer",
    employmentType: "full-time",
    location: "Trento, Italy",
    remote: true,
    startDate: "2025-12",
    endDate: "present",
    summary:
      "Frontend engineer contributing to geospatial visualization libraries and 3D mapping integration, using AI coding tools to support daily development work.",
    responsibilities: [
      "Contributing to frontend libraries for georeferenced imagery visualization and integration",
      "Working on libraries enabling 3D model rendering and manipulation within map-based interfaces",
      "Implementing geospatial data visualization features for mapping applications",
      "Using AI coding tools (GitHub Copilot IDE/CLI, Claude Code) in daily development workflow",
      "Applying planning-first approach to development tasks: planning context, reviewing AI-generated code, and iterating on results",
    ],
    technologies: [
      "TypeScript",
      "Geospatial Libraries",
      "3D Rendering",
      "GitHub Copilot",
      "Claude Code",
    ],
    achievements: [
      {
        description:
          "Adopted AI coding tools for geospatial library development in production environment",
      },
    ],
  },
  {
    id: "neg-digital",
    company: "NEG Digital",
    companyContext:
      "B2B startup specializing in social media marketing and content creation services (posts, blogs, videos, photos)",
    role: "Software Engineer",
    employmentType: "full-time",
    location: "Trento, Italy",
    remote: true,
    startDate: "2023-05",
    endDate: "2025-05",
    summary:
      "Developer working across the software development lifecycle in a small startup, building web applications and AI-powered automation tools for content creation services.",
    responsibilities: [
      "Built web applications using Angular for internal products and React/Next.js/Astro for client-facing sites",
      "Developed AI agent systems for automated content creation workflows",
      "Built and deployed RAG systems for information retrieval and content generation",
      "Implemented MCP servers for AI model communication and orchestration",
      "Integrated AI APIs (OpenAI, Anthropic) with prompt engineering for content automation",
      "Worked with vector databases and embedding models for semantic search features",
      "Participated in client calls and contributed to project scoping and timeline estimation",
      "Contributed to sprint planning and milestone definition with stakeholders",
      "Maintained CI/CD pipelines and multi-environment deployment workflows",
    ],
    technologies: [
      "Angular",
      "React",
      "Next.js",
      "Astro",
      "TypeScript",
      "Firebase",
      "Supabase",
      "Python",
      "Node.js",
      "RAG Systems",
      "AI Agent Frameworks",
      "MCP Servers",
      "Vector Databases",
      "LLM APIs",
      "GitHub Copilot",
      "CI/CD Pipelines",
    ],
    achievements: [
      {
        description:
          "Contributed to AI-powered automation that helped reduce manual content creation time",
        metric: "~40% reduction",
      },
      {
        description:
          "Built AI-driven tools supporting multiple client projects for content production",
      },
    ],
  },
  {
    id: "neg-group",
    company: "NEG Group",
    companyContext: "Construction industry - comprehensive business management platform",
    role: "Freelance Software Engineer",
    employmentType: "freelance",
    location: "Trento, Italy",
    remote: true,
    startDate: "2022-11",
    endDate: "2023-05",
    summary:
      "Maintained and expanded an existing business management platform for a construction company, working independently as the sole developer on the project.",
    responsibilities: [
      "Maintained and expanded business management platform used across company departments",
      "Had weekly meetings with CEO and staff to gather requirements and prioritize features",
      "Developed modules for client management, construction site tracking, and billing",
      "Restructured Firebase Realtime Database to improve search queries and load times",
      "Built workflow automation connecting CRM, project management, and billing modules",
      "Developed REST APIs for data synchronization across platform modules",
      "Maintained CI/CD pipelines for deployments",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Firebase",
      "REST APIs",
      "CI/CD Pipelines",
    ],
    achievements: [
      {
        description:
          "Improved platform automation reducing manual administrative work for the team",
      },
      {
        description:
          "Restructured database improving data retrieval performance",
      },
      {
        description:
          "Delivered features on schedule through direct collaboration with the company",
      },
    ],
  },
  {
    id: "tc-consulting",
    company: "TC Consulting",
    companyContext: "Software consulting firm serving both local and international clients",
    role: "Fullstack Software Developer",
    employmentType: "full-time",
    location: "Trento, Italy",
    remote: false,
    startDate: "2021-04",
    endDate: "2022-11",
    summary:
      "Fullstack developer working on the company's internal product and as an external consultant for a UK-based SaaS client (Commify) within a 10-developer team.",
    responsibilities: [
      "Developed and maintained company's internal web product (frontend and backend)",
      "Worked as part of a 10-developer team on a platform migration for a UK-based SaaS client (Commify)",
      "Contributed to migrating a legacy PHP codebase to Angular for an SMS messaging platform",
      "Helped with API migration from an acquired platform to the client's system",
      "Implemented lazy loading for Angular modules to reduce bundle size",
      "Contributed to API development using Java and Spring Framework",
      "Worked on UI improvements using Angular",
      "Participated in code reviews and Git-based branching workflows with the international team",
    ],
    technologies: [
      "Angular 2+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Java",
      "Spring Framework",
      "REST APIs",
      "MySQL",
      "Git",
      "Jira",
      "Scrum",
    ],
    achievements: [
      {
        description:
          "Contributed to platform migration for an SMS messaging service as part of a distributed team",
        metric: "6-month migration",
      },
      {
        description:
          "Helped improve frontend performance through Angular lazy loading and bundle optimization",
      },
    ],
  },
  {
    id: "unitn-internship",
    company: "Università degli Studi di Trento",
    role: "Software Developer Intern",
    employmentType: "internship",
    location: "Trento, Italy",
    remote: false,
    startDate: "2020-09",
    endDate: "2021-03",
    summary:
      "Research-focused internship developing an IoT tracking system for thesis project, designing a Raspberry Pi-based system for triangulating Wi-Fi device positions.",
    responsibilities: [
      "Designed and developed Raspberry Pi-based system for triangulating Wi-Fi device positions",
      "Developed web-based interface to visualize tracking data",
      "Contributed to software architecture and deployment process",
    ],
    technologies: [
      "Raspberry Pi",
      "Linux",
      "Python",
      "Web Technologies",
      "IoT",
      "Embedded Systems",
    ],
    achievements: [
      {
        description:
          "Successfully completed thesis project on device triangulation using embedded hardware",
      },
      {
        description:
          "Developed working prototype demonstrating practical application of theoretical concepts",
      },
    ],
  },
];

/** Get experience sorted by start date (most recent first) */
export function getExperienceSorted() {
  return [...experience].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

/** Get current positions */
export function getCurrentPositions() {
  return experience.filter((e) => e.endDate === "present");
}

/** Get experience by employment type */
export function getExperienceByType(type: ExperienceEntry["employmentType"]) {
  return experience.filter((e) => e.employmentType === type);
}

/** Get all unique technologies used across experience */
export function getAllExperienceTechnologies(): string[] {
  return [
    ...new Set(experience.flatMap((e) => e.technologies)),
  ];
}
