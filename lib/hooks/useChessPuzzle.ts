"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import { Chess, Square } from 'chess.js';
import type { Puzzle } from '../types/chess';
import {
  validatePuzzleMove,
  isPuzzleComplete,
  getOpponentMove,
  getPuzzleProgress,
} from '../chess/puzzle';
import { createGame, getFen } from '../chess/engine';

/**
 * Hook for managing chess puzzle state and validation
 * Handles puzzle logic, solution validation, and opponent responses
 *
 * @param puzzle - Puzzle object to solve
 * @returns Puzzle state and control functions
 */
export function useChessPuzzle(puzzle: Puzzle) {
  const gameRef = useRef<Chess>(createGame(puzzle.fen));
  const [position, setPosition] = useState(puzzle.fen);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState('Make your move');
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrectMove, setIsCorrectMove] = useState<boolean | null>(null);

  // Reset when puzzle changes
  useEffect(() => {
    gameRef.current = createGame(puzzle.fen);
    setPosition(puzzle.fen);
    setCurrentStep(0);
    setStatus('Make your move');
    setIsComplete(false);
    setIsCorrectMove(null);
  }, [puzzle.fen, puzzle.id]);

  /**
   * Make a move and validate against puzzle solution
   */
  const makeMove = useCallback(
    (from: Square, to: Square, promotion?: string): boolean => {
      const move = gameRef.current.move({ from, to, promotion: promotion || 'q' });

      if (!move) {
        setStatus('Illegal move');
        return false;
      }

      // Validate against solution
      const isCorrect = validatePuzzleMove(move.lan, puzzle.moves, currentStep);

      if (!isCorrect) {
        setStatus('Wrong move! Try again');
        setIsCorrectMove(false);

        // Undo the wrong move after a brief delay
        setTimeout(() => {
          gameRef.current.undo();
          setPosition(getFen(gameRef.current));
          setIsCorrectMove(null);
          setStatus('Try again');
        }, 800);

        return false;
      }

      // Correct move
      setIsCorrectMove(true);
      setPosition(getFen(gameRef.current));
      setStatus('Correct!');
      setCurrentStep(prev => prev + 1);

      // Check if puzzle is complete
      if (isPuzzleComplete(currentStep + 1, puzzle.moves)) {
        setIsComplete(true);
        setStatus('Puzzle solved! 🎉');
        return true;
      }

      // Play opponent's response after a delay
      setTimeout(() => {
        const opponentMoveStr = getOpponentMove(puzzle.moves, currentStep + 1);

        if (opponentMoveStr) {
          try {
            gameRef.current.move(opponentMoveStr);
            setPosition(getFen(gameRef.current));
            setCurrentStep(prev => prev + 1);
            setStatus('Your turn');
            setIsCorrectMove(null);

            // Check again if puzzle is complete after opponent move
            if (isPuzzleComplete(currentStep + 2, puzzle.moves)) {
              setIsComplete(true);
              setStatus('Puzzle solved! 🎉');
            }
          } catch (error) {
            console.error('Failed to play opponent move:', error);
          }
        }
      }, 600);

      return true;
    },
    [puzzle, currentStep]
  );

  /**
   * Reset puzzle to initial position
   */
  const reset = useCallback(() => {
    gameRef.current = createGame(puzzle.fen);
    setPosition(puzzle.fen);
    setCurrentStep(0);
    setStatus('Make your move');
    setIsComplete(false);
    setIsCorrectMove(null);
  }, [puzzle.fen]);

  /**
   * Get a hint (show next move)
   */
  const getHint = useCallback(() => {
    if (currentStep < puzzle.moves.length) {
      const nextMove = puzzle.moves[currentStep];
      setStatus(`Hint: Try ${nextMove}`);
    }
  }, [puzzle.moves, currentStep]);

  const progress = getPuzzleProgress(currentStep, puzzle.moves);

  return {
    position,
    makeMove,
    reset,
    getHint,
    status,
    isComplete,
    isCorrectMove,
    progress,
    currentStep,
    totalSteps: puzzle.moves.length,
    progressText: `${currentStep}/${puzzle.moves.length}`,
  };
}
