import { getProjectsSorted } from '@/lib/data';

// --- Types ---

export type CommandKey =
  | 'help'
  | 'whoami'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'project'
  | 'chess'
  | 'contact'
  | 'education'
  | 'interests'
  | 'softskills'
  | 'clear'
  | 'history'
  | 'neofetch'
  | 'echo'
  | 'sudo'
  | 'unknown';

export interface CommandDef {
  key: CommandKey;
  canonical: string;
  description: string;
  aliases: string[];
  /** Show in help listing and command chips */
  visible: boolean;
}

export interface ParsedCommand {
  key: CommandKey;
  raw: string;
  args: string;
}

// --- Registry ---

export const COMMANDS: CommandDef[] = [
  {
    key: 'help',
    canonical: 'help',
    description: 'Show available commands',
    aliases: ['?', 'commands'],
    visible: true,
  },
  {
    key: 'whoami',
    canonical: 'whoami',
    description: 'About me — bio, title, location',
    aliases: ['about'],
    visible: true,
  },
  {
    key: 'skills',
    canonical: 'cat skills.json',
    description: 'Technical skills & proficiency',
    aliases: ['skills'],
    visible: true,
  },
  {
    key: 'experience',
    canonical: 'git log --career',
    description: 'Work experience & achievements',
    aliases: ['experience', 'career'],
    visible: true,
  },
  {
    key: 'projects',
    canonical: 'ls ~/projects/',
    description: 'Project portfolio',
    aliases: ['projects'],
    visible: true,
  },
  {
    key: 'project',
    canonical: 'cat project <id>',
    description: 'Deep-dive into a specific project',
    aliases: [],
    visible: false,
  },
  {
    key: 'chess',
    canonical: './chess --status',
    description: 'Chess status & ASCII board',
    aliases: ['chess'],
    visible: true,
  },
  {
    key: 'contact',
    canonical: 'cat contact.txt',
    description: 'Contact information & links',
    aliases: ['contact'],
    visible: true,
  },
  {
    key: 'education',
    canonical: 'cat education.txt',
    description: 'Degree, thesis & languages',
    aliases: ['education', 'edu'],
    visible: true,
  },
  {
    key: 'interests',
    canonical: 'cat interests.txt',
    description: 'Areas of interest',
    aliases: ['interests'],
    visible: true,
  },
  {
    key: 'softskills',
    canonical: 'cat softskills.txt',
    description: 'Soft skills',
    aliases: ['softskills'],
    visible: true,
  },
  {
    key: 'clear',
    canonical: 'clear',
    description: 'Clear terminal',
    aliases: ['cls'],
    visible: true,
  },
  {
    key: 'history',
    canonical: 'history',
    description: 'Show command history',
    aliases: [],
    visible: false,
  },
  {
    key: 'neofetch',
    canonical: 'neofetch',
    description: 'System info summary',
    aliases: [],
    visible: false,
  },
  {
    key: 'echo',
    canonical: 'echo',
    description: 'Echo text back',
    aliases: [],
    visible: false,
  },
  {
    key: 'sudo',
    canonical: 'sudo',
    description: 'Run as superuser',
    aliases: [],
    visible: false,
  },
];

/** Commands shown as clickable chips */
export const CHIP_COMMANDS = COMMANDS.filter((c) => c.visible && c.key !== 'clear');

/** All command names and aliases for tab-completion */
export function getCompletionCandidates(): string[] {
  const candidates: string[] = [];
  for (const cmd of COMMANDS) {
    if (!cmd.visible && cmd.key !== 'history' && cmd.key !== 'neofetch') continue;
    candidates.push(cmd.canonical);
    candidates.push(...cmd.aliases);
  }
  // add project IDs for "cat project <id>"
  const projectIds = getProjectsSorted().map((p) => `cat project ${p.id}`);
  candidates.push(...projectIds);
  return [...new Set(candidates)];
}

// --- Parser ---

export function parseCommand(raw: string): ParsedCommand {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { key: 'unknown', raw: trimmed, args: '' };
  }

  const lower = trimmed.toLowerCase();

  // echo <text>
  if (lower.startsWith('echo ') || lower === 'echo') {
    return { key: 'echo', raw: trimmed, args: trimmed.slice(5).trim() };
  }

  // sudo <anything>
  if (lower.startsWith('sudo ') || lower === 'sudo') {
    return { key: 'sudo', raw: trimmed, args: trimmed.slice(5).trim() };
  }

  // cat project <id>
  if (lower.startsWith('cat project ')) {
    return { key: 'project', raw: trimmed, args: trimmed.slice(12).trim() };
  }

  // Check exact canonical matches and aliases
  for (const cmd of COMMANDS) {
    if (cmd.key === 'echo' || cmd.key === 'sudo' || cmd.key === 'project' || cmd.key === 'unknown') continue;
    if (lower === cmd.canonical.toLowerCase()) {
      return { key: cmd.key, raw: trimmed, args: '' };
    }
    for (const alias of cmd.aliases) {
      if (lower === alias.toLowerCase()) {
        return { key: cmd.key, raw: trimmed, args: '' };
      }
    }
  }

  return { key: 'unknown', raw: trimmed, args: '' };
}
