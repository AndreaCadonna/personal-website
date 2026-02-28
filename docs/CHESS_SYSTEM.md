# Chess System Documentation

## Overview

The chess system is a modular, reusable architecture designed to integrate chess functionality throughout the website in flexible ways. It follows a 3-layer architecture: Logic, Hooks, and UI.

## Architecture Layers

```
┌─────────────────────────────────────────────┐
│  UI Layer (app/components/chess/)           │
│  - ChessBoard.tsx (display)                 │
│  - PuzzleBoard.tsx (interactive)            │
│  - MiniBoard.tsx (decorative)               │
└─────────────────┬───────────────────────────┘
                  │ uses
┌─────────────────▼───────────────────────────┐
│  Hook Layer (lib/hooks/)                    │
│  - useChessGame() → basic game state        │
│  - useChessPuzzle() → puzzle validation     │
└─────────────────┬───────────────────────────┘
                  │ uses
┌─────────────────▼───────────────────────────┐
│  Logic Layer (lib/chess/)                   │
│  - engine.ts → chess.js wrapper             │
│  - puzzle.ts → solution validation          │
│  - moves.ts → move utilities                │
│  - lichess.ts → API integration             │
└─────────────────────────────────────────────┘
```

## Directory Structure

```
lib/chess/                      # Logic layer
├── engine.ts                   # Chess engine wrapper
├── puzzle.ts                   # Puzzle logic
├── moves.ts                    # Move utilities
└── lichess.ts                  # Lichess API client

lib/hooks/                      # Hook layer
├── useChessGame.ts             # Basic game state
└── useChessPuzzle.ts           # Puzzle state & validation

app/components/chess/           # UI layer
├── ChessBoard.tsx              # Base chess board
├── PuzzleBoard.tsx             # Interactive puzzle
├── MiniBoard.tsx               # Decorative mini board
└── PieceDisplay.tsx            # Individual pieces

lib/types/                      # Type definitions
└── chess.ts                    # Chess-related types
```

## Logic Layer

### engine.ts

Chess.js wrapper with utility functions.

```typescript
// lib/chess/engine.ts
import { Chess } from 'chess.js';

/**
 * Create a new chess game instance
 */
export function createGame(fen?: string): Chess {
  return new Chess(fen);
}

/**
 * Check if a move is legal
 */
export function isMoveLegal(game: Chess, move: string): boolean {
  const moves = game.moves({ verbose: true });
  return moves.some(m => m.san === move || m.lan === move);
}

/**
 * Get all legal moves for the current position
 */
export function getLegalMoves(game: Chess): string[] {
  return game.moves();
}

/**
 * Get FEN string from game
 */
export function getFen(game: Chess): string {
  return game.fen();
}

/**
 * Check game status
 */
export function getGameStatus(game: Chess) {
  return {
    inCheck: game.inCheck(),
    inCheckmate: game.isCheckmate(),
    inStalemate: game.isStalemate(),
    inDraw: game.isDraw(),
    isGameOver: game.isGameOver(),
  };
}
```

### puzzle.ts

Puzzle-specific logic and validation.

```typescript
// lib/chess/puzzle.ts
import { Chess } from 'chess.js';

export interface Puzzle {
  id: string;
  fen: string;           // Starting position
  moves: string[];       // Solution moves (UCI notation)
  rating?: number;       // Puzzle difficulty
  themes?: string[];     // Puzzle themes (fork, pin, etc.)
}

/**
 * Validate if a move matches the puzzle solution
 */
export function validatePuzzleMove(
  move: string,
  solution: string[],
  currentStep: number
): boolean {
  return move === solution[currentStep];
}

/**
 * Check if puzzle is complete
 */
export function isPuzzleComplete(
  currentStep: number,
  solution: string[]
): boolean {
  return currentStep >= solution.length;
}

/**
 * Get the next opponent move from solution
 */
export function getOpponentMove(
  solution: string[],
  currentStep: number
): string | null {
  // Assuming player moves are even indices, opponent moves are odd
  const nextIndex = currentStep + 1;
  return solution[nextIndex] || null;
}

/**
 * Parse puzzle from Lichess format
 */
export function parseLichessPuzzle(data: any): Puzzle {
  return {
    id: data.puzzle.id,
    fen: data.puzzle.fen,
    moves: data.puzzle.solution,
    rating: data.puzzle.rating,
    themes: data.puzzle.themes,
  };
}
```

### moves.ts

Move utilities and conversions.

```typescript
// lib/chess/moves.ts
import { Chess, Square } from 'chess.js';

/**
 * Convert square to chess notation (e.g., [0,0] -> 'a8')
 */
export function squareToNotation(row: number, col: number): Square {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
  return `${files[col]}${ranks[row]}` as Square;
}

/**
 * Get square styles for highlighting
 */
export function getSquareStyles(squares: Square[], color: string) {
  return squares.reduce((styles, square) => {
    styles[square] = {
      background: color,
      borderRadius: '0px', // Brutal aesthetic
    };
    return styles;
  }, {} as Record<string, React.CSSProperties>);
}

/**
 * Get legal moves from a square
 */
export function getLegalMovesFromSquare(
  game: Chess,
  square: Square
): Square[] {
  const moves = game.moves({ square, verbose: true });
  return moves.map(move => move.to);
}

/**
 * Convert UCI move to SAN notation
 * e.g., "e2e4" -> "e4"
 */
export function uciToSan(game: Chess, uci: string): string {
  const from = uci.substring(0, 2) as Square;
  const to = uci.substring(2, 4) as Square;
  const promotion = uci.length > 4 ? uci[4] : undefined;

  const move = game.move({ from, to, promotion });
  if (!move) return '';

  const san = move.san;
  game.undo(); // Undo the move since we just wanted the notation
  return san;
}

/**
 * Highlight options for square selection
 */
export interface SquareHighlight {
  [square: string]: {
    background: string;
    borderRadius?: string;
  };
}

export function createMoveHighlights(
  from: Square,
  possibleMoves: Square[]
): SquareHighlight {
  const highlights: SquareHighlight = {};

  // Highlight selected square
  highlights[from] = {
    background: 'rgba(255, 255, 0, 0.4)',
  };

  // Highlight possible destination squares
  possibleMoves.forEach(square => {
    highlights[square] = {
      background: 'rgba(0, 255, 0, 0.2)',
    };
  });

  return highlights;
}
```

### lichess.ts

Lichess API client for fetching puzzles.

```typescript
// lib/chess/lichess.ts
import type { Puzzle } from './puzzle';
import { parseLichessPuzzle } from './puzzle';

const LICHESS_API_BASE = 'https://lichess.org/api';

/**
 * Fetch daily puzzle from Lichess
 */
export async function fetchDailyPuzzle(): Promise<Puzzle> {
  const response = await fetch(`${LICHESS_API_BASE}/puzzle/daily`, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch daily puzzle');
  }

  const data = await response.json();
  return parseLichessPuzzle(data);
}

/**
 * Fetch random puzzle by theme
 */
export async function fetchPuzzleByTheme(
  theme: string
): Promise<Puzzle> {
  const response = await fetch(
    `${LICHESS_API_BASE}/puzzle/activity?max=1&theme=${theme}`,
    {
      headers: {
        'Accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch puzzle with theme: ${theme}`);
  }

  const data = await response.json();
  return parseLichessPuzzle(data);
}

/**
 * Fetch puzzle by rating range
 */
export async function fetchPuzzleByRating(
  minRating: number,
  maxRating: number
): Promise<Puzzle> {
  // Lichess API endpoint for filtered puzzles
  // Note: Actual implementation depends on Lichess API capabilities
  const response = await fetch(
    `${LICHESS_API_BASE}/puzzle/daily`,
    {
      headers: {
        'Accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch puzzle');
  }

  const data = await response.json();
  const puzzle = parseLichessPuzzle(data);

  // Filter by rating if available
  if (puzzle.rating &&
      (puzzle.rating < minRating || puzzle.rating > maxRating)) {
    // In production, retry or use a different endpoint
    console.warn('Puzzle rating outside requested range');
  }

  return puzzle;
}
```

## Hook Layer

### useChessGame.ts

Basic chess game state management.

```typescript
// lib/hooks/useChessGame.ts
"use client";

import { useState, useRef, useCallback } from 'react';
import { Chess } from 'chess.js';
import { createGame, getFen, getGameStatus } from '@/lib/chess/engine';

export function useChessGame(initialFen?: string) {
  const gameRef = useRef<Chess>(createGame(initialFen));
  const [position, setPosition] = useState(getFen(gameRef.current));

  const makeMove = useCallback((move: string) => {
    const result = gameRef.current.move(move);
    if (result) {
      setPosition(getFen(gameRef.current));
      return true;
    }
    return false;
  }, []);

  const undo = useCallback(() => {
    gameRef.current.undo();
    setPosition(getFen(gameRef.current));
  }, []);

  const reset = useCallback(() => {
    gameRef.current.reset();
    setPosition(getFen(gameRef.current));
  }, []);

  const status = getGameStatus(gameRef.current);

  return {
    position,
    makeMove,
    undo,
    reset,
    status,
    game: gameRef.current,
  };
}
```

### useChessPuzzle.ts

Puzzle-specific state and validation.

```typescript
// lib/hooks/useChessPuzzle.ts
"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import { Chess, Square } from 'chess.js';
import type { Puzzle } from '@/lib/chess/puzzle';
import {
  validatePuzzleMove,
  isPuzzleComplete,
  getOpponentMove,
} from '@/lib/chess/puzzle';
import { createGame, getFen } from '@/lib/chess/engine';

export function useChessPuzzle(puzzle: Puzzle) {
  const gameRef = useRef<Chess>(createGame(puzzle.fen));
  const [position, setPosition] = useState(puzzle.fen);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState('Make your move');
  const [isComplete, setIsComplete] = useState(false);

  const makeMove = useCallback((from: Square, to: Square) => {
    const move = gameRef.current.move({ from, to });
    if (!move) {
      setStatus('Illegal move');
      return false;
    }

    const isCorrect = validatePuzzleMove(
      move.lan,
      puzzle.moves,
      currentStep
    );

    if (!isCorrect) {
      setStatus('Wrong move! Try again');
      gameRef.current.undo();
      return false;
    }

    setPosition(getFen(gameRef.current));
    setStatus('Correct!');
    setCurrentStep(prev => prev + 1);

    // Check if puzzle is complete
    if (isPuzzleComplete(currentStep + 1, puzzle.moves)) {
      setIsComplete(true);
      setStatus('Puzzle solved! 🎉');
      return true;
    }

    // Play opponent's response
    setTimeout(() => {
      const opponentMove = getOpponentMove(puzzle.moves, currentStep + 1);
      if (opponentMove) {
        gameRef.current.move(opponentMove);
        setPosition(getFen(gameRef.current));
        setCurrentStep(prev => prev + 1);
        setStatus('Your turn');
      }
    }, 500);

    return true;
  }, [puzzle, currentStep]);

  const reset = useCallback(() => {
    gameRef.current = createGame(puzzle.fen);
    setPosition(puzzle.fen);
    setCurrentStep(0);
    setStatus('Make your move');
    setIsComplete(false);
  }, [puzzle]);

  return {
    position,
    makeMove,
    reset,
    status,
    isComplete,
    progress: `${currentStep}/${puzzle.moves.length}`,
  };
}
```

## UI Layer

### ChessBoard.tsx

Base chess board component (flexible for server/client use).

```typescript
// app/components/chess/ChessBoard.tsx
"use client";

import { Chessboard } from 'react-chessboard';

interface ChessBoardProps {
  position: string;
  onMove?: (from: string, to: string) => boolean;
  interactive?: boolean;
  size?: number;
}

export function ChessBoard({
  position,
  onMove,
  interactive = true,
  size = 400,
}: ChessBoardProps) {
  return (
    <div
      className="border-4 border-black inline-block"
      style={{ width: size, height: size }}
    >
      <Chessboard
        position={position}
        onPieceDrop={interactive && onMove ? (from, to) => onMove(from, to) : undefined}
        boardWidth={size}
        customLightSquareStyle={{ backgroundColor: '#EEEED2' }}
        customDarkSquareStyle={{ backgroundColor: '#769656' }}
        customBoardStyle={{
          borderRadius: '0px',
        }}
      />
    </div>
  );
}
```

### PuzzleBoard.tsx

Interactive puzzle component.

```typescript
// app/components/chess/PuzzleBoard.tsx
"use client";

import { useEffect, useState } from 'react';
import { ChessBoard } from './ChessBoard';
import { useChessPuzzle } from '@/lib/hooks/useChessPuzzle';
import { fetchDailyPuzzle } from '@/lib/chess/lichess';
import type { Puzzle } from '@/lib/chess/puzzle';
import { Button } from '@/app/components/ui/Button';

interface PuzzleBoardProps {
  puzzleId?: string;
}

export function PuzzleBoard({ puzzleId }: PuzzleBoardProps) {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPuzzle = async () => {
      try {
        const fetchedPuzzle = await fetchDailyPuzzle();
        setPuzzle(fetchedPuzzle);
      } catch (err) {
        setError('Failed to load puzzle');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPuzzle();
  }, [puzzleId]);

  if (loading) {
    return <div className="p-8 border-4 border-black">Loading puzzle...</div>;
  }

  if (error || !puzzle) {
    return <div className="p-8 border-4 border-black text-red-600">{error}</div>;
  }

  return <PuzzleBoardContent puzzle={puzzle} />;
}

function PuzzleBoardContent({ puzzle }: { puzzle: Puzzle }) {
  const { position, makeMove, reset, status, isComplete, progress } =
    useChessPuzzle(puzzle);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="font-mono text-sm">
          Progress: {progress}
          {puzzle.rating && ` • Rating: ${puzzle.rating}`}
        </div>
        <Button variant="secondary" onClick={reset}>
          RESET
        </Button>
      </div>

      <ChessBoard
        position={position}
        onMove={makeMove}
        interactive={!isComplete}
      />

      <div className="border-4 border-black p-4 bg-white">
        <div className="font-bold">{status}</div>
        {puzzle.themes && (
          <div className="text-sm text-gray-600 mt-2">
            Themes: {puzzle.themes.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}
```

### MiniBoard.tsx

Decorative mini chess board.

```typescript
// app/components/chess/MiniBoard.tsx
"use client";

import { ChessBoard } from './ChessBoard';

interface MiniBoardProps {
  position?: string;
  size?: number;
}

const STARTING_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export function MiniBoard({
  position = STARTING_POSITION,
  size = 200,
}: MiniBoardProps) {
  return (
    <ChessBoard
      position={position}
      interactive={false}
      size={size}
    />
  );
}
```

## Type Definitions

```typescript
// lib/types/chess.ts
import type { Square } from 'chess.js';

export interface Puzzle {
  id: string;
  fen: string;
  moves: string[];
  rating?: number;
  themes?: string[];
}

export interface GameStatus {
  inCheck: boolean;
  inCheckmate: boolean;
  inStalemate: boolean;
  inDraw: boolean;
  isGameOver: boolean;
}

export interface MoveResult {
  from: Square;
  to: Square;
  san: string;
  lan: string;
  captured?: string;
  promotion?: string;
}

export type PuzzleTheme =
  | 'opening'
  | 'middlegame'
  | 'endgame'
  | 'mate'
  | 'fork'
  | 'pin'
  | 'skewer'
  | 'sacrifice';
```

## Usage Examples

### Simple Display Board

```tsx
import { MiniBoard } from '@/app/components/chess/MiniBoard';

export function HeroSection() {
  return (
    <div>
      <h1>Welcome</h1>
      <MiniBoard size={150} />
    </div>
  );
}
```

### Interactive Puzzle

```tsx
import { PuzzleBoard } from '@/app/components/chess/PuzzleBoard';

export function PuzzlePage() {
  return (
    <main>
      <h1>Daily Puzzle</h1>
      <PuzzleBoard puzzleId="daily" />
    </main>
  );
}
```

### Custom Chess Game

```tsx
"use client";

import { ChessBoard } from '@/app/components/chess/ChessBoard';
import { useChessGame } from '@/lib/hooks/useChessGame';

export function CustomGame() {
  const { position, makeMove, undo, reset, status } = useChessGame();

  return (
    <div>
      <ChessBoard position={position} onMove={makeMove} />
      <div>
        <button onClick={undo}>Undo</button>
        <button onClick={reset}>Reset</button>
      </div>
      {status.inCheckmate && <div>Checkmate!</div>}
    </div>
  );
}
```

## API Integration

### Lichess API Endpoints

- **Daily Puzzle**: `GET /api/puzzle/daily`
- **Random Puzzle**: `GET /api/puzzle/next`
- **Puzzle Activity**: `GET /api/puzzle/activity`

All endpoints are public and don't require authentication for basic usage.

## Future Enhancements

- [ ] Puzzle hints system
- [ ] Move history display
- [ ] Puzzle difficulty selection
- [ ] User progress tracking
- [ ] Puzzle collections by theme
- [ ] Analysis mode with engine evaluation
- [ ] Mobile touch controls optimization
- [ ] Puzzle timer/clock
- [ ] Social sharing of solved puzzles

---

This modular architecture allows chess functionality to be integrated anywhere in the website while maintaining clean separation of concerns.
