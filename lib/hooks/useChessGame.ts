"use client";

import { useState, useRef, useCallback } from 'react';
import { Chess, Square } from 'chess.js';
import { createGame, getFen, getGameStatus } from '../chess/engine';
import type { GameStatus } from '../types/chess';

/**
 * Hook for managing basic chess game state
 * Provides game instance, position, and move functions
 *
 * @param initialFen - Optional FEN string to initialize position
 * @returns Game state and control functions
 */
export function useChessGame(initialFen?: string) {
  const gameRef = useRef<Chess>(createGame(initialFen));
  const [position, setPosition] = useState(getFen(gameRef.current));
  const [status, setStatus] = useState<GameStatus>(getGameStatus(gameRef.current));

  /**
   * Make a move on the board
   * Accepts move in various formats (SAN, UCI, object)
   */
  const makeMove = useCallback((move: string | { from: Square; to: Square; promotion?: string }) => {
    try {
      const result = gameRef.current.move(move);
      if (result) {
        setPosition(getFen(gameRef.current));
        setStatus(getGameStatus(gameRef.current));
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  /**
   * Undo the last move
   */
  const undo = useCallback(() => {
    const move = gameRef.current.undo();
    if (move) {
      setPosition(getFen(gameRef.current));
      setStatus(getGameStatus(gameRef.current));
      return true;
    }
    return false;
  }, []);

  /**
   * Reset the game to starting position
   */
  const reset = useCallback(() => {
    gameRef.current.reset();
    setPosition(getFen(gameRef.current));
    setStatus(getGameStatus(gameRef.current));
  }, []);

  /**
   * Load a new position from FEN
   */
  const loadPosition = useCallback((fen: string) => {
    try {
      gameRef.current.load(fen);
      setPosition(getFen(gameRef.current));
      setStatus(getGameStatus(gameRef.current));
      return true;
    } catch {
      return false;
    }
  }, []);

  /**
   * Load a PGN game
   */
  const loadPgn = useCallback((pgn: string) => {
    try {
      const success = gameRef.current.loadPgn(pgn);
      if (success) {
        setPosition(getFen(gameRef.current));
        setStatus(getGameStatus(gameRef.current));
      }
      return success;
    } catch {
      return false;
    }
  }, []);

  /**
   * Get current PGN
   */
  const getPgn = useCallback(() => {
    return gameRef.current.pgn();
  }, []);

  /**
   * Get move history
   */
  const getHistory = useCallback((verbose = false) => {
    return gameRef.current.history({ verbose });
  }, []);

  return {
    position,
    status,
    makeMove,
    undo,
    reset,
    loadPosition,
    loadPgn,
    getPgn,
    getHistory,
    game: gameRef.current,
  };
}
