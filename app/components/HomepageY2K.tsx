'use client';

import { useState, useEffect } from 'react';

const SKILLS = [
  { name: 'React & Next.js', stars: 5 },
  { name: 'TypeScript', stars: 5 },
  { name: 'Python', stars: 4 },
  { name: 'Node.js', stars: 5 },
  { name: 'AWS & Cloud', stars: 4 },
  { name: 'Docker', stars: 4 },
  { name: 'GraphQL', stars: 4 },
  { name: 'PostgreSQL', stars: 4 },
];

const GUESTBOOK = [
  { name: 'xX_CodeMaster_Xx', date: '02/14/2024', msg: 'Cool site!! Love the chess stuff :D' },
  { name: 'h4ck3r_girl', date: '01/28/2024', msg: 'OMG your projects are amazing!!! *~*~*' },
  { name: 'JavaFan2000', date: '12/15/2023', msg: 'Nice homepage!! Bookmarked!! :-) :-) :-)' },
];

export default function HomepageY2K() {
  const [hits, setHits] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [blink, setBlink] = useState(true);

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
            ✦
          </div>
        ))}

        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Under construction banner */}
          <div className="under-construction mb-4">
            <div className="under-construction-inner">
              🚧 THIS SITE IS UNDER CONSTRUCTION 🚧 CHECK BACK SOON FOR UPDATES!! 🚧
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="y2k-title">
              ~*~ Welcome To My Homepage!! ~*~
            </h1>
            <p className="text-lg rainbow-text font-bold mt-2">
              ★ Software Engineer & Chess Enthusiast ★
            </p>
          </div>

          <hr className="y2k-hr" />

          {/* Marquee */}
          <div className="y2k-marquee mb-4">
            <div className="y2k-marquee-inner text-sm text-[#00ffff]">
              {'★ React ★ Next.js ★ TypeScript ★ Python ★ Node.js ★ AWS ★ Docker ★ GraphQL ★ PostgreSQL ★ MongoDB ★ Git ★ Linux ★ '.repeat(3)}
            </div>
          </div>

          {/* Visitor counter + time */}
          <div className="text-center mb-4 text-sm">
            <p>You are visitor number: <span className="counter-box">{hits.toString().padStart(7, '0')}</span></p>
            <p className="text-xs text-[#8888cc] mt-2">Current time: {currentTime}</p>
          </div>

          <hr className="y2k-hr" />

          {/* Main content table */}
          <table className="y2k-table w-full mb-4" cellPadding={0} cellSpacing={0} style={{ tableLayout: 'fixed' }}>
            <tbody>
              {/* Nav sidebar + content */}
              <tr>
                <td className="y2k-cell w-40 align-top hidden md:table-cell" style={{ background: '#000044' }}>
                  <p className="text-xs text-[#00ff00] mb-3 font-bold">~ NAVIGATION ~</p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="neon-link">{'>>'}About Me</a></li>
                    <li><a href="#skills" className="neon-link">{'>>'}My Skills</a></li>
                    <li><a href="#work" className="neon-link">{'>>'}Experience</a></li>
                    <li><a href="#projects" className="neon-link">{'>>'}Cool Projects</a></li>
                    <li><a href="#chess" className="neon-link">{'>>'}Chess!!</a></li>
                    <li><a href="#guestbook" className="neon-link">{'>>'}Guestbook</a></li>
                    <li><a href="#links" className="neon-link">{'>>'}Cool Links</a></li>
                  </ul>
                  <hr className="y2k-hr my-3" />
                  <p className="text-[10px] text-[#6666aa]">
                    Best viewed in<br />
                    1024x768<br />
                    Netscape Navigator 4.0+
                  </p>
                  <hr className="y2k-hr my-3" />
                  <div className="text-center">
                    <div className="badge">MADE WITH<br />♥ AND HTML</div>
                  </div>
                </td>

                <td className="y2k-cell">
                  {/* About */}
                  <section id="about" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-2">
                      {blink ? '►' : '▻'} About Me!!
                    </h2>
                    <p className="text-sm leading-relaxed text-[#ccccff]">
                      Hey there!! Welcome to my corner of the internet!! I&apos;m a full-stack
                      software engineer who LOVES building web apps and playing chess!! I believe
                      in clean code, good documentation, and always thinking three moves ahead
                      (just like in chess LOL) ^_^
                    </p>
                    <p className="text-xs text-[#ff88ff] mt-2">
                      {'>>'} Currently: Available for new opportunities!! Email me!! {'<<'}
                    </p>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Skills */}
                  <section id="skills" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '►' : '▻'} My Skillz!!
                    </h2>
                    <table className="w-full text-sm">
                      <tbody>
                        {SKILLS.map((skill) => (
                          <tr key={skill.name} className="border-b border-[#333366]">
                            <td className="py-1 text-[#ccccff]">{skill.name}</td>
                            <td className="py-1 star-rating text-right">
                              {'★'.repeat(skill.stars)}{'☆'.repeat(5 - skill.stars)}
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
                      {blink ? '►' : '▻'} Work Experience
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-[#ffcc00]">
                          <span className="blink text-[#ff0000]">[NEW!]</span>{' '}
                          Senior Software Engineer @ Company
                        </p>
                        <p className="text-xs text-[#8888cc]">2020 - Present</p>
                        <ul className="text-sm text-[#ccccff] mt-1 list-disc list-inside">
                          <li>Leading full-stack web development initiatives!!</li>
                          <li>Boosted user engagement by 30% (!!!)</li>
                          <li>Architecting scalable solutions for real users</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-[#ffcc00]">
                          Software Developer @ Previous Company
                        </p>
                        <p className="text-xs text-[#8888cc]">2018 - 2020</p>
                        <ul className="text-sm text-[#ccccff] mt-1 list-disc list-inside">
                          <li>Built responsive web interfaces from scratch</li>
                          <li>Code review champion B-)</li>
                          <li>Learned ALL the best practices</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Projects */}
                  <section id="projects" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '►' : '▻'} Cool Projects!!
                    </h2>
                    <div className="space-y-3">
                      <div className="border-2 ridge border-[#6666aa] p-3" style={{ background: 'rgba(0,0,60,0.5)' }}>
                        <p className="font-bold text-[#ff88ff]">
                          <span className="badge">HOT!</span> Full-Stack Platform
                        </p>
                        <p className="text-xs text-[#8888cc] mb-1">React + Node.js + MongoDB</p>
                        <p className="text-sm text-[#ccccff]">
                          A real production app!! Real users!! Real data!! Check it out!! :D
                        </p>
                      </div>
                      <div className="border-2 ridge border-[#6666aa] p-3" style={{ background: 'rgba(0,0,60,0.5)' }}>
                        <p className="font-bold text-[#ff88ff]">
                          <span className="badge">NEW!</span> Open Source Tool
                        </p>
                        <p className="text-xs text-[#8888cc] mb-1">TypeScript + Next.js + PostgreSQL</p>
                        <p className="text-sm text-[#ccccff]">
                          Community-driven dev tool. Contributors welcome!! Fork it!! Star it!!
                        </p>
                      </div>
                    </div>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Chess */}
                  <section id="chess" className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      ♟ CHESS CORNER ♟
                    </h2>
                    <div className="text-3xl mb-3 select-none">
                      ♜♞♝♛♚♝♞♜
                    </div>
                    <p className="text-sm text-[#ccccff]">
                      I play chess EVERY DAY on Lichess!! It makes me a better coder
                      because strategy is strategy!! Come challenge me!! B-)
                    </p>
                    <p className="text-xs text-[#ff88ff] mt-2 blink">
                      ** DAILY PUZZLE SOLVER ** RATED PLAYER ** CHESS IS LIFE **
                    </p>
                  </section>

                  <hr className="y2k-hr" />

                  {/* Guestbook */}
                  <section id="guestbook" className="mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-3">
                      {blink ? '►' : '▻'} Guestbook (Sign it!!)
                    </h2>
                    {GUESTBOOK.map((entry) => (
                      <div key={entry.name} className="guestbook-entry">
                        <p className="text-xs">
                          <span className="text-[#00ff00] font-bold">{entry.name}</span>
                          <span className="text-[#666]"> — {entry.date}</span>
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
            <h2 className="text-lg font-bold text-[#ffcc00] mb-3">~*~ Cool Links & Contact ~*~</h2>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://github.com" className="y2k-button" target="_blank" rel="noopener noreferrer">
                [GitHub]
              </a>
              <a href="https://linkedin.com" className="y2k-button" target="_blank" rel="noopener noreferrer">
                [LinkedIn]
              </a>
              <a href="mailto:contact@example.com" className="y2k-button">
                [Email Me!!]
              </a>
            </div>
          </section>

          {/* Webring */}
          <div className="text-center border-2 ridge border-[#6666aa] p-3 mb-4" style={{ background: 'rgba(0,0,60,0.5)' }}>
            <p className="text-xs text-[#8888cc] mb-2">~ Developer Webring ~</p>
            <div className="flex gap-4 justify-center items-center text-sm">
              <span className="neon-link cursor-pointer">{'<< '}Prev</span>
              <span className="text-[#ff88ff]">|</span>
              <span className="neon-link cursor-pointer">Random</span>
              <span className="text-[#ff88ff]">|</span>
              <span className="neon-link cursor-pointer">Next{' >>'}</span>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-[10px] text-[#6666aa] py-4">
            <p>Made with {'<3'} and lots of HTML &middot; Last updated: TODAY!</p>
            <p className="mt-1">This page is best viewed in Netscape Navigator 4.0+ at 1024x768</p>
            <p className="mt-1">&copy; 2024 &middot; All rights reserved &middot; You are visitor #{hits}</p>
          </footer>
        </div>
      </div>
    </>
  );
}
