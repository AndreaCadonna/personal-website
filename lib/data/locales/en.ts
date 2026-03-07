import type { LocalizedPortfolioData } from "./types";

export const localizedData: LocalizedPortfolioData = {
  profile: {
    title: "Software Engineer",
    summary:
      "Software Engineer with 5 years of experience in fullstack development, with the last 2 years focused on AI-augmented development workflows and agentic coding systems. Comfortable working with modern AI coding tools (GitHub Copilot, Claude Code) to support development, with growing familiarity in planning, coordinating tasks, and reviewing AI-generated outputs. More experienced with frameworks and patterns than raw language expertise, and continuously learning.",
    shortBio:
      "Software Engineer based in Trento, Italy. 5 years of experience in fullstack development and AI-augmented workflows. Focused on agentic coding practices, task planning, and building web applications with modern frameworks.",
    locationLabel: "Trento, Italy",
  },

  experience: [
    {
      id: "arcoda",
      role: "Software Engineer",
      summary:
        "Frontend engineer contributing to geospatial visualization libraries and 3D mapping integration, using AI coding tools to support daily development work.",
      responsibilities: [
        "Contributing to frontend libraries for georeferenced imagery visualization and integration",
        "Working on libraries enabling 3D model rendering and manipulation within map-based interfaces",
        "Implementing geospatial data visualization features for mapping applications",
        "Using AI coding tools (GitHub Copilot IDE/CLI, Claude Code) in daily development workflow",
        "Applying planning-first approach to development tasks: planning context, reviewing AI-generated code, and iterating on results",
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
      role: "Software Engineer",
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
      role: "Freelance Software Engineer",
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
      role: "Fullstack Software Developer",
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
      role: "Software Developer Intern",
      summary:
        "Research-focused internship developing an IoT tracking system for thesis project, designing a Raspberry Pi-based system for triangulating Wi-Fi device positions.",
      responsibilities: [
        "Designed and developed Raspberry Pi-based system for triangulating Wi-Fi device positions",
        "Developed web-based interface to visualize tracking data",
        "Contributed to software architecture and deployment process",
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
  ],

  skillGroups: [
    {
      key: "frontend",
      label: "Frontend Technologies",
      description:
        "Frameworks, languages, and tools for building user interfaces",
    },
    {
      key: "backend",
      label: "Backend Technologies",
      description: "Server-side languages, frameworks, and API design",
    },
    {
      key: "databaseAndCloud",
      label: "Database & Cloud",
      description: "Data storage, cloud platforms, and infrastructure",
    },
    {
      key: "aiAndAutomation",
      label: "AI & Automation",
      description:
        "AI frameworks, LLM integration, and automation systems",
    },
    {
      key: "devopsAndPractices",
      label: "Development Tools & Practices",
      description: "Version control, CI/CD, methodologies, and project management",
    },
    {
      key: "aiAugmentedDev",
      label: "AI-Augmented Development",
      description:
        "Practices and workflows for AI-assisted software development",
    },
  ],

  projects: [
    {
      id: "casa-negrano",
      tagline: "Holiday apartments website with real-time booking",
      description:
        "Modern holiday rental website for three apartment types in Trento, Italy, featuring comprehensive booking management through Lodgify API integration and guest experience optimization.",
      highlights: [
        "Launched production website serving real holiday rental business with automated booking capabilities",
        "Implemented real-time availability checking through Lodgify API integration",
        "Built mobile-first responsive design with interactive image galleries and calendar-based booking forms",
        "Developed scalable multi-property architecture supporting three apartment types (Bilocale, Trilocale, Suite Deluxe)",
        "Achieved optimal performance scores through modern web technologies and deployment optimization",
        "Reduced manual booking management through real-time availability integration",
      ],
    },
    {
      id: "chess-analyzer",
      tagline: "Full-stack chess analysis platform with Stockfish integration",
      description:
        "Comprehensive full-stack chess analysis platform integrating Chess.com API with Stockfish engine for real-time game analysis and player improvement insights. Features interactive chess board, move classification, opening repertoire analysis, and tactical pattern recognition.",
      highlights: [
        "Built scalable platform with real-time Stockfish engine integration (not mock data) for position evaluation",
        "Implemented Server-Sent Events architecture for live analysis updates with background job processing",
        "Created Chess.com API integration with bulk import capabilities and progress tracking",
        "Built professional chess board component with keyboard navigation, move visualization, and analysis arrows",
        "Developed advanced analytics engine categorizing moves (blunders, mistakes, inaccuracies) with improvement recommendations",
        "Implemented Docker multi-stage builds with development hot-reload, production optimization, and health checks",
        "Built robust UCI protocol communication handling complex position analysis and move evaluation pipelines",
      ],
    },
    {
      id: "resumake-mcp",
      tagline: "MCP server for generating LaTeX resumes via Claude Desktop",
      description:
        "Model Context Protocol server for generating professional LaTeX resumes through Claude Desktop using natural language and resumake.io templates. JavaScript implementation enabling AI-driven document generation.",
      highlights: [
        "Built production-ready MCP server with 15 GitHub stars and 10 forks",
        "Enabled natural language resume generation through Claude Desktop integration",
        "Implemented flexible LaTeX template system supporting various document formats",
        "Developed robust error handling and validation for LaTeX compilation processes",
      ],
    },
    {
      id: "cover-letter-mcp",
      tagline: "MCP server for generating PDF cover letters with LaTeX",
      description:
        "Model Context Protocol server that generates professional PDF cover letters using LaTeX. Python implementation providing identical document automation capabilities as the JavaScript counterpart.",
      highlights: [
        "Delivered production-ready MCP server with feature parity to JavaScript version",
        "Created reusable LaTeX automation tools for document generation workflows",
        "Contributed to the Claude AI ecosystem with open-source tooling for document processing",
      ],
    },
    {
      id: "streaming-json-parser",
      tagline: "High-performance Python library for incremental JSON processing",
      description:
        "High-performance Python library for incremental JSON processing, designed to simulate LLM-style streaming outputs with real-time partial data access. Features O(1) streaming parser with incremental processing capabilities.",
      highlights: [
        "Achieved O(1) consume operations with O(ΔN) incremental parsing for optimal streaming performance",
        "Designed for LLM output simulation and real-time JSON processing scenarios",
        "Implemented intelligent partial view generation showing keys only after value types are determined",
        "Developed real-time string content streaming without requiring closing quotes for immediate feedback",
        "Created brace-balancing algorithm for detecting completion state in streaming contexts",
      ],
    },
    {
      id: "web-crawler-dashboard",
      tagline: "Full-stack web crawling application with analytics dashboard",
      description:
        "Production-ready full-stack web application for website crawling and analytics, featuring comprehensive dashboard interface with real-time data processing. Built with React 18 + TypeScript frontend and Go 1.22 + Gin backend.",
      highlights: [
        "Developed scalable multi-environment Docker infrastructure supporting development, testing, and production workflows",
        "Implemented efficient crawling algorithms with real-time status tracking and bulk data processing",
        "Established automated testing pipeline with hot reloading development environment",
        "Created security-hardened production builds with minimal attack surface",
        "Built detailed dashboard with data visualization, sorting, filtering, and pagination",
      ],
    },
    {
      id: "personal-website",
      tagline: "Portfolio website with interactive chess puzzle login",
      description:
        "Personal portfolio website built with Next.js 16 and React 19, featuring a brutalist design aesthetic and an interactive chess puzzle as a creative login mechanism. Integrates Lichess API for daily puzzles.",
      highlights: [
        "Built interactive chess puzzle login using Lichess API integration",
        "Implemented brutal minimalism design system with centralized design tokens",
        "Created modular 3-layer chess architecture separating logic, hooks, and UI",
      ],
    },
    {
      id: "node-js-course",
      tagline: "Comprehensive Node.js study materials from beginner to advanced",
      description:
        "Comprehensive study course covering Node.js core modules from beginner to advanced levels. Educational resource for learning server-side JavaScript development.",
      highlights: [
        "Created comprehensive study materials covering Node.js core modules",
        "Structured learning path from beginner to advanced concepts",
      ],
    },
    {
      id: "certificate-authority-service",
      tagline: "Command-line X.509 certificate lifecycle management in Go",
      description:
        "A command-line Certificate Authority that manages X.509 digital certificates through their full lifecycle. Built in Go with zero external dependencies, leveraging only the standard library for all cryptographic operations.",
      highlights: [
        "Built complete CA lifecycle: initialization, CSR signing, revocation, CRL generation, and verification",
        "Implemented with zero external dependencies using only Go standard library cryptography",
        "Designed spec-driven development workflow with research notes, functional specs, and architecture decision records",
        "Applied validate-before-mutate patterns and atomic file operations for data integrity",
      ],
    },
    {
      id: "simple-append-only-event-store",
      tagline: "Event sourcing implementation in Go with bank account domain",
      description:
        "An educational implementation of event sourcing principles written in Go. Demonstrates how to build a system where state is reconstructed from immutable events rather than direct state updates, using a bank account scenario.",
      highlights: [
        "Implemented append-only event log with in-memory indexing for efficient stream lookups",
        "Built event replay mechanism to rebuild current state from immutable event history",
        "Demonstrated stream-per-aggregate architectural pattern with clear command/event separation",
        "Zero external dependencies, built entirely with Go standard library",
      ],
    },
    {
      id: "rate-limiter",
      tagline: "Token bucket rate limiting experiment in Python",
      description:
        "A software experiment demonstrating token bucket rate limiting with independent, configurable per-user quota tracking. Proves that per-user rate limiting using lazy refill works correctly without background threads.",
      highlights: [
        "Implemented token bucket algorithm with lazy on-demand refill, no background threads needed",
        "Achieved per-user isolation where one user's quota exhaustion has zero impact on others",
        "Validated all 5 behavioral scenarios from formal specification with automated testing",
        "Zero external dependencies, built entirely with Python standard library",
      ],
    },
    {
      id: "serverless-function-runtime",
      tagline: "Local serverless runtime mapping files to HTTP endpoints",
      description:
        "A local, single-process Node.js runtime that automatically discovers function files in an api/ directory and exposes them as HTTP endpoints. Handles request routing and dispatching based on HTTP methods while maintaining Web-standard APIs.",
      highlights: [
        "Built file-based route discovery mapping api/ directory files to HTTP endpoints automatically",
        "Implemented method-based dispatch routing requests via handler exports named after HTTP verbs",
        "Used Web-standard Request/Response contracts with fixed invocation timeout (3000ms)",
        "Includes end-to-end validation test suite",
      ],
    },
    {
      id: "secret-management-vault",
      tagline: "Two-layer envelope encryption credential store in Python",
      description:
        "A local Python tool implementing two-layer envelope encryption for credential storage. Each secret gets its own Data Encryption Key (AES-256-GCM), with all keys protected by a Root Key derived from a master password using PBKDF2.",
      highlights: [
        "Implemented envelope encryption with unique Data Encryption Keys per secret and PBKDF2 key derivation (600,000 iterations)",
        "Built path-based access control with glob wildcards and identity-driven policy system",
        "Designed seal/unseal lifecycle keeping Root Key in memory only when active",
        "Includes append-only audit log, secret versioning, and 11 CLI subcommands",
      ],
    },
    {
      id: "property-rental-website-template",
      tagline: "Configurable Astro template for vacation rental properties",
      description:
        "A customizable website template for vacation rental properties, built with Astro and React. Features configuration-driven setup through YAML/TypeScript files, five built-in theme presets, and static site generation for optimal performance.",
      highlights: [
        "Built configuration-driven architecture customizable through YAML/TypeScript config files without coding",
        "Created five built-in theme presets: luxury, modern, rustic, coastal, and minimal",
        "Implemented SEO optimization with Open Graph, meta tags, sitemap, and structured data",
        "Designed mobile-first responsive layouts with WebP image support and lazy loading",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science",
      field: "Information and Communications Engineering",
      thesis: "Device triangulation using embedded hardware",
    },
  ],

  languages: [
    { code: "it", name: "Italian", level: "Native proficiency" },
    { code: "en", name: "English", level: "Advanced (C1)" },
  ],

  interests: [
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
  ],

  softSkills: [
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
  ],
};
