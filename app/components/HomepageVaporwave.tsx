'use client';

import { useState, useEffect } from 'react';

const SKILLS = [
  'React', 'Next.js', 'TypeScript', 'Python',
  'Node.js', 'AWS', 'Docker', 'GraphQL',
  'PostgreSQL', 'MongoDB', 'Git', 'Linux',
];

const EXPERIENCE = [
  { role: 'SENIOR SOFTWARE ENGINEER', company: 'Company Name', period: '2020 — NOW' },
  { role: 'SOFTWARE DEVELOPER', company: 'Previous Co', period: '2018 — 2020' },
];

const PROJECTS = [
  { name: 'Full-Stack Platform', tech: 'React + Node.js + MongoDB' },
  { name: 'Open Source Tool', tech: 'TypeScript + Next.js + PostgreSQL' },
];

export default function HomepageVaporwave() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Monoton&family=Rajdhani:wght@300;400;500;700&display=swap');

        .vapor-page {
          font-family: 'Rajdhani', sans-serif;
          background: #0d0221;
          color: #e0d0ff;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .vapor-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,0,255,0.015) 2px,
            rgba(255,0,255,0.015) 4px
          );
          pointer-events: none;
          z-index: 50;
        }

        .vapor-grid {
          position: fixed;
          bottom: 0;
          left: -50%;
          right: -50%;
          height: 45vh;
          background:
            linear-gradient(90deg, rgba(255,0,255,0.15) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,255,0.15) 1px, transparent 1px);
          background-size: 60px 40px;
          transform: perspective(400px) rotateX(55deg);
          transform-origin: center top;
          z-index: 0;
          mask-image: linear-gradient(to bottom, transparent, black 20%);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%);
        }

        .vapor-grid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(13,2,33,1) 0%,
            transparent 40%
          );
        }

        .neon-pink { color: #ff00ff; text-shadow: 0 0 10px #ff00ff66, 0 0 40px #ff00ff22; }
        .neon-cyan { color: #00ffff; text-shadow: 0 0 10px #00ffff66, 0 0 40px #00ffff22; }
        .neon-yellow { color: #ffff00; text-shadow: 0 0 10px #ffff0066; }

        .chrome-text {
          background: linear-gradient(180deg, #fff 0%, #aaa 30%, #fff 50%, #888 70%, #ddd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .display-font {
          font-family: 'Monoton', cursive;
          letter-spacing: 0.05em;
        }

        @keyframes glitchShift {
          0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -3px); }
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .glitch-active .glitch-text::before {
          opacity: 0.8;
          color: #ff00ff;
          animation: glitchShift 0.15s linear;
          -webkit-text-fill-color: #ff00ff;
        }

        .glitch-active .glitch-text::after {
          opacity: 0.8;
          color: #00ffff;
          animation: glitchShift 0.15s linear reverse;
          -webkit-text-fill-color: #00ffff;
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes sunPulse {
          0%, 100% { box-shadow: 0 0 60px #ff00ff44, 0 0 120px #ff660022; }
          50% { box-shadow: 0 0 80px #ff00ff66, 0 0 160px #ff660044; }
        }

        .vapor-sun {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(180deg, #ff6600, #ff0066, #cc00ff);
          position: relative;
          margin: 0 auto;
          animation: sunPulse 4s ease-in-out infinite;
        }

        .vapor-sun::after {
          content: '';
          position: absolute;
          left: -10%;
          right: -10%;
          top: 50%;
          bottom: -10%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 6px,
            #0d0221 6px,
            #0d0221 12px
          );
        }

        .vapor-card {
          background: rgba(255,0,255,0.05);
          border: 1px solid rgba(255,0,255,0.15);
          padding: 24px;
          position: relative;
          transition: all 0.3s;
        }

        .vapor-card:hover {
          background: rgba(255,0,255,0.1);
          border-color: rgba(255,0,255,0.4);
          box-shadow: 0 0 30px rgba(255,0,255,0.1), inset 0 0 30px rgba(255,0,255,0.05);
        }

        .vapor-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
        }

        .vapor-btn {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 14px 32px;
          border: 2px solid #ff00ff;
          background: transparent;
          color: #ff00ff;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .vapor-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #ff00ff, #00ffff);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .vapor-btn:hover {
          color: #0d0221;
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0,255,255,0.3);
        }

        .vapor-btn:hover::before { opacity: 1; }
        .vapor-btn span { position: relative; z-index: 1; }

        @keyframes trackingGlitch {
          0%, 100% { transform: translateX(0); opacity: 1; }
          2% { transform: translateX(-100%); opacity: 0.5; }
          4% { transform: translateX(0); opacity: 1; }
        }

        .vhs-track {
          position: fixed;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255,255,255,0.1);
          z-index: 51;
          pointer-events: none;
          animation: trackingGlitch 8s linear infinite;
        }

        .aesthetic-text {
          letter-spacing: 0.5em;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 300;
        }
      `}</style>

      <div className={`vapor-page ${glitchActive ? 'glitch-active' : ''}`}>
        <div className="vapor-grid" />
        <div className="vhs-track" style={{ top: '30%' }} />
        <div className="vhs-track" style={{ top: '65%', animationDelay: '-3s' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-20">
            <span className="aesthetic-text neon-pink">PORTFOLIO.EXE</span>
            <span className="aesthetic-text neon-cyan">2 0 2 4</span>
          </div>

          {/* Sun + Hero */}
          <section className="text-center mb-24">
            <div className="vapor-sun mb-12" />
            <h1
              className="display-font text-4xl md:text-6xl lg:text-7xl neon-pink glitch-text mb-6"
              data-text="SOFTWARE"
            >
              SOFTWARE
            </h1>
            <h1
              className="display-font text-4xl md:text-6xl lg:text-7xl neon-cyan glitch-text mb-8"
              data-text="ENGINEER"
            >
              ENGINEER
            </h1>
            <p className="aesthetic-text text-[#8866aa] tracking-[0.8em]">
              F U L L &nbsp; S T A C K &nbsp; D E V E L O P E R
            </p>
            <p className="mt-4 text-sm text-[#6644aa]">
              ソフトウェアエンジニア &mdash; チェス愛好家
            </p>
          </section>

          {/* About */}
          <section className="vapor-card mb-8">
            <p className="aesthetic-text neon-pink mb-4 text-[10px]">// ABOUT.TXT</p>
            <p className="text-lg leading-relaxed text-[#c0a0e0]">
              A digital architect building in the space between logic and aesthetics.
              Every line of code is a brushstroke. Every system, a composition.
              When not crafting software, calculating forced checkmates on the 64 squares.
            </p>
          </section>

          {/* Skills */}
          <section className="vapor-card mb-8">
            <p className="aesthetic-text neon-cyan mb-6 text-[10px]">// SKILLS.DAT</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SKILLS.map((skill, i) => (
                <div
                  key={skill}
                  className="border border-[#ff00ff33] p-3 text-center text-sm font-medium text-[#d0b0ff] hover:border-[#00ffff88] hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all"
                  style={{ animation: `floatUp ${3 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="vapor-card mb-8">
            <p className="aesthetic-text neon-yellow mb-6 text-[10px]">// EXPERIENCE.LOG</p>
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} className="mb-6 last:mb-0 border-l-2 border-[#ff00ff44] pl-5">
                <p className="text-xs text-[#ff00ff99] mb-1 tracking-wider">{exp.period}</p>
                <h3 className="text-xl font-bold chrome-text mb-1 tracking-wide">{exp.role}</h3>
                <p className="text-sm text-[#8866aa]">@ {exp.company}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="vapor-card mb-8">
            <p className="aesthetic-text neon-pink mb-6 text-[10px]">// PROJECTS.SYS</p>
            <div className="grid md:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.name} className="border border-[#00ffff22] p-5 hover:border-[#ff00ff55] transition-colors">
                  <h3 className="text-lg font-bold neon-cyan mb-2">{proj.name}</h3>
                  <p className="text-xs text-[#8866aa] tracking-wider">{proj.tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Chess */}
          <section className="vapor-card mb-8 text-center">
            <div className="text-5xl mb-4 select-none" style={{ animation: 'floatUp 4s ease-in-out infinite', filter: 'drop-shadow(0 0 20px #ff00ff66)' }}>
              ♛
            </div>
            <h2 className="display-font text-2xl md:text-3xl neon-pink mb-4">CHESS</h2>
            <p className="text-sm text-[#8866aa] max-w-md mx-auto leading-relaxed">
              STRATEGY IS EVERYTHING. ON THE BOARD AND IN THE CODE.
              <br />
              <span className="neon-cyan text-xs">DAILY LICHESS PUZZLES // RATED GAMES // ETERNAL STUDENT</span>
            </p>
          </section>

          {/* Contact */}
          <footer className="text-center py-16">
            <p className="aesthetic-text text-[#6644aa] mb-8 tracking-[0.6em]">
              C O N N E C T
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://github.com" className="vapor-btn" target="_blank" rel="noopener noreferrer">
                <span>GITHUB</span>
              </a>
              <a href="https://linkedin.com" className="vapor-btn" target="_blank" rel="noopener noreferrer">
                <span>LINKEDIN</span>
              </a>
              <a href="mailto:contact@example.com" className="vapor-btn">
                <span>EMAIL</span>
              </a>
            </div>
            <p className="text-[10px] text-[#442266] mt-16 tracking-[0.4em]">
              NOTHING IS REAL // EVERYTHING IS PERMITTED
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
