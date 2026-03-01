'use client';

import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import ChessPuzzleLogin from './components/ChessPuzzleLogin';
import HomepageTerminal from './components/HomepageTerminal';
import HomepagePixelArt from './components/HomepagePixelArt';
import HomepageBrutalism from './components/HomepageBrutalism';
import HomepageY2K from './components/HomepageY2K';

type PageState = 'welcome' | 'puzzle' | 'portfolio';
type ThemeId = 'terminal' | 'pixel' | 'brutal' | 'y2k';

const THEMES = [
  { id: 'terminal' as const, label: 'Terminal', component: HomepageTerminal },
  { id: 'pixel' as const, label: 'Pixel Art', component: HomepagePixelArt },
  { id: 'brutal' as const, label: 'Brutalism', component: HomepageBrutalism },
  { id: 'y2k' as const, label: 'Y2K', component: HomepageY2K },
] as const;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('welcome');
  const [activeTheme, setActiveTheme] = useState<ThemeId>('terminal');

  const handlePlayPuzzle = () => setCurrentPage('puzzle');
  const handleSkipToWebsite = () => setCurrentPage('portfolio');
  const handlePuzzleSolved = () => setCurrentPage('portfolio');

  if (currentPage === 'welcome') {
    return (
      <WelcomePage
        onPlayPuzzle={handlePlayPuzzle}
        onSkipToWebsite={handleSkipToWebsite}
      />
    );
  }

  if (currentPage === 'puzzle') {
    return <ChessPuzzleLogin onPuzzleSolved={handlePuzzleSolved} />;
  }

  const ActiveTheme = THEMES.find(t => t.id === activeTheme)!.component;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ThemeSwitcher
        themes={THEMES}
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />
      <ActiveTheme />
    </div>
  );
}

function ThemeSwitcher({
  themes,
  activeTheme,
  onThemeChange,
}: {
  themes: readonly { id: ThemeId; label: string; component: React.ComponentType }[];
  activeTheme: ThemeId;
  onThemeChange: (id: ThemeId) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');

        .theme-switcher-toggle {
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 10001;
          font-family: 'Fira Code', monospace;
          font-size: 11px;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid #00ff4133;
          color: #00ff41;
          padding: 8px 14px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .theme-switcher-toggle:hover {
          border-color: #00ff41;
          box-shadow: 0 0 15px #00ff4122;
        }

        .theme-switcher-panel {
          position: fixed;
          top: 52px;
          right: 16px;
          z-index: 10001;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid #00ff4133;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 20px #00ff4108;
          overflow: hidden;
          animation: tsSlideIn 0.2s ease-out;
        }

        @keyframes tsSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .theme-switcher-header {
          padding: 10px 16px;
          border-bottom: 1px solid #1a1a1a;
          color: #555;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .theme-switcher-option {
          display: block;
          width: 100%;
          text-align: left;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          background: transparent;
          border: none;
          color: #888;
          padding: 10px 16px;
          cursor: pointer;
          transition: all 0.15s;
          border-left: 2px solid transparent;
        }

        .theme-switcher-option:hover {
          background: #00ff4108;
          color: #00ff41;
          border-left-color: #00ff4144;
        }

        .theme-switcher-option.ts-active {
          color: #00ff41;
          background: #00ff4110;
          border-left-color: #00ff41;
        }

        .ts-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }

        .ts-dot-active {
          background: #00ff41;
          box-shadow: 0 0 6px #00ff41;
        }

        .ts-dot-inactive {
          background: #333;
        }
      `}</style>

      <button
        className="theme-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch theme"
      >
        <span style={{ color: '#00aaff' }}>&gt;</span>
        theme
        <span style={{ color: '#555' }}>
          [{themes.find(t => t.id === activeTheme)?.label}]
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
            }}
            onClick={() => setIsOpen(false)}
          />
          <div className="theme-switcher-panel">
            <div className="theme-switcher-header">
              $ select-theme
            </div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-switcher-option ${activeTheme === theme.id ? 'ts-active' : ''}`}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
              >
                <span className={`ts-dot ${activeTheme === theme.id ? 'ts-dot-active' : 'ts-dot-inactive'}`} />
                {theme.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
