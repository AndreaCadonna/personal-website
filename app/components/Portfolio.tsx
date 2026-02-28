'use client';

import React from 'react';

/**
 * Portfolio Component
 *
 * Basic digital resume/portfolio landing page
 * This is a placeholder that will be enhanced with real resume data later
 */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 text-6xl">👨‍💻</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Building innovative solutions & solving complex problems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@example.com"
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
              I'm a passionate software engineer with expertise in building modern web applications
              and solving complex technical challenges. I love creating elegant solutions that make
              a real impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me playing chess - a hobby that has taught me
              strategic thinking, pattern recognition, and the importance of planning ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Databases', 'AWS'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'CI/CD', 'Linux', 'VS Code', 'Agile'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem Solving',
                  'Team Collaboration',
                  'Communication',
                  'Strategic Thinking',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
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
            {/* Experience Item 1 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-slate-400">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Developed and maintained full-stack web applications</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Implemented new features that improved user engagement by 30%</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold">Junior Developer</h3>
                  <p className="text-slate-400">Previous Company</p>
                </div>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Built responsive web interfaces using modern frameworks</li>
                <li>Participated in code reviews and improved code quality</li>
                <li>Learned best practices in software development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Project Name 1</h3>
              <p className="text-slate-300 mb-4">
                A full-stack application that does something amazing and solves real problems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">MongoDB</span>
              </div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Project Name 2</h3>
              <p className="text-slate-300 mb-4">
                An innovative tool that streamlines workflows and increases productivity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-slate-700 rounded text-xs">PostgreSQL</span>
              </div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chess Integration Note */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl text-center border-2 border-slate-700">
            <div className="text-5xl mb-4">♟️</div>
            <h3 className="text-2xl font-semibold mb-3">Chess Enthusiast</h3>
            <p className="text-slate-300 leading-relaxed">
              Chess has been more than just a hobby - it's shaped the way I approach problem-solving
              in software engineering. The strategic thinking, pattern recognition, and planning
              skills from chess directly translate to writing better code and designing better
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-slate-400 border-t border-slate-800">
        <p className="mb-4">Thanks for solving the puzzle! 🎉</p>
        <p className="text-sm">
          Built with Next.js, React, TypeScript & Chess.js • Puzzles by Lichess
        </p>
      </footer>
    </div>
  );
}
