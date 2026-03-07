'use client';

import { useState } from 'react';
import HomepagePixelArt from '../../components/HomepagePixelArt';
import HomepageBrutalism from '../../components/HomepageBrutalism';
import HomepageTerminal from '../../components/HomepageTerminal';
import HomepageY2K from '../../components/HomepageY2K';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const VARIATIONS = [
  { id: 'terminal', label: 'Terminal', emoji: '💻', component: HomepageTerminal },
  { id: 'pixel', label: 'Pixel Art', emoji: '🎮', component: HomepagePixelArt },
  { id: 'brutal', label: 'Brutalism', emoji: '🔨', component: HomepageBrutalism },
  { id: 'y2k', label: 'Y2K', emoji: '🌐', component: HomepageY2K },
] as const;

export default function PreviewPage() {
  const [active, setActive] = useState(0);
  const ActiveComponent = VARIATIONS[active].component;

  return (
    <div style={{ minHeight: '100vh' }}>
      <LanguageSwitcher />
      {/* Floating switcher bar */}
      <div style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        display: 'flex',
        gap: 3,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(12px)',
        padding: '5px 6px',
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        maxWidth: 'calc(100vw - 32px)',
        overflowX: 'auto',
      }}>
        {VARIATIONS.map((v, i) => (
          <button
            key={v.id}
            onClick={() => setActive(i)}
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 12,
              fontWeight: active === i ? 600 : 400,
              padding: '7px 12px',
              borderRadius: 9,
              border: 'none',
              cursor: 'pointer',
              background: active === i ? '#fff' : 'transparent',
              color: active === i ? '#000' : '#888',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span style={{ marginRight: 4 }}>{v.emoji}</span>
            {v.label}
          </button>
        ))}
      </div>

      {/* Render active variation */}
      <ActiveComponent />
    </div>
  );
}
