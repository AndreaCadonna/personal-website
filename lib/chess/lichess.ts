import type { Puzzle, LichessPuzzleResponse, PuzzleTheme } from '../types/chess';
import { parseLichessPuzzle } from './puzzle';

const LICHESS_API_BASE = 'https://lichess.org/api';

/**
 * Fetch the daily puzzle from Lichess
 *
 * @returns Promise resolving to a Puzzle object
 * @throws Error if the API request fails
 */
export async function fetchDailyPuzzle(): Promise<Puzzle> {
  const response = await fetch(`${LICHESS_API_BASE}/puzzle/daily`, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch daily puzzle: ${response.statusText}`);
  }

  const data: LichessPuzzleResponse = await response.json();
  return parseLichessPuzzle(data);
}

/**
 * Fetch a random puzzle from Lichess
 *
 * @returns Promise resolving to a Puzzle object
 * @throws Error if the API request fails
 */
export async function fetchRandomPuzzle(): Promise<Puzzle> {
  // Lichess doesn't have a direct random puzzle endpoint
  // We'll use the daily puzzle as fallback
  // In a real implementation, you might want to fetch puzzle activity
  // and select randomly from there
  return fetchDailyPuzzle();
}

/**
 * Fetch puzzles by theme
 * Note: This is a simplified implementation. Lichess API may require authentication
 * for more advanced filtering.
 *
 * @param theme - Puzzle theme to filter by
 * @returns Promise resolving to a Puzzle object
 * @throws Error if the API request fails
 */
export async function fetchPuzzleByTheme(theme: PuzzleTheme): Promise<Puzzle> {
  // Lichess API for filtering by theme requires authentication
  // For now, we'll return the daily puzzle
  // TODO: Implement proper theme filtering with authentication
  console.warn('Theme filtering not yet implemented, returning daily puzzle');
  return fetchDailyPuzzle();
}

/**
 * Fetch puzzle by rating range
 * Note: This requires Lichess authentication for filtering
 *
 * @param minRating - Minimum puzzle rating
 * @param maxRating - Maximum puzzle rating
 * @returns Promise resolving to a Puzzle object
 * @throws Error if the API request fails
 */
export async function fetchPuzzleByRating(
  minRating: number,
  maxRating: number
): Promise<Puzzle> {
  // Rating filtering requires authentication
  // For now, we'll return the daily puzzle and warn if out of range
  const puzzle = await fetchDailyPuzzle();

  if (puzzle.rating) {
    if (puzzle.rating < minRating || puzzle.rating > maxRating) {
      console.warn(
        `Daily puzzle rating (${puzzle.rating}) is outside requested range (${minRating}-${maxRating})`
      );
    }
  }

  return puzzle;
}

/**
 * Fetch puzzle by ID
 *
 * @param puzzleId - Lichess puzzle ID
 * @returns Promise resolving to a Puzzle object
 * @throws Error if the API request fails
 */
export async function fetchPuzzleById(puzzleId: string): Promise<Puzzle> {
  const response = await fetch(`${LICHESS_API_BASE}/puzzle/${puzzleId}`, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch puzzle ${puzzleId}: ${response.statusText}`);
  }

  const data: LichessPuzzleResponse = await response.json();
  return parseLichessPuzzle(data);
}

/**
 * Validate Lichess API connection
 *
 * @returns Promise resolving to true if API is accessible
 */
export async function validateLichessConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${LICHESS_API_BASE}/puzzle/daily`, {
      method: 'HEAD',
    });
    return response.ok;
  } catch {
    return false;
  }
}
