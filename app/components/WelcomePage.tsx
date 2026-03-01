'use client';

import React, { useState, useEffect } from 'react';

interface WelcomePageProps {
  onPlayPuzzle: () => void;
  onSkipToWebsite: () => void;
}

const BOOT_SEQUENCE = [
  { text: 'BIOS v3.14 — Portfolio System', delay: 0 },
  { text: 'Checking memory.......... 16384 MB OK', delay: 300 },
  { text: 'Detecting peripherals.... keyboard OK', delay: 500 },
  { text: 'Loading kernel modules...', delay: 700 },
  { text: '[  OK  ] Started Network Manager', delay: 900 },
  { text: '[  OK  ] Mounted Developer Filesystem', delay: 1050 },
  { text: '[  OK  ] Started Authentication Service', delay: 1200 },
  { text: '', delay: 1400 },
  { text: 'System ready. Choose authentication method:', delay: 1600 },
];

export default function WelcomePage({ onPlayPuzzle, onSkipToWebsite }: WelcomePageProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  useEffect(() => {
    BOOT_SEQUENCE.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => setBootDone(true), 400);
        }
      }, line.delay);
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');

        .welcome-terminal {
          font-family: 'Fira Code', 'Courier New', monospace;
          background: #0a0a0a;
          color: #00ff41;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-size: 14px;
          line-height: 1.7;
        }

        .welcome-terminal::before {
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

        .welcome-terminal::after {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%);
          pointer-events: none;
          z-index: 99;
        }

        .w-phosphor { text-shadow: 0 0 5px #00ff4166, 0 0 10px #00ff4122; }

        .w-matrix-col {
          position: absolute;
          top: -100%;
          font-size: 12px;
          color: #00ff4110;
          writing-mode: vertical-rl;
          animation: wMatrixFall linear infinite;
          white-space: nowrap;
        }

        @keyframes wMatrixFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(100vh + 100%)); }
        }

        @keyframes wBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .w-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #00ff41;
          animation: wBlink 1s step-end infinite;
          vertical-align: middle;
          margin-left: 2px;
        }

        @keyframes wFadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .w-fade-in {
          animation: wFadeSlideIn 0.5s ease-out both;
        }

        .w-option-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: transparent;
          border: 1px solid #1a3a1a;
          color: #00ff41;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          padding: 16px 20px;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .w-option-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #00ff41;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .w-option-btn:hover {
          border-color: #00ff41;
          box-shadow: 0 0 15px #00ff4122, inset 0 0 30px #00ff4108;
        }

        .w-option-btn:hover::before {
          opacity: 0.05;
        }

        .w-option-btn:hover .w-option-arrow {
          transform: translateX(4px);
          color: #ffd93d;
        }

        .w-option-arrow {
          transition: transform 0.2s, color 0.2s;
        }

        .w-dim { color: #444; }
        .w-blue { color: #00aaff; }
        .w-yellow { color: #ffd93d; }
        .w-ok { color: #28c840; }

        .w-ascii-border {
          color: #1a3a1a;
          white-space: pre;
          font-size: 12px;
          line-height: 1;
        }
      `}</style>

      <div className="welcome-terminal">
        {/* Matrix rain */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-matrix-col"
              style={{
                left: `${i * 8.5}%`,
                animationDuration: `${12 + Math.random() * 18}s`,
                animationDelay: `${Math.random() * -20}s`,
              }}
            >
              {'01'.repeat(80).split('').sort(() => Math.random() - 0.5).join('')}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            {/* Terminal window chrome */}
            <div className="border border-[#222] rounded-lg overflow-hidden shadow-2xl shadow-black/50">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border-b border-[#222]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-[#555] text-xs">auth@portfolio:~</span>
              </div>

              {/* Terminal body */}
              <div className="bg-[#0a0a0a] p-6 md:p-8 w-phosphor">
                {/* Boot sequence */}
                <div className="mb-6">
                  {BOOT_SEQUENCE.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className={line.text === '' ? 'h-4' : ''}>
                      {line.text.startsWith('[') ? (
                        <span>
                          <span className="w-ok">{line.text.substring(0, 8)}</span>
                          <span className="w-dim">{line.text.substring(8)}</span>
                        </span>
                      ) : line.text.startsWith('System ready') ? (
                        <span className="w-yellow">{line.text}</span>
                      ) : (
                        <span className="w-dim">{line.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Auth options */}
                {bootDone && (
                  <div className="w-fade-in">
                    <div className="w-ascii-border mb-5">
{`┌──────────────────────────────────────────────┐
│  SELECT AUTHENTICATION METHOD                │
└──────────────────────────────────────────────┘`}
                    </div>

                    <div className="space-y-3 mb-6">
                      <button
                        onClick={onPlayPuzzle}
                        onMouseEnter={() => setHoveredOption(1)}
                        onMouseLeave={() => setHoveredOption(null)}
                        className="w-option-btn"
                      >
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="w-blue">[1]</span>
                            <span className="ml-3">Chess Puzzle Authentication</span>
                            <div className="text-xs w-dim mt-1 ml-7">
                              Solve Lichess daily puzzle to verify identity
                            </div>
                          </div>
                          <span className="w-option-arrow text-lg">
                            {hoveredOption === 1 ? '>' : ' '}
                          </span>
                        </div>
                      </button>

                      <button
                        onClick={onSkipToWebsite}
                        onMouseEnter={() => setHoveredOption(2)}
                        onMouseLeave={() => setHoveredOption(null)}
                        className="w-option-btn"
                      >
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="w-blue">[2]</span>
                            <span className="ml-3">Guest Access</span>
                            <div className="text-xs w-dim mt-1 ml-7">
                              Skip authentication, proceed to portfolio
                            </div>
                          </div>
                          <span className="w-option-arrow text-lg">
                            {hoveredOption === 2 ? '>' : ' '}
                          </span>
                        </div>
                      </button>
                    </div>

                    <div className="flex items-center">
                      <span className="w-blue font-bold">$ </span>
                      <span className="w-dim">select option</span>
                      <span className="w-cursor" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center text-[11px] w-dim">
              Both paths lead to the same destination
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
