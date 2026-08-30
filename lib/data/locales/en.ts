import { education, interests, languages, softSkills } from "../education";
import { experience } from "../experience";
import { profile } from "../profile";
import { projects } from "../projects";
import { skills } from "../skills";
import type { LocalizedPortfolioData } from "./types";

// English is the canonical portfolio dataset. Deriving this locale from the
// shared records prevents the default language from drifting out of sync.
export const localizedData: LocalizedPortfolioData = {
  profile: {
    title: profile.title,
    summary: profile.summary,
    shortBio: profile.shortBio,
    locationLabel: profile.contact.location,
  },
  experience: experience.map(
    ({ id, role, summary, responsibilities, achievements }) => ({
      id,
      role,
      summary,
      responsibilities,
      achievements,
    })
  ),
  skillGroups: Object.entries(skills).map(([key, { label, description }]) => ({
    key,
    label,
    description,
  })),
  projects: projects.map(({ id, tagline, description, highlights }) => ({
    id,
    tagline,
    description,
    highlights,
  })),
  education: education.map(({ degree, field, thesis }) => ({
    degree,
    field,
    thesis,
  })),
  languages: languages.map(({ code, name, level }) => ({ code, name, level })),
  interests: interests.map(({ area, description }) => ({ area, description })),
  softSkills: softSkills.map(({ name, description }) => ({ name, description })),
};
