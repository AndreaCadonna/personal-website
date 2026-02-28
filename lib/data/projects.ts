import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "casa-negrano",
    name: "Casa Negrano",
    tagline: "Holiday apartments website with real-time booking",
    description:
      "Modern holiday rental website for three apartment types in Trento, Italy, featuring comprehensive booking management through Lodgify API integration and guest experience optimization.",
    status: "production",
    startDate: "2024-06",
    endDate: "present",
    technologies: [
      "Astro 4.0",
      "React",
      "Tailwind CSS",
      "Alpine.js",
      "shadcn/ui",
      "Lodgify API",
      "Node.js",
      "Vercel",
      "Google Analytics",
    ],
    highlights: [
      "Launched production website serving real holiday rental business with automated booking capabilities",
      "Implemented real-time availability checking through Lodgify API integration",
      "Built mobile-first responsive design with interactive image galleries and calendar-based booking forms",
      "Developed scalable multi-property architecture supporting three apartment types (Bilocale, Trilocale, Suite Deluxe)",
      "Achieved optimal performance scores through modern web technologies and deployment optimization",
      "Reduced manual booking management through real-time availability integration",
    ],
    links: [],
    categories: ["full-stack", "web"],
  },
  {
    id: "chess-analyzer",
    name: "Chess Analyzer",
    tagline: "Full-stack chess analysis platform with Stockfish integration",
    description:
      "Comprehensive full-stack chess analysis platform integrating Chess.com API with Stockfish engine for real-time game analysis and player improvement insights. Features interactive chess board, move classification, opening repertoire analysis, and tactical pattern recognition.",
    status: "in-progress",
    completionPercent: 85,
    startDate: "2025-01",
    technologies: [
      "Node.js 18",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "React 18",
      "react-chessboard",
      "Recharts",
      "Stockfish (UCI)",
      "Docker",
      "Redis",
      "Bull Queue",
      "Server-Sent Events",
    ],
    highlights: [
      "Built scalable platform with real-time Stockfish engine integration (not mock data) for position evaluation",
      "Implemented Server-Sent Events architecture for live analysis updates with background job processing",
      "Created Chess.com API integration with bulk import capabilities and progress tracking",
      "Built professional chess board component with keyboard navigation, move visualization, and analysis arrows",
      "Developed advanced analytics engine categorizing moves (blunders, mistakes, inaccuracies) with improvement recommendations",
      "Implemented Docker multi-stage builds with development hot-reload, production optimization, and health checks",
      "Built robust UCI protocol communication handling complex position analysis and move evaluation pipelines",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/chess-analyzer",
        type: "github",
      },
    ],
    categories: ["full-stack", "chess"],
  },
  {
    id: "resumake-mcp",
    name: "Resumake MCP Server",
    tagline: "MCP server for generating LaTeX resumes via Claude Desktop",
    description:
      "Model Context Protocol server for generating professional LaTeX resumes through Claude Desktop using natural language and resumake.io templates. JavaScript implementation enabling AI-driven document generation.",
    status: "open-source",
    startDate: "2025-05",
    endDate: "2025-06",
    technologies: [
      "JavaScript",
      "Node.js",
      "MCP (Model Context Protocol)",
      "LaTeX",
      "PDF Generation",
      "Claude AI API",
    ],
    highlights: [
      "Built production-ready MCP server with 15 GitHub stars and 10 forks",
      "Enabled natural language resume generation through Claude Desktop integration",
      "Implemented flexible LaTeX template system supporting various document formats",
      "Developed robust error handling and validation for LaTeX compilation processes",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/resumake-mcp",
        type: "github",
      },
    ],
    categories: ["mcp", "ai"],
  },
  {
    id: "cover-letter-mcp",
    name: "Cover Letter MCP Server",
    tagline: "MCP server for generating PDF cover letters with LaTeX",
    description:
      "Model Context Protocol server that generates professional PDF cover letters using LaTeX. Python implementation providing identical document automation capabilities as the JavaScript counterpart.",
    status: "open-source",
    startDate: "2025-05",
    endDate: "2025-06",
    technologies: [
      "Python",
      "MCP (Model Context Protocol)",
      "LaTeX",
      "PDF Generation",
      "Claude AI API",
    ],
    highlights: [
      "Delivered production-ready MCP server with feature parity to JavaScript version",
      "Created reusable LaTeX automation tools for document generation workflows",
      "Contributed to the Claude AI ecosystem with open-source tooling for document processing",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/cover-letter-mcp",
        type: "github",
      },
    ],
    categories: ["mcp", "ai"],
  },
  {
    id: "streaming-json-parser",
    name: "Streaming JSON Parser",
    tagline: "High-performance Python library for incremental JSON processing",
    description:
      "High-performance Python library for incremental JSON processing, designed to simulate LLM-style streaming outputs with real-time partial data access. Features O(1) streaming parser with incremental processing capabilities.",
    status: "open-source",
    startDate: "2025-01",
    technologies: ["Python 3.11", "pytest"],
    highlights: [
      "Achieved O(1) consume operations with O(ΔN) incremental parsing for optimal streaming performance",
      "Designed for LLM output simulation and real-time JSON processing scenarios",
      "Implemented intelligent partial view generation showing keys only after value types are determined",
      "Developed real-time string content streaming without requiring closing quotes for immediate feedback",
      "Created brace-balancing algorithm for detecting completion state in streaming contexts",
    ],
    links: [],
    categories: ["library", "ai"],
  },
  {
    id: "web-crawler-dashboard",
    name: "Web Crawler Dashboard",
    tagline: "Full-stack web crawling application with analytics dashboard",
    description:
      "Production-ready full-stack web application for website crawling and analytics, featuring comprehensive dashboard interface with real-time data processing. Built with React 18 + TypeScript frontend and Go 1.22 + Gin backend.",
    status: "completed",
    startDate: "2025-01",
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vitest",
      "Go 1.22",
      "Gin Framework",
      "GORM",
      "MySQL 8.0",
      "Docker",
      "Docker Compose",
      "nginx",
    ],
    highlights: [
      "Developed scalable multi-environment Docker infrastructure supporting development, testing, and production workflows",
      "Implemented efficient crawling algorithms with real-time status tracking and bulk data processing",
      "Established automated testing pipeline with hot reloading development environment",
      "Created security-hardened production builds with minimal attack surface",
      "Built detailed dashboard with data visualization, sorting, filtering, and pagination",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/sykell-fullstack-challenge",
        type: "github",
      },
    ],
    categories: ["full-stack", "devops", "web"],
  },
  {
    id: "keypi-net",
    name: "Keypi.net",
    tagline: "Angular migration and performance improvements",
    description:
      "Contributed to a data-centric application platform by upgrading the codebase from Angular v7 to v13, resolving compatibility issues, updating dependencies, and improving application performance.",
    status: "completed",
    startDate: "2022-01",
    technologies: ["Angular (v7 → v13)", "TypeScript"],
    highlights: [
      "Upgraded codebase from Angular v7 to v13",
      "Resolved compatibility issues and updated dependencies",
      "Improved application performance and maintainability",
    ],
    links: [],
    categories: ["frontend"],
  },
  {
    id: "personal-website",
    name: "Personal Website",
    tagline: "Portfolio website with interactive chess puzzle login",
    description:
      "Personal portfolio website built with Next.js 16 and React 19, featuring a brutalist design aesthetic and an interactive chess puzzle as a creative login mechanism. Integrates Lichess API for daily puzzles.",
    status: "in-progress",
    startDate: "2025-01",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "chess.js",
      "react-chessboard",
      "Lichess API",
    ],
    highlights: [
      "Built interactive chess puzzle login using Lichess API integration",
      "Implemented brutal minimalism design system with centralized design tokens",
      "Created modular 3-layer chess architecture separating logic, hooks, and UI",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/personal-website",
        type: "github",
      },
    ],
    categories: ["full-stack", "web", "chess"],
  },
  {
    id: "node-js-course",
    name: "Node.js Course",
    tagline: "Comprehensive Node.js study materials from beginner to advanced",
    description:
      "Comprehensive study course covering Node.js core modules from beginner to advanced levels. Educational resource for learning server-side JavaScript development.",
    status: "completed",
    startDate: "2021-01",
    technologies: ["JavaScript", "Node.js"],
    highlights: [
      "Created comprehensive study materials covering Node.js core modules",
      "Structured learning path from beginner to advanced concepts",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AndreaCadonna/node-js-course",
        type: "github",
      },
    ],
    categories: ["backend"],
  },
];

/** Get projects sorted by start date (most recent first) */
export function getProjectsSorted() {
  return [...projects].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

/** Get projects by status */
export function getProjectsByStatus(status: Project["status"]) {
  return projects.filter((p) => p.status === status);
}

/** Get projects by category */
export function getProjectsByCategory(category: string) {
  return projects.filter((p) =>
    p.categories.includes(category as Project["categories"][number])
  );
}

/** Get featured projects (production + in-progress + open-source with stars) */
export function getFeaturedProjects() {
  return projects.filter(
    (p) =>
      p.status === "production" ||
      p.status === "in-progress" ||
      (p.status === "open-source" && p.links.length > 0)
  );
}

/** Get all unique technologies used across projects */
export function getAllProjectTechnologies(): string[] {
  return [...new Set(projects.flatMap((p) => p.technologies))];
}
