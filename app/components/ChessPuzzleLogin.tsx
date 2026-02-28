'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { Chess, Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { uciToMoveArgs } from '../../lib/chess/moves';

interface ChessPuzzleLoginProps {
  onPuzzleSolved: () => void;
}

interface LichessPuzzle {
  game: {
    id: string;
    pgn: string;
  };
  puzzle: {
    id: string;
    rating: number;
    plays: number;
    solution: string[];
    themes: string[];
    initialPly: number;
  };
}

const PROMOTION_PIECES = [
  { piece: 'q', white: '\u2655', black: '\u265B', label: 'Queen' },
  { piece: 'r', white: '\u2656', black: '\u265C', label: 'Rook' },
  { piece: 'b', white: '\u2657', black: '\u265D', label: 'Bishop' },
  { piece: 'n', white: '\u2658', black: '\u265E', label: 'Knight' },
] as const;

/**
 * ChessPuzzleLogin Component
 *
 * Fetches a chess puzzle from Lichess API and requires the user to solve it
 * before granting access to the website.
 */
export default function ChessPuzzleLogin({ onPuzzleSolved }: ChessPuzzleLoginProps) {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  const [moveFrom, setMoveFrom] = useState('');
  const [optionSquares, setOptionSquares] = useState<Record<string, React.CSSProperties>>({});
  const [status, setStatus] = useState('Loading puzzle from Lichess...');
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [puzzleSolution, setPuzzleSolution] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
  const [puzzleInfo, setPuzzleInfo] = useState<{ rating: number; themes: string[] } | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{ from: string; to: string } | null>(null);

  /**
   * Fetch a puzzle from Lichess API on mount
   */
  useEffect(() => {
    async function fetchPuzzle() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://lichess.org/api/puzzle/daily');
        if (!response.ok) {
          throw new Error('Failed to fetch puzzle from Lichess');
        }

        const data: LichessPuzzle = await response.json();

        // Load the PGN and replay up to initialPly for the puzzle starting position
        const game = new Chess();
        game.loadPgn(data.game.pgn);
        const history = game.history();
        const startFen = game.getHeaders()['FEN'] || undefined;

        const puzzleGame = new Chess(startFen);
        const initialPly = data.puzzle.initialPly;
        for (let i = 0; i < initialPly && i < history.length; i++) {
          puzzleGame.move(history[i]);
        }

        const solution = data.puzzle.solution;

        if (solution.length > 0) {
          chessGameRef.current = puzzleGame;
          setChessPosition(puzzleGame.fen());
          setPuzzleSolution(solution);

          // Determine board orientation based on whose turn it is
          const playerColor = puzzleGame.turn();
          setBoardOrientation(playerColor === 'w' ? 'white' : 'black');

          // Set puzzle info
          setPuzzleInfo({
            rating: data.puzzle.rating,
            themes: data.puzzle.themes,
          });

          const turn = playerColor === 'w' ? 'White' : 'Black';
          setStatus(`${turn} to move - Find the best move!`);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching puzzle:', err);
        setError('Failed to load puzzle. Please refresh to try again.');
        setIsLoading(false);
      }
    }

    fetchPuzzle();
  }, []);

  /**
   * Core puzzle logic
   */
  function isPromotionMove(from: string, to: string): boolean {
    const piece = chessGameRef.current.get(from as Square);
    if (!piece || piece.type !== 'p') return false;
    return (piece.color === 'w' && to[1] === '8') || (piece.color === 'b' && to[1] === '1');
  }

  function handleUserMove(from: string, to: string, promotion?: string): boolean {
    const game = chessGameRef.current;
    const prevFen = game.fen();
    const expected = puzzleSolution[solutionIndex];

    // Puzzle already finished
    if (!expected) {
      return false;
    }

    // Try to apply the move according to chess.js rules
    let move;
    try {
      move = game.move({
        from: from as Square,
        to: to as Square,
        promotion,
      });
    } catch {
      return false; // illegal move according to chess.js
    }

    const playedUci = `${move.from}${move.to}${move.promotion || ''}`;

    // Check if it matches the expected move
    if (playedUci !== expected && `${move.from}${move.to}` !== expected) {
      setChessPosition(game.fen());
      setTimeout(() => {
        game.undo();
        setStatus('❌ Not quite! Try again.');
        setChessPosition(prevFen);
      }, 500);
      return false;
    }

    // Correct user move
    let newIndex = solutionIndex + 1;
    setChessPosition(game.fen());
    setStatus('✅ Excellent move!');

    // Opponent's reply (next move in the solution line)
    if (newIndex < puzzleSolution.length) {
      const replyUci = puzzleSolution[newIndex];
      setTimeout(() => {
        game.move(uciToMoveArgs(replyUci));
        setChessPosition(game.fen());
      }, 500);
      newIndex += 1;
    }

    // Update solution index
    setSolutionIndex(newIndex);

    // Check if puzzle is solved
    if (newIndex >= puzzleSolution.length) {
      setStatus('🎉 Puzzle solved! Granting access...');
      setTimeout(() => {
        onPuzzleSolved();
      }, 1500);
    } else {
      const turn = game.turn() === 'w' ? 'White' : 'Black';
      setStatus(`✅ Correct! Now ${turn} to move.`);
    }

    return true;
  }

  /**
   * Helper to compute highlight styles for valid moves from a given square
   */
  function getMoveOptions(square: string) {
    const moves = chessGame.moves({
      square: square as Square,
      verbose: true,
    });

    if (moves.length === 0) {
      setOptionSquares({});
      return false;
    }

    const newSquares: Record<string, React.CSSProperties> = {};

    for (const move of moves) {
      const isCapture =
        chessGame.get(move.to as Square) &&
        chessGame.get(move.to as Square)?.color !== chessGame.get(square as Square)?.color;

      newSquares[move.to] = {
        background: isCapture
          ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
          : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%',
      };
    }

    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)',
    };

    setOptionSquares(newSquares);
    return true;
  }

  /**
   * Click-to-move handler
   */
  function onSquareClick({ square, piece }: { square: string; piece?: string }) {
    if (!moveFrom && piece) {
      const hasMoveOptions = getMoveOptions(square);
      if (hasMoveOptions) {
        setMoveFrom(square);
      }
      return;
    }

    const moves = chessGame.moves({
      square: moveFrom as Square,
      verbose: true,
    });
    const foundMove = moves.find((m) => m.from === moveFrom && m.to === square);

    if (!foundMove) {
      const hasMoveOptions = getMoveOptions(square);
      setMoveFrom(hasMoveOptions ? square : '');
      return;
    }

    if (isPromotionMove(moveFrom, square)) {
      setPendingPromotion({ from: moveFrom, to: square });
      setMoveFrom('');
      setOptionSquares({});
      return;
    }

    handleUserMove(moveFrom, square);
    setMoveFrom('');
    setOptionSquares({});
  }

  /**
   * Drag-and-drop handler
   */
  function onPieceDrop({
    sourceSquare,
    targetSquare,
  }: {
    sourceSquare: string;
    targetSquare: string | null;
  }) {
    if (!targetSquare) return false;

    if (isPromotionMove(sourceSquare, targetSquare)) {
      setPendingPromotion({ from: sourceSquare, to: targetSquare });
      return false;
    }

    const success = handleUserMove(sourceSquare, targetSquare);

    if (!success) {
      return false;
    }

    setMoveFrom('');
    setOptionSquares({});
    return true;
  }

  const chessboardOptions = {
    onPieceDrop,
    onSquareClick,
    position: chessPosition,
    squareStyles: optionSquares,
    id: 'puzzle-board',
    boardOrientation,
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">♟️</div>
          <p className="text-white text-xl">Loading chess puzzle...</p>
          <p className="text-slate-400 text-sm mt-2">Fetching from Lichess</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-white text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 p-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-white mb-2">Chess Puzzle Challenge</h1>
        <p className="text-slate-300">Solve this puzzle to unlock access</p>
        {puzzleInfo && (
          <div className="flex items-center justify-center gap-4 mt-3 text-sm text-slate-400">
            <span>Rating: {puzzleInfo.rating}</span>
            <span>•</span>
            <span className="capitalize">{puzzleInfo.themes[0] || 'Puzzle'}</span>
          </div>
        )}
      </div>

      <div className="shadow-2xl rounded-xl overflow-hidden max-w-[600px] w-full relative">
        <Chessboard options={chessboardOptions as any} />

        {pendingPromotion && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <div className="bg-slate-800 rounded-lg p-4 shadow-xl border border-slate-600">
              <p className="text-white text-sm mb-3 text-center">Promote to:</p>
              <div className="flex gap-2">
                {PROMOTION_PIECES.map(({ piece, white, black, label }) => (
                  <button
                    key={piece}
                    onClick={() => {
                      const { from, to } = pendingPromotion;
                      setPendingPromotion(null);
                      handleUserMove(from, to, piece);
                    }}
                    className="w-14 h-14 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center text-3xl transition-colors"
                    title={label}
                  >
                    {boardOrientation === 'white' ? white : black}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold">{status}</p>
        <p className="text-sm text-slate-400 mt-2">
          Click or drag pieces to make your move
        </p>
      </div>

      <div className="text-xs text-slate-500 text-center">
        Puzzle provided by Lichess.org
      </div>
    </div>
  );
}
