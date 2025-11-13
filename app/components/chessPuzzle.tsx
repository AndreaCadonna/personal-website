/* eslint-disable @typescript-eslint/no-explicit-any */
// PuzzleChess.tsx
import React, { useEffect, useRef, useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

// ---- Puzzle data ----
const PUZZLE_PGN =
  "e4 e6 Nf3 d5 exd5 exd5 d4 Nf6 Nc3 Bb4 Bd2 O-O a3 Ba5 Qe2 Re8 Be3 Bxc3+ bxc3 Ne4 Qd3 Bf5 c4 g6 Be2 Nxf2 Qb3 Nxh1 Qxb7 Nd7 Qxd5 Nb6 Qxd8 Raxd8 Kd2 Nxc4+ Bxc4 c5 c3 cxd4 cxd4 Be4 Rxh1 Bxf3 gxf3 Rc8 Kd3 Re7 Bd5 Rec7 a4 Rc3+ Kd2 Ra3 Rc1";

const PUZZLE_SOLUTION = ["c8c1", "d2c1", "a3e3"]; // UCI moves
const PUZZLE_INITIAL_PLY = 55;

// helper: UCI string -> chess.js move object
const uciToMove = (uci: string) => ({
  from: uci.slice(0, 2),
  to: uci.slice(2, 4),
  promotion: "q" as const,
});

export const PuzzleChess: React.FC = () => {
  // keep full chess.js game in a ref
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  // react state
  // eslint-disable-next-line react-hooks/refs
  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  const [moveFrom, setMoveFrom] = useState("");
  const [optionSquares, setOptionSquares] = useState<
    Record<string, React.CSSProperties>
  >({});
  const [status, setStatus] = useState("Loading puzzle...");
  const [solutionIndex, setSolutionIndex] = useState(0);

  // ----- Load initial puzzle position from PGN + initialPly -----
  useEffect(() => {
    const fullGame = new Chess();
    fullGame.loadPgn(PUZZLE_PGN);

    const moves = fullGame.history(); // SAN moves of entire game

    const startGame = new Chess();
    for (let i = 0; i < PUZZLE_INITIAL_PLY; i++) {
      startGame.move(moves[i]);
    }

    chessGameRef.current = startGame;
    setChessPosition(startGame.fen());
    setStatus("Black to move – find the winning line!");
    setMoveFrom("");
    setOptionSquares({});
    setSolutionIndex(0);
  }, []);

  // ----- Shared puzzle logic: try a user move, check vs solution -----
  function handleUserMove(from: string, to: string): boolean {
    const game = chessGameRef.current;
    const prevFen = game.fen();
    const expected = PUZZLE_SOLUTION[solutionIndex];

    if (!expected) {
      // already solved
      return false;
    }

    // try to make the move according to chess.js logic
    let move;
    try {
      move = game.move({
        from,
        to,
        promotion: "q",
      });
    } catch {
      return false;
    }

    if (!move) {
      return false;
    }

    const playedUci = `${move.from}${move.to}`;
    
    // Wrong move: undo and snap back
    if (playedUci !== expected) {
      setChessPosition(game.fen());
      setTimeout(() => {
        game.undo();
        setStatus("❌ Wrong move, try again!");
        setChessPosition(prevFen);
      }, 500);
      return false;
      
    }

    // Correct user move
    let newIndex = solutionIndex + 1;
    setChessPosition(game.fen());
    setStatus("✅ Correct!");

    // Opponent reply (next move in PUZZLE_SOLUTION)
    if (newIndex < PUZZLE_SOLUTION.length) {
      const replyUci = PUZZLE_SOLUTION[newIndex];
      setTimeout(() => {
        game.move(uciToMove(replyUci));
        setChessPosition(game.fen());
      }, 500);
      newIndex += 1;
    }

    setSolutionIndex(newIndex);

    if (newIndex >= PUZZLE_SOLUTION.length) {
      setStatus("✅ Puzzle solved!");
    } else {
      const turn = game.turn() === "w" ? "White" : "Black";
      setStatus(`✅ Correct! Now it's ${turn} to move.`);
    }

    setSolutionIndex(newIndex);

    if (newIndex >= PUZZLE_SOLUTION.length) {
      setStatus("✅ Puzzle solved!");
    } else {
      const turn = game.turn() === "w" ? "White" : "Black";
      setStatus(`✅ Correct! Now it's ${turn} to move.`);
    }

    return true;
  }

  // ----- Helpers from docs (for click-to-move) -----
  function getMoveOptions(square: string) {
    const moves = chessGame.moves({
      square: square as any,
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
          ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
          : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
    }

    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };

    setOptionSquares(newSquares);
    return true;
  }

  // ----- Click-to-move handler (from docs, with puzzle logic plugged in) -----
  function onSquareClick({
    square,
    piece,
  }: {
    square: string;
    piece?: string;
  }) {
    // 1) No piece selected yet: click a piece to see its moves
    if (!moveFrom && piece) {
      const hasMoveOptions = getMoveOptions(square);
      if (hasMoveOptions) {
        setMoveFrom(square);
      }
      return;
    }

    // 2) A piece is selected: try to move it to `square`
    const moves = chessGame.moves({
      square: moveFrom as any,
      verbose: true,
    });
    const foundMove = moves.find(
      (m) => m.from === moveFrom && m.to === square
    );

    // Not a valid move from that square: maybe selecting a different piece
    if (!foundMove) {
      const hasMoveOptions = getMoveOptions(square);
      setMoveFrom(hasMoveOptions ? square : "");
      return;
    }

    // Valid chess.js move: now check if it matches the puzzle solution
    const success = handleUserMove(moveFrom, square);

    // On success, clear selection and highlights
    if (success) {
      setMoveFrom("");
      setOptionSquares({});
    } else {
      // if failed, keep selection cleared / options cleared
      setMoveFrom("");
      setOptionSquares({});
    }
  }

  // ----- Drag-and-drop handler (docs-style, with puzzle logic) -----
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
      // snap back
      return false;
    }

    setMoveFrom("");
    setOptionSquares({});
    return true;
  }

  const chessboardOptions = {
    onPieceDrop,
    onSquareClick,
    position: chessPosition,
    squareStyles: optionSquares,
    id: "puzzle-board",
    boardOrientation: "black" as const, // user plays Black in this puzzle
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-900 text-slate-100">
      <h1 className="text-2xl font-semibold">Chess Puzzle MVP</h1>
      <p className="text-sm text-slate-300">
        Black to move and win. Play the correct sequence!
      </p>

      <div className="shadow-lg rounded-xl overflow-hidden">
        {/* If your version of react-chessboard uses direct props, do:
            <Chessboard {...chessboardOptions} />
            or
            <Chessboard
              position={chessPosition}
              onSquareClick={onSquareClick}
              onPieceDrop={(source, target) => onPieceDrop({ sourceSquare: source, targetSquare: target })}
              boardOrientation="black"
              customSquareStyles={optionSquares}
            />
        */}
        <Chessboard options={chessboardOptions as any} />
      </div>

      <p className="text-sm mt-2">{status}</p>
    </div>
  );
};
