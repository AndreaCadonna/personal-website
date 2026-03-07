// ============================================================================
// Portfolio Dataset - Central Export
// ============================================================================
// Single entry point for all portfolio data. Import from here:
//
//   import { profile, skills, experience, projects } from "@/lib/data";
//   import { portfolioData } from "@/lib/data";
//   import type { PortfolioData, Project } from "@/lib/data";
//
// ============================================================================

// --- Types ---
export type {
  ContactInfo,
  Profile,
  Skill,
  SkillCategory,
  SkillGroup,
  SkillsData,
  EmploymentType,
  Achievement,
  ExperienceEntry,
  ProjectStatus,
  ProjectLink,
  Project,
  ProjectCategory,
  Education,
  Language,
  Interest,
  SoftSkill,
  PortfolioData,
} from "./types";

// --- Data ---
export { profile } from "./profile";
export {
  skills,
  allSkillNames,
  getSkillsByCategory,
  getSkillsByProficiency,
} from "./skills";
export {
  experience,
  getExperienceSorted,
  getCurrentPositions,
  getExperienceByType,
  getAllExperienceTechnologies,
} from "./experience";
export {
  projects,
  getProjectsSorted,
  getProjectsByStatus,
  getProjectsByCategory,
  getFeaturedProjects,
  getAllProjectTechnologies,
} from "./projects";
export {
  education,
  languages,
  interests,
  softSkills,
} from "./education";

// --- Aggregated Dataset ---
import { profile } from "./profile";
import { skills } from "./skills";
import { experience } from "./experience";
import { projects } from "./projects";
import { education, languages, interests, softSkills } from "./education";
import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  profile,
  skills,
  experience,
  projects,
  education,
  languages,
  interests,
  softSkills,
};

// --- Localized Data ---
import type { LocalizedPortfolioData } from './locales/types';
import { localizedData as localizedEn } from './locales/en';
import { localizedData as localizedIt } from './locales/it';
import { localizedData as localizedDe } from './locales/de';

export type { LocalizedPortfolioData } from './locales/types';

const localizedDataMap: Record<string, LocalizedPortfolioData> = {
  en: localizedEn,
  it: localizedIt,
  de: localizedDe,
};

export function getLocalizedData(locale: string): LocalizedPortfolioData {
  return localizedDataMap[locale] || localizedEn;
}
