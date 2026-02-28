'use client';

const SKILLS_CLASSIFIED = [
  { category: 'FRONTEND', items: 'React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML/CSS' },
  { category: 'BACKEND', items: 'Node.js, Python, GraphQL, REST APIs, Microservices' },
  { category: 'INFRA', items: 'AWS, Docker, CI/CD, Linux, Kubernetes' },
  { category: 'DATA', items: 'PostgreSQL, MongoDB, Redis, Elasticsearch' },
];

const EXPERIENCE = [
  {
    headline: 'ENGINEER PROMOTED TO SENIOR ROLE AFTER DEVASTATING DISPLAY OF COMPETENCE',
    sub: 'Company Name, 2020 — Present',
    body: 'Sources confirm the individual has been "leading full-stack development initiatives" and "architecting scalable solutions" at an alarming rate. Colleagues report a 30% increase in user engagement metrics. "We tried to stop them," said one anonymous coworker, "but the pull requests just kept coming."',
  },
  {
    headline: 'JUNIOR DEVELOPER BUILDS ENTIRE RESPONSIVE WEB INTERFACE, REFUSES TO ELABORATE',
    sub: 'Previous Company, 2018 — 2020',
    body: 'Witnesses describe the accused as "quietly productive" and "suspiciously good at code reviews." Established quality standards that persist to this day. Left the company in a state of "good development practices." No arrests were made.',
  },
];

export default function HomepageTabloid() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Oswald:wght@400;500;600;700&display=swap');

        .tabloid-page {
          font-family: 'Libre Baskerville', Georgia, serif;
          background: #f4edd3;
          color: #1a1a1a;
          min-height: 100vh;
          position: relative;
        }

        .tabloid-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(139,109,56,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139,109,56,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .blackletter { font-family: 'UnifrakturMaguntia', cursive; }
        .headline-font { font-family: 'Oswald', sans-serif; text-transform: uppercase; }

        .masthead {
          border-bottom: 4px double #1a1a1a;
          border-top: 4px double #1a1a1a;
          text-align: center;
          padding: 16px 0;
        }

        .masthead-title {
          font-family: 'UnifrakturMaguntia', cursive;
          font-size: clamp(36px, 8vw, 72px);
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .rule-thin { border-top: 1px solid #1a1a1a; }
        .rule-thick { border-top: 3px solid #1a1a1a; }
        .rule-double { border-top: 4px double #1a1a1a; }

        .col-rule {
          column-rule: 1px solid #aaa;
        }

        .newspaper-body {
          font-size: 15px;
          line-height: 1.7;
          text-align: justify;
          hyphens: auto;
        }

        .drop-cap::first-letter {
          font-family: 'UnifrakturMaguntia', cursive;
          font-size: 4em;
          float: left;
          line-height: 0.8;
          margin-right: 8px;
          margin-top: 4px;
          color: #1a1a1a;
        }

        .classified-box {
          border: 2px solid #1a1a1a;
          padding: 12px;
          margin-bottom: 8px;
          background: rgba(255,255,255,0.3);
        }

        .stamp {
          display: inline-block;
          border: 3px solid #cc0000;
          color: #cc0000;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 14px;
          padding: 4px 16px;
          transform: rotate(-3deg);
          letter-spacing: 0.15em;
        }

        .ink-splatter {
          position: absolute;
          width: 40px;
          height: 40px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .banner-red {
          background: #cc0000;
          color: #fff;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 6px 20px;
          display: inline-block;
        }

        .chess-puzzle-box {
          border: 3px solid #1a1a1a;
          background: #fff;
          padding: 20px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .two-col { column-count: 2; column-gap: 32px; }
          .three-col { column-count: 3; column-gap: 24px; }
        }

        .tabloid-link {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 28px;
          border: 2px solid #1a1a1a;
          background: #1a1a1a;
          color: #f4edd3;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
        }

        .tabloid-link:hover {
          background: #cc0000;
          border-color: #cc0000;
          color: #fff;
        }

        .article-img-placeholder {
          background: repeating-linear-gradient(
            45deg,
            #ddd5b8,
            #ddd5b8 10px,
            #d5cdb0 10px,
            #d5cdb0 20px
          );
          border: 1px solid #aaa;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Oswald', sans-serif;
          color: #999;
          font-size: 12px;
          letter-spacing: 0.1em;
        }
      `}</style>

      <div className="tabloid-page">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 relative">

          {/* Ink splatters */}
          <div className="ink-splatter" style={{ top: '12%', right: '8%' }} />
          <div className="ink-splatter" style={{ top: '45%', left: '3%', width: 60, height: 60 }} />
          <div className="ink-splatter" style={{ top: '78%', right: '15%', width: 30, height: 30 }} />

          {/* Top info bar */}
          <div className="flex justify-between items-center text-[10px] tracking-widest uppercase mb-2 text-[#666]">
            <span>FINAL EDITION</span>
            <span>{today}</span>
            <span>PRICE: FREE</span>
          </div>

          {/* Masthead */}
          <div className="masthead mb-6 relative">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-1 text-[#666]">
              &ldquo;All the Code That&apos;s Fit to Ship&rdquo;
            </p>
            <h1 className="masthead-title">The Daily Engineer</h1>
            <p className="text-[10px] tracking-[0.3em] uppercase mt-1 text-[#666]">
              VOL. XLII &middot; NO. 365 &middot; ESTABLISHED 2018
            </p>
          </div>

          {/* Breaking Banner */}
          <div className="text-center mb-6">
            <span className="banner-red">BREAKING NEWS</span>
          </div>

          {/* Main Headline */}
          <section className="mb-6">
            <h2 className="headline-font text-xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 text-center">
              LOCAL SOFTWARE ENGINEER CAUGHT
              {' '}
              <span className="text-[#cc0000]">BUILDING THINGS THAT ACTUALLY WORK</span>
            </h2>
            <p className="text-center text-sm italic text-[#666] mb-4">
              Authorities baffled by clean code and passing tests; investigation ongoing
            </p>
            <div className="rule-thick mb-4" />

            <div className="newspaper-body two-col col-rule">
              <p className="drop-cap mb-4">
                Reports are flooding in from across the industry of a software engineer who has
                been, against all odds, consistently delivering production-ready code. The individual,
                who identifies as a &ldquo;full-stack developer,&rdquo; has been spotted architecting scalable
                web applications with reckless competence.
              </p>
              <p className="mb-4">
                &ldquo;We&apos;ve never seen anything like it,&rdquo; said one anonymous tech lead.
                &ldquo;The tests pass. The documentation exists. The git history is clean.
                Frankly, it&apos;s suspicious.&rdquo;
              </p>
              <p>
                The suspect is also known to be an avid chess player, which sources say explains
                their &ldquo;unnerving ability to think several moves ahead&rdquo; during system design
                discussions. More details on page A6.
              </p>
            </div>
          </section>

          <div className="rule-double mb-6" />

          {/* Experience articles */}
          <section className="mb-8">
            <h3 className="headline-font text-xl mb-4 tracking-wider">CAREER SECTION</h3>
            <div className="rule-thin mb-4" />
            <div className="space-y-6">
              {EXPERIENCE.map((exp) => (
                <article key={exp.headline}>
                  <h4 className="headline-font text-sm sm:text-lg md:text-2xl leading-tight mb-1">
                    {exp.headline}
                  </h4>
                  <p className="text-xs italic text-[#888] mb-2">{exp.sub}</p>
                  <p className="newspaper-body text-sm">{exp.body}</p>
                  <div className="rule-thin mt-4" />
                </article>
              ))}
            </div>
          </section>

          {/* Skills - Classifieds */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="headline-font text-xl tracking-wider">CLASSIFIEDS</h3>
              <span className="stamp">VERIFIED</span>
            </div>
            <div className="rule-thin mb-4" />
            <div className="grid md:grid-cols-2 gap-3">
              {SKILLS_CLASSIFIED.map((group) => (
                <div key={group.category} className="classified-box">
                  <p className="headline-font text-sm font-bold mb-1">
                    {group.category} SKILLS — AVAILABLE IMMEDIATELY
                  </p>
                  <p className="text-xs leading-relaxed text-[#444]">
                    {group.items}. Serious inquiries only. References available upon request.
                    Contact via GitHub or LinkedIn.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="rule-double mb-6" />

          {/* Projects */}
          <section className="mb-8">
            <h3 className="headline-font text-xl mb-4 tracking-wider">FEATURED INVESTIGATIONS</h3>
            <div className="rule-thin mb-4" />
            <div className="grid md:grid-cols-2 gap-6">
              <article>
                <div className="article-img-placeholder h-32 mb-3">[EXHIBIT A]</div>
                <h4 className="headline-font text-lg leading-tight mb-1">
                  FULL-STACK PLATFORM DEPLOYED WITHOUT INCIDENT
                </h4>
                <p className="text-xs italic text-[#888] mb-2">React &middot; Node.js &middot; MongoDB</p>
                <p className="newspaper-body text-sm">
                  A production-grade web application handling real data was found running
                  in the wild with zero critical bugs at time of press. DevOps teams are
                  calling it &ldquo;unprecedented.&rdquo;
                </p>
              </article>
              <article>
                <div className="article-img-placeholder h-32 mb-3">[EXHIBIT B]</div>
                <h4 className="headline-font text-lg leading-tight mb-1">
                  OPEN SOURCE TOOL GAINS CULT FOLLOWING AMONG DEVELOPERS
                </h4>
                <p className="text-xs italic text-[#888] mb-2">TypeScript &middot; Next.js &middot; PostgreSQL</p>
                <p className="newspaper-body text-sm">
                  Community-driven and battle-tested, this developer tool has attracted
                  contributors from around the globe. The README is described as
                  &ldquo;actually helpful.&rdquo;
                </p>
              </article>
            </div>
          </section>

          <div className="rule-double mb-6" />

          {/* Chess - Puzzle Section */}
          <section className="mb-8">
            <h3 className="headline-font text-xl mb-4 tracking-wider">PUZZLE &amp; GAMES SECTION</h3>
            <div className="rule-thin mb-4" />
            <div className="chess-puzzle-box max-w-sm mx-auto">
              <h4 className="blackletter text-3xl mb-3">Chess Corner</h4>
              <div className="text-4xl mb-4 select-none">♚ ♛ ♜ ♝ ♞ ♟</div>
              <p className="text-sm italic text-[#666] leading-relaxed">
                &ldquo;The chessboard is the world, the pieces are the phenomena of the Universe,
                the rules of the game are what we call the laws of Nature.&rdquo;
              </p>
              <p className="text-xs text-[#999] mt-3">
                Daily puzzles solved on Lichess. Rated player.
                <br />Strategic thinking applied to every debug session.
              </p>
            </div>
          </section>

          <div className="rule-double mb-6" />

          {/* Contact - Editorial */}
          <footer className="text-center py-8">
            <h3 className="headline-font text-xl mb-2 tracking-wider">LETTERS TO THE EDITOR</h3>
            <p className="text-sm italic text-[#666] mb-6">
              Reach out. I don&apos;t bite. (Usually.)
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a href="https://github.com" className="tabloid-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" className="tabloid-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:contact@example.com" className="tabloid-link">
                Email
              </a>
            </div>
            <div className="rule-thin mb-4" />
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#999]">
              &copy; THE DAILY ENGINEER &middot; ALL RIGHTS RESERVED &middot; PRINTED ON RECYCLED ELECTRONS
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
