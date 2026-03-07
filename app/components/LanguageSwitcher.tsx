'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/navigation';
import { locales, type Locale } from '@/lib/i18n/config';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  it: 'IT',
  de: 'DE',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  }

  return (
    <>
      <style>{`
        .lang-switcher-toggle {
          position: fixed;
          top: 16px;
          right: 160px;
          z-index: 10001;
          font-family: 'Fira Code', monospace;
          font-size: 11px;
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid #00aaff33;
          color: #00aaff;
          padding: 8px 14px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .lang-switcher-toggle:hover {
          border-color: #00aaff;
          box-shadow: 0 0 15px #00aaff22;
        }

        .lang-switcher-panel {
          position: fixed;
          top: 52px;
          right: 160px;
          z-index: 10001;
          font-family: 'Fira Code', monospace;
          font-size: 12px;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid #00aaff33;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 20px #00aaff08;
          overflow: hidden;
          animation: lsSlideIn 0.2s ease-out;
        }

        @keyframes lsSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .lang-switcher-header {
          padding: 10px 16px;
          border-bottom: 1px solid #1a1a1a;
          color: #555;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .lang-switcher-option {
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

        .lang-switcher-option:hover {
          background: #00aaff08;
          color: #00aaff;
          border-left-color: #00aaff44;
        }

        .lang-switcher-option.ls-active {
          color: #00aaff;
          background: #00aaff10;
          border-left-color: #00aaff;
        }

        .ls-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }

        .ls-dot-active {
          background: #00aaff;
          box-shadow: 0 0 6px #00aaff;
        }

        .ls-dot-inactive {
          background: #333;
        }
      `}</style>

      <button
        className="lang-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch language"
      >
        <span style={{ color: '#00aaff' }}>&gt;</span>
        {t('label')}
        <span style={{ color: '#555' }}>
          [{LOCALE_LABELS[locale]}]
        </span>
      </button>

      {isOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
            }}
            onClick={() => setIsOpen(false)}
          />
          <div className="lang-switcher-panel">
            <div className="lang-switcher-header">
              {t('selectLang')}
            </div>
            {locales.map((loc) => (
              <button
                key={loc}
                className={`lang-switcher-option ${locale === loc ? 'ls-active' : ''}`}
                onClick={() => switchLocale(loc)}
              >
                <span className={`ls-dot ${locale === loc ? 'ls-dot-active' : 'ls-dot-inactive'}`} />
                {LOCALE_LABELS[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
