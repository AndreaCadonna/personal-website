"use client";

import Link from "next/link";

export default function BrutalDesign() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto p-8 flex justify-between items-center">
          <div className="text-2xl font-bold">YOUR.NAME</div>
          <nav className="flex gap-6 font-mono text-sm">
            <button className="hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">
              WORK
            </button>
            <button className="hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">
              ABOUT
            </button>
            <button className="hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">
              CONTACT
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Hero Section with Chess */}
        <section className="border-4 border-black p-12 mb-8 bg-white relative overflow-hidden">
          {/* Chess Board Pattern Background */}
          <div className="absolute right-0 top-0 opacity-10">
            <div className="grid grid-cols-4 gap-0">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 ${
                    (Math.floor(i / 4) + i) % 2 === 0 ? "bg-black" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-block border-4 border-black bg-[#769656] px-4 py-2 mb-6">
              <span className="font-mono text-sm font-bold">
                SOFTWARE ENGINEER
              </span>
            </div>
            <h1 className="text-7xl font-bold mb-4 leading-none">
              BUILDING
              <br />
              DIGITAL
              <br />
              EXPERIENCES
            </h1>
            <p className="text-xl max-w-2xl border-l-4 border-black pl-4">
              Full-stack developer specializing in modern web applications.
              Passionate about chess, clean code, and solving complex problems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <div className="border-4 border-black bg-black text-white p-6 mb-4">
            <h2 className="text-3xl font-bold">TECHNICAL SKILLS</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { cat: "FRONTEND", skills: ["React", "Next.js", "TypeScript", "Tailwind"] },
              { cat: "BACKEND", skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"] },
              { cat: "TOOLS", skills: ["Git", "Docker", "AWS", "CI/CD"] },
            ].map((group) => (
              <div key={group.cat} className="border-4 border-black p-6">
                <h3 className="font-bold text-lg mb-4 border-b-4 border-black pb-2">
                  {group.cat}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#769656] border-2 border-black" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <div className="border-4 border-black bg-black text-white p-6 mb-4">
            <h2 className="text-3xl font-bold">EXPERIENCE</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "SENIOR DEVELOPER",
                company: "Tech Company Inc.",
                period: "2022 - PRESENT",
                desc: "Leading development of scalable web applications",
              },
              {
                title: "FULL STACK DEVELOPER",
                company: "Startup XYZ",
                period: "2020 - 2022",
                desc: "Built and maintained multiple client projects",
              },
            ].map((job, i) => (
              <div key={i} className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="font-mono text-sm mt-1">{job.company}</p>
                  </div>
                  <div className="border-2 border-current px-4 py-2 font-mono text-sm">
                    {job.period}
                  </div>
                </div>
                <p className="border-l-4 border-current pl-4">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chess Puzzle Integration */}
        <section className="border-4 border-black bg-[#EEEED2] p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">♟</div>
            <div>
              <h2 className="text-2xl font-bold">CHESS PUZZLES</h2>
              <p className="text-sm">Solve tactical problems • Train your mind</p>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-0 w-full max-w-md border-4 border-black">
            {[...Array(64)].map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isLight = (row + col) % 2 === 0;
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-2xl cursor-pointer hover:opacity-70 ${
                    isLight ? "bg-[#EEEED2]" : "bg-[#769656]"
                  }`}
                >
                  {row === 0 && col === 4 && "♔"}
                  {row === 0 && col === 0 && "♖"}
                  {row === 7 && col === 4 && "♚"}
                </div>
              );
            })}
          </div>
          <button className="mt-6 border-4 border-black bg-black text-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors">
            START PUZZLE
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16">
        <div className="max-w-6xl mx-auto p-8">
          <div className="flex justify-between items-center">
            <div className="font-mono text-sm">© 2024 YOUR NAME</div>
            <Link
              href="/design-preview"
              className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors font-mono text-sm"
            >
              ← BACK TO COMPARISON
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
