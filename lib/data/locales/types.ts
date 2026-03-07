// ============================================================================
// Localized Portfolio Data - Type Definitions
// ============================================================================
// Type definitions for translatable portfolio content.
// Non-translatable fields (names, URLs, dates, tech lists, IDs, etc.)
// remain in the shared data files under lib/data/.
// ============================================================================

export interface LocalizedProfile {
  title: string;
  summary: string;
  shortBio: string;
  locationLabel: string;
}

export interface LocalizedExperience {
  id: string;
  role: string;
  summary: string;
  responsibilities: string[];
  achievements: { description: string; metric?: string }[];
}

export interface LocalizedSkillGroup {
  key: string;
  label: string;
  description: string;
}

export interface LocalizedProject {
  id: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface LocalizedEducation {
  degree: string;
  field: string;
  thesis?: string;
}

export interface LocalizedLanguage {
  code: string;
  name: string;
  level: string;
}

export interface LocalizedInterest {
  area: string;
  description: string;
}

export interface LocalizedSoftSkill {
  name: string;
  description: string;
}

export interface LocalizedPortfolioData {
  profile: LocalizedProfile;
  experience: LocalizedExperience[];
  skillGroups: LocalizedSkillGroup[];
  projects: LocalizedProject[];
  education: LocalizedEducation[];
  languages: LocalizedLanguage[];
  interests: LocalizedInterest[];
  softSkills: LocalizedSoftSkill[];
}
