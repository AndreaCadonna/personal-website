import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export default function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  function makeMove(move: string | { from: string; to: string; promotion?: string; } | null) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);

    if (result) {
      setGame(gameCopy);
      setMoveHistory([...moveHistory, result.san]);
      return true;
    }
    return false;
  }

  function onPieceDrop({
    piece,
    sourceSquare,
    targetSquare,
  }: {
    piece: { isSparePiece: boolean; position: string; pieceType: string };
    sourceSquare: string;
    targetSquare: string | null;
  }): boolean {
    // targetSquare can be null when dragging off board
    if (!targetSquare) return false;

    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to queen for simplicity
    });

    return move;
  }

  function resetGame() {
    setGame(new Chess());
    setMoveHistory([]);
  }

  function undoMove() {
    const gameCopy = new Chess(game.fen());
    gameCopy.undo();
    setGame(gameCopy);
    setMoveHistory(moveHistory.slice(0, -1));
  }

  const isGameOver = game.isGameOver();
  const isCheck = game.inCheck();
  const turn = game.turn() === "w" ? "White" : "Black";

  const chessboardOptions = {
    position: game.fen(),
    onPieceDrop: onPieceDrop,
    boardOrientation: 'white' as const,
    animationDurationInMs: 200,
    boardStyle: {
      borderRadius: "5px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Chess Game</h1>

      <div style={{ marginBottom: "20px" }}>
        <strong>Turn: {turn}</strong>
        {isCheck && (
          <span style={{ color: "red", marginLeft: "10px" }}>Check!</span>
        )}
        {isGameOver && (
          <div style={{ color: "green", fontWeight: "bold" }}>
            Game Over!{" "}
            {game.isCheckmate()
              ? `${turn === "White" ? "Black" : "White"} wins by checkmate!`
              : "Draw!"}
          </div>
        )}
      </div>

      <div style={{ maxWidth: "600px", width: "100%" }}>
        <Chessboard options={chessboardOptions} />
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={resetGame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          New Game
        </button>
        <button
          onClick={undoMove}
          disabled={moveHistory.length === 0}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: moveHistory.length === 0 ? "not-allowed" : "pointer",
            backgroundColor: moveHistory.length === 0 ? "#ccc" : "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Undo Move
        </button>
      </div>

      {moveHistory.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            maxWidth: "600px",
            width: "100%",
            padding: "15px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
          }}
        >
          <h3>Move History</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              gap: "8px",
            }}
          >
            {moveHistory.map((move, index) => (
              <span
                key={index}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "white",
                  borderRadius: "3px",
                  fontSize: "14px",
                }}
              >
                {Math.floor(index / 2) + 1}.{index % 2 === 0 ? "" : ".."} {move}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
