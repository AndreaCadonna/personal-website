"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RetroDesign() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* CRT Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px]" />

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-10 bg-[linear-gradient(transparent_0%,rgba(0,255,0,0.3)_50%,transparent_100%)] animate-[scan_8s_linear_infinite]" />

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <main className="relative z-10 max-w-5xl mx-auto p-8">
        {/* Terminal Header */}
        <div className="border-2 border-green-500 p-4 mb-8 bg-black shadow-[0_0_10px_rgba(0,255,0,0.3)]">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-green-400">
            user@portfolio:~$ cat resume.txt
          </div>
        </div>

        {/* Boot Sequence */}
        <div className="mb-8 space-y-1 text-sm">
          <div className="text-green-400">[OK] Loading resume data...</div>
          <div className="text-green-400">[OK] Initializing chess engine...</div>
          <div className="text-green-400">[OK] Starting portfolio system...</div>
        </div>

        {/* Hero Section */}
        <section className="border border-green-500 p-8 mb-8 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
          <pre className="text-xs mb-4 text-green-400">
{`╔═══════════════════════════════════════════════════╗
║           PERSONAL PORTFOLIO v1.0                 ║
╚═══════════════════════════════════════════════════╝`}
          </pre>

          <div className="mb-6">
            <div className="text-3xl mb-2 font-bold tracking-wider">&gt; YOUR_NAME.exe</div>
            <div className="text-green-400 text-sm">
              &gt; Role: SOFTWARE_ENGINEER
              <br />
              &gt; Status: <span className="animate-pulse">● AVAILABLE</span>
              <br />
              &gt; Location: YOUR_CITY
            </div>
          </div>

          <div className="border-l-2 border-green-500 pl-4 text-green-400">
            <p className="mb-2">
              &gt; Full-stack developer passionate about building efficient,
            </p>
            <p className="mb-2">
              &gt; scalable applications. Chess enthusiast. Problem solver.
            </p>
            <p>
              &gt; Type &apos;help&apos; for available commands
              <span className={`inline-block ${cursorVisible ? "opacity-100" : "opacity-0"}`}>
                _
              </span>
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <div className="text-xl mb-4 text-green-400">
            user@portfolio:~$ ls skills/
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "frontend.dir", items: ["react.js", "nextjs.ts", "tailwind.css"] },
              { name: "backend.dir", items: ["nodejs.js", "postgres.sql", "graphql.gql"] },
              { name: "tools.dir", items: ["git.exe", "docker.sh", "aws.cloud"] },
            ].map((dir) => (
              <div
                key={dir.name}
                className="border border-green-500 p-4 bg-black shadow-[0_0_10px_rgba(0,255,0,0.1)]"
              >
                <div className="text-green-400 mb-3 flex items-center gap-2">
                  📁 {dir.name}
                </div>
                <div className="space-y-1 text-sm pl-4">
                  {dir.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-green-500">
                      <span>└─</span>
                      <span className="hover:bg-green-500 hover:text-black px-1 cursor-pointer">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <div className="text-xl mb-4 text-green-400">
            user@portfolio:~$ cat experience.log
          </div>
          <div className="border border-green-500 p-6 bg-black shadow-[0_0_10px_rgba(0,255,0,0.1)]">
            <div className="space-y-6">
              {[
                {
                  time: "[2022-01-15 → PRESENT]",
                  title: "SENIOR_DEVELOPER",
                  company: "TechCorp_Inc",
                  log: "INFO: Leading development team, architecting scalable solutions",
                },
                {
                  time: "[2020-06-01 → 2021-12-31]",
                  title: "FULL_STACK_DEV",
                  company: "StartupXYZ",
                  log: "INFO: Built multiple client applications from scratch",
                },
              ].map((job, i) => (
                <div key={i} className="border-l-2 border-green-500 pl-4">
                  <div className="text-green-400 text-xs mb-1">{job.time}</div>
                  <div className="text-lg mb-1">
                    {job.title} @ {job.company}
                  </div>
                  <div className="text-sm text-green-400">&gt; {job.log}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chess ASCII Art */}
        <section className="mb-8">
          <div className="text-xl mb-4 text-green-400">
            user@portfolio:~$ ./chess_puzzle.sh
          </div>
          <div className="border border-green-500 p-6 bg-black shadow-[0_0_20px_rgba(0,255,0,0.2)]">
            <pre className="text-xs leading-tight mb-4 text-green-400">
{`    ┌───┬───┬───┬───┬───┬───┬───┬───┐
  8 │ ♜ │   │   │   │ ♚ │   │   │ ♜ │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  7 │ ♟ │ ♟ │   │   │   │ ♟ │ ♟ │ ♟ │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  6 │   │   │   │   │   │   │   │   │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  5 │   │   │   │ ♙ │ ♙ │   │   │   │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  4 │   │   │   │   │   │   │   │   │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  3 │   │   │   │   │   │   │   │   │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  2 │ ♙ │ ♙ │ ♙ │   │   │ ♙ │ ♙ │ ♙ │
    ├───┼───┼───┼───┼───┼───┼───┼───┤
  1 │ ♖ │   │   │   │ ♔ │   │   │ ♖ │
    └───┴───┴───┴───┴───┴───┴───┴───┘
      a   b   c   d   e   f   g   h`}
            </pre>
            <div className="text-sm mb-2 text-green-400">
              &gt; Puzzle loaded. Your move:
              <span className={`inline-block ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>
                _
              </span>
            </div>
            <button className="border border-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition-colors text-sm">
              [START_PUZZLE]
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-500 pt-8 mt-16">
          <div className="flex justify-between items-center text-sm">
            <div className="text-green-400">
              © 2024 YOUR_NAME • All rights reserved
            </div>
            <Link
              href="/design-preview"
              className="border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
            >
              [EXIT_DEMO]
            </Link>
          </div>
          <div className="text-xs text-green-400 mt-4">
            &gt; System uptime: 99.9% | Connection: ESTABLISHED | Status: ONLINE
          </div>
        </footer>
      </main>
    </div>
  );
}
