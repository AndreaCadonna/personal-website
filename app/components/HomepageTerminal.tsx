'use client';

import { useState, useEffect, useRef } from 'react';
import { profile, skills, getExperienceSorted, getFeaturedProjects } from '@/lib/data';
import type { Skill } from '@/lib/data';

const sortedExp = getExperienceSorted();
const featured = getFeaturedProjects();

const ASCII_NAME = `
 █████  ███    ██ ██████  ██████  ███████  █████
██   ██ ████   ██ ██   ██ ██   ██ ██      ██   ██
███████ ██ ██  ██ ██   ██ ██████  █████   ███████
██   ██ ██  ██ ██ ██   ██ ██   ██ ██      ██   ██
██   ██ ██   ████ ██████  ██   ██ ███████ ██   ██

 ██████  █████  ██████   ██████  ███    ██ ███    ██  █████
██      ██   ██ ██   ██ ██    ██ ████   ██ ████   ██ ██   ██
██      ███████ ██   ██ ██    ██ ██ ██  ██ ██ ██  ██ ███████
██      ██   ██ ██   ██ ██    ██ ██  ██ ██ ██  ██ ██ ██   ██
 ██████ ██   ██ ██████   ██████  ██   ████ ██   ████ ██   ██
`;

const BOOT_LINES = [
  { text: 'BIOS v3.14 - Portfolio System', delay: 0 },
  { text: 'Checking memory... 16384 MB OK', delay: 200 },
  { text: 'Loading kernel modules...', delay: 400 },
  { text: '[  OK  ] Started Network Manager', delay: 600 },
  { text: '[  OK  ] Mounted Developer Filesystem', delay: 800 },
  { text: '[  OK  ] Started Portfolio Service', delay: 1000 },
  { text: '', delay: 1200 },
  { text: `portfolio login: ${profile.firstName.toLowerCase()}`, delay: 1400 },
  { text: `Last login: Today from ${profile.contact.location}`, delay: 1600 },
  { text: '', delay: 1800 },
];

const SKILLS_JSON: Record<string, { tools: string[]; proficiency: string }> = {};
const skillEntries = Object.entries(skills).slice(0, 4);
for (const [key, group] of skillEntries) {
  SKILLS_JSON[key] = {
    tools: group.skills.slice(0, 4).map((s: Skill) => s.name),
    proficiency: group.skills[0]?.proficiency || 'advanced',
  };
}
const skillKeys = Object.keys(SKILLS_JSON);
const lastSkillKey = skillKeys[skillKeys.length - 1];

const GIT_LOG = sortedExp.slice(0, 4).map((exp, i) => ({
  hash: Math.random().toString(16).slice(2, 9),
  date: `${exp.startDate.split('-')[0]}-${exp.endDate === 'present' ? 'present' : exp.endDate.split('-')[0]}`,
  msg: `feat: ${exp.role} @ ${exp.company}`,
  branch: i === 0 ? 'main' : 'career',
}));

const PROJECTS_LS = featured.slice(0, 3).map(p => ({
  name: p.id + '/',
  size: `${(Math.random() * 3 + 0.5).toFixed(1)}M`,
  desc: p.technologies.slice(0, 3).join(' + '),
  perms: 'drwxr-xr-x',
}));

const CHESS_ASCII = `
  +----+----+----+----+----+----+----+---+
8 | ♜ | ♞ | ♝ | ♛ | ♚ | ♝ | ♞ | ♜ |
  +----+----+----+----+----+----+----+---+
7 | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ | ♟ |
  +----+----+----+----+----+----+----+---+
6 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
5 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
4 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
3 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
2 | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ | ♙ |
  +----+----+----+----+----+----+----+---+
1 | ♖ | ♘ | ♗ | ♕ | ♔ | ♗ | ♘ | ♖ |
  +----+----+----+----+----+----+----+---+
    a    b    c    d    e    f    g    h`;

export default function HomepageTerminal() {
  const [bootComplete, setBootComplete] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => {
            setBootComplete(true);
            setTimeout(() => setShowPrompt(true), 500);
          }, 400);
        }
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight;
    }
  }, [visibleLines, bootComplete]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');

        .terminal-page {
          font-family: 'Fira Code', 'Courier New', monospace;
          background: #0a0a0a;
          color: #00ff41;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          font-size: 13px;
          line-height: 1.6;
        }

        .terminal-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,65,0.02) 2px,
            rgba(0,255,65,0.02) 4px
          );
          pointer-events: none;
          z-index: 100;
        }

        .terminal-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%);
          pointer-events: none;
          z-index: 99;
        }

        .phosphor { text-shadow: 0 0 5px #00ff4166, 0 0 10px #00ff4122; }

        .prompt::before {
          content: '$ ';
          color: #00aaff;
          font-weight: 700;
        }

        .comment { color: #555; font-style: italic; }
        .keyword { color: #ff6b6b; }
        .string { color: #ffd93d; }
        .number { color: #6bcb77; }
        .key-blue { color: #00aaff; }
        .key-purple { color: #c084fc; }
        .dim { color: #444; }
        .bright { color: #00ff41; font-weight: 500; }
        .warn { color: #ffd93d; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes typeIn {
          from { width: 0; }
          to { width: 100%; }
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: #00ff41;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          margin-left: 2px;
        }

        .matrix-col {
          position: absolute;
          top: -100%;
          font-size: 12px;
          color: #00ff4115;
          writing-mode: vertical-rl;
          animation: matrixFall linear infinite;
          white-space: nowrap;
        }

        @keyframes matrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(100vh + 100%)); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-fade {
          animation: fadeIn 0.4s ease-out both;
        }

        .terminal-section {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #1a1a1a;
        }

        a.terminal-link {
          color: #00aaff;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        a.terminal-link:hover {
          color: #ffd93d;
          text-shadow: 0 0 8px #ffd93d44;
        }
      `}</style>

      <div className="terminal-page">
        {/* Matrix rain background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="matrix-col"
              style={{
                left: `${i * 7}%`,
                animationDuration: `${10 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * -20}s`,
              }}
            >
              {'01'.repeat(80).split('').sort(() => Math.random() - 0.5).join('')}
            </div>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-8" ref={termRef}>
          {/* Title bar */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#222]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-[#555] text-xs">portfolio@{profile.lastName.toLowerCase()}:~</span>
          </div>

          {/* Boot Sequence */}
          <div className="mb-6 phosphor">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={line.text === '' ? 'h-4' : ''}>
                {line.text.startsWith('[') ? (
                  <span>
                    <span className="text-[#28c840]">{line.text.substring(0, 8)}</span>
                    <span>{line.text.substring(8)}</span>
                  </span>
                ) : (
                  <span className="dim">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          {bootComplete && (
            <div className="phosphor">
              {/* ASCII Header */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0s' }}>
                <pre className="text-[7px] sm:text-[9px] md:text-[11px] leading-[1.15] bright overflow-x-auto">
                  {ASCII_NAME}
                </pre>
                <p className="comment mt-2">{'// software engineer & chess enthusiast'}</p>
              </div>

              {/* whoami */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0.1s' }}>
                <p className="prompt mb-2">whoami</p>
                <p className="mb-2">
                  {profile.shortBio}
                </p>
                <p className="mb-2">
                  I approach every problem like a <span className="warn">chess position</span> &mdash;
                  analyzing deeply, calculating variations, and finding the most elegant path forward.
                </p>
                <p className="dim">
                  From AI-augmented workflows to scalable architectures, I build things that work.
                </p>
              </div>

              {/* Skills */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0.2s' }}>
                <p className="prompt mb-2">cat skills.json</p>
                <div className="pl-0">
                  <p>{'{'}</p>
                  {Object.entries(SKILLS_JSON).map(([category, data]) => (
                    <div key={category} className="pl-4 mb-1">
                      <span className="key-blue">&quot;{category}&quot;</span>
                      <span className="dim">: {'{'}</span>
                      <div className="pl-4">
                        <span className="key-purple">&quot;tools&quot;</span>
                        <span className="dim">: [</span>
                        <span className="string">{data.tools.map(t => `"${t}"`).join(', ')}</span>
                        <span className="dim">],</span>
                        <br />
                        <span className="key-purple">&quot;proficiency&quot;</span>
                        <span className="dim">: </span>
                        <span className="string">&quot;{data.proficiency}&quot;</span>
                      </div>
                      <span className="dim pl-0">{'}'}{category !== lastSkillKey ? ',' : ''}</span>
                    </div>
                  ))}
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Experience */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0.3s' }}>
                <p className="prompt mb-2">git log --oneline --career</p>
                {GIT_LOG.map((commit) => (
                  <div key={commit.hash} className="mb-2">
                    <span className="warn">{commit.hash}</span>
                    <span className="dim"> ({commit.branch}) </span>
                    <span className="key-blue">[{commit.date}]</span>
                    <br className="sm:hidden" />
                    <span className="sm:ml-0"> {commit.msg}</span>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0.4s' }}>
                <p className="prompt mb-2">ls -la ~/projects/</p>
                <p className="dim mb-1">total {PROJECTS_LS.length}</p>
                {PROJECTS_LS.map((proj) => (
                  <div key={proj.name} className="mb-1">
                    <span className="dim hidden sm:inline">{proj.perms}  </span>
                    <span className="number">{proj.size}  </span>
                    <span className="key-blue">{proj.name}</span>
                    <br className="sm:hidden" />
                    <span className="comment sm:ml-2">{`// ${proj.desc}`}</span>
                  </div>
                ))}
              </div>

              {/* Chess */}
              <div className="terminal-section section-fade" style={{ animationDelay: '0.5s' }}>
                <p className="prompt mb-2">./chess --status</p>
                <pre className="text-[8px] leading-[1.2] sm:text-xs sm:leading-[1.3] mb-4 warn overflow-x-auto">{CHESS_ASCII}</pre>
                <p>
                  <span className="key-blue">STATUS:</span> Daily puzzles on Lichess.
                  <br />
                  <span className="key-blue">PHILOSOPHY:</span>{' '}
                  <span className="string">&quot;Every pawn sacrifice teaches patience, every fork teaches opportunism.&quot;</span>
                </p>
              </div>

              {/* Contact */}
              <div className="section-fade" style={{ animationDelay: '0.6s' }}>
                <p className="prompt mb-2">cat contact.txt</p>
                <p className="mb-1">
                  GitHub &nbsp;&nbsp;&nbsp;: <a href={profile.contact.github} className="terminal-link" target="_blank" rel="noopener noreferrer">github.com/AndreaCadonna</a>
                </p>
                <p className="mb-1">
                  LinkedIn &nbsp;: <a href={profile.contact.linkedin} className="terminal-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/andrea-cadonna</a>
                </p>
                <p className="mb-4">
                  Email &nbsp;&nbsp;&nbsp;&nbsp;: <a href={`mailto:${profile.contact.email}`} className="terminal-link">{profile.contact.email}</a>
                </p>
              </div>

              {/* Final prompt */}
              {showPrompt && (
                <div className="section-fade mt-8">
                  <span className="prompt" />
                  <span className="cursor" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
