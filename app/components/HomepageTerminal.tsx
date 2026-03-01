'use client';

import { useMemo } from 'react';
import { profile } from '@/lib/data';
import { useTerminal, BOOT_LINES } from './terminal/useTerminal';
import { renderCommand } from './terminal/renderers';
import TerminalInput from './terminal/TerminalInput';

const ASCII_NAME_FULL = `
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



// Stable matrix rain data (computed once, avoids hydration mismatch)
const MATRIX_COLS = Array.from({ length: 15 }, (_, i) => ({
  left: `${i * 7}%`,
  duration: `${12 + i * 1.3}s`,
  delay: `${-(i * 1.7)}s`,
  chars: '01'.repeat(80),
}));

export default function HomepageTerminal() {
  const terminal = useTerminal();

  // Memoize to avoid rebuilding matrix rain on every render
  const matrixRain = useMemo(() => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
      {MATRIX_COLS.map((col, i) => (
        <div
          key={i}
          className="matrix-col"
          style={{
            left: col.left,
            animationDuration: col.duration,
            animationDelay: col.delay,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  ), []);

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

        .phosphor { text-shadow: 0 0 3px #00ff4144, 0 0 6px #00ff4111; }

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

        /* Terminal scrollbar — Webkit */
        .terminal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: #00ff4125;
          border-radius: 3px;
        }
        .terminal-scroll::-webkit-scrollbar-thumb:hover {
          background: #00ff4150;
          box-shadow: 0 0 6px #00ff4133;
        }

        /* Terminal scrollbar — Firefox */
        .terminal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #00ff4125 transparent;
        }
      `}</style>

      <div className="terminal-page" onClick={() => { /* clicking body focuses input via TerminalInput */ }}>
        {/* Matrix rain background */}
        {matrixRain}

        {/* Terminal Window — fixed viewport height, scrolls internally */}
        <div className="relative z-10 max-w-4xl mx-auto p-4 md:p-8 flex flex-col" style={{ height: '100vh' }}>
          {/* Title bar (stays at top) */}
          <div className="flex items-center gap-2 pb-3 border-b border-[#222] shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-[#555] text-xs">portfolio@{profile.lastName.toLowerCase()}:~</span>
          </div>

          {/* Scrollable content area */}
          <div className="terminal-scroll flex-1 overflow-y-auto min-h-0 pt-4 pb-4" ref={terminal.scrollRef}>
            {/* Boot Sequence */}
            <div className="mb-6 phosphor">
              {BOOT_LINES.slice(0, terminal.visibleBootLines).map((line, i) => (
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

            {terminal.phase === 'interactive' && (
              <div className="phosphor">
                {/* ASCII Header */}
                <div className="terminal-section section-fade mb-6">
                  <pre className="text-[5px] sm:text-[7px] md:text-[11px] leading-[1.15] bright overflow-x-auto">
                    {ASCII_NAME_FULL}
                  </pre>
                  <p className="comment mt-2">{'// software engineer & chess enthusiast'}</p>
                </div>

                {/* Command output history */}
                {terminal.lines.map((line) => {
                  if (line.type === 'input') {
                    return (
                      <div key={line.id} className="mt-4">
                        <span className="prompt">{line.content}</span>
                      </div>
                    );
                  }
                  if (line.type === 'output' && line.commandKey) {
                    return (
                      <div key={line.id} className="mb-2">
                        {renderCommand(line.commandKey, line.args || '', line.raw || '', terminal.commandHistory)}
                      </div>
                    );
                  }
                  return null;
                })}

                {/* Interactive input */}
                <div className="mt-4">
                  <TerminalInput
                    currentInput={terminal.currentInput}
                    setCurrentInput={terminal.setCurrentInput}
                    onExecute={terminal.executeCommand}
                    onHistoryUp={terminal.handleHistoryUp}
                    onHistoryDown={terminal.handleHistoryDown}
                    onTab={terminal.handleTab}
                    onCtrlC={terminal.handleCtrlC}
                    onClearInput={terminal.clearInput}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
