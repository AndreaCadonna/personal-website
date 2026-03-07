import React from 'react';
import {
  profile,
  skills,
  education,
  languages,
  interests,
  softSkills,
  getExperienceSorted,
  getProjectsSorted,
} from '@/lib/data';
import type { Skill, LocalizedPortfolioData } from '@/lib/data';
import { COMMANDS, type CommandKey } from './commands';

// Translation function type
type TFunc = (key: string, values?: Record<string, string | number>) => string;

// --- Helpers ---

function proficiencyColor(p?: string): string {
  switch (p) {
    case 'expert': return '#00ff41';
    case 'advanced': return '#00aaff';
    case 'intermediate': return '#ffd93d';
    case 'beginner': return '#ff6b6b';
    default: return '#555';
  }
}

function proficiencyBar(p?: string): string {
  switch (p) {
    case 'expert': return '[████████████] expert';
    case 'advanced': return '[█████████░░░] advanced';
    case 'intermediate': return '[██████░░░░░░] intermediate';
    case 'beginner': return '[███░░░░░░░░░] beginner';
    default: return '[░░░░░░░░░░░░] n/a';
  }
}

function statusBadge(status: string): React.ReactNode {
  const colors: Record<string, string> = {
    production: '#28c840',
    'in-progress': '#ffd93d',
    completed: '#00aaff',
    'open-source': '#c084fc',
    archived: '#555',
  };
  return <span style={{ color: colors[status] || '#555' }}>[{status}]</span>;
}

// --- Renderers ---

export function renderHelp(t: TFunc): React.ReactNode {
  const visible = COMMANDS.filter((c) => c.visible);
  return (
    <div>
      <p className="bright mb-2">{t('availableCommands')}</p>
      <div className="pl-2">
        {visible.map((cmd) => (
          <div key={cmd.key} className="mb-1">
            <span className="key-blue" style={{ display: 'inline-block', minWidth: '20ch' }}>
              {cmd.canonical}
            </span>
            <span className="dim"> {t(`commandDescriptions.${cmd.key}`)}</span>
          </div>
        ))}
        <div className="mb-1">
          <span className="key-blue" style={{ display: 'inline-block', minWidth: '20ch' }}>
            cat project &lt;id&gt;
          </span>
          <span className="dim"> {t('commandDescriptions.projectDetail')}</span>
        </div>
      </div>
      <p className="dim mt-2">{t('tabTip')}</p>
    </div>
  );
}

export function renderWhoami(localized: LocalizedPortfolioData): React.ReactNode {
  return (
    <div>
      <p className="bright mb-1">{profile.fullName}</p>
      <p className="mb-1">
        <span className="key-blue">Title:</span> {localized.profile.title}
      </p>
      <p className="mb-1">
        <span className="key-blue">Location:</span> {localized.profile.locationLabel}
      </p>
      <p className="mb-2 mt-2">{localized.profile.shortBio}</p>
      <p className="dim">{localized.profile.summary}</p>
    </div>
  );
}

export function renderSkills(localized: LocalizedPortfolioData): React.ReactNode {
  const entries = Object.entries(skills);
  const lastKey = entries[entries.length - 1][0];
  return (
    <div>
      <p>{'{'}</p>
      {entries.map(([key, group]) => {
        const locGroup = localized.skillGroups.find(g => g.key === key);
        return (
          <div key={key} className="pl-4 mb-2">
            <span className="key-blue">&quot;{locGroup?.label || group.label}&quot;</span>
            <span className="dim">: {'{'}</span>
            <div className="pl-4">
              <span className="key-purple">&quot;description&quot;</span>
              <span className="dim">: </span>
              <span className="string">&quot;{locGroup?.description || group.description}&quot;</span>
              <span className="dim">,</span>
              <br />
              <span className="key-purple">&quot;skills&quot;</span>
              <span className="dim">: [</span>
              {group.skills.map((s: Skill, i: number) => (
                <div key={s.name} className="pl-4">
                  <span className="string">&quot;{s.name}&quot;</span>
                  <span className="dim"> &mdash; </span>
                  <span style={{ color: proficiencyColor(s.proficiency), fontFamily: 'inherit' }}>
                    {proficiencyBar(s.proficiency)}
                  </span>
                  {i < group.skills.length - 1 && <span className="dim">,</span>}
                </div>
              ))}
              <span className="dim">]</span>
            </div>
            <span className="dim">{'}'}{key !== lastKey ? ',' : ''}</span>
          </div>
        );
      })}
      <p>{'}'}</p>
    </div>
  );
}

// Deterministic hex hashes seeded from experience id
function gitHash(id: string): string {
  let h = 0x9e3779b9;
  for (let i = 0; i < id.length; i++) {
    h = ((h << 5) + h + id.charCodeAt(i)) >>> 0;
  }
  const a = (h >>> 0).toString(16).padStart(8, '0').slice(0, 4);
  const b = ((h * 2654435761) >>> 0).toString(16).padStart(8, '0').slice(0, 3);
  return a + b;
}

export function renderExperience(t: TFunc, localized: LocalizedPortfolioData): React.ReactNode {
  const sorted = getExperienceSorted();
  return (
    <div>
      {sorted.map((exp, i) => {
        const hash = gitHash(exp.id);
        const startYear = exp.startDate.split('-')[0];
        const endYear = exp.endDate === 'present' ? 'present' : exp.endDate.split('-')[0];
        const loc = localized.experience.find(e => e.id === exp.id);
        return (
          <div key={exp.id} className="mb-4">
            <div>
              <span className="warn">{hash}</span>
              <span className="dim"> ({i === 0 ? 'HEAD -> main' : 'career'}) </span>
              <span className="key-blue">[{startYear}-{endYear}]</span>
            </div>
            <div className="pl-4 mt-1">
              <p className="bright">
                {loc?.role || exp.role} @ {exp.company}
                <span className="dim"> ({exp.employmentType})</span>
              </p>
              <p className="dim mb-1">{exp.location}{exp.remote ? ' (remote)' : ''}</p>
              <p className="mb-1">{loc?.summary || exp.summary}</p>
              {(loc?.achievements || exp.achievements).length > 0 && (
                <div className="mt-1">
                  <span className="key-purple">{t('achievements')}</span>
                  {(loc?.achievements || exp.achievements).map((a, j) => (
                    <div key={j} className="pl-2">
                      <span className="dim">- </span>
                      <span>{a.description}</span>
                      {a.metric && <span className="number"> ({a.metric})</span>}
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-1">
                <span className="key-purple">Tech:</span>{' '}
                <span className="string">{exp.technologies.join(', ')}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function renderProjects(t: TFunc, localized: LocalizedPortfolioData): React.ReactNode {
  const sorted = getProjectsSorted();
  return (
    <div>
      <p className="dim mb-1">{t('total', { count: sorted.length })}</p>
      {sorted.map((p) => {
        const loc = localized.projects.find(lp => lp.id === p.id);
        return (
          <div key={p.id} className="mb-2">
            <span className="dim hidden sm:inline">drwxr-xr-x  </span>
            <span className="key-blue">{p.id}/</span>
            <span className="ml-2">{statusBadge(p.status)}</span>
            {p.completionPercent != null && (
              <span className="number ml-1">{p.completionPercent}%</span>
            )}
            <br />
            <span className="pl-4 dim">{loc?.tagline || p.tagline}</span>
            <br />
            <span className="pl-4 string">{p.technologies.slice(0, 4).join(', ')}</span>
          </div>
        );
      })}
      <p className="dim mt-2">{t('useProjectCmd')}</p>
    </div>
  );
}

export function renderProjectDetail(id: string, t: TFunc, localized: LocalizedPortfolioData): React.ReactNode {
  const sorted = getProjectsSorted();
  const project = sorted.find((p) => p.id.toLowerCase() === id.toLowerCase());
  if (!project) {
    const ids = sorted.map((p) => p.id).join(', ');
    return (
      <div>
        <p className="keyword">{t('projectNotFound', { id })}</p>
        <p className="dim">{t('availableProjects', { ids })}</p>
      </div>
    );
  }
  const loc = localized.projects.find(lp => lp.id === project.id);
  return (
    <div>
      <p className="bright text-lg">{project.name}</p>
      <p className="warn mb-2">{loc?.tagline || project.tagline}</p>
      <p className="mb-2">{loc?.description || project.description}</p>
      <div className="mb-2">
        <span className="key-blue">Status: </span>
        {statusBadge(project.status)}
        {project.completionPercent != null && (
          <span className="number ml-1"> {project.completionPercent}%</span>
        )}
      </div>
      <div className="mb-2">
        <span className="key-blue">Period: </span>
        <span>{project.startDate} &mdash; {project.endDate || 'present'}</span>
      </div>
      <div className="mb-2">
        <span className="key-blue">Technologies:</span>
        <div className="pl-2">
          <span className="string">{project.technologies.join(', ')}</span>
        </div>
      </div>
      {(loc?.highlights || project.highlights).length > 0 && (
        <div className="mb-2">
          <span className="key-blue">Highlights:</span>
          {(loc?.highlights || project.highlights).map((h, i) => (
            <div key={i} className="pl-2">
              <span className="dim">- </span><span>{h}</span>
            </div>
          ))}
        </div>
      )}
      {project.links.length > 0 && (
        <div>
          <span className="key-blue">Links:</span>
          {project.links.map((l) => (
            <div key={l.url} className="pl-2">
              <span className="dim">{l.type}: </span>
              <a href={l.url} className="terminal-link" target="_blank" rel="noopener noreferrer">
                {l.url}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const CHESS_ASCII = `  +----+----+----+----+----+----+----+---+
8 | \u265C | \u265E | \u265D | \u265B | \u265A | \u265D | \u265E | \u265C |
  +----+----+----+----+----+----+----+---+
7 | \u265F | \u265F | \u265F | \u265F | \u265F | \u265F | \u265F | \u265F |
  +----+----+----+----+----+----+----+---+
6 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
5 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
4 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
3 |    |    |    |    |    |    |    |   |
  +----+----+----+----+----+----+----+---+
2 | \u2659 | \u2659 | \u2659 | \u2659 | \u2659 | \u2659 | \u2659 | \u2659 |
  +----+----+----+----+----+----+----+---+
1 | \u2656 | \u2658 | \u2657 | \u2655 | \u2654 | \u2657 | \u2658 | \u2656 |
  +----+----+----+----+----+----+----+---+
    a    b    c    d    e    f    g    h`;

export function renderChess(t: TFunc): React.ReactNode {
  return (
    <div>
      <pre className="text-[8px] leading-[1.2] sm:text-xs sm:leading-[1.3] mb-4 warn overflow-x-auto">
        {CHESS_ASCII}
      </pre>
      <p>
        <span className="key-blue">STATUS:</span> {t('chess.status')}
      </p>
      <p>
        <span className="key-blue">PHILOSOPHY:</span>{' '}
        <span className="string">
          {t('chess.philosophy')}
        </span>
      </p>
    </div>
  );
}

export function renderContact(): React.ReactNode {
  return (
    <div>
      <p className="mb-1">
        <span className="key-blue" style={{ display: 'inline-block', minWidth: '12ch' }}>Email</span>
        : <a href={`mailto:${profile.contact.email}`} className="terminal-link">{profile.contact.email}</a>
      </p>
      <p className="mb-1">
        <span className="key-blue" style={{ display: 'inline-block', minWidth: '12ch' }}>Phone</span>
        : <span>{profile.contact.phone}</span>
      </p>
      <p className="mb-1">
        <span className="key-blue" style={{ display: 'inline-block', minWidth: '12ch' }}>GitHub</span>
        : <a href={profile.contact.github} className="terminal-link" target="_blank" rel="noopener noreferrer">
            {profile.contact.github.replace('https://', '')}
          </a>
      </p>
      <p className="mb-1">
        <span className="key-blue" style={{ display: 'inline-block', minWidth: '12ch' }}>LinkedIn</span>
        : <a href={profile.contact.linkedin} className="terminal-link" target="_blank" rel="noopener noreferrer">
            {profile.contact.linkedin.replace('https://www.', '')}
          </a>
      </p>
      <p className="mb-1">
        <span className="key-blue" style={{ display: 'inline-block', minWidth: '12ch' }}>Location</span>
        : {profile.contact.location}
      </p>
    </div>
  );
}

export function renderEducation(localized: LocalizedPortfolioData): React.ReactNode {
  return (
    <div>
      {education.map((e, idx) => {
        const loc = localized.education[idx];
        return (
          <div key={e.institution} className="mb-3">
            <p className="bright">{e.institution}</p>
            <p>
              <span className="key-blue">Degree:</span> {loc?.degree || e.degree} in {loc?.field || e.field}
            </p>
            <p>
              <span className="key-blue">Period:</span> {e.startYear} &mdash; {e.endYear}
            </p>
            <p>
              <span className="key-blue">Location:</span> {e.location}
            </p>
            {(loc?.thesis || e.thesis) && (
              <p>
                <span className="key-blue">Thesis:</span> <span className="string">&quot;{loc?.thesis || e.thesis}&quot;</span>
              </p>
            )}
          </div>
        );
      })}
      <div className="mt-2">
        <p className="key-purple mb-1">Languages:</p>
        {languages.map((l, idx) => {
          const loc = localized.languages[idx];
          return (
            <p key={l.code} className="pl-2">
              <span className="dim">[{l.code}]</span> <span className="bright">{loc?.name || l.name}</span>{' '}
              <span className="dim">&mdash; {loc?.level || l.level}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function renderInterests(localized: LocalizedPortfolioData): React.ReactNode {
  return (
    <div>
      {interests.map((i, idx) => {
        const loc = localized.interests[idx];
        return (
          <div key={idx} className="mb-2">
            <span className="key-blue">{idx + 1}. {loc?.area || i.area}</span>
            <br />
            <span className="pl-4 dim">{loc?.description || i.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export function renderSoftSkills(localized: LocalizedPortfolioData): React.ReactNode {
  return (
    <div>
      {softSkills.map((s, idx) => {
        const loc = localized.softSkills[idx];
        return (
          <div key={idx} className="mb-2">
            <span className="bright">{loc?.name || s.name}</span>
            <br />
            <span className="pl-4 dim">{loc?.description || s.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export function renderHistory(history: string[], t: TFunc): React.ReactNode {
  if (history.length === 0) {
    return <p className="dim">{t('noHistory')}</p>;
  }
  return (
    <div>
      {history.map((cmd, i) => (
        <p key={i}>
          <span className="dim" style={{ display: 'inline-block', minWidth: '4ch', textAlign: 'right' }}>
            {i + 1}
          </span>
          {'  '}{cmd}
        </p>
      ))}
    </div>
  );
}

export function renderNeofetch(t: TFunc, localized: LocalizedPortfolioData): React.ReactNode {
  const sorted = getExperienceSorted();
  const allTech = [...new Set(sorted.flatMap((e) => e.technologies))];
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <pre className="text-[7px] sm:text-[9px] leading-[1.15] bright whitespace-pre">
{`     ___
    /   \\
   / AC  \\
  /       \\
 /_________\\
 |  _   _  |
 | |_| |_| |
 |    _    |
 |   |_|   |
 |_________|`}
      </pre>
      <div>
        <p><span className="key-blue">andrea</span><span className="dim">@</span><span className="key-blue">portfolio</span></p>
        <p className="dim">-----------------</p>
        <p><span className="key-blue">OS:</span> {t('neofetch.os')}</p>
        <p><span className="key-blue">Host:</span> {profile.fullName}</p>
        <p><span className="key-blue">Role:</span> {localized.profile.title}</p>
        <p><span className="key-blue">Location:</span> {localized.profile.locationLabel}</p>
        <p><span className="key-blue">Experience:</span> {sorted.length} positions, {sorted[0]?.endDate === 'present' ? t('neofetch.currentlyActive') : ''}</p>
        <p><span className="key-blue">Projects:</span> {getProjectsSorted().length} repositories</p>
        <p><span className="key-blue">Languages:</span> {localized.languages.map((l) => l.name).join(', ')}</p>
        <p><span className="key-blue">Skills:</span> {allTech.slice(0, 6).join(', ')}...</p>
        <div className="mt-1 flex gap-1">
          {['#ff5f57', '#febc2e', '#28c840', '#00aaff', '#c084fc', '#ffd93d', '#00ff41', '#ff6b6b'].map((c) => (
            <span key={c} style={{ background: c, width: '16px', height: '16px', display: 'inline-block' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function renderEcho(text: string): React.ReactNode {
  return <p>{text || ''}</p>;
}

export function renderSudo(t: TFunc): React.ReactNode {
  return (
    <p className="keyword">
      {t('sudoDenied')}
    </p>
  );
}

export function renderUnknown(raw: string, t: TFunc): React.ReactNode {
  return (
    <p>
      <span className="keyword">{t('commandNotFound', { command: raw })}</span>{' '}
      <span className="dim">{t('typeHelp')}</span>
    </p>
  );
}

// --- Dispatcher ---

export function renderCommand(
  key: CommandKey,
  args: string,
  raw: string,
  commandHistory: string[],
  t: TFunc,
  localized: LocalizedPortfolioData,
): React.ReactNode {
  switch (key) {
    case 'help': return renderHelp(t);
    case 'whoami': return renderWhoami(localized);
    case 'skills': return renderSkills(localized);
    case 'experience': return renderExperience(t, localized);
    case 'projects': return renderProjects(t, localized);
    case 'project': return renderProjectDetail(args, t, localized);
    case 'chess': return renderChess(t);
    case 'contact': return renderContact();
    case 'education': return renderEducation(localized);
    case 'interests': return renderInterests(localized);
    case 'softskills': return renderSoftSkills(localized);
    case 'history': return renderHistory(commandHistory, t);
    case 'neofetch': return renderNeofetch(t, localized);
    case 'echo': return renderEcho(args);
    case 'sudo': return renderSudo(t);
    case 'unknown': return renderUnknown(raw, t);
    case 'clear': return null;
  }
}
