"use client";

import Link from "next/link";

export default function MinimalDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/70 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">Your Name</div>
          <nav className="flex gap-8 text-sm text-gray-600">
            <button className="hover:text-black transition-colors">Work</button>
            <button className="hover:text-black transition-colors">About</button>
            <button className="hover:text-black transition-colors">Contact</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-32 flex items-center gap-16">
          <div className="flex-1">
            <div className="inline-block text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full mb-6 shadow-sm">
              Available for opportunities
            </div>
            <h1 className="text-6xl font-semibold mb-6 leading-tight tracking-tight">
              Crafting elegant
              <br />
              digital solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Full-stack software engineer with a passion for creating
              beautiful, performant web applications. Chess enthusiast and
              problem solver.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg text-sm font-medium">
                View Projects
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm font-medium">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Elegant Chess Board */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-3xl opacity-30" />
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-8 gap-0 w-64 h-64 rounded-lg overflow-hidden border border-gray-200">
                  {[...Array(64)].map((_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isLight = (row + col) % 2 === 0;
                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-center text-3xl cursor-pointer transition-all hover:scale-110 ${
                          isLight
                            ? "bg-gray-50"
                            : "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                        }`}
                      >
                        {row === 0 && col === 4 && "♔"}
                        {row === 0 && col === 0 && "♖"}
                        {row === 0 && col === 7 && "♖"}
                        {row === 7 && col === 4 && "♚"}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center text-xs text-gray-500">
                  Interactive chess puzzles
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <div className="text-sm font-medium text-gray-500 mb-4">EXPERTISE</div>
          <h2 className="text-4xl font-semibold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "Frontend",
                icon: "⚡",
                skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
              },
              {
                title: "Backend",
                icon: "🔧",
                skills: ["Node.js", "PostgreSQL", "REST & GraphQL", "API Design"],
              },
              {
                title: "Tools",
                icon: "🛠",
                skills: ["Git & GitHub", "Docker", "AWS", "CI/CD Pipelines"],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gray-200"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32">
          <div className="text-sm font-medium text-gray-500 mb-4">CAREER</div>
          <h2 className="text-4xl font-semibold mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Software Engineer",
                company: "Tech Company Inc.",
                period: "2022 - Present",
                description:
                  "Leading development of scalable web applications, mentoring junior developers, and architecting cloud infrastructure solutions.",
                tags: ["React", "Node.js", "AWS"],
              },
              {
                role: "Full Stack Developer",
                company: "Startup XYZ",
                period: "2020 - 2022",
                description:
                  "Built and maintained multiple client applications using modern web technologies and agile methodologies.",
                tags: ["Next.js", "PostgreSQL", "Docker"],
              },
            ].map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{job.role}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                    {job.period}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chess Puzzle CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">♟</span>
                <h2 className="text-3xl font-semibold">Try a Chess Puzzle</h2>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Challenge yourself with interactive chess puzzles. Improve your
                tactical vision and strategic thinking.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-medium shadow-lg hover:shadow-xl">
                Start Solving →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-32">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 Your Name. All rights reserved.
            </div>
            <Link
              href="/design-preview"
              className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-300"
            >
              ← Back to comparison
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
