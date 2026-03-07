'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getLocalizedData } from '@/lib/data';
import { profile, skills, getExperienceSorted, getFeaturedProjects, allSkillNames, education } from '@/lib/data';
import type { Skill } from '@/lib/data';

const sortedExp = getExperienceSorted();
const featured = getFeaturedProjects();

const proficiencyToLevel = (p?: string): number => {
  switch (p) {
    case 'expert': return 5;
    case 'advanced': return 4;
    case 'intermediate': return 3;
    case 'beginner': return 2;
    default: return 1;
  }
};

const SKILLS = Object.entries(skills).map(([, group]) => {
  const avgLevel = group.skills.reduce((sum: number, s: Skill) => sum + proficiencyToLevel(s.proficiency), 0) / group.skills.length;
  return {
    name: group.label.replace(/ Technologies/g, '').replace(/ & /g, ' & '),
    stars: Math.round(avgLevel),
  };
});

const MARQUEE_SKILLS = allSkillNames.slice(0, 12).join(' \u2605 ') + ' \u2605 ';

const INITIAL_Y2K_PROJECTS = 4;

const GUESTBOOK = [
  { name: 'xX_CodeMaster_Xx', date: '02/14/2025', msg: 'Cool site!! Love the chess puzzle login :D' },
  { name: 'AI_Agent_Fan', date: '01/28/2025', msg: 'OMG your MCP servers are amazing!!! *~*~*' },
  { name: 'AngularDev2000', date: '12/15/2024', msg: 'Nice homepage!! The brutalism theme is fire!! :-) :-) :-)' },
];

export default function HomepageY2K() {
  const t = useTranslations('y2k');
  const tc = useTranslations('common');
  const locale = useLocale();
  const localized = useMemo(() => getLocalizedData(locale), [locale]);

  const [hits, setHits] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [blink, setBlink] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const visibleProjects = showAllProjects ? featured : featured.slice(0, INITIAL_Y2K_PROJECTS);

  const toggleProject = (id: string) => {
    setExpandedProjects(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    setHits(Math.floor(Math.random() * 90000) + 13370);
    const blinkInterval = setInterval(() => setBlink(b => !b), 800);
    const tick = () => setCurrentTime(new Date().toLocaleString());
    tick();
    const timeInterval = setInterval(tick, 1000);
    return () => { clearInterval(blinkInterval); clearInterval(timeInterval); };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setSparkles(prev => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 1000);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400&family=VT323&display=swap');

        .y2k-page {
          font-family: 'Comic Neue', 'Trebuchet MS', 'Comic Sans MS', cursive;
          background:
            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='s' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='0.8' fill='%23ffffff15'/%3E%3Ccircle cx='20' cy='80' r='0.5' fill='%23ffffff10'/%3E%3Ccircle cx='80' cy='20' r='0.6' fill='%23ffffff12'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23s)'/%3E%3C/svg%3E"),
            linear-gradient(180deg, #000033, #000066, #000044);
          color: #ffff00;
          min-height: 100vh;
          overflow-x: hidden;
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ctext y='14' font-size='14'%3E✦%3C/text%3E%3C/svg%3E") 8 8, auto;
        }

        .y2k-table {
          border: 3px ridge #6666ff;
          background: #000055;
        }

        .y2k-cell {
          border: 2px ridge #6666ff;
          padding: 12px;
          vertical-align: top;
        }

        .y2k-title {
          font-family: 'VT323', monospace;
          background: linear-gradient(180deg, #ff0, #f90, #f00, #f0f, #00f, #0ff, #0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: clamp(28px, 6vw, 56px);
          letter-spacing: 2px;
        }

        @keyframes rainbow {
          0% { color: #ff0000; }
          16% { color: #ff8800; }
          33% { color: #ffff00; }
          50% { color: #00ff00; }
          66% { color: #0088ff; }
          83% { color: #ff00ff; }
          100% { color: #ff0000; }
        }

        .rainbow-text {
          animation: rainbow 3s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .y2k-marquee {
          overflow: hidden;
          border-top: 2px dashed #ff00ff;
          border-bottom: 2px dashed #ff00ff;
          padding: 8px 0;
          background: rgba(0,0,0,0.3);
        }

        .y2k-marquee-inner {
          animation: marquee 15s linear infinite;
          white-space: nowrap;
        }

        @keyframes blinky {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes sparkle {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }

        .sparkle {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          font-size: 20px;
          animation: sparkle 1s ease-out forwards;
        }

        .blink { animation: blinky 1s infinite; }

        .y2k-button {
          font-family: 'Comic Neue', cursive;
          font-weight: 700;
          font-size: 14px;
          padding: 8px 20px;
          border: 3px outset #8888ff;
          background: linear-gradient(180deg, #6666dd, #4444aa);
          color: #fff;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .y2k-button:hover {
          border-style: inset;
          background: linear-gradient(180deg, #4444aa, #6666dd);
        }

        .y2k-button:active {
          border-style: inset;
          padding: 9px 19px 7px 21px;
        }

        .neon-link {
          color: #00ff00;
          text-decoration: underline;
          font-weight: 700;
        }
        .neon-link:hover { color: #ff00ff; }

        .star-rating { color: #ffcc00; letter-spacing: 2px; font-size: 14px; }

        .badge {
          display: inline-block;
          border: 2px ridge #ff0;
          background: #220022;
          color: #ff00ff;
          font-family: 'VT323', monospace;
          font-size: 14px;
          padding: 4px 10px;
          margin: 2px;
        }

        .counter-box {
          font-family: 'VT323', monospace;
          background: #000;
          border: 2px inset #444;
          padding: 4px 8px;
          color: #0f0;
          font-size: 16px;
          letter-spacing: 2px;
          display: inline-block;
        }

        @media (min-width: 640px) {
          .counter-box {
            font-size: 20px;
            letter-spacing: 3px;
            padding: 4px 12px;
          }
        }

        .guestbook-entry {
          border: 1px dashed #6666aa;
          padding: 8px;
          margin-bottom: 6px;
          background: rgba(0,0,50,0.5);
        }

        .under-construction {
          background: repeating-linear-gradient(
            -45deg,
            #ffcc00,
            #ffcc00 10px,
            #000 10px,
            #000 20px
          );
          padding: 4px;
        }

        .under-construction-inner {
          background: #000;
          text-align: center;
          padding: 6px;
          color: #ffcc00;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.1em;
        }

        hr.y2k-hr {
          border: none;
          height: 4px;
          background: linear-gradient(90deg, transparent, #ff00ff, #00ffff, #ffff00, #ff00ff, transparent);
          margin: 16px 0;
        }
      `}</style>

      <div className="y2k-page">
        {/* Sparkles on click */}
        {sparkles.map(s => (
          <div key={s.id} className="sparkle" style={{ left: s.x - 10, top: s.y - 10 }}>
            &#10022;
          </div>
        ))}

        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Under construction banner */}
          <div className="under-construction mb-4">
            <div className="under-construction-inner">
              &#128679; {t('underConstruction')} &#128679; {t('checkBack')} &#128679;
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="y2k-title">
              ~*~ {t('homepageTitle', { name: profile.fullName })} ~*~
            </h1>
            <p className="text-lg rainbow-text font-bold mt-2">
              &#9733; {t('titleSuffix')} &#9733;
            </p>
          </div>

          <hr className="y2k-hr" />

          {/* Marquee */}
          <div className="y2k-marquee mb-4">
            <div className="y2k-marquee-inner text-sm text-[#00ffff]">
              {MARQUEE_SKILLS.repeat(3)}
            </div>
          </div>

          {/* Visitor counter + time */}
          <div className="text-center mb-4 text-sm">
            <p>{t('visitorNumber')} <span className="counter-box">{hits.toString().padStart(7, '0')}</span></p>
            <p className="text-xs text-[#8888cc] mt-2">{t('currentTime')} {currentTime}</p>
          </div>

          <hr className="y2k-hr" />

          {/* Main content table */}
          <table className="y2k-table w-full mb-4" cellPadding={0} cellSpacing={0} style={{ tableLayout: 'fixed' }}>
            <tbody>
              {/* Nav sidebar + content */}
              <tr>
                <td className="y2k-cell w-40 align-top hidden md:table-cell" style={{ background: '#000044' }}>
                  <p className="text-xs text-[#00ff00] mb-3 font-bold">~ {t('navigation')} ~</p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="neon-link">{'>>'}{t('aboutMe')}</a></li>
                    <li><a href="#skills" className="neon-link">{'>>'}{t('mySkills')}</a></li>
                    <li><a href="#work" className="neon-link">{'>>'}{t('workExperience')}</a></li>
                    <li><a href="#projects" className="neon-link">{'>>'}{t('coolProjects')}</a></li>
                    <li><a href="#education" className="neon-link">{'>>'}{t('myEducation')}</a></li>
                    <li><a href="#interests" className="neon-link">{'>>'}{t('thingsImInto')}</a></li>
                    <li><a href="#traits" className="neon-link">{'>>'}{t('mySoftSkills')}</a></li>
                    <li><a href="#chess" className="neon-link">{'>>'}{t('chessCorner')}</a></li>
                    <li><a href="#guestbook" className="neon-link">{'>>'}{t('guestbook')}</a></li>
                    <li><a href="#links" className="neon-link">{'>>'}{t('coolLinks')}</a></li>
                  </ul>
                  <hr className="y2k-hr my-3" />
                  <p className="text-[10px] text-[#6666aa]">
                    {t('bestViewed')}<br />
                    1024x768<br />
                    Netscape Navigator 4.0+
                  </p>
                  <hr className="y2k-hr my-3" />
                  <div className="text-center">
                    <div className="badge">{t('madeWith')}<br />&#9829; {t('andHtml')}</div>
                  </div>
                </td>

                <td className="y2k-cell">
                  {/* About */}
                  <section id="about" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-2">
                      {blink ? '\u25BA' : '\u25BB'} {t('aboutMe')}!!
                    </h2>
                    <p className="text-sm leading-relaxed text-[#ccccff]">
                      {t('aboutText', { name: profile.fullName, title: localized.profile.title.toLowerCase(), location: profile.contact.location })}
                    </p>
                    <p className="text-xs text-[#ff88ff] mt-2">
                      {'>>'} {t('currentlyAvailable')} {'<<'}
                    </p>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Skills */}
                  <section id="skills" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('mySkills')}!!
                    </h2>
                    <table className="w-full text-sm">
                      <tbody>
                        {SKILLS.map((skill) => (
                          <tr key={skill.name} className="border-b border-[#333366]">
                            <td className="py-1 text-[#ccccff]">{skill.name}</td>
                            <td className="py-1 star-rating text-right">
                              {'\u2605'.repeat(skill.stars)}{'\u2606'.repeat(5 - skill.stars)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Experience */}
                  <section id="work" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('workExperience')}
                    </h2>
                    <div className="space-y-4">
                      {sortedExp.map((exp, i) => {
                        const localExp = localized.experience.find(e => e.id === exp.id);
                        return (
                          <div key={exp.id}>
                            <p className="font-bold text-[#ffcc00]">
                              {i === 0 && <span className="blink text-[#ff0000]">[NEW!] </span>}
                              {localExp?.role ?? exp.role} @ {exp.company}
                            </p>
                            <p className="text-xs text-[#8888cc]">
                              {exp.startDate.split('-')[0]} - {exp.endDate === 'present' ? tc('present') : exp.endDate.split('-')[0]}
                            </p>
                            <ul className="text-sm text-[#ccccff] mt-1 list-disc list-inside">
                              {(localExp?.achievements ?? exp.achievements).map((a, j) => (
                                <li key={j}>{a.description}{a.metric ? ` (${a.metric})` : ''}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Projects */}
                  <section id="projects" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('coolProjects')}!!
                    </h2>
                    <div className="space-y-3">
                      {visibleProjects.map((project, i) => {
                        const isExpanded = expandedProjects.has(project.id);
                        const githubUrl = project.links.find(l => l.type === 'github')?.url;
                        const localProject = localized.projects.find(p => p.id === project.id);
                        return (
                          <div key={project.id} className="border-2 ridge border-[#6666aa]" style={{ background: 'rgba(0,0,60,0.5)' }}>
                            <div className="p-3">
                              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                                <p className="font-bold text-[#ff88ff]">
                                  <span className="badge">{
                                    project.status === 'production' ? `${t('live')}!` :
                                    project.status === 'in-progress' ? `${t('wip')}!` :
                                    i === 0 ? `${t('hot')}!` : `${t('new')}!`
                                  }</span> {project.name}
                                </p>
                                <span className="text-[10px] text-[#6666aa]">
                                  {project.startDate.split('-')[0]}{project.endDate === 'present' ? '-Now' : project.endDate ? `-${project.endDate.split('-')[0]}` : ''}
                                </span>
                              </div>
                              <p className="text-xs text-[#8888cc] mb-1">{project.technologies.slice(0, 5).join(' + ')}</p>
                              <p className="text-sm text-[#ccccff]">{localProject?.tagline ?? project.tagline}</p>

                              {isExpanded && (
                                <div className="mt-3 border-t border-dashed border-[#6666aa] pt-3">
                                  <p className="text-sm text-[#ccccff] leading-relaxed mb-2">{localProject?.description ?? project.description}</p>
                                  {(localProject?.highlights ?? project.highlights).length > 0 && (
                                    <>
                                      <p className="text-xs text-[#ff88ff] font-bold mb-1">~*~ {t('highlights')} ~*~</p>
                                      <ul className="text-xs text-[#aaaadd] list-disc list-inside space-y-1">
                                        {(localProject?.highlights ?? project.highlights).slice(0, 3).map((h, j) => (
                                          <li key={j}>{h}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="border-t border-[#6666aa] px-3 py-2 flex items-center justify-between gap-2">
                              <button
                                onClick={() => toggleProject(project.id)}
                                className="neon-link text-xs cursor-pointer bg-transparent border-none p-0 font-[inherit]"
                              >
                                {isExpanded ? t('lessInfo') : t('readMore')}
                              </button>
                              {githubUrl && (
                                <a
                                  href={githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-bold no-underline"
                                  style={{ color: '#ff88ff' }}
                                >
                                  [GitHub] &#128279;
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {featured.length > INITIAL_Y2K_PROJECTS && (
                      <div className="text-center mt-4">
                        <button
                          onClick={() => setShowAllProjects(!showAllProjects)}
                          className="y2k-button"
                        >
                          {showAllProjects ? t('showLess') : t('showMore', { count: featured.length - INITIAL_Y2K_PROJECTS })}
                        </button>
                      </div>
                    )}
                  </section>

                  <hr className="y2k-hr" />

                  {/* Education */}
                  <section id="education" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('myEducation')}!!
                    </h2>
                    {education.map((edu, idx) => {
                      const localEdu = localized.education[idx];
                      return (
                        <div key={edu.institution} className="border-2 ridge border-[#6666aa] p-3 mb-3" style={{ background: 'rgba(0,0,60,0.5)' }}>
                          <p className="font-bold text-[#ffcc00]">
                            {localEdu?.degree ?? edu.degree} in {localEdu?.field ?? edu.field}
                          </p>
                          <p className="text-xs text-[#8888cc]">
                            {edu.institution} | {edu.startYear} - {edu.endYear}
                          </p>
                          <p className="text-xs text-[#8888cc]">{edu.location}</p>
                          {(localEdu?.thesis ?? edu.thesis) && (
                            <p className="text-sm text-[#ccccff] mt-1">
                              Thesis: &quot;{localEdu?.thesis ?? edu.thesis}&quot; &#128218;
                            </p>
                          )}
                        </div>
                      );
                    })}
                    <div className="mt-3">
                      <p className="text-sm text-[#ff88ff] font-bold mb-2">~*~ {t('languagesISpeak')} ~*~</p>
                      <div className="flex gap-3 flex-wrap">
                        {localized.languages.map((lang) => (
                          <span key={lang.code} className="badge">
                            [{lang.code.toUpperCase()}] {lang.name} - {lang.level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Interests */}
                  <section id="interests" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('thingsImInto')}!!
                    </h2>
                    <div className="space-y-2">
                      {localized.interests.map((interest, i) => (
                        <div key={i} className="guestbook-entry">
                          <p className="font-bold text-[#00ff00] text-sm">
                            &#9733; {interest.area}
                          </p>
                          <p className="text-sm text-[#ccccff]">{interest.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Soft Skills */}
                  <section id="traits" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('mySoftSkills')}!! &#128170;
                    </h2>
                    <table className="w-full text-sm">
                      <tbody>
                        {localized.softSkills.map((skill, i) => (
                          <tr key={i} className="border-b border-[#333366]">
                            <td className="py-2 text-[#ffcc00] font-bold align-top" style={{ width: '35%' }}>
                              {skill.name}
                            </td>
                            <td className="py-2 text-[#ccccff]">
                              {skill.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Chess */}
                  <section id="chess" className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      &#9823; {t('chessCorner')} &#9823;
                    </h2>
                    <div className="text-3xl mb-3 select-none">
                      &#9820;&#9822;&#9821;&#9819;&#9818;&#9821;&#9822;&#9820;
                    </div>
                    <p className="text-sm text-[#ccccff]">
                      {t('chessText')}
                    </p>
                    <p className="text-xs text-[#ff88ff] mt-2 blink">
                      {t('chessBlinking')}
                    </p>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Guestbook */}
                  <section id="guestbook" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '\u25BA' : '\u25BB'} {t('guestbook')} ({t('signIt')})
                    </h2>
                    {GUESTBOOK.map((entry) => (
                      <div key={entry.name} className="guestbook-entry">
                        <p className="text-xs">
                          <span className="text-[#00ff00] font-bold">{entry.name}</span>
                          <span className="text-[#666]"> &mdash; {entry.date}</span>
                        </p>
                        <p className="text-sm text-[#ccccff]">{entry.msg}</p>
                      </div>
                    ))}
                  </section>
                </td>
              </tr>
            </tbody>
          </table>

          <hr className="y2k-hr" />

          {/* Links & Contact */}
          <section id="links" className="text-center mb-6">
            <h2 className="text-lg font-bold text-[#ffcc00] mb-3">~*~ {t('coolLinksAndContact')} ~*~</h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={profile.contact.github} className="y2k-button" target="_blank" rel="noopener noreferrer">
                [GitHub]
              </a>
              <a href={profile.contact.linkedin} className="y2k-button" target="_blank" rel="noopener noreferrer">
                [LinkedIn]
              </a>
              <a href={`mailto:${profile.contact.email}`} className="y2k-button">
                [Email Me!!]
              </a>
            </div>
          </section>

          {/* Webring */}
          <div className="text-center border-2 ridge border-[#6666aa] p-3 mb-4" style={{ background: 'rgba(0,0,60,0.5)' }}>
            <p className="text-xs text-[#8888cc] mb-2">~ {t('devWebring')} ~</p>
            <div className="flex gap-4 justify-center items-center text-sm">
              <span className="neon-link cursor-pointer">{'<< '}{t('prev')}</span>
              <span className="text-[#ff88ff]">|</span>
              <span className="neon-link cursor-pointer">{t('random')}</span>
              <span className="text-[#ff88ff]">|</span>
              <span className="neon-link cursor-pointer">{t('next')}{' >>'}</span>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-[10px] text-[#6666aa] py-4">
            <p>{t('madeWithLove')} &middot; {t('lastUpdated')}</p>
            <p className="mt-1">This page is best viewed in Netscape Navigator 4.0+ at 1024x768</p>
            <p className="mt-1">&copy; 2025 &middot; {profile.fullName} &middot; You are visitor #{hits}</p>
          </footer>
        </div>
      </div>
    </>
  );
}
