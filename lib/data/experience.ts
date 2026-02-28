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
      "Frontend engineer responsible for geospatial visualization libraries and 3D mapping integration, working in AI-augmented development environment utilizing latest agentic coding tools and practices.",
    responsibilities: [
      "Managing and developing frontend libraries for georeferenced imagery visualization and integration",
      "Working on libraries enabling 3D model rendering and manipulation within map-based interfaces",
      "Implementing geospatial data visualization solutions for complex mapping applications",
      "Adopted AI coding tools (GitHub Copilot IDE/CLI, Claude Code) in production environment, validating their effectiveness for complex library development",
      "Established systematic workflows for AI-assisted development: planning → context engineering → AI-generated implementation → review → refinement",
      "Managed multiple concurrent development tasks using AI orchestration, maintaining consistent code quality across parallel workstreams",
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
          "Validated AI coding tools for complex geospatial library development in production",
      },
      {
        description:
          "Established systematic AI-assisted development workflows for the team",
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
      "Lead developer responsible for the entire software development lifecycle and quality control, from architecture to deployment, while participating in strategic business decisions and client-facing activities.",
    responsibilities: [
      "Led planning and architecture of multiple platforms for internal use and client services",
      "Developed web applications using Angular for core products and React/Next.js/Astro for client-facing sites",
      "Developed AI agent frameworks for automated content creation workflows",
      "Developed and deployed RAG systems for enhanced information retrieval and content generation",
      "Implemented MCP servers for efficient AI model communication and orchestration",
      "Created AI-powered automation tools that streamlined marketing content production processes",
      "Integrated multiple AI APIs (OpenAI, Anthropic) with custom prompt engineering strategies",
      "Developed workflow orchestration systems for consistent AI outputs across different content types",
      "Implemented vector databases and embedding models for semantic search capabilities",
      "Developed performance monitoring and cost optimization strategies for AI API usage",
      "Participated in early-stage client calls, co-designed solutions, estimated project costs and timelines",
      "Managed sprint-based development, defined deliverables and milestones in collaboration with stakeholders",
      "Oversaw CI/CD pipelines, multi-environment deployment, and version control workflows",
      "Engaged in company strategy meetings, provided technical insights into service offerings and AI integration opportunities",
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
          "Successfully integrated AI-powered automation resulting in significant reduction in manual content creation time",
        metric: "40%+ reduction",
      },
      {
        description:
          "Introduced modular architecture patterns that improved development speed across multiple projects",
      },
      {
        description:
          "Developed scalable AI-driven platforms supporting multiple client projects with consistent quality outputs",
      },
      {
        description:
          "Developed cost-effective AI integration strategies that improved service margins while enhancing client deliverables",
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
      "Independently maintained and expanded an integrated business management platform for construction industry operations, integrating CRM, project management, billing, and workflow automation.",
    responsibilities: [
      "Independently maintained and expanded integrated business management platform serving all company departments",
      "Conducted weekly meetings with CEO and staff to define requirements, prioritize features, and translate business needs into technical specifications",
      "Developed integrated modules for client management, construction site tracking, material management, and automated billing processes",
      "Restructured Firebase Realtime Database JSON architecture, optimizing search queries and data load times",
      "Implemented end-to-end workflow automation connecting CRM, project management, and financial operations, eliminating paper-based processes",
      "Developed and optimized REST APIs supporting real-time data synchronization across integrated business modules",
      "Managed CI/CD pipelines ensuring consistent deployments and platform stability",
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
          "Enhanced platform automation capabilities reducing administrative overhead significantly, enabling a 4-person team to manage operations previously requiring 15+ staff",
        metric: "70% reduction in admin overhead",
      },
      {
        description:
          "Delivered database restructuring and workflow improvements resulting in faster data retrieval",
        metric: "50% faster data retrieval",
      },
      {
        description:
          "Maintained 100% on-time feature delivery through direct collaboration with executive team",
      },
      {
        description:
          "Managed independent development lifecycle with zero critical incidents during 7-month engagement",
        metric: "99%+ uptime",
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
      "Product developer and external consultant for international SaaS clients. Contributed to a major platform migration for a UK-based client (Commify) within a 10-developer team.",
    responsibilities: [
      "Developed and maintained company's first commercial web product (frontend and backend)",
      "Served as external consultant for UK-based SaaS client (Commify) within 10-developer team",
      "Contributed to 6-month platform migration from legacy PHP codebase to modern Angular architecture for SMS messaging platform serving thousands of customers",
      "Assisted in API migration from acquired company platform to client's proprietary system handling high-volume SMS transactions",
      "Implemented lazy loading for Angular modules, reducing initial bundle size and improving startup time",
      "Collaborated with cross-functional international teams to ensure seamless transition with zero downtime",
      "Contributed to API development using Java and Spring Framework for high-traffic messaging platform",
      "Enhanced UI/UX using Angular, focusing on performance optimization and modern development practices",
      "Participated in Git-based branching workflows and code review processes with international development team",
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
          "Contributed to zero-downtime migration of critical SMS messaging infrastructure serving thousands of active customers",
        metric: "6-month migration timeline",
      },
      {
        description:
          "Delivered frontend performance improvements through Angular architecture enhancements",
        metric: "30-40% bundle size reduction, 2-3s faster startup",
      },
      {
        description:
          "Effectively collaborated in international consulting environment with distributed 10-developer team across multiple time zones",
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
