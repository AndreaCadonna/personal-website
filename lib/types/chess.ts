import type { Square } from 'chess.js';

/**
 * Chess puzzle definition
 */
export interface Puzzle {
  id: string;
  fen: string;           // Starting position in FEN notation
  moves: string[];       // Solution moves in UCI notation
  rating?: number;       // Puzzle difficulty rating
  themes?: string[];     // Puzzle themes (fork, pin, mate, etc.)
}

/**
 * Game status indicators
 */
export interface GameStatus {
  inCheck: boolean;
  inCheckmate: boolean;
  inStalemate: boolean;
  inDraw: boolean;
  isGameOver: boolean;
}

/**
 * Move result with metadata
 */
export interface MoveResult {
  from: Square;
  to: Square;
  san: string;           // Standard Algebraic Notation (e.g., "Nf3")
  lan: string;           // Long Algebraic Notation (e.g., "g1f3")
  captured?: string;     // Piece type if capture
  promotion?: string;    // Piece type if promotion
}

/**
 * Square highlight configuration for visual feedback
 */
export interface SquareHighlight {
  [square: string]: {
    background: string;
    borderRadius?: string;
  };
}

/**
 * Puzzle theme categories
 */
export type PuzzleTheme =
  | 'opening'
  | 'middlegame'
  | 'endgame'
  | 'mate'
  | 'mateIn1'
  | 'mateIn2'
  | 'mateIn3'
  | 'fork'
  | 'pin'
  | 'skewer'
  | 'sacrifice'
  | 'discoveredAttack'
  | 'doubleCheck'
  | 'deflection'
  | 'zugzwang';

/**
 * Lichess API puzzle response
 */
export interface LichessPuzzleResponse {
  game: {
    id: string;
    pgn: string;
  };
  puzzle: {
    id: string;
    rating: number;
    plays: number;
    initialPly: number;
    solution: string[];
    themes: string[];
  };
}

/**
 * Chess piece types
 */
export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

/**
 * Chess piece colors
 */
export type PieceColor = 'w' | 'b';

/**
 * Complete piece representation
 */
export interface Piece {
  type: PieceType;
  color: PieceColor;
}
