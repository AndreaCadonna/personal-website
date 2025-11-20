import type { Puzzle, LichessPuzzleResponse } from '../types/chess';

/**
 * Validate if a move matches the puzzle solution
 *
 * @param move - The move made (in UCI or LAN notation)
 * @param solution - Array of solution moves
 * @param currentStep - Current step in the solution
 * @returns True if the move matches the solution
 */
export function validatePuzzleMove(
  move: string,
  solution: string[],
  currentStep: number
): boolean {
  if (currentStep >= solution.length) {
    return false;
  }
  return move === solution[currentStep];
}

/**
 * Check if puzzle is complete
 *
 * @param currentStep - Current step in the solution
 * @param solution - Array of solution moves
 * @returns True if all moves have been played
 */
export function isPuzzleComplete(
  currentStep: number,
  solution: string[]
): boolean {
  return currentStep >= solution.length;
}

/**
 * Get the next opponent move from solution
 * Assumes player moves are at even indices, opponent at odd indices
 *
 * @param solution - Array of solution moves
 * @param currentStep - Current step in the solution
 * @returns Next opponent move or null if none
 */
export function getOpponentMove(
  solution: string[],
  currentStep: number
): string | null {
  const nextIndex = currentStep;
  return solution[nextIndex] || null;
}

/**
 * Calculate puzzle progress percentage
 *
 * @param currentStep - Current step in the solution
 * @param solution - Array of solution moves
 * @returns Progress as percentage (0-100)
 */
export function getPuzzleProgress(
  currentStep: number,
  solution: string[]
): number {
  if (solution.length === 0) return 0;
  return Math.min(100, Math.round((currentStep / solution.length) * 100));
}

/**
 * Parse puzzle from Lichess API response
 *
 * @param data - Lichess API response
 * @returns Parsed puzzle object
 */
export function parseLichessPuzzle(data: LichessPuzzleResponse): Puzzle {
  // Extract FEN from the PGN
  // Lichess provides the position in the game PGN
  const pgnLines = data.game.pgn.split('\n');
  const fenLine = pgnLines.find(line => line.startsWith('[FEN'));
  let fen = '';

  if (fenLine) {
    const fenMatch = fenLine.match(/\[FEN "(.+)"\]/);
    if (fenMatch) {
      fen = fenMatch[1];
    }
  }

  return {
    id: data.puzzle.id,
    fen,
    moves: data.puzzle.solution,
    rating: data.puzzle.rating,
    themes: data.puzzle.themes,
  };
}

/**
 * Get puzzle difficulty description based on rating
 *
 * @param rating - Puzzle rating
 * @returns Difficulty description
 */
export function getPuzzleDifficulty(rating: number): string {
  if (rating < 1200) return 'Beginner';
  if (rating < 1500) return 'Easy';
  if (rating < 1800) return 'Intermediate';
  if (rating < 2100) return 'Advanced';
  if (rating < 2400) return 'Expert';
  return 'Master';
}

/**
 * Format puzzle themes for display
 *
 * @param themes - Array of theme strings
 * @returns Formatted theme string
 */
export function formatPuzzleThemes(themes: string[]): string {
  if (!themes || themes.length === 0) return 'General';

  // Capitalize first letter of each theme
  const formatted = themes.map(theme =>
    theme.charAt(0).toUpperCase() + theme.slice(1)
  );

  return formatted.join(', ');
}
