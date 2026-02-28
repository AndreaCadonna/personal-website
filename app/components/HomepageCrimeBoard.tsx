'use client';

import { useEffect, useRef } from 'react';
import { profile, getExperienceSorted, getFeaturedProjects, allSkillNames } from '@/lib/data';

const sortedExp = getExperienceSorted();
const featured = getFeaturedProjects();

const SKILLS = allSkillNames.slice(0, 14);

const TIMELINE = sortedExp.slice(0, 4).map(exp => ({
  date: `${exp.startDate.split('-')[0]} \u2014 ${exp.endDate === 'present' ? 'PRESENT' : exp.endDate.split('-')[0]}`,
  title: exp.role,
  location: exp.company,
  notes: exp.summary,
}));

const EVIDENCE = featured.slice(0, 3).map((p, i) => ({
  id: `EV-${String(i + 1).padStart(3, '0')}`,
  label: p.name,
  detail: `${p.technologies.slice(0, 3).join(' + ')}. ${p.tagline}.`,
  annotation: [
    '\u2192 Clean deployment. Suspicious.',
    '\u2192 Open source? What is he building?',
    '\u2192 Chess connection CONFIRMED',
  ][i] || '\u2192 Under investigation.',
}));

export default function HomepageCrimeBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawStrings();
    };

    const drawStrings = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#cc000055';
      ctx.lineWidth = 1;

      const points = [
        [0.2, 0.15], [0.7, 0.12], [0.5, 0.35],
        [0.15, 0.55], [0.8, 0.5], [0.45, 0.7],
        [0.3, 0.85], [0.75, 0.82],
      ];

      const connections = [
        [0, 2], [1, 2], [2, 3], [2, 4],
        [3, 5], [4, 5], [5, 6], [5, 7],
        [0, 3], [1, 4], [6, 7],
      ];

      connections.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(points[a][0] * canvas.width, points[a][1] * canvas.height);
        ctx.lineTo(points[b][0] * canvas.width, points[b][1] * canvas.height);
        ctx.stroke();
      });

      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * canvas.width, y * canvas.height, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#cc0000';
        ctx.fill();
      });
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Special+Elite&family=Inter:wght@400;500;600&display=swap');

        .crime-page {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background:
            url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E"),
            linear-gradient(135deg, #5c4033, #6b4c3b, #5a3d2e);
          color: #1a1a1a;
        }

        .handwriting {
          font-family: 'Caveat', cursive;
        }

        .typewriter {
          font-family: 'Special Elite', 'Courier New', monospace;
        }

        .pin {
          position: relative;
        }

        .pin::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ff4444, #cc0000);
          box-shadow: 0 2px 4px rgba(0,0,0,0.4);
          z-index: 10;
        }

        .card-pinned {
          background: #fffef5;
          box-shadow: 2px 3px 10px rgba(0,0,0,0.3);
          padding: 20px;
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card-pinned:hover {
          transform: scale(1.03) rotate(0deg) !important;
          box-shadow: 4px 6px 20px rgba(0,0,0,0.4);
          z-index: 20;
        }

        .card-photo {
          background: #fff;
          padding: 8px 8px 32px 8px;
          box-shadow: 2px 3px 10px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }

        .card-photo:hover {
          transform: scale(1.05) rotate(0deg) !important;
          z-index: 20;
        }

        .tape {
          position: absolute;
          width: 80px;
          height: 24px;
          background: rgba(200, 180, 140, 0.5);
          z-index: 5;
        }

        .tape-top { top: -10px; left: 30%; transform: rotate(-2deg); }
        .tape-corner { top: -6px; right: -6px; transform: rotate(35deg); width: 60px; }

        .stamp-classified {
          display: inline-block;
          border: 4px solid #cc0000;
          color: #cc0000;
          font-family: 'Special Elite', monospace;
          font-size: 20px;
          padding: 6px 20px;
          transform: rotate(-5deg);
          letter-spacing: 0.2em;
          opacity: 0.7;
        }

        .stamp-topsecret {
          display: inline-block;
          border: 4px solid #333;
          color: #333;
          font-family: 'Special Elite', monospace;
          font-size: 14px;
          padding: 4px 14px;
          transform: rotate(3deg);
          letter-spacing: 0.15em;
          opacity: 0.5;
        }

        .evidence-tag {
          display: inline-block;
          background: #cc0000;
          color: #fff;
          font-family: 'Special Elite', monospace;
          font-size: 11px;
          padding: 3px 10px;
          letter-spacing: 0.1em;
        }

        .redacted {
          background: #1a1a1a;
          color: #1a1a1a;
          padding: 0 4px;
          user-select: none;
          transition: all 0.3s;
        }

        .redacted:hover {
          color: #cc0000;
          background: transparent;
        }

        .underline-red {
          text-decoration: underline;
          text-decoration-color: #cc0000;
          text-underline-offset: 3px;
          text-decoration-thickness: 2px;
        }

        .crime-link {
          font-family: 'Special Elite', monospace;
          font-size: 14px;
          letter-spacing: 0.1em;
          padding: 12px 24px;
          border: 2px solid #1a1a1a;
          background: #fffef5;
          color: #1a1a1a;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
        }

        .crime-link:hover {
          background: #cc0000;
          color: #fff;
          border-color: #cc0000;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 12px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="crime-page">
        {/* Red string canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 py-12">

          {/* Case File Header */}
          <header className="text-center mb-16">
            <div className="card-pinned inline-block mx-auto" style={{ transform: 'rotate(-1deg)' }}>
              <div className="tape tape-top" />
              <p className="typewriter text-xs text-[#888] tracking-widest mb-2">
                FEDERAL BUREAU OF ENGINEERING
              </p>
              <h1 className="typewriter text-3xl md:text-5xl mb-3 tracking-wider">
                CASE FILE <span className="text-[#cc0000]">#2025-{profile.lastName.toUpperCase()}</span>
              </h1>
              <div className="stamp-classified mb-3">CLASSIFIED</div>
              <p className="typewriter text-xs sm:text-sm text-[#666]">
                SUBJECT: {profile.fullName.toUpperCase()}
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> &middot; </span>
                STATUS: AT LARGE
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> &middot; </span>
                THREAT LEVEL: EXCEPTIONAL
              </p>
            </div>
          </header>

          {/* Subject Profile */}
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="card-photo" style={{ transform: 'rotate(-3deg)' }}>
                <div className="w-36 h-44 sm:w-48 sm:h-56 bg-[#ddd] flex items-center justify-center text-5xl sm:text-6xl select-none">
                  &#9822;
                </div>
                <p className="handwriting text-center text-base sm:text-lg mt-2 text-[#555]">
                  Subject &mdash; {profile.contact.location}
                </p>
              </div>
            </div>

            {/* Dossier */}
            <div className="md:col-span-2">
              <div className="card-pinned" style={{ transform: 'rotate(0.5deg)' }}>
                <div className="tape tape-corner" />
                <h2 className="typewriter text-lg mb-3 underline-red">SUBJECT PROFILE</h2>
                <div className="typewriter text-sm leading-loose">
                  <p><strong>NAME:</strong> {profile.fullName}</p>
                  <p><strong>OCCUPATION:</strong> {profile.title}</p>
                  <p><strong>LOCATION:</strong> {profile.contact.location}</p>
                  <p><strong>KNOWN ALIASES:</strong> <span className="redacted">REDACTED</span>, Lead Developer, &ldquo;The Chess Guy&rdquo;</p>
                  <p><strong>SPECIALIZATION:</strong> AI-augmented development, fullstack architecture, MCP servers</p>
                  <p><strong>MOTIVE:</strong> Building things that actually work</p>
                  <p className="mt-3 text-xs text-[#888]">
                    NOTE: Subject approaches every problem like a chess position &mdash; analyzing deeply,
                    calculating variations, and finding the most efficient path. Consider armed
                    with Claude Code and <span className="underline-red">extremely dangerous</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Known Abilities */}
          <section className="mb-12">
            <div className="card-pinned pin" style={{ transform: 'rotate(-0.5deg)' }}>
              <h2 className="typewriter text-lg mb-4 underline-red">KNOWN ABILITIES</h2>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="typewriter text-xs border border-[#aaa] px-3 py-2 bg-white hover:bg-[#cc0000] hover:text-white hover:border-[#cc0000] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="handwriting text-lg text-[#cc0000] mt-4 -rotate-2">
                ^ All confirmed. Subject is highly capable.
              </p>
            </div>
          </section>

          {/* Timeline of Events */}
          <section className="mb-12">
            <h2 className="typewriter text-xl mb-6 text-[#fffef5] text-center">
              <span className="stamp-topsecret">TIMELINE OF EVENTS</span>
            </h2>
            <div className="space-y-6">
              {TIMELINE.map((event, i) => (
                <div
                  key={event.title}
                  className="card-pinned pin"
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.8 : 1}deg)` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <span className="evidence-tag shrink-0">{event.date}</span>
                    <div>
                      <h3 className="typewriter text-base font-bold mb-1">{event.title}</h3>
                      <p className="typewriter text-xs text-[#888] mb-2">{event.location}</p>
                      <p className="handwriting text-base text-[#444] leading-relaxed">
                        {event.notes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Evidence */}
          <section className="mb-12">
            <h2 className="typewriter text-xl mb-6 text-[#fffef5] text-center">
              <span className="stamp-topsecret">EVIDENCE</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {EVIDENCE.map((item, i) => (
                <div
                  key={item.id}
                  className="card-pinned pin"
                  style={{ transform: `rotate(${(i - 1) * 1.5}deg)` }}
                >
                  <span className="evidence-tag mb-3 inline-block">{item.id}</span>
                  <h3 className="typewriter text-sm font-bold mb-2">{item.label}</h3>
                  <p className="typewriter text-xs text-[#666] leading-relaxed">{item.detail}</p>
                  <p className="handwriting text-sm text-[#cc0000] mt-3">
                    {item.annotation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Chess - Pattern of Behavior */}
          <section className="mb-12">
            <div className="card-pinned text-center" style={{ transform: 'rotate(0.3deg)' }}>
              <div className="tape tape-top" style={{ left: '45%' }} />
              <h2 className="typewriter text-lg mb-4 underline-red">PATTERN OF BEHAVIOR: CHESS</h2>
              <div className="text-4xl mb-4 select-none tracking-widest">
                &#9820; &#9822; &#9821; &#9819; &#9818; &#9821; &#9822; &#9820;
              </div>
              <p className="handwriting text-xl text-[#444] max-w-md mx-auto leading-relaxed">
                &ldquo;Subject exhibits strategic thinking consistent with chess training.
                Calculates 5 moves ahead in code reviews. Sacrifices short-term velocity
                for long-term architecture. Pattern is clear.&rdquo;
              </p>
              <p className="typewriter text-xs text-[#888] mt-4">
                &mdash; FIELD AGENT REPORT, CONFIDENTIAL
              </p>
            </div>
          </section>

          {/* Contact */}
          <footer className="text-center py-8">
            <p className="typewriter text-sm text-[#fffef5cc] mb-6">
              IF YOU HAVE INFORMATION REGARDING THIS SUBJECT:
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={profile.contact.github} className="crime-link" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
              <a href={profile.contact.linkedin} className="crime-link" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
              <a href={`mailto:${profile.contact.email}`} className="crime-link">
                EMAIL
              </a>
            </div>
            <p className="typewriter text-[10px] text-[#fffef555] mt-12 tracking-widest">
              CASE REMAINS OPEN. FILE UNDER: EXCEPTIONALLY TALENTED.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
