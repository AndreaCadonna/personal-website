'use client';

import { useState, useEffect } from 'react';
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

const QUESTS = sortedExp.map((exp, i) => ({
  title: exp.role.toUpperCase(),
  guild: exp.company,
  period: `${exp.startDate.split('-')[0]} - ${exp.endDate === 'present' ? 'NOW' : exp.endDate.split('-')[0]}`,
  xp: `+${Math.max(2000, 9500 - i * 1500)}  XP`,
  tasks: exp.achievements.map(a => a.description),
}));

const INITIAL_PROJECTS = 4;
const ALL_ACHIEVEMENTS = featured.map(p => ({
  name: p.name,
  desc: p.technologies.slice(0, 3).join(' + '),
  rarity: p.status === 'production' ? 'LEGENDARY' as const : p.status === 'in-progress' ? 'EPIC' as const : 'RARE' as const,
}));

export default function HomepagePixelArt() {
  const [booted, setBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>(SKILLS.map(() => 0));
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleAchievements = showAllProjects ? ALL_ACHIEVEMENTS : ALL_ACHIEVEMENTS.slice(0, INITIAL_PROJECTS);

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
              <p className="text-[#00ff88] text-xs mb-4">LOADING PORTFOLIO.EXE...</p>
              <div className="w-48 sm:w-64 h-4 border-2 border-[#00ff88] mx-auto">
                <div className="h-full bg-[#00ff88]" style={{
                  animation: 'fillBar 1s steps(10) forwards',
                  width: '100%'
                }} />
              </div>
              <p className="text-[#666] text-[8px] mt-4">PRESS START</p>
            </div>
          </div>
        )}

        {showContent && (
          <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
            {/* Header Bar */}
            <div className="pixel-border-gold bg-[#1a1a3d] p-2 sm:p-3 mb-6 sm:mb-8 flex justify-between items-center fade-in">
              <span className="text-[#ffcc00] text-[8px] sm:text-xs">
                &#9823; PORTFOLIO QUEST
              </span>
              <span className="text-[7px] sm:text-[8px] text-[#888] hidden sm:inline">
                HP: 999/999 | MP: 420/420
              </span>
            </div>

            {/* Hero - Character Select */}
            <section className="pixel-border bg-[#1a1a3d] p-4 sm:p-8 mb-8 fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-[#ffcc00] text-[10px] sm:text-xs mb-4 sm:mb-6 text-center tracking-wider">
                &#9472;&#9472; CHARACTER SELECT &#9472;&#9472;
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
                <div className="pixel-knight select-none">&#9822;</div>
                <div className="text-center md:text-left">
                  <h1 className="text-lg md:text-xl text-[#ffffff] mb-2 leading-relaxed">
                    {profile.fullName.toUpperCase()}
                  </h1>
                  <p className="text-[8px] text-[#aaaadd] mb-4 leading-loose">
                    CLASS: {profile.title.toUpperCase()} | LVL: 99
                    <br />
                    GUILD: {profile.contact.location.toUpperCase()}
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                    <span className="text-[8px] px-3 py-1 bg-[#00ff88] text-[#0f0f2d]">
                      ONLINE
                    </span>
                    <span className="text-[8px] px-3 py-1 bg-[#ff4444] text-white">
                      SEEKING QUESTS
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* About - Lore */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-[#00ff88] text-xs mb-4">&#9654; BACKSTORY</h2>
              <p className="text-[8px] leading-[2.2] text-[#ccccee]">
                A SEASONED WARRIOR OF THE DIGITAL REALM WITH {new Date().getFullYear() - 2020}+ YEARS OF EXPERIENCE.
                SPECIALIZING IN AI-AUGMENTED DEVELOPMENT WORKFLOWS, FULLSTACK ENGINEERING, AND
                STRATEGIC SYSTEM ARCHITECTURE. COMBINES THE ANALYTICAL MIND OF A CHESS PLAYER
                WITH THE TECHNICAL PROWESS OF A CODE ARCHITECT. KNOWN FOR TURNING COMPLEX
                DUNGEONS INTO ELEGANT SOLUTIONS.
              </p>
            </section>

            {/* Stats - Skills */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; STATS</h2>
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
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; QUEST LOG</h2>
              <div className="space-y-6">
                {QUESTS.map((quest) => (
                  <div key={quest.title} className="border-2 border-[#444488] p-4 bg-[#12122a]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <span className="text-[#ffcc00] text-[10px]">
                          [!] {quest.title}
                        </span>
                        <p className="text-[8px] text-[#8888bb] mt-1">
                          GUILD: {quest.guild} | {quest.period}
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
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; ACHIEVEMENTS UNLOCKED</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleAchievements.map((a) => (
                  <div key={a.name} className="border-2 border-[#444488] p-4 bg-[#12122a] hover:bg-[#1e1e3e] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">&#127942;</span>
                      <span className="text-[10px] text-white">{a.name}</span>
                    </div>
                    <p className="text-[8px] text-[#8888bb] mb-2">{a.desc}</p>
                    <span className={`text-[8px] ${a.rarity === 'LEGENDARY' ? 'rarity-legendary' : a.rarity === 'EPIC' ? 'rarity-epic' : 'rarity-rare'}`}>
                      [{a.rarity}]
                    </span>
                  </div>
                ))}
              </div>
              {ALL_ACHIEVEMENTS.length > INITIAL_PROJECTS && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="pixel-btn"
                  >
                    {showAllProjects ? '▲ SHOW LESS' : `▼ LOAD MORE (${ALL_ACHIEVEMENTS.length - INITIAL_PROJECTS} MORE)`}
                  </button>
                </div>
              )}
            </section>

            {/* Education - Training */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.55s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; TRAINING ACADEMY</h2>
              {education.map((edu) => (
                <div key={edu.institution} className="border-2 border-[#444488] p-4 bg-[#12122a] mb-4">
                  <span className="text-[#ffcc00] text-[10px]">[!] {edu.degree.toUpperCase()} IN {edu.field.toUpperCase()}</span>
                  <p className="text-[8px] text-[#8888bb] mt-1">
                    GUILD: {edu.institution.toUpperCase()} | {edu.startYear}-{edu.endYear}
                  </p>
                  <p className="text-[8px] text-[#8888bb]">REGION: {edu.location.toUpperCase()}</p>
                  {edu.thesis && (
                    <p className="text-[8px] text-[#aaaacc] mt-2 pl-4">
                      {'>'} FINAL BOSS: &quot;{edu.thesis.toUpperCase()}&quot;
                    </p>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <span className="text-[#ffcc00] text-[8px]">LANGUAGES UNLOCKED:</span>
                <div className="flex gap-3 mt-2 flex-wrap">
                  {languages.map((lang) => (
                    <span key={lang.code} className="text-[8px] px-3 py-1 bg-[#2a2a5a] border-2 border-[#444488] text-[#aaaadd]">
                      [{lang.code.toUpperCase()}] {lang.name.toUpperCase()} - {lang.level.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Interests - Skill Tree */}
            <section className="pixel-border bg-[#1a1a3d] p-6 mb-8 fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; SKILL TREE BRANCHES</h2>
              <div className="space-y-4">
                {interests.map((interest, i) => (
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
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; CHARACTER TRAITS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {softSkills.map((skill, i) => (
                  <div key={i} className="border-2 border-[#444488] p-3 bg-[#12122a]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#c084fc] text-[10px]">&#9830; BUFF:</span>
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
                  &#9733; SPECIAL ABILITY: CHESS MASTERY &#9733;
                </h2>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl mb-4 select-none" style={{ filter: 'drop-shadow(0 0 8px #ffcc0066)' }}>
                    &#9818; &#9819; &#9820; &#9821; &#9822; &#9823;
                  </div>
                  <p className="text-[8px] text-[#ccccee] leading-[2.2] max-w-md mx-auto">
                    STRATEGIC THINKING FORGED IN COUNTLESS CHESS BATTLES.
                    DAILY PUZZLE SOLVER ON LICHESS. EVERY MOVE ON THE BOARD
                    SHARPENS THE MIND FOR DEBUGGING CODE DUNGEONS.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer - Contact */}
            <footer className="pixel-border bg-[#1a1a3d] p-6 mb-8 text-center fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-[#00ff88] text-xs mb-6">&#9654; CONTACT SCROLL</h2>
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
                GAME OVER? NAH, THIS IS JUST THE BEGINNING.
              </p>
              <p className="text-[8px] text-[#333355] mt-2" style={{ animation: 'blink 1.5s infinite' }}>
                &#9660; INSERT COIN TO CONTINUE &#9660;
              </p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
