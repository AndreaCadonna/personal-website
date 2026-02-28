import { Chess } from 'chess.js';
import type { GameStatus } from '../types/chess';

/**
 * Create a new chess game instance
 *
 * @param fen - Optional FEN string to initialize position
 * @returns Chess game instance
 */
export function createGame(fen?: string): Chess {
  return new Chess(fen);
}

/**
 * Check if a move is legal in the current position
 *
 * @param game - Chess game instance
 * @param move - Move in SAN or UCI notation
 * @returns True if move is legal
 */
export function isMoveLegal(game: Chess, move: string): boolean {
  const moves = game.moves({ verbose: true });
  return moves.some(m => m.san === move || m.lan === move);
}

/**
 * Get all legal moves for the current position
 *
 * @param game - Chess game instance
 * @returns Array of legal moves in SAN notation
 */
export function getLegalMoves(game: Chess): string[] {
  return game.moves();
}

/**
 * Get FEN string from game
 *
 * @param game - Chess game instance
 * @returns Current position as FEN string
 */
export function getFen(game: Chess): string {
  return game.fen();
}

/**
 * Get comprehensive game status
 *
 * @param game - Chess game instance
 * @returns Object containing all game status flags
 */
export function getGameStatus(game: Chess): GameStatus {
  return {
    inCheck: game.inCheck(),
    inCheckmate: game.isCheckmate(),
    inStalemate: game.isStalemate(),
    inDraw: game.isDraw(),
    isGameOver: game.isGameOver(),
  };
}

/**
 * Load a PGN string into the game
 *
 * @param game - Chess game instance
 * @param pgn - PGN string
 * @returns True if PGN was loaded successfully
 */
export function loadPgn(game: Chess, pgn: string): boolean {
  return game.loadPgn(pgn);
}

/**
 * Get the current PGN of the game
 *
 * @param game - Chess game instance
 * @returns PGN string
 */
export function getPgn(game: Chess): string {
  return game.pgn();
}

/**
 * Reset game to starting position
 *
 * @param game - Chess game instance
 */
export function resetGame(game: Chess): void {
  game.reset();
}

/**
 * Undo the last move
 *
 * @param game - Chess game instance
 * @returns The move that was undone, or null if no moves to undo
 */
export function undoMove(game: Chess) {
  return game.undo();
}

/**
 * Get the current turn
 *
 * @param game - Chess game instance
 * @returns 'w' for white, 'b' for black
 */
export function getCurrentTurn(game: Chess): 'w' | 'b' {
  return game.turn();
}

/**
 * Get move history
 *
 * @param game - Chess game instance
 * @param verbose - If true, returns detailed move objects
 * @returns Array of moves
 */
export function getMoveHistory(game: Chess, verbose = false) {
  return game.history({ verbose });
}
