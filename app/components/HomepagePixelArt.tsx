'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedData } from '@/lib/data';
import { profile, skills, getExperienceSorted, getFeaturedProjects, education, languages, interests, softSkills } from '@/lib/data';
import type { Skill } from '@/lib/data';

const sortedExp = getExperienceSorted();
const featured = getFeaturedProjects();

const proficiencyToLevel = (p?: string): number => {
  switch (p) {
    case 'expert': return 98;
    case 'advanced': return 88;
    case 'intermediate': return 72;
    case 'beginner': return 50;
    default: return 40;
  }
};

const CATEGORY_COLORS: Record<string, string> = {
  frontend: '#DD0031',
  backend: '#68A063',
  databaseAndCloud: '#FF9900',
  aiAndAutomation: '#c084fc',
  devopsAndPractices: '#2496ED',
  aiAugmentedDev: '#00ffcc',
};

const SKILLS = Object.entries(skills).map(([key, group]) => {
  const avgLevel = Math.round(
    group.skills.reduce((sum: number, s: Skill) => sum + proficiencyToLevel(s.proficiency), 0) / group.skills.length
  );
  return {
    name: group.label.toUpperCase().replace(/ & /g, '/').replace(/ TECHNOLOGIES/g, '').replace(/ TOOLS/g, ''),
    level: avgLevel,
    color: CATEGORY_COLORS[key] || '#ffffff',
  };
});

const INITIAL_PROJECTS = 4;

export default function HomepagePixelArt() {
  const t = useTranslations('pixel');
  const tc = useTranslations('common');
  const locale = useLocale();
  const localized = getLocalizedData(locale);

  const QUESTS = useMemo(() => sortedExp.map((exp, i) => {
    const loc = localized.experience.find(e => e.id === exp.id);
    return {
      title: (loc?.role || exp.role).toUpperCase(),
      guild: exp.company,
      period: `${exp.startDate.split('-')[0]} - ${exp.endDate === 'present' ? 'NOW' : exp.endDate.split('-')[0]}`,
      xp: `+${Math.max(2000, 9500 - i * 1500)}  XP`,
      tasks: (loc?.achievements || exp.achievements).map(a => a.description),
    };
  }), [localized]);

  const ALL_ACHIEVEMENTS = useMemo(() => featured.map(p => {
    const loc = localized.projects.find(lp => lp.id === p.id);
    return {
      id: p.id,
      name: p.name,
      tagline: loc?.tagline || p.tagline,
      description: loc?.description || p.description,
      technologies: p.technologies.slice(0, 5),
      highlights: (loc?.highlights || p.highlights).slice(0, 3),
      status: p.status,
      startDate: p.startDate.split('-')[0],
      endDate: p.endDate === 'present' ? 'NOW' : p.endDate?.split('-')[0] || '',
      githubUrl: p.links.find(l => l.type === 'github')?.url || '',
      rarity: p.status === 'production' ? 'LEGENDARY' as const : p.status === 'in-progress' ? 'EPIC' as const : 'RARE' as const,
    };
  }), [localized]);

  const [booted, setBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>(SKILLS.map(() => 0));
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const visibleAchievements = showAllProjects ? ALL_ACHIEVEMENTS : ALL_ACHIEVEMENTS.slice(0, INITIAL_PROJECTS);

  const toggleProject = (id: string) => {
    setExpandedProjects(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 1200);
    const t2 = setTimeout(() => setShowContent(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const timer = setTimeout(() => {
      setAnimatedSkills(SKILLS.map(s => s.level));
    }, 300);
    return () => clearTimeout(timer);
  }, [showContent]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .pixel-page {
          font-family: 'Press Start 2P', monospace;
          background: #0f0f2d;
          color: #e8e8e8;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          image-rendering: pixelated;
        }

        .pixel-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.15) 2px,
            rgba(0,0,0,0.15) 4px
          );
          pointer-events: none;
          z-index: 100;
        }

        .pixel-border {
          border: 4px solid #8888cc;
          box-shadow:
            inset 2px 2px 0 #aaaae8,
            inset -2px -2px 0 #444488,
            4px 4px 0 #000;
        }

        .pixel-border-gold {
          border: 4px solid #ffcc00;
          box-shadow:
            inset 2px 2px 0 #ffee88,
            inset -2px -2px 0 #aa8800,
            4px 4px 0 #000;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes bootFlicker {
          0% { opacity: 0; }
          10% { opacity: 1; }
          12% { opacity: 0.3; }
          14% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fillBar {
          from { width: 0; }
        }

        .boot-text { animation: bootFlicker 1.2s ease-out forwards; }
        .fade-in { animation: slideUp 0.6s ease-out forwards; }

        .skill-bar-fill {
          transition: width 1.5s steps(20);
          image-rendering: pixelated;
        }

        .pixel-btn {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          padding: 12px 20px;
          background: #2a2a5a;
          color: #e8e8e8;
          border: 3px solid #8888cc;
          box-shadow: inset 1px 1px 0 #aaaae8, inset -1px -1px 0 #444488, 3px 3px 0 #000;
          cursor: pointer;
          transition: all 0.1s;
          text-decoration: none;
          display: inline-block;
        }

        .pixel-btn:hover {
          background: #4a4a8a;
          transform: translate(1px, 1px);
          box-shadow: inset 1px 1px 0 #aaaae8, inset -1px -1px 0 #444488, 2px 2px 0 #000;
        }

        .pixel-btn:active {
          transform: translate(3px, 3px);
          box-shadow: inset 1px 1px 0 #444488, inset -1px -1px 0 #aaaae8, 0 0 0 #000;
        }

        .rarity-legendary { color: #ff8800; text-shadow: 0 0 8px #ff880066; }
        .rarity-epic { color: #aa44ff; text-shadow: 0 0 8px #aa44ff66; }
        .rarity-rare { color: #0088ff; text-shadow: 0 0 8px #0088ff66; }

        .chess-pattern {
          background-image:
            linear-gradient(45deg, #1a1a3d 25%, transparent 25%),
            linear-gradient(-45deg, #1a1a3d 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #1a1a3d 75%),
            linear-gradient(-45deg, transparent 75%, #1a1a3d 75%);
          background-size: 24px 24px;
          background-position: 0 0, 0 12px, 12px -12px, -12px 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .pixel-knight {
          font-size: 48px;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 0 #000);
        }

        @media (min-width: 640px) {
          .pixel-knight { font-size: 64px; }
        }
      `}</style>

      <div className="pixel-page">
        {/* Boot Screen */}
        {!booted && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0f2d]">
            <div className="boot-text text-center">
              <p className="text-[#00ff88] text-xs mb-4">{t('loadingExe')}</p>
              <div className="w-48 sm:w-64 h-4 border-2 border-[#00ff88] mx-auto">
                <div className="h-full bg-[#00ff88]" style={{
                  animation: 'fillBar 1s steps(10) forwards',
                  width: '100%'
                }} />
              </div>
              <p className="text-[#666] text-[8px] mt-4">{t('pressStart')}</p>
            </div>
          </div>
        )}

        {showContent && (
          <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
            {/* Header Bar */}
            <div className="pixel-border-gold bg-[#1a1a3d] p-2 sm:p-3 mb-6 sm:mb-8 flex justify-between items-center fade-in">
              <span className="text-[#ffcc00] text-[8px] sm:text-xs">
                &#9823; {t('portfolioQuest')}
              </span>
              <span className="text-[7px] sm:text-[8px] text-[#888] hidden sm:inline">
                HP: 999/999 | MP: 420/420
              </span>
            </div>

            {/* Hero - Character Select */}
            <section className="pixel-border bg-[#1a1a3d] p-4 sm:p-8 mb-8 fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-[#ffcc00] text-[10px] sm:text-xs mb-4 sm:mb-6 text-center tracking-wider">
                &#9472;&#9472; {t('characterSelect')} &#9472;&#9472;
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
                <div className="pixel-knight select-none">&#9822;</div>
                <div className="text-center md:text-left">
                  <h1 className="text-lg md:text-xl text-[#ffffff] mb-2 leading-relaxed">
                    {profile.fullName.toUpperCase()}
                  </h1>
                  <p className="text-[8px] text-[#aaaadd] mb-4 leading-loose">
                    {t('class')}: {localized.profile.title.toUpperCase()} | LVL: 99
                    <br />
                    {t('guild')}: {profile.contact.location.toUpperCase()}
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                    <span className="text-[8px] px-3 py-1 bg-[#00ff88] text-[#0f0f2d]">
                      {t('online')}
                    </span>
                    <span className="text-[8px] px-3 py-1 bg-[#ff4444] text-white">
                      {t('seekingQuests')}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* About - Lore */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-[#00ff88] text-xs mb-4">&#9654; {t('backstory')}</h2>
              <p className="text-[8px] leading-[2.2] text-[#ccccee]">
                {t('backstoryText', { years: new Date().getFullYear() - 2020 })}
              </p>
            </section>

            {/* Stats - Skills */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('stats')}</h2>
              <div className="space-y-4">
                {SKILLS.map((skill, i) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <span className="text-[8px] w-16 sm:w-28 text-[#aaaadd] shrink-0">
                      {skill.name}
                    </span>
                    <div className="flex-1 h-5 border-2 border-[#444488] bg-[#0a0a1a] relative overflow-hidden min-w-[60px]">
                      <div
                        className="skill-bar-fill h-full absolute left-0 top-0"
                        style={{
                          width: `${animatedSkills[i]}%`,
                          background: `repeating-linear-gradient(
                            90deg,
                            ${skill.color},
                            ${skill.color} 6px,
                            ${skill.color}88 6px,
                            ${skill.color}88 8px
                          )`,
                          boxShadow: `0 0 10px ${skill.color}44`,
                        }}
                      />
                    </div>
                    <span className="text-[8px] text-[#ffcc00] w-8 sm:w-12 text-right shrink-0">
                      {animatedSkills[i]}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quest Log - Experience */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('questLog')}</h2>
              <div className="space-y-6">
                {QUESTS.map((quest) => (
                  <div key={quest.title} className="border-2 border-[#444488] p-4 bg-[#12122a]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <span className="text-[#ffcc00] text-[10px]">
                          [!] {quest.title}
                        </span>
                        <p className="text-[8px] text-[#8888bb] mt-1">
                          {t('guild')}: {quest.guild} | {quest.period}
                        </p>
                      </div>
                      <span className="text-[8px] text-[#00ff88] shrink-0">
                        {quest.xp}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {quest.tasks.map((task, j) => (
                        <p key={j} className="text-[8px] text-[#aaaacc] pl-4">
                          {'>'} {task}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements - Projects */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('achievementsUnlocked')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleAchievements.map((a) => {
                  const isExpanded = expandedProjects.has(a.id);
                  return (
                    <div key={a.id} className="border-2 border-[#444488] bg-[#12122a] hover:bg-[#1e1e3e] transition-colors flex flex-col">
                      <div className="p-4 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg shrink-0">&#127942;</span>
                            <span className="text-[10px] text-white truncate">{a.name}</span>
                          </div>
                          <span className={`text-[8px] shrink-0 ${a.rarity === 'LEGENDARY' ? 'rarity-legendary' : a.rarity === 'EPIC' ? 'rarity-epic' : 'rarity-rare'}`}>
                            [{a.rarity}]
                          </span>
                        </div>
                        <p className="text-[8px] text-[#aaaacc] mb-2 leading-[1.8]">{a.tagline}</p>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-[7px] px-2 py-0.5 bg-[#2a2a5a] border border-[#444488] text-[#8888bb]">
                            {a.startDate}{a.endDate ? ` - ${a.endDate}` : ''}
                          </span>
                          <span className={`text-[7px] px-2 py-0.5 border ${
                            a.status === 'production' ? 'bg-[#1a3a1a] border-[#00ff88] text-[#00ff88]' :
                            a.status === 'in-progress' ? 'bg-[#3a3a1a] border-[#ffcc00] text-[#ffcc00]' :
                            'bg-[#1a1a3a] border-[#0088ff] text-[#0088ff]'
                          }`}>
                            {a.status === 'production' ? t('deployed') : a.status === 'in-progress' ? t('inDev') : t('openSrc')}
                          </span>
                        </div>
                        <div className="flex gap-1 flex-wrap mb-2">
                          {a.technologies.map(tech => (
                            <span key={tech} className="text-[7px] px-1.5 py-0.5 bg-[#2a2a5a] text-[#8888bb] border border-[#333366]">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {isExpanded && (
                          <div className="mt-3 border-t border-[#333366] pt-3">
                            <p className="text-[8px] text-[#aaaacc] leading-[2] mb-3">{a.description}</p>
                            {a.highlights.length > 0 && (
                              <>
                                <p className="text-[8px] text-[#ffcc00] mb-1">{t('keyLoot')}:</p>
                                {a.highlights.map((h, j) => (
                                  <p key={j} className="text-[7px] text-[#8888bb] pl-3 leading-[2]">
                                    {'>'} {h}
                                  </p>
                                ))}
                              </>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="border-t border-[#333366] px-4 py-2 flex items-center justify-between gap-2">
                        <button
                          onClick={() => toggleProject(a.id)}
                          className="text-[8px] text-[#00ff88] hover:text-[#88ffcc] transition-colors cursor-pointer bg-transparent border-none p-0 font-[inherit]"
                        >
                          {isExpanded ? t('collapse') : t('inspect')}
                        </button>
                        {a.githubUrl && (
                          <a
                            href={a.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[8px] text-[#aa44ff] hover:text-[#cc88ff] transition-colors no-underline"
                          >
                            {'</>'} GITHUB
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {ALL_ACHIEVEMENTS.length > INITIAL_PROJECTS && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="pixel-btn"
                  >
                    {showAllProjects ? `▲ ${t('showLess')}` : `▼ ${t('showMore', { count: ALL_ACHIEVEMENTS.length - INITIAL_PROJECTS })}`}
                  </button>
                </div>
              )}
            </section>

            {/* Education - Training */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.55s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('trainingAcademy')}</h2>
              {education.map((edu, idx) => {
                const loc = localized.education[idx];
                return (
                  <div key={edu.institution} className="border-2 border-[#444488] p-4 bg-[#12122a] mb-4">
                    <span className="text-[#ffcc00] text-[10px]">[!] {(loc?.degree || edu.degree).toUpperCase()} IN {(loc?.field || edu.field).toUpperCase()}</span>
                    <p className="text-[8px] text-[#8888bb] mt-1">
                      {t('guild')}: {edu.institution.toUpperCase()} | {edu.startYear}-{edu.endYear}
                    </p>
                    <p className="text-[8px] text-[#8888bb]">{t('region')}: {edu.location.toUpperCase()}</p>
                    {(loc?.thesis || edu.thesis) && (
                      <p className="text-[8px] text-[#aaaacc] mt-2 pl-4">
                        {'>'} {t('finalBoss')}: &quot;{(loc?.thesis || edu.thesis)!.toUpperCase()}&quot;
                      </p>
                    )}
                  </div>
                );
              })}
              <div className="mt-4">
                <span className="text-[#ffcc00] text-[8px]">{t('languagesUnlocked')}:</span>
                <div className="flex gap-3 mt-2 flex-wrap">
                  {localized.languages.map((lang) => (
                    <span key={lang.code} className="text-[8px] px-3 py-1 bg-[#2a2a5a] border-2 border-[#444488] text-[#aaaadd]">
                      [{lang.code.toUpperCase()}] {lang.name.toUpperCase()} - {lang.level.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Interests - Skill Tree */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('skillTreeBranches')}</h2>
              <div className="space-y-4">
                {localized.interests.map((interest, i) => (
                  <div key={i} className="border-2 border-[#444488] p-3 bg-[#12122a]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#ffcc00] text-[10px]">&#9733;</span>
                      <span className="text-[#ffcc00] text-[10px]">{interest.area.toUpperCase()}</span>
                    </div>
                    <p className="text-[8px] text-[#aaaacc] pl-4">
                      {'>'} {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills - Character Traits */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.65s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('characterTraits')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {localized.softSkills.map((skill, i) => (
                  <div key={i} className="border-2 border-[#444488] p-3 bg-[#12122a]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#c084fc] text-[10px]">&#9830; {t('buff')}:</span>
                      <span className="text-[10px] text-white">{skill.name.toUpperCase()}</span>
                    </div>
                    <p className="text-[8px] text-[#aaaacc] pl-4">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Ability - Chess */}
            <section className="pixel-border-gold bg-[#1a1a3d] p-6 mb-8 fade-in chess-pattern" style={{ animationDelay: '0.7s' }}>
              <div className="bg-[#1a1a3ddd] p-6">
                <h2 className="text-[#ffcc00] text-xs mb-4 text-center">
                  &#9733; {t('specialAbility')} &#9733;
                </h2>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl mb-4 select-none" style={{ filter: 'drop-shadow(0 0 8px #ffcc0066)' }}>
                    &#9818; &#9819; &#9820; &#9821; &#9822; &#9823;
                  </div>
                  <p className="text-[8px] text-[#ccccee] leading-[2.2] max-w-md mx-auto">
                    {t('chessDescription')}
                  </p>
                </div>
              </div>
            </section>

            {/* Footer - Contact */}
            <footer className="pixel-border bg-[#1a1a3d] p-6 mb-8 text-center fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; {t('contactScroll')}</h2>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href={profile.contact.github} className="pixel-btn" target="_blank" rel="noopener noreferrer">
                  {'</>'}  GITHUB
                </a>
                <a href={profile.contact.linkedin} className="pixel-btn" target="_blank" rel="noopener noreferrer">
                  [in] LINKEDIN
                </a>
                <a href={`mailto:${profile.contact.email}`} className="pixel-btn">
                  {'@'} EMAIL
                </a>
              </div>
              <p className="text-[8px] text-[#555588] mt-8">
                {t('gameOver')}
              </p>
              <p className="text-[8px] text-[#333355] mt-2" style={{ animation: 'blink 1.5s infinite' }}>
                &#9660; {t('insertCoin')} &#9660;
              </p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
