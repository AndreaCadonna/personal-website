'use client';

import { useRef, useEffect, type KeyboardEvent } from 'react';
import { CHIP_COMMANDS } from './commands';

interface TerminalInputProps {
  currentInput: string;
  setCurrentInput: (value: string) => void;
  onExecute: (raw: string) => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
  onTab: (input: string) => string;
  onCtrlC: () => void;
  onClearInput: () => void;
}

export default function TerminalInput({
  currentInput,
  setCurrentInput,
  onExecute,
  onHistoryUp,
  onHistoryDown,
  onTab,
  onCtrlC,
  onClearInput,
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onExecute(currentInput);
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      onHistoryUp();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      onHistoryDown();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      onTab(currentInput);
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      onClearInput();
      return;
    }

    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      onExecute('clear');
      return;
    }

    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      onCtrlC();
      return;
    }
  }

  function handleChipClick(canonical: string) {
    onExecute(canonical);
    inputRef.current?.focus();
  }

  function handleContainerClick() {
    inputRef.current?.focus();
  }

  return (
    <div onClick={handleContainerClick}>
      {/* Command chips */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {CHIP_COMMANDS.map((cmd) => (
          <button
            key={cmd.key}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleChipClick(cmd.canonical);
            }}
            className="px-2 py-0.5 text-[11px] border border-[#333] hover:border-[#00aaff] hover:text-[#00aaff] bg-transparent text-[#555] transition-colors cursor-pointer select-none"
            style={{ fontFamily: 'inherit' }}
          >
            {cmd.canonical}
          </button>
        ))}
      </div>

      {/* Input line */}
      <div className="flex items-center">
        <span className="text-[#00aaff] font-bold mr-1 select-none shrink-0">$ </span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-[#00ff41] flex-1 min-w-0 caret-[#00ff41]"
          style={{ fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
}
