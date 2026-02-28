'use client';

import { useState, useEffect } from 'react';
import { profile, getExperienceSorted, getFeaturedProjects, allSkillNames } from '@/lib/data';

const sortedExp = getExperienceSorted();
const featured = getFeaturedProjects();

const SKILLS = allSkillNames.slice(0, 14);

const CASES = featured.slice(0, 2).map(p => ({
  title: `The ${p.name}`,
  year: p.startDate.split('-')[0],
  tools: p.technologies.slice(0, 3).join(', '),
  narration: p.description,
}));

export default function HomepageNoir() {
  const [typed, setTyped] = useState('');
  const fullText = `${profile.fullName}.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Special+Elite&display=swap');

        .noir-page {
          font-family: 'Special Elite', 'Courier New', monospace;
          background: #0a0a0a;
          color: #c8c0b0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Film grain */
        .noir-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 50;
          opacity: 0.6;
        }

        /* Venetian blind shadows */
        .noir-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            180deg,
            transparent,
            transparent 30px,
            rgba(0,0,0,0.15) 30px,
            rgba(0,0,0,0.15) 34px
          );
          pointer-events: none;
          z-index: 40;
          transform: rotate(-5deg) scale(1.2);
        }

        .serif { font-family: 'Playfair Display', Georgia, serif; }

        .noir-red { color: #8b1a1a; }
        .noir-red-bg { background: #8b1a1a; }

        /* Smoke effect */
        .smoke {
          position: absolute;
          width: 200px;
          height: 300px;
          background: radial-gradient(
            ellipse at center,
            rgba(200,200,200,0.03) 0%,
            transparent 70%
          );
          animation: smokeRise 12s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes smokeRise {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-80px) scale(1.3); opacity: 0.2; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }

        @keyframes typewriterCursor {
          0%, 100% { border-right-color: #c8c0b0; }
          50% { border-right-color: transparent; }
        }

        .typewriter-cursor {
          border-right: 2px solid #c8c0b0;
          padding-right: 4px;
          animation: typewriterCursor 1s step-end infinite;
        }

        .noir-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #33302a, transparent);
          margin: 48px 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .noir-fade {
          animation: fadeIn 1s ease-out both;
        }

        .noir-card {
          border-left: 3px solid #8b1a1a;
          padding: 24px;
          background: rgba(255,255,255,0.02);
          transition: all 0.4s;
        }

        .noir-card:hover {
          background: rgba(255,255,255,0.04);
          border-left-color: #c8c0b0;
        }

        .noir-btn {
          font-family: 'Special Elite', monospace;
          font-size: 14px;
          letter-spacing: 0.15em;
          padding: 14px 28px;
          border: 1px solid #33302a;
          background: transparent;
          color: #c8c0b0;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          position: relative;
        }

        .noir-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #8b1a1a;
          transition: width 0.3s;
        }

        .noir-btn:hover {
          color: #fff;
          border-color: #8b1a1a;
        }

        .noir-btn:hover::after {
          width: 100%;
        }

        .chapter-num {
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8b1a1a;
        }

        .pull-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.5rem;
          line-height: 1.6;
          color: #8a8070;
          border-left: 2px solid #8b1a1a;
          padding-left: 24px;
        }

        .skill-tag {
          display: inline-block;
          padding: 6px 14px;
          font-size: 12px;
          border: 1px solid #2a2520;
          color: #8a8070;
          transition: all 0.3s;
          letter-spacing: 0.05em;
        }

        .skill-tag:hover {
          border-color: #8b1a1a;
          color: #c8c0b0;
          background: rgba(139,26,26,0.1);
        }

        .noir-spotlight {
          background: radial-gradient(
            ellipse at 50% 0%,
            rgba(200,190,160,0.05) 0%,
            transparent 60%
          );
        }
      `}</style>

      <div className="noir-page">
        {/* Smoke wisps */}
        <div className="smoke" style={{ right: '10%', top: '20%' }} />
        <div className="smoke" style={{ left: '5%', top: '60%', animationDelay: '-5s' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 noir-spotlight">

          {/* Opening */}
          <header className="text-center mb-20 noir-fade">
            <p className="chapter-num mb-8">A Portfolio in Five Acts</p>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              The
              <br />
              <span className="typewriter-cursor">{typed}</span>
            </h1>
            <p className="text-sm text-[#5a5548] mt-8 tracking-widest uppercase">
              A story of code, chess, and AI-augmented workflows
            </p>
          </header>

          <div className="noir-divider" />

          {/* Act I - The Monologue */}
          <section className="mb-16 noir-fade" style={{ animationDelay: '0.2s' }}>
            <p className="chapter-num mb-6">Act I</p>
            <h2 className="serif text-3xl md:text-4xl text-white mb-8 italic">The Prologue</h2>
            <div className="space-y-4 leading-[1.9]">
              <p>
                It was the kind of night where even the servers were sleeping. But not me.
                I was three espressos deep and staring at a codebase that had more secrets
                than a politician&apos;s browser history.
              </p>
              <p>
                They call me {profile.fullName}. A {profile.title.toLowerCase()} based in {profile.contact.location}.
                Five years hunting down bugs in the dark, architecting solutions nobody asked for
                but everybody needs. I work with Angular, React, TypeScript, Python, and whatever
                else the job demands. These days, I orchestrate AI agents and MCP servers too.
              </p>
              <p>
                When I&apos;m not untangling spaghetti code, I&apos;m at the chessboard.
                <span className="noir-red"> Same game, different pieces.</span>
              </p>
            </div>
          </section>

          <div className="noir-divider" />

          {/* Act II - The Tools */}
          <section className="mb-16 noir-fade" style={{ animationDelay: '0.3s' }}>
            <p className="chapter-num mb-6">Act II</p>
            <h2 className="serif text-3xl md:text-4xl text-white mb-4 italic">The Arsenal</h2>
            <p className="mb-8 text-sm text-[#6a6458]">
              Every detective needs their tools. Here are mine.
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          <div className="noir-divider" />

          {/* Act III - The Record */}
          <section className="mb-16 noir-fade" style={{ animationDelay: '0.4s' }}>
            <p className="chapter-num mb-6">Act III</p>
            <h2 className="serif text-3xl md:text-4xl text-white mb-8 italic">The Record</h2>

            {sortedExp.slice(0, 3).map((exp, i) => (
              <div key={exp.id} className={`noir-card ${i < 2 ? 'mb-6' : ''}`}>
                <p className="chapter-num mb-2">
                  {exp.startDate.split('-')[0]} &mdash; {exp.endDate === 'present' ? 'Present' : exp.endDate.split('-')[0]}
                </p>
                <h3 className="serif text-xl text-white mb-2">{exp.role}</h3>
                <p className="text-sm text-[#5a5548] mb-3">{exp.company}, {exp.location}</p>
                <p className="leading-[1.8]">
                  {exp.summary}
                  {i === 0 && <span className="noir-red"> That&apos;s the job.</span>}
                  {i === 1 && <span className="noir-red"> The AI never sleeps.</span>}
                  {i === 2 && <span className="noir-red"> Left the place better than I found it.</span>}
                </p>
              </div>
            ))}
          </section>

          <div className="noir-divider" />

          {/* Act IV - The Cases */}
          <section className="mb-16 noir-fade" style={{ animationDelay: '0.5s' }}>
            <p className="chapter-num mb-6">Act IV</p>
            <h2 className="serif text-3xl md:text-4xl text-white mb-8 italic">The Case Files</h2>
            <div className="space-y-8">
              {CASES.map((c) => (
                <div key={c.title} className="noir-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="noir-red text-xs tracking-widest">{c.year}</span>
                    <span className="text-[#33302a]">&mdash;</span>
                    <span className="text-xs text-[#5a5548] tracking-wider">{c.tools}</span>
                  </div>
                  <h3 className="serif text-2xl text-white mb-3 italic">{c.title}</h3>
                  <p className="leading-[1.9]">{c.narration}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="noir-divider" />

          {/* Act V - Chess */}
          <section className="mb-16 text-center noir-fade" style={{ animationDelay: '0.6s' }}>
            <p className="chapter-num mb-6">Act V</p>
            <h2 className="serif text-3xl md:text-4xl text-white mb-8 italic">The Endgame</h2>
            <div className="text-4xl mb-8 select-none opacity-40">
              &#9818;
            </div>
            <div className="pull-quote max-w-lg mx-auto mb-8">
              &ldquo;Every chess game is a story. Every position has a truth hiding in it.
              You just have to look long enough. Code is the same way.&rdquo;
            </div>
            <p className="text-sm text-[#5a5548] leading-relaxed max-w-md mx-auto">
              Daily puzzles on Lichess. Strategic thinking on and off the board.
              The discipline of calculation. The courage of sacrifice.
              <span className="noir-red"> Check and mate.</span>
            </p>
          </section>

          <div className="noir-divider" />

          {/* Epilogue - Contact */}
          <footer className="text-center py-12 noir-fade" style={{ animationDelay: '0.7s' }}>
            <p className="chapter-num mb-6">Epilogue</p>
            <h2 className="serif text-3xl text-white mb-3 italic">Find Me</h2>
            <p className="text-sm text-[#5a5548] mb-8">
              If you&apos;ve got a case that needs solving, you know where to look.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={profile.contact.github} className="noir-btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.contact.linkedin} className="noir-btn" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.contact.email}`} className="noir-btn">
                Email
              </a>
            </div>
            <p className="text-xs text-[#2a2520] mt-16 tracking-[0.3em] uppercase">
              Fin.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
