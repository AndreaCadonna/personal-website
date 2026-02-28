// ============================================================================
// Portfolio Dataset - Type Definitions
// ============================================================================
// Central type definitions for the structured portfolio dataset.
// All data files in lib/data/ conform to these types.
// ============================================================================

// --- Profile & Contact ---

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  shortBio: string;
}

// --- Skills ---

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export type SkillCategory =
  | "frontend-framework"
  | "frontend-language"
  | "frontend-styling"
  | "backend-language"
  | "backend-framework"
  | "database"
  | "cloud"
  | "ai-framework"
  | "ai-integration"
  | "ai-tool"
  | "devops"
  | "methodology"
  | "project-management";

export interface SkillGroup {
  label: string;
  description: string;
  skills: Skill[];
}

export interface SkillsData {
  frontend: SkillGroup;
  backend: SkillGroup;
  databaseAndCloud: SkillGroup;
  aiAndAutomation: SkillGroup;
  devopsAndPractices: SkillGroup;
  aiAugmentedDev: SkillGroup;
}

// --- Experience ---

export type EmploymentType = "full-time" | "freelance" | "internship" | "contract";

export interface Achievement {
  description: string;
  metric?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyContext?: string;
  role: string;
  employmentType: EmploymentType;
  location: string;
  remote: boolean;
  startDate: string; // YYYY-MM format
  endDate: string | "present";
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: Achievement[];
}

// --- Projects ---

export type ProjectStatus =
  | "production"
  | "in-progress"
  | "completed"
  | "open-source"
  | "archived";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "demo" | "docs";
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  completionPercent?: number;
  startDate: string;
  endDate?: string | "present";
  technologies: string[];
  highlights: string[];
  links: ProjectLink[];
  categories: ProjectCategory[];
}

export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "ai"
  | "devops"
  | "library"
  | "mcp"
  | "chess"
  | "web"
  | "iot";

// --- Education ---

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  thesis?: string;
  location: string;
}

export interface Language {
  name: string;
  level: string;
  code: string; // ISO 639-1
}

// --- Interests & Soft Skills ---

export interface Interest {
  area: string;
  description: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}

// --- Full Portfolio Dataset ---

export interface PortfolioData {
  profile: Profile;
  skills: SkillsData;
  experience: ExperienceEntry[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  interests: Interest[];
  softSkills: SoftSkill[];
}
