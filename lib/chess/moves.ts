import { Chess, Square } from 'chess.js';
import type { SquareHighlight } from '../types/chess';

/**
 * Get all legal moves from a specific square
 *
 * @param game - Chess game instance
 * @param square - Square to get moves from
 * @returns Array of destination squares
 */
export function getLegalMovesFromSquare(
  game: Chess,
  square: Square
): Square[] {
  const moves = game.moves({ square, verbose: true });
  return moves.map(move => move.to);
}

/**
 * Create highlight styles for squares
 *
 * @param squares - Array of squares to highlight
 * @param color - Background color for highlights
 * @returns Object mapping squares to style objects
 */
export function getSquareStyles(
  squares: Square[],
  color: string
): SquareHighlight {
  return squares.reduce((styles, square) => {
    styles[square] = {
      background: color,
      borderRadius: '0px', // Brutal aesthetic
    };
    return styles;
  }, {} as SquareHighlight);
}

/**
 * Create move highlight configuration
 * Highlights the selected square and all possible destination squares
 *
 * @param from - Selected square
 * @param possibleMoves - Array of possible destination squares
 * @returns Highlight configuration object
 */
export function createMoveHighlights(
  from: Square,
  possibleMoves: Square[]
): SquareHighlight {
  const highlights: SquareHighlight = {};

  // Highlight selected square (yellow)
  highlights[from] = {
    background: 'rgba(255, 255, 0, 0.4)',
  };

  // Highlight possible destination squares (green)
  possibleMoves.forEach(square => {
    highlights[square] = {
      background: 'rgba(0, 255, 0, 0.2)',
    };
  });

  return highlights;
}

/**
 * Convert UCI move notation to SAN (Standard Algebraic Notation)
 *
 * @param game - Chess game instance
 * @param uci - Move in UCI format (e.g., "e2e4")
 * @returns Move in SAN format (e.g., "e4") or empty string if invalid
 */
export function uciToSan(game: Chess, uci: string): string {
  try {
    const from = uci.substring(0, 2) as Square;
    const to = uci.substring(2, 4) as Square;
    const promotion = uci.length > 4 ? uci[4] : undefined;

    const move = game.move({ from, to, promotion });
    if (!move) return '';

    const san = move.san;
    game.undo(); // Undo the move since we just wanted the notation
    return san;
  } catch {
    return '';
  }
}

/**
 * Convert SAN move notation to UCI
 *
 * @param game - Chess game instance
 * @param san - Move in SAN format (e.g., "Nf3")
 * @returns Move in UCI format (e.g., "g1f3") or empty string if invalid
 */
export function sanToUci(game: Chess, san: string): string {
  try {
    const move = game.move(san);
    if (!move) return '';

    const uci = move.from + move.to + (move.promotion || '');
    game.undo();
    return uci;
  } catch {
    return '';
  }
}

/**
 * Check if a move is a capture
 *
 * @param game - Chess game instance
 * @param from - Source square
 * @param to - Destination square
 * @returns True if the move is a capture
 */
export function isCaptureMove(game: Chess, from: Square, to: Square): boolean {
  const piece = game.get(to);
  return piece !== null;
}

/**
 * Get highlight color based on move type
 *
 * @param isCapture - Whether the move is a capture
 * @returns RGB color string
 */
export function getMoveHighlightColor(isCapture: boolean): string {
  return isCapture
    ? 'rgba(255, 0, 0, 0.3)'  // Red for captures
    : 'rgba(0, 255, 0, 0.2)';  // Green for quiet moves
}

/**
 * Create last move highlight
 *
 * @param from - Move source square
 * @param to - Move destination square
 * @returns Highlight configuration
 */
export function createLastMoveHighlight(
  from: Square,
  to: Square
): SquareHighlight {
  const highlightColor = 'rgba(255, 255, 0, 0.5)';

  return {
    [from]: {
      background: highlightColor,
    },
    [to]: {
      background: highlightColor,
    },
  };
}

/**
 * Parse square from coordinates (for click-to-move)
 *
 * @param file - File index (0-7, a-h)
 * @param rank - Rank index (0-7, 8-1)
 * @returns Square in algebraic notation
 */
export function squareFromCoordinates(file: number, rank: number): Square {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  if (file < 0 || file > 7 || rank < 0 || rank > 7) {
    throw new Error('Invalid coordinates');
  }

  return `${files[file]}${ranks[rank]}` as Square;
}

/**
 * Get coordinates from square (inverse of squareFromCoordinates)
 *
 * @param square - Square in algebraic notation
 * @returns Object with file and rank indices
 */
export function coordinatesFromSquare(square: Square): { file: number; rank: number } {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const file = files.indexOf(square[0]);
  const rank = ranks.indexOf(square[1]);

  if (file === -1 || rank === -1) {
    throw new Error('Invalid square');
  }

  return { file, rank };
}
