import React, { useState, useRef, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";

type SquareHandlerArgs = {
  piece: { pieceType: string } | null;
  square: string;
};

type PieceDropHandlerArgs = {
  piece: { isSparePiece: boolean; position: string; pieceType: string };
  sourceSquare: string;
  targetSquare: string | null;
};

type PuzzleData = {
  game: {
    id: string;
    pgn: string;
    clock: string;
  };
  puzzle: {
    id: string;
    rating: number;
    plays: number;
    solution: string[];
    themes: string[];
    initialPly: number;
  };
};

export default function ChessPuzzle() {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  // Puzzle data
  const puzzleData: PuzzleData = {
    game: {
      id: "VH0NEQZ8",
      pgn: "e4 c5 Nf3 d6 Bc4 Nc6 c3 Nf6 Qe2 a6 Bb3 g6 O-O Bg7 d4 cxd4 Nxd4 O-O Nxc6 bxc6 f3 a5 Na3 Ba6 Bc4 Bxc4 Nxc4 d5 exd5 cxd5 Ne5 e6 Bf4 Nd7 Rf2 Nxe5 Bxe5 Qb6 Rd1 Qa6 Bxg7 Qxe2 Rxe2 Kxg7 Kf2 Rab8 Ke3 Rb5 b3 Rc8 Kd4 Rbc5 Re3 Kf8 g4 Ke7 f4 Kd6 g5 a4 Rb1 a3 Rbe1 R5c7 R1e2 Re8 c4 Rc5 Rc3 Rb8 Re5 Rb4 Rh3 dxc4",
      clock: "15+15",
    },
    puzzle: {
      id: "4pr4N",
      rating: 1571,
      plays: 15507,
      solution: ["e5c5", "c4b3", "c5c4", "b3a2", "h3a3"],
      themes: ["endgame", "crushing", "rookEndgame", "long"],
      initialPly: 73,
    },
  };

  const [chessPosition, setChessPosition] = useState("");
  const [moveFrom, setMoveFrom] = useState("");
  const [optionSquares, setOptionSquares] = useState({});
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [puzzleStatus, setPuzzleStatus] = useState<
    "playing" | "correct" | "incorrect" | "complete"
  >("playing");
  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">(
    "white"
  );
  const [arrows, setArrows] = useState<
    Array<{ startSquare: string; endSquare: string; color: string }>
  >([]);
  const [userColor, setUserColor] = useState<"w" | "b">("w");
  const [isUserTurn, setIsUserTurn] = useState(true);

  // Initialize puzzle
  useEffect(() => {
    // Load the game from PGN
    chessGame.loadPgn(puzzleData.game.pgn);

    // The user plays the side whose turn it is after the PGN
    const playerColor = chessGame.turn();
    setUserColor(playerColor);

    // Set board orientation to match user's color
    const orientation = playerColor === "w" ? "white" : "black";
    setBoardOrientation(orientation);

    setChessPosition(chessGame.fen());
    setIsUserTurn(true);

    // The first move in the solution is the user's move
    // If the solution starts with a computer move, play it immediately
    if (puzzleData.puzzle.solution.length > 0) {
      // Check if we need to play computer's first move
      // eslint-disable-next-line react-hooks/immutability
      const firstMove = parseMove(puzzleData.puzzle.solution[0]);
      const testGame = new Chess(chessGame.fen());
      try {
        testGame.move({ from: firstMove.from, to: firstMove.to });
        // If after this move the turn changes to the player's color,
        // it means the first move was the computer's
        if (testGame.turn() === playerColor) {
          // eslint-disable-next-line react-hooks/immutability
          setTimeout(() => makeComputerMove(), 500);
        }
      } catch (e) {
        // First move is user's move, do nothing
      }
    }
  }, []);

  // Convert move notation (e.g., "e5c5") to from/to format
  function parseMove(moveStr: string): { from: string; to: string } {
    return {
      from: moveStr.slice(0, 2),
      to: moveStr.slice(2, 4),
    };
  }

  // Make computer's move from solution
  function makeComputerMove() {
    if (solutionIndex >= puzzleData.puzzle.solution.length) {
      setPuzzleStatus("complete");
      return;
    }

    const computerMoveStr = puzzleData.puzzle.solution[solutionIndex];
    const { from, to } = parseMove(computerMoveStr);

    try {
      chessGame.move({ from, to, promotion: "q" });
      setChessPosition(chessGame.fen());
      setSolutionIndex(solutionIndex + 1);
      setIsUserTurn(true);

      // Show computer's move with arrow
      setArrows([
        {
          startSquare: from,
          endSquare: to,
          color: "rgb(255, 170, 0)",
        },
      ]);
      setTimeout(() => setArrows([]), 1000);

      // Check if puzzle is complete
      if (solutionIndex + 1 >= puzzleData.puzzle.solution.length) {
        setPuzzleStatus("complete");
      }
    } catch (error) {
      console.error("Error making computer move:", error);
    }
  }

  // Check if player's move matches the solution
  function checkPlayerMove(from: string, to: string): boolean {
    if (solutionIndex >= puzzleData.puzzle.solution.length) {
      return false;
    }

    const expectedMove = parseMove(puzzleData.puzzle.solution[solutionIndex]);
    return from === expectedMove.from && to === expectedMove.to;
  }

  // Show hint arrow
  function showHint() {
    if (solutionIndex < puzzleData.puzzle.solution.length && isUserTurn) {
      const nextMove = parseMove(puzzleData.puzzle.solution[solutionIndex]);
      setArrows([
        {
          startSquare: nextMove.from,
          endSquare: nextMove.to,
          color: "rgb(0, 128, 0)",
        },
      ]);

      // Clear arrow after 2 seconds
      setTimeout(() => setArrows([]), 2000);
    }
  }

  // Reset puzzle
  function resetPuzzle() {
    chessGame.loadPgn(puzzleData.game.pgn);
    const playerColor = chessGame.turn();
    setUserColor(playerColor);
    const orientation = playerColor === "w" ? "white" : "black";
    setBoardOrientation(orientation);
    setChessPosition(chessGame.fen());
    setSolutionIndex(0);
    setPuzzleStatus("playing");
    setMoveFrom("");
    setOptionSquares({});
    setArrows([]);
    setIsUserTurn(true);

    // Check if computer moves first
    if (puzzleData.puzzle.solution.length > 0) {
      const firstMove = parseMove(puzzleData.puzzle.solution[0]);
      const testGame = new Chess(chessGame.fen());
      try {
        testGame.move({ from: firstMove.from, to: firstMove.to });
        if (testGame.turn() === playerColor) {
          setTimeout(() => makeComputerMove(), 500);
        }
      } catch (e) {
        // First move is user's move
      }
    }
  }

  // Get move options for a square
  function getMoveOptions(square: Square) {
    const moves = chessGame.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) {
      setOptionSquares({});
      return false;
    }

    const newSquares: Record<string, React.CSSProperties> = {};

    for (const move of moves) {
      newSquares[move.to] = {
        background:
          chessGame.get(move.to) &&
          chessGame.get(move.to)?.color !== chessGame.get(square)?.color
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

  function onSquareClick({ square, piece }: SquareHandlerArgs) {
    if (puzzleStatus !== "playing" || !isUserTurn) return;

    // Clear arrows on click
    setArrows([]);

    if (!moveFrom && piece) {
      const hasMoveOptions = getMoveOptions(square as Square);
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
      const hasMoveOptions = getMoveOptions(square as Square);
      setMoveFrom(hasMoveOptions ? square : "");
      return;
    }

    // Check if this is the correct move
    const isCorrect = checkPlayerMove(moveFrom, square);

    if (!isCorrect) {
      alert("Wrong move! Try again.");
      setMoveFrom("");
      setOptionSquares({});
      return;
    }

    // Make the move
    try {
      chessGame.move({
        from: moveFrom,
        to: square,
        promotion: "q",
      });

      setChessPosition(chessGame.fen());
      setSolutionIndex(solutionIndex + 1);
      setPuzzleStatus("correct");
      setIsUserTurn(false);

      // Show player's move with arrow
      setArrows([
        {
          startSquare: moveFrom,
          endSquare: square,
          color: "rgb(0, 255, 0)",
        },
      ]);

      setMoveFrom("");
      setOptionSquares({});

      // Check if puzzle is complete
      if (solutionIndex + 1 >= puzzleData.puzzle.solution.length) {
        setPuzzleStatus("complete");
        setTimeout(() => setArrows([]), 1000);
      } else {
        // Computer makes next move
        setTimeout(() => {
          setArrows([]);
          setPuzzleStatus("playing");
          makeComputerMove();
        }, 800);
      }
    } catch (error) {
      console.error("Error making move:", error);
    }
  }

  function onPieceDrop({ sourceSquare, targetSquare }: PieceDropHandlerArgs) {
    if (!targetSquare || puzzleStatus !== "playing" || !isUserTurn) {
      return false;
    }

    // Clear arrows
    setArrows([]);

    // Check if this is the correct move
    const isCorrect = checkPlayerMove(sourceSquare, targetSquare);

    if (!isCorrect) {
      alert("Wrong move! Try again.");
      return false;
    }

    try {
      chessGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      setChessPosition(chessGame.fen());
      setSolutionIndex(solutionIndex + 1);
      setPuzzleStatus("correct");
      setIsUserTurn(false);

      // Show player's move with arrow
      setArrows([
        {
          startSquare: sourceSquare,
          endSquare: targetSquare,
          color: "rgb(0, 255, 0)",
        },
      ]);

      setMoveFrom("");
      setOptionSquares({});

      // Check if puzzle is complete
      if (solutionIndex + 1 >= puzzleData.puzzle.solution.length) {
        setPuzzleStatus("complete");
        setTimeout(() => setArrows([]), 1000);
      } else {
        // Computer makes next move
        setTimeout(() => {
          setArrows([]);
          setPuzzleStatus("playing");
          makeComputerMove();
        }, 800);
      }

      return true;
    } catch {
      return false;
    }
  }

  const chessboardOptions = {
    onPieceDrop,
    onSquareClick,
    position: chessPosition,
    squareStyles: optionSquares,
    boardOrientation,
    arrows,
    id: "puzzle-board",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h2>Chess Puzzle #{puzzleData.puzzle.id}</h2>
        <p>
          Rating: {puzzleData.puzzle.rating} | Themes:{" "}
          {puzzleData.puzzle.themes.join(", ")}
        </p>
        <p>
          You are playing as:{" "}
          <strong>{userColor === "w" ? "White" : "Black"}</strong>
        </p>
        <div
          style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}
        >
          {puzzleStatus === "playing" &&
            isUserTurn &&
            "Your turn - Find the best move!"}
          {puzzleStatus === "playing" &&
            !isUserTurn &&
            "Computer is thinking..."}
          {puzzleStatus === "correct" && (
            <span style={{ color: "green" }}>✓ Correct!</span>
          )}
          {puzzleStatus === "complete" && (
            <span style={{ color: "blue" }}>🎉 Puzzle Complete!</span>
          )}
        </div>
      </div>

      <Chessboard options={chessboardOptions} />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={showHint}
          disabled={puzzleStatus !== "playing" || !isUserTurn}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor:
              puzzleStatus === "playing" && isUserTurn
                ? "pointer"
                : "not-allowed",
            opacity: puzzleStatus === "playing" && isUserTurn ? 1 : 0.5,
          }}
        >
          Show Hint
        </button>
        <button
          onClick={resetPuzzle}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Reset Puzzle
        </button>
      </div>
    </div>
  );
}
