/* eslint-disable @typescript-eslint/no-explicit-any */
// PuzzleChess.tsx
import React, { useEffect, useRef, useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

/**
 * ---- Puzzle data ----
 *
 * We have a full game PGN and a puzzle that starts
 * after the last move in the PGN.
 *
 * This PGN ends with: ... Rc3+ Kd2 Ra3 Rc1
 * After Rc1 (white's last move) it's Black to move.
 */
const PUZZLE_PGN =
  "e4 e6 Nf3 d5 exd5 exd5 d4 Nf6 Nc3 Bb4 Bd2 O-O a3 Ba5 Qe2 Re8 Be3 Bxc3+ bxc3 Ne4 Qd3 Bf5 c4 g6 Be2 Nxf2 Qb3 Nxh1 Qxb7 Nd7 Qxd5 Nb6 Qxd8 Raxd8 Kd2 Nxc4+ Bxc4 c5 c3 cxd4 cxd4 Be4 Rxh1 Bxf3 gxf3 Rc8 Kd3 Re7 Bd5 Rec7 a4 Rc3+ Kd2 Ra3 Rc1";

/**
 * UCI moves that define the solution for the puzzle.
 * The user plays *every odd* move, and the opponent replies
 * with *every even* move.
 *
 * Here: Black to move and win:
 * 1... c8c1 2. d2c1 a3e3
 */
const PUZZLE_SOLUTION = ["c8c1", "d2c1", "a3e3"];

/**
 * Helper: convert a UCI string like "c8c1" into a chess.js move object.
 */
const uciToMove = (uci: string) => ({
  from: uci.slice(0, 2),
  to: uci.slice(2, 4),
  promotion: "q" as const, // always promote to queen for simplicity
});

/**
 * A simple MVP component that:
 * - Loads the final position from a PGN
 * - Lets the user play a forced puzzle line
 * - Automatically plays the opponent's reply
 * - Shows feedback and snaps back on wrong moves
 */
export const PuzzleChess: React.FC = () => {
  /**
   * We keep the full chess.js game in a ref so that:
   * - It persists across renders
   * - We can safely mutate it without triggering re-renders
   */
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  /**
   * React state:
   * - chessPosition: the current FEN, passed to the board
   * - moveFrom: the currently selected square (for click-to-move)
   * - optionSquares: highlight styles for legal moves from a square
   * - status: human-readable message for the user
   * - solutionIndex: index into PUZZLE_SOLUTION (whose turn in the puzzle line)
   */
  // eslint-disable-next-line react-hooks/refs
  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  const [moveFrom, setMoveFrom] = useState("");
  const [optionSquares, setOptionSquares] = useState<
    Record<string, React.CSSProperties>
  >({});
  const [status, setStatus] = useState("Loading puzzle...");
  const [solutionIndex, setSolutionIndex] = useState(0);

  /**
   * On mount:
   * - Load the full PGN
   * - The starting puzzle position is simply the final FEN after the PGN
   *   (since the puzzle starts after the last move)
   */
  useEffect(() => {
    const game = new Chess();
    game.loadPgn(PUZZLE_PGN);

    chessGameRef.current = game;
    setChessPosition(game.fen());
    setStatus("Black to move – find the winning line!");
    setMoveFrom("");
    setOptionSquares({});
    setSolutionIndex(0);
  }, []);

  /**
   * Core puzzle logic:
   *
   * From and to come either from click-to-move or drag-and-drop.
   * - Try to make the move with chess.js
   * - Check if the resulting move matches the expected solution move
   * - If wrong: briefly show it, then undo and snap back
   * - If correct:
   *    - Advance solutionIndex
   *    - Optionally auto-play the opponent’s reply
   *    - Update status and board position
   */
  function handleUserMove(from: string, to: string): boolean {
    const game = chessGameRef.current;
    const prevFen = game.fen();
    const expected = PUZZLE_SOLUTION[solutionIndex];

    // Puzzle already finished
    if (!expected) {
      return false;
    }

    // Try to apply the move according to chess.js rules
    let move;
    try {
      move = game.move({
        from,
        to,
        promotion: "q",
      });
    } catch {
      return false; // illegal move according to chess.js
    }

    if (!move) {
      return false;
    }

    const playedUci = `${move.from}${move.to}`;

    // ---- Wrong move: show it briefly, then revert ----
    if (playedUci !== expected) {
      setChessPosition(game.fen()); // show the wrong move briefly
      setTimeout(() => {
        game.undo(); // revert game state
        setStatus("❌ Wrong move, try again!");
        setChessPosition(prevFen); // snap back board
      }, 500);
      return false;
    }

    // ---- Correct user move ----
    let newIndex = solutionIndex + 1;
    setChessPosition(game.fen());
    setStatus("✅ Correct!");

    // ---- Opponent's reply (next move in the solution line) ----
    if (newIndex < PUZZLE_SOLUTION.length) {
      const replyUci = PUZZLE_SOLUTION[newIndex];
      setTimeout(() => {
        game.move(uciToMove(replyUci));
        setChessPosition(game.fen());
      }, 500);
      newIndex += 1;
    }

    // Update which move in the solution we are at
    setSolutionIndex(newIndex);

    // Update status message based on whether we finished the puzzle
    if (newIndex >= PUZZLE_SOLUTION.length) {
      setStatus("✅ Puzzle solved!");
    } else {
      const turn = game.turn() === "w" ? "White" : "Black";
      setStatus(`✅ Correct! Now it's ${turn} to move.`);
    }

    return true;
  }

  /**
   * Helper to compute highlight styles for valid moves from a given square.
   * This is mainly UI sugar from the react-chessboard docs.
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
        chessGame.get(move.to as Square)?.color !==
          chessGame.get(square as Square)?.color;

      newSquares[move.to] = {
        background: isCapture
          ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)" // capture = bigger circle
          : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)", // quiet move = small dot
        borderRadius: "50%",
      };
    }

    // Highlight the selected square itself
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };

    setOptionSquares(newSquares);
    return true;
  }

  /**
   * Click-to-move handler:
   * - First click selects a piece and shows its possible moves
   * - Second click tries to make a move from `moveFrom` to `square`
   * - If that move is legal, we pass it into the puzzle logic
   */
  function onSquareClick({
    square,
    piece,
  }: {
    square: string;
    piece?: string;
  }) {
    // Step 1: nothing selected yet -> select piece & show options
    if (!moveFrom && piece) {
      const hasMoveOptions = getMoveOptions(square);
      if (hasMoveOptions) {
        setMoveFrom(square);
      }
      return;
    }

    // Step 2: a piece is already selected -> attempt move to `square`
    const moves = chessGame.moves({
      square: moveFrom as Square,
      verbose: true,
    });
    const foundMove = moves.find(
      (m) => m.from === moveFrom && m.to === square
    );

    // Not a legal move from that square -> maybe selecting a new piece
    if (!foundMove) {
      const hasMoveOptions = getMoveOptions(square);
      setMoveFrom(hasMoveOptions ? square : "");
      return;
    }

    // Legal according to chess.js; now we let the puzzle logic decide
    const success = handleUserMove(moveFrom, square);

    // Clear selection and highlights (success or fail)
    setMoveFrom("");
    setOptionSquares({});
  }

  /**
   * Drag-and-drop handler:
   * - Called by react-chessboard when a piece is dropped.
   * - We simply pass it into the same puzzle logic as click-to-move.
   * - Returning false snaps the piece back.
   */
  function onPieceDrop({
    sourceSquare,
    targetSquare,
  }: {
    sourceSquare: string;
    targetSquare: string | null;
  }) {
    if (!targetSquare) return false;

    const success = handleUserMove(sourceSquare, targetSquare);

    if (!success) {
      return false; // snap back
    }

    setMoveFrom("");
    setOptionSquares({});
    return true;
  }

  /**
   * Configuration object for react-chessboard.
   * You can reuse this pattern for other boards/puzzles.
   */
  const chessboardOptions = {
    onPieceDrop,
    onSquareClick,
    position: chessPosition,
    squareStyles: optionSquares,
    id: "puzzle-board",
    boardOrientation: "black" as const, // in this puzzle, the user plays Black
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-900 text-slate-100">
      <h1 className="text-2xl font-semibold">Chess Puzzle MVP</h1>
      <p className="text-sm text-slate-300">
        Black to move and win. Play the correct sequence!
      </p>

      <div className="shadow-lg rounded-xl overflow-hidden">
        {/**
         * If your version of react-chessboard uses direct props instead of `options`,
         * replace this with:
         *
         * <Chessboard
         *   position={chessPosition}
         *   onSquareClick={onSquareClick}
         *   onPieceDrop={(source, target) =>
         *     onPieceDrop({ sourceSquare: source, targetSquare: target })
         *   }
         *   boardOrientation="black"
         *   customSquareStyles={optionSquares}
         * />
         */}
        <Chessboard options={chessboardOptions as any} />
      </div>

      <p className="text-sm mt-2">{status}</p>
    </div>
  );
};
