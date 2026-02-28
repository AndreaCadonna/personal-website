import type { Skill, SkillGroup, SkillsData } from "./types";

export const skills: SkillsData = {
  frontend: {
    label: "Frontend Technologies",
    description:
      "Frameworks, languages, and tools for building modern user interfaces",
    skills: [
      { name: "Angular 2+", category: "frontend-framework", proficiency: "expert" },
      { name: "React", category: "frontend-framework", proficiency: "expert" },
      { name: "Next.js", category: "frontend-framework", proficiency: "advanced" },
      { name: "Astro", category: "frontend-framework", proficiency: "advanced" },
      { name: "TypeScript", category: "frontend-language", proficiency: "expert" },
      { name: "JavaScript (ES6+)", category: "frontend-language", proficiency: "expert" },
      { name: "HTML5", category: "frontend-language", proficiency: "expert" },
      { name: "CSS3", category: "frontend-styling", proficiency: "expert" },
      { name: "SASS", category: "frontend-styling", proficiency: "advanced" },
      { name: "Tailwind CSS", category: "frontend-styling", proficiency: "advanced" },
    ],
  },

  backend: {
    label: "Backend Technologies",
    description: "Server-side languages, frameworks, and API design",
    skills: [
      { name: "Node.js", category: "backend-language", proficiency: "advanced" },
      { name: "Java", category: "backend-language", proficiency: "advanced" },
      { name: "Python", category: "backend-language", proficiency: "advanced" },
      { name: "Go", category: "backend-language", proficiency: "intermediate" },
      { name: "Spring Framework", category: "backend-framework", proficiency: "advanced" },
      { name: "Express.js", category: "backend-framework", proficiency: "advanced" },
      { name: "Gin (Go)", category: "backend-framework", proficiency: "intermediate" },
    ],
  },

  databaseAndCloud: {
    label: "Database & Cloud",
    description: "Data storage, cloud platforms, and infrastructure",
    skills: [
      { name: "MySQL", category: "database", proficiency: "advanced" },
      { name: "PostgreSQL", category: "database", proficiency: "advanced" },
      { name: "Firebase Realtime Database", category: "database", proficiency: "expert" },
      { name: "Supabase", category: "database", proficiency: "advanced" },
      { name: "Redis", category: "database", proficiency: "intermediate" },
      { name: "Firebase", category: "cloud", proficiency: "expert" },
      { name: "Google Cloud Platform", category: "cloud", proficiency: "intermediate" },
      { name: "Vercel", category: "cloud", proficiency: "advanced" },
    ],
  },

  aiAndAutomation: {
    label: "AI & Automation",
    description:
      "AI frameworks, LLM integration, and automation systems",
    skills: [
      { name: "RAG Systems", category: "ai-framework", proficiency: "advanced" },
      { name: "AI Agent Frameworks", category: "ai-framework", proficiency: "advanced" },
      { name: "MCP Servers", category: "ai-framework", proficiency: "advanced" },
      { name: "LLM API Integration (OpenAI, Anthropic)", category: "ai-integration", proficiency: "advanced" },
      { name: "Prompt Engineering", category: "ai-integration", proficiency: "expert" },
      { name: "Vector Databases", category: "ai-integration", proficiency: "advanced" },
      { name: "Embedding Models", category: "ai-integration", proficiency: "advanced" },
      { name: "Workflow Orchestration", category: "ai-integration", proficiency: "advanced" },
      { name: "GitHub Copilot", category: "ai-tool", proficiency: "expert" },
      { name: "Claude Code", category: "ai-tool", proficiency: "expert" },
    ],
  },

  devopsAndPractices: {
    label: "Development Tools & Practices",
    description: "Version control, CI/CD, methodologies, and project management",
    skills: [
      { name: "Git", category: "devops", proficiency: "expert" },
      { name: "GitHub", category: "devops", proficiency: "expert" },
      { name: "GitLab", category: "devops", proficiency: "advanced" },
      { name: "Docker", category: "devops", proficiency: "advanced" },
      { name: "CI/CD Pipelines", category: "devops", proficiency: "advanced" },
      { name: "Scrum/Agile", category: "methodology", proficiency: "advanced" },
      { name: "Sprint Planning", category: "methodology", proficiency: "advanced" },
      { name: "Code Reviews", category: "methodology", proficiency: "expert" },
      { name: "Jira", category: "project-management", proficiency: "advanced" },
    ],
  },

  aiAugmentedDev: {
    label: "AI-Augmented Development",
    description:
      "Practices and tools for AI-powered software development workflows",
    skills: [
      { name: "AI Pair Programming", category: "ai-tool", proficiency: "expert" },
      { name: "Agentic Coding Patterns", category: "ai-tool", proficiency: "advanced" },
      { name: "Context Engineering", category: "ai-integration", proficiency: "advanced" },
      { name: "AI-Assisted Code Review", category: "ai-tool", proficiency: "advanced" },
      { name: "Planning-First Workflows", category: "methodology", proficiency: "expert" },
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
