'use client';

import { useState, useEffect } from 'react';

const TECH_MARQUEE = 'REACT \u2022 NEXT.JS \u2022 TYPESCRIPT \u2022 PYTHON \u2022 NODE.JS \u2022 AWS \u2022 DOCKER \u2022 GRAPHQL \u2022 POSTGRESQL \u2022 GIT \u2022 LINUX \u2022 CI/CD \u2022 ';

const SKILLS_LIST = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Python',
  'Node.js', 'AWS', 'Docker', 'GraphQL', 'REST APIs',
  'PostgreSQL', 'MongoDB', 'Git', 'Linux', 'CI/CD', 'Tailwind',
];

const EXPERIENCE = [
  {
    role: 'SENIOR SOFTWARE ENGINEER',
    company: 'COMPANY_NAME',
    period: '2020\u2014PRESENT',
    bullets: [
      'Full-stack web application development at scale',
      'Cross-functional team collaboration & technical leadership',
      'Drove 30% improvement in user engagement metrics',
    ],
  },
  {
    role: 'SOFTWARE DEVELOPER',
    company: 'PREVIOUS_CO',
    period: '2018\u20142020',
    bullets: [
      'Responsive web interface engineering',
      'Code review processes & quality standards',
      'Foundation in modern development practices',
    ],
  },
];

export default function HomepageBrutalism() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Anton&display=swap');

        .brutal-page {
          font-family: 'Space Mono', monospace;
          background: #ffffff;
          color: #000000;
          min-height: 100vh;
          overflow-x: hidden;
          cursor: crosshair;
        }

        .brutal-heading {
          font-family: 'Anton', sans-serif;
          text-transform: uppercase;
          line-height: 0.85;
          letter-spacing: -0.03em;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 1px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .marquee-track {
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }

        .brutal-card {
          border: 4px solid #000;
          transition: all 0.15s;
        }

        .brutal-card:hover {
          background: #000 !important;
          color: #fff !important;
          transform: translate(-4px, -4px);
          box-shadow: 8px 8px 0 #000;
        }

        .yellow-highlight {
          background: #D4FF00;
          display: inline;
          padding: 0 6px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .pink-accent { color: #FF0066; }
        .yellow-bg { background: #D4FF00; }
        .blue-accent { color: #0000FF; }

        .label-tag {
          font-size: 9px;
          font-family: 'Space Mono', monospace;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .brutal-link {
          border: 4px solid #000;
          padding: 16px 32px;
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          text-decoration: none;
          color: #000;
          display: inline-block;
          transition: all 0.1s;
          background: #fff;
        }

        .brutal-link:hover {
          background: #000;
          color: #D4FF00;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #FF0066;
        }

        .rotate-tag {
          position: absolute;
          font-family: 'Anton', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          writing-mode: vertical-rl;
          color: #ccc;
        }

        .strikethrough { text-decoration: line-through; }

        .blob-follow {
          position: fixed;
          width: 20px;
          height: 20px;
          background: #FF0066;
          border-radius: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.1s;
        }
      `}</style>

      <div className="brutal-page">
        {/* Cursor follower */}
        <div
          className="blob-follow"
          style={{ transform: `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)` }}
        />

        {/* Top Bar */}
        <div className="border-b-4 border-black flex justify-between items-center px-6 py-3">
          <span className="label-tag">PORTFOLIO_2024.HTML</span>
          <span className="font-bold text-sm font-mono">{time}</span>
          <span className="label-tag">SCROLL DOWN OR DON&apos;T</span>
        </div>

        {/* Hero */}
        <section className="px-6 md:px-12 pt-16 pb-8 relative">
          <div className="rotate-tag right-6 top-20 hidden md:block">
            SINCE 2018
          </div>
          <p className="label-tag mb-4">&lt;h1&gt;</p>
          <h1 className="brutal-heading text-[clamp(48px,12vw,180px)] text-black">
            SOFT
            <span className="pink-accent">WARE</span>
          </h1>
          <h1 className="brutal-heading text-[clamp(48px,12vw,180px)] text-black -mt-2 md:-mt-6">
            ENGI
            <span className="yellow-bg text-black">NEER</span>
          </h1>
          <p className="label-tag mt-4">&lt;/h1&gt;</p>

          <div className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed">
              I build things for the web.
              <br />
              <span className="strikethrough text-gray-400">Sometimes they even work.</span>
              <br />
              <span className="yellow-highlight font-bold">They always work.</span>
            </p>
          </div>

          {/* Overlapping stat */}
          <div className="absolute top-12 right-6 md:right-24 border-4 border-black p-4 bg-white hidden md:block"
            style={{ transform: 'rotate(3deg)' }}>
            <p className="label-tag mb-1">STATUS</p>
            <p className="font-bold text-2xl pink-accent">AVAILABLE</p>
            <p className="text-xs mt-1">FOR HIRE</p>
          </div>
        </section>

        {/* Marquee */}
        <div className="border-y-4 border-black py-3 overflow-hidden yellow-bg">
          <div className="marquee-track font-bold text-xl tracking-widest">
            {TECH_MARQUEE.repeat(4)}
          </div>
        </div>

        {/* Skills Grid */}
        <section className="px-6 md:px-12 py-16">
          <p className="label-tag mb-2">&lt;section id=&quot;skills&quot;&gt;</p>
          <h2 className="brutal-heading text-5xl md:text-7xl mb-12">
            WHAT I <span className="pink-accent">DO</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SKILLS_LIST.map((skill, i) => (
              <div
                key={skill}
                className="brutal-card p-4 bg-white"
                style={{ transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }}
              >
                <span className="label-tag block mb-1">0{i + 1}</span>
                <span className="font-bold text-sm uppercase">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 md:px-12 py-16 bg-black text-white">
          <p className="label-tag text-gray-500 mb-2">&lt;experience&gt;</p>
          <h2 className="brutal-heading text-5xl md:text-7xl mb-12">
            WHERE I&apos;VE <span className="text-[#D4FF00]">BEEN</span>
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} className="border-4 border-white p-6 md:p-8 relative">
                <span className="absolute -top-4 right-4 bg-[#FF0066] text-white px-3 py-1 text-xs font-bold">
                  {exp.period}
                </span>
                <h3 className="brutal-heading text-2xl md:text-4xl text-[#D4FF00] mb-1">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-sm mb-4">@ {exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm flex gap-2">
                      <span className="text-[#FF0066] shrink-0">{'//'}</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 md:px-12 py-16">
          <h2 className="brutal-heading text-5xl md:text-7xl mb-12">
            THINGS I <span className="blue-accent">MADE</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="brutal-card p-8 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 yellow-bg"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              <span className="label-tag">PROJECT_01</span>
              <h3 className="brutal-heading text-3xl mt-2 mb-4">FULL-STACK PLATFORM</h3>
              <p className="text-sm mb-4 leading-relaxed">
                A production-grade web application built with React, Node.js, and MongoDB.
                Handles real users, real data, real problems.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['React', 'Node.js', 'MongoDB'].map(t => (
                  <span key={t} className="border-2 border-black px-2 py-1 text-[10px] font-bold uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="brutal-card p-8 bg-black text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF0066]"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              <span className="label-tag text-gray-500">PROJECT_02</span>
              <h3 className="brutal-heading text-3xl mt-2 mb-4">OPEN SOURCE TOOL</h3>
              <p className="text-sm mb-4 leading-relaxed text-gray-300">
                TypeScript-powered developer tool with Next.js frontend
                and PostgreSQL backend. Community-driven. Battle-tested.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['TypeScript', 'Next.js', 'PostgreSQL'].map(t => (
                  <span key={t} className="border-2 border-white px-2 py-1 text-[10px] font-bold uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chess */}
        <section className="px-6 md:px-12 py-16 border-y-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="relative">
            <h2 className="brutal-heading text-5xl md:text-8xl mb-4">
              I PLAY <span className="pink-accent">CHESS</span>.
            </h2>
            <p className="text-xl font-bold mb-4">DEAL WITH IT.</p>
            <p className="max-w-lg text-sm leading-relaxed">
              Every pawn sacrifice teaches patience. Every discovered check
              teaches creativity. The board is just another interface to debug.
              <br />
              <span className="yellow-highlight font-bold mt-2 inline-block">
                Strategy is strategy, whether it&apos;s code or chess.
              </span>
            </p>
            <div className="mt-6 text-6xl select-none" style={{ letterSpacing: '8px' }}>
              ♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer className="px-6 md:px-12 py-16">
          <p className="label-tag mb-2">&lt;footer&gt;</p>
          <h2 className="brutal-heading text-5xl md:text-7xl mb-8">
            LET&apos;S <span className="text-[#0000FF]">TALK</span>
          </h2>
          <div className="flex gap-4 flex-wrap">
            <a href="https://github.com" className="brutal-link" target="_blank" rel="noopener noreferrer">
              GITHUB ↗
            </a>
            <a href="https://linkedin.com" className="brutal-link" target="_blank" rel="noopener noreferrer">
              LINKEDIN ↗
            </a>
            <a href="mailto:contact@example.com" className="brutal-link">
              EMAIL ↗
            </a>
          </div>
          <p className="label-tag mt-12">&lt;/footer&gt;</p>
          <p className="label-tag mt-1">&lt;/html&gt;</p>
        </footer>
      </div>
    </>
  );
}
