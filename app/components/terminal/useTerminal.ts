import { useState, useCallback, useRef, useEffect } from 'react';
import { parseCommand, getCompletionCandidates } from './commands';
import type { CommandKey } from './commands';
import { profile } from '@/lib/data';

// --- Types ---

export type LineType = 'boot' | 'input' | 'output' | 'system';

export interface TerminalLine {
  id: string;
  type: LineType;
  content?: string;
  commandKey?: CommandKey;
  args?: string;
  raw?: string;
}

export type Phase = 'booting' | 'interactive';

export interface TerminalState {
  phase: Phase;
  lines: TerminalLine[];
  commandHistory: string[];
  historyIndex: number;
  currentInput: string;
  visibleBootLines: number;
}

// --- Boot data ---

const BOOT_LINES = [
  { text: 'BIOS v3.14 - Portfolio System', delay: 0 },
  { text: 'Checking memory... 16384 MB OK', delay: 200 },
  { text: 'Loading kernel modules...', delay: 400 },
  { text: '[  OK  ] Started Network Manager', delay: 600 },
  { text: '[  OK  ] Mounted Developer Filesystem', delay: 800 },
  { text: '[  OK  ] Started Portfolio Service', delay: 1000 },
  { text: '', delay: 1200 },
  { text: `portfolio login: ${profile.firstName.toLowerCase()}`, delay: 1400 },
  { text: `Last login: Today from ${profile.contact.location}`, delay: 1600 },
  { text: '', delay: 1800 },
];

export { BOOT_LINES };

const MAX_HISTORY = 100;
const MAX_LINES = 500;

let lineCounter = 0;
function nextId(): string {
  return `line-${++lineCounter}`;
}

// --- Hook ---

export function useTerminal() {
  const [phase, setPhase] = useState<Phase>('booting');
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState('');
  const [visibleBootLines, setVisibleBootLines] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Boot sequence
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleBootLines(i + 1);
        if (i === BOOT_LINES.length - 1) {
          const t2 = setTimeout(() => {
            setPhase('interactive');
            // Auto-run help after boot
            const t3 = setTimeout(() => {
              setLines((prev) => [
                ...prev,
                { id: nextId(), type: 'input', content: 'help', raw: 'help' },
                { id: nextId(), type: 'output', commandKey: 'help', args: '', raw: 'help' },
              ]);
            }, 500);
            timers.push(t3);
          }, 400);
          timers.push(t2);
        }
      }, line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, visibleBootLines, phase]);

  const executeCommand = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const parsed = parseCommand(trimmed);

    // Add to history (capped to prevent unbounded growth)
    setCommandHistory((prev) => {
      const updated = [...prev, trimmed];
      return updated.length > MAX_HISTORY ? updated.slice(-MAX_HISTORY) : updated;
    });
    setHistoryIndex(-1);
    setCurrentInput('');

    if (parsed.key === 'clear') {
      setLines([]);
      return;
    }

    setLines((prev) => {
      const updated = [
        ...prev,
        { id: nextId(), type: 'input' as const, content: trimmed, raw: trimmed },
        { id: nextId(), type: 'output' as const, commandKey: parsed.key, args: parsed.args, raw: parsed.raw },
      ];
      return updated.length > MAX_LINES ? updated.slice(-MAX_LINES) : updated;
    });
  }, []);

  const handleHistoryUp = useCallback(() => {
    if (commandHistory.length === 0) return;
    setHistoryIndex((prev) => {
      const next = prev === -1 ? commandHistory.length - 1 : Math.max(0, prev - 1);
      setCurrentInput(commandHistory[next]);
      return next;
    });
  }, [commandHistory]);

  const handleHistoryDown = useCallback(() => {
    if (commandHistory.length === 0) return;
    setHistoryIndex((prev) => {
      if (prev === -1) return -1;
      const next = prev + 1;
      if (next >= commandHistory.length) {
        setCurrentInput('');
        return -1;
      }
      setCurrentInput(commandHistory[next]);
      return next;
    });
  }, [commandHistory]);

  const handleTab = useCallback((input: string) => {
    if (!input.trim()) return input;
    const lower = input.toLowerCase();
    const candidates = getCompletionCandidates();
    const matches = candidates.filter((c) => c.toLowerCase().startsWith(lower));
    if (matches.length === 1) {
      setCurrentInput(matches[0]);
      return matches[0];
    }
    if (matches.length > 1) {
      // Find common prefix
      let common = matches[0];
      for (const m of matches.slice(1)) {
        while (!m.toLowerCase().startsWith(common.toLowerCase())) {
          common = common.slice(0, -1);
        }
      }
      if (common.length > input.length) {
        setCurrentInput(common);
        return common;
      }
    }
    return input;
  }, []);

  const handleCtrlC = useCallback(() => {
    setLines((prev) => [
      ...prev,
      { id: nextId(), type: 'input', content: currentInput + '^C' },
    ]);
    setCurrentInput('');
    setHistoryIndex(-1);
  }, [currentInput]);

  const clearInput = useCallback(() => {
    setCurrentInput('');
    setHistoryIndex(-1);
  }, []);

  return {
    phase,
    lines,
    commandHistory,
    historyIndex,
    currentInput,
    setCurrentInput,
    visibleBootLines,
    scrollRef,
    executeCommand,
    handleHistoryUp,
    handleHistoryDown,
    handleTab,
    handleCtrlC,
    clearInput,
    BOOT_LINES,
  };
}
