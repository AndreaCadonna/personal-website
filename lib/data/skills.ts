import type { Skill, SkillGroup, SkillsData } from "./types";

export const skills: SkillsData = {
  frontend: {
    label: "Frontend Technologies",
    description:
      "Frameworks, languages, and tools for building user interfaces",
    skills: [
      { name: "Angular 2+", category: "frontend-framework", proficiency: "advanced" },
      { name: "React", category: "frontend-framework", proficiency: "intermediate" },
      { name: "Next.js", category: "frontend-framework", proficiency: "intermediate" },
      { name: "Astro", category: "frontend-framework", proficiency: "intermediate" },
      { name: "TypeScript", category: "frontend-language", proficiency: "advanced" },
      { name: "JavaScript (ES6+)", category: "frontend-language", proficiency: "intermediate" },
      { name: "HTML5", category: "frontend-language", proficiency: "intermediate" },
      { name: "CSS3", category: "frontend-styling", proficiency: "intermediate" },
      { name: "SASS", category: "frontend-styling", proficiency: "intermediate" },
      { name: "Tailwind CSS", category: "frontend-styling", proficiency: "intermediate" },
      { name: "Google Maps", category: "frontend-framework", proficiency: "intermediate" },
      { name: "MapLibre", category: "frontend-framework", proficiency: "intermediate" },
      { name: "Leaflet", category: "frontend-framework", proficiency: "intermediate" },
      { name: "Babylon.js", category: "frontend-framework", proficiency: "intermediate" },
    ],
  },

  backend: {
    label: "Backend Technologies",
    description: "Server-side languages, frameworks, and API design",
    skills: [
      { name: "Node.js", category: "backend-language", proficiency: "intermediate" },
      { name: ".NET", category: "backend-framework", proficiency: "intermediate" },
      { name: "Java", category: "backend-language", proficiency: "intermediate" },
      { name: "Python", category: "backend-language", proficiency: "intermediate" },
      { name: "Go", category: "backend-language", proficiency: "beginner" },
      { name: "Spring Framework", category: "backend-framework", proficiency: "intermediate" },
      { name: "Express.js", category: "backend-framework", proficiency: "intermediate" },
      { name: "Gin (Go)", category: "backend-framework", proficiency: "beginner" },
    ],
  },

  databaseAndCloud: {
    label: "Database & Cloud",
    description: "Data storage, cloud platforms, and infrastructure",
    skills: [
      { name: "MySQL", category: "database", proficiency: "intermediate" },
      { name: "PostgreSQL", category: "database", proficiency: "intermediate" },
      { name: "SQL", category: "database", proficiency: "intermediate" },
      { name: "Firebase Realtime Database", category: "database", proficiency: "advanced" },
      { name: "Supabase", category: "database", proficiency: "intermediate" },
      { name: "Redis", category: "database", proficiency: "beginner" },
      { name: "Firebase", category: "cloud", proficiency: "advanced" },
      { name: "Google Cloud Platform", category: "cloud", proficiency: "beginner" },
      { name: "Vercel", category: "cloud", proficiency: "intermediate" },
    ],
  },

  aiAndAutomation: {
    label: "AI & Automation",
    description:
      "AI frameworks, LLM integration, and automation systems",
    skills: [
      { name: "RAG Systems", category: "ai-framework", proficiency: "intermediate" },
      { name: "AI Agent Frameworks", category: "ai-framework", proficiency: "intermediate" },
      { name: "MCP Servers", category: "ai-framework", proficiency: "intermediate" },
      { name: "LLM API Integration (OpenAI, Anthropic)", category: "ai-integration", proficiency: "advanced" },
      { name: "Prompt Engineering", category: "ai-integration", proficiency: "advanced" },
      { name: "Vector Databases", category: "ai-integration", proficiency: "intermediate" },
      { name: "Embedding Models", category: "ai-integration", proficiency: "intermediate" },
      { name: "Workflow Orchestration", category: "ai-integration", proficiency: "intermediate" },
      { name: "GitHub Copilot", category: "ai-tool", proficiency: "advanced" },
      { name: "Claude Code", category: "ai-tool", proficiency: "advanced" },
      { name: "Codex", category: "ai-tool", proficiency: "advanced" },
      { name: "LangChain", category: "ai-framework", proficiency: "intermediate" },
      { name: "LangSmith", category: "ai-tool", proficiency: "beginner" },
    ],
  },

  devopsAndPractices: {
    label: "Development Tools & Practices",
    description: "Version control, CI/CD, methodologies, and project management",
    skills: [
      { name: "Git", category: "devops", proficiency: "advanced" },
      { name: "GitHub", category: "devops", proficiency: "advanced" },
      { name: "GitLab", category: "devops", proficiency: "intermediate" },
      { name: "Docker", category: "devops", proficiency: "intermediate" },
      { name: "CI/CD Pipelines", category: "devops", proficiency: "intermediate" },
      { name: "Kubernetes CronJobs", category: "devops", proficiency: "beginner" },
      { name: "Scrum/Agile", category: "methodology", proficiency: "intermediate" },
      { name: "Sprint Planning", category: "methodology", proficiency: "intermediate" },
      { name: "Code Reviews", category: "methodology", proficiency: "intermediate" },
      { name: "Jira", category: "project-management", proficiency: "intermediate" },
    ],
  },

  aiAugmentedDev: {
    label: "AI-Augmented Development",
    description:
      "Practices and workflows for AI-assisted software development",
    skills: [
      { name: "AI Pair Programming", category: "ai-tool", proficiency: "advanced" },
      { name: "Agentic Coding Patterns", category: "ai-tool", proficiency: "advanced" },
      { name: "Context Engineering", category: "ai-integration", proficiency: "intermediate" },
      { name: "AI-Assisted Code Review", category: "ai-tool", proficiency: "intermediate" },
      { name: "Planning-First Workflows", category: "methodology", proficiency: "advanced" },
      { name: "Agent Orchestration", category: "ai-tool", proficiency: "advanced" },
      { name: "Output Validation", category: "methodology", proficiency: "advanced" },
    ],
  },
};

const allGroups: SkillGroup[] = Object.values(skills);
const allSkills: Skill[] = allGroups.flatMap((g) => g.skills);

/** Flat list of all unique skill names for quick lookups */
export const allSkillNames: string[] = [
  ...new Set(allSkills.map((s) => s.name)),
];

/** Get skills filtered by category */
export function getSkillsByCategory(category: string): Skill[] {
  return allSkills.filter((s) => s.category === category);
}

/** Get skills filtered by proficiency level */
export function getSkillsByProficiency(
  proficiency: "beginner" | "intermediate" | "advanced" | "expert"
): Skill[] {
  return allSkills.filter((s) => s.proficiency === proficiency);
}
