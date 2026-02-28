'use client';

import React from 'react';
import {
  profile,
  skills,
  education,
  languages,
  interests,
  softSkills,
  getExperienceSorted,
  getFeaturedProjects,
} from '@/lib/data';
import type { SkillGroup } from '@/lib/data';

function formatDate(dateStr: string): string {
  if (dateStr === 'present') return 'Present';
  const [year, month] = dateStr.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

const BORDER_COLORS = [
  'border-blue-500',
  'border-green-500',
  'border-purple-500',
  'border-yellow-500',
  'border-pink-500',
];

const SKILL_GROUP_COLORS: Record<string, string> = {
  frontend: 'text-blue-400',
  backend: 'text-green-400',
  databaseAndCloud: 'text-purple-400',
  aiAndAutomation: 'text-yellow-400',
  devopsAndPractices: 'text-orange-400',
  aiAugmentedDev: 'text-pink-400',
};

export default function Portfolio() {
  const sortedExperience = getExperienceSorted();
  const featuredProjects = getFeaturedProjects();
  const edu = education[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            {profile.fullName}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-2">
            {profile.title}
          </p>
          <p className="text-lg text-slate-400 mb-8">
            {profile.contact.location}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {languages.map((lang) => (
                <span key={lang.code} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                  {lang.name} &mdash; {lang.level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.entries(skills) as [string, SkillGroup][]).map(([key, group]) => (
              <div key={key} className="bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className={`text-xl font-semibold mb-2 ${SKILL_GROUP_COLORS[key] || 'text-slate-200'}`}>
                  {group.label}
                </h3>
                <p className="text-xs text-slate-500 mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Soft Skills */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Soft Skills</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex gap-2">
                    <span className="text-amber-400 shrink-0">&bull;</span>
                    <div>
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm"> &mdash; {skill.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {sortedExperience.map((exp, i) => (
              <div
                key={exp.id}
                className={`bg-slate-800 rounded-xl p-6 shadow-xl border-l-4 ${BORDER_COLORS[i % BORDER_COLORS.length]}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-slate-400">
                      {exp.company}
                      {exp.remote && <span className="text-xs ml-2 text-slate-500">(Remote)</span>}
                    </p>
                  </div>
                  <span className="text-slate-400 text-sm mt-1 md:mt-0">
                    {formatDate(exp.startDate)} &mdash; {formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-3">{exp.summary}</p>
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                    {exp.achievements.map((a, j) => (
                      <li key={j}>
                        {a.description}
                        {a.metric && <span className="text-green-400 ml-1">({a.metric})</span>}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-l-4 border-cyan-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                <p className="text-slate-400">{edu.institution}</p>
              </div>
              <span className="text-slate-400 text-sm mt-1 md:mt-0">
                {edu.startYear} &mdash; {edu.endYear}
              </span>
            </div>
            {edu.thesis && (
              <p className="text-sm text-slate-300">
                <span className="text-slate-500">Thesis:</span> {edu.thesis}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.status === 'production' ? 'bg-green-900 text-green-300' :
                    project.status === 'in-progress' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-blue-900 text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{project.tagline}</p>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
                {project.links.length > 0 && (
                  <div className="flex gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Interests</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest.area}
                className="bg-slate-800 rounded-xl p-5 shadow-xl"
              >
                <h3 className="font-semibold mb-2 text-slate-200">{interest.area}</h3>
                <p className="text-sm text-slate-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chess Integration Note */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl text-center border-2 border-slate-700">
            <div className="text-5xl mb-4">&#9823;</div>
            <h3 className="text-2xl font-semibold mb-3">Chess Enthusiast</h3>
            <p className="text-slate-300 leading-relaxed">
              Chess has been more than just a hobby &mdash; it&apos;s shaped the way I approach problem-solving
              in software engineering. The strategic thinking, pattern recognition, and planning
              skills from chess directly translate to writing better code and designing better
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-slate-400 border-t border-slate-800">
        <p className="mb-4">Thanks for solving the puzzle!</p>
        <p className="text-sm">
          Built with Next.js, React, TypeScript &amp; Chess.js &bull; Puzzles by Lichess
        </p>
      </footer>
    </div>
  );
}
