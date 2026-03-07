'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { Chess, Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { uciToMoveArgs } from '../../lib/chess/moves';
import { useTranslations } from 'next-intl';

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

const MATRIX_RAIN_COLS = Array.from({ length: 10 }, (_, i) => ({
  duration: 12 + ((i * 7 + 3) % 18),
  delay: -((i * 13 + 5) % 20),
  bits: Array.from({ length: 160 }, (_, j) => ((i * 31 + j * 17 + 7) * 2654435761 >>> 31) & 1).join(''),
}));

export default function ChessPuzzleLogin({ onPuzzleSolved }: ChessPuzzleLoginProps) {
  const t = useTranslations('puzzle');
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  const [moveFrom, setMoveFrom] = useState('');
  const [optionSquares, setOptionSquares] = useState<Record<string, React.CSSProperties>>({});
  const [status, setStatus] = useState('');
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [puzzleSolution, setPuzzleSolution] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
  const [puzzleInfo, setPuzzleInfo] = useState<{ rating: number; themes: string[] } | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{ from: string; to: string } | null>(null);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [wrongMoveSquare, setWrongMoveSquare] = useState<string | null>(null);
  const [hintSquare, setHintSquare] = useState<string | null>(null);
  const [boardLocked, setBoardLocked] = useState(false);
  const [loadingLine, setLoadingLine] = useState(0);

  const LOADING_FRAMES = [
    t('loadingFrames.connecting'),
    t('loadingFrames.fetching'),
    t('loadingFrames.parsing'),
    t('loadingFrames.computing'),
    t('loadingFrames.rendering'),
  ];

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setLoadingLine(prev => (prev + 1) % LOADING_FRAMES.length);
    }, 600);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    async function fetchPuzzle() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://lichess.org/api/puzzle/daily');
        if (!response.ok) throw new Error('Failed to fetch puzzle');

        const data: LichessPuzzle = await response.json();
        const game = new Chess();
        game.loadPgn(data.game.pgn);
        const history = game.history({ verbose: true });
        const startFen = game.getHeaders()['FEN'] || undefined;
        const puzzleGame = new Chess(startFen);
        const initialPly = data.puzzle.initialPly;
        for (let i = 0; i < initialPly && i < history.length; i++) {
          puzzleGame.move(history[i].san);
        }

        const solution = data.puzzle.solution;
        if (solution.length > 0) {
          const setupMoveData = history[initialPly];
          chessGameRef.current = puzzleGame;
          setChessPosition(puzzleGame.fen());
          setPuzzleSolution(solution);

          const opponentColor = puzzleGame.turn();
          const playerColor = opponentColor === 'w' ? 'b' : 'w';
          setBoardOrientation(playerColor === 'w' ? 'white' : 'black');
          setSolutionIndex(0);
          setPuzzleInfo({ rating: data.puzzle.rating, themes: data.puzzle.themes });

          if (setupMoveData) {
            setBoardLocked(true);
            setStatus('...');
            setTimeout(() => {
              puzzleGame.move(setupMoveData.san);
              setChessPosition(puzzleGame.fen());
              setLastMove({ from: setupMoveData.from, to: setupMoveData.to });
              setBoardLocked(false);
              setStatus(playerColor === 'w' ? t('whiteToMove') : t('blackToMove'));
            }, 500);
          } else {
            setStatus(playerColor === 'w' ? t('whiteToMove') : t('blackToMove'));
          }
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching puzzle:', err);
        setError(t('connectionFailed'));
        setIsLoading(false);
      }
    }
    fetchPuzzle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isPromotionMove(from: string, to: string): boolean {
    const piece = chessGameRef.current.get(from as Square);
    if (!piece || piece.type !== 'p') return false;
    return (piece.color === 'w' && to[1] === '8') || (piece.color === 'b' && to[1] === '1');
  }

  function handleUserMove(from: string, to: string, promotion?: string): boolean {
    const game = chessGameRef.current;
    const prevFen = game.fen();
    const expected = puzzleSolution[solutionIndex];
    if (!expected) return false;

    let move;
    try {
      move = game.move({ from: from as Square, to: to as Square, promotion });
    } catch { return false; }

    const playedUci = `${move.from}${move.to}${move.promotion || ''}`;
    if (playedUci !== expected && `${move.from}${move.to}` !== expected) {
      setChessPosition(game.fen());
      setWrongMoveSquare(move.to);
      setHintSquare(null);
      setTimeout(() => {
        game.undo();
        setStatus(t('wrongMove'));
        setChessPosition(prevFen);
        setWrongMoveSquare(null);
      }, 500);
      return false;
    }

    let newIndex = solutionIndex + 1;
    setChessPosition(game.fen());
    setLastMove({ from, to });
    setHintSquare(null);
    setStatus(t('correctMove'));

    if (newIndex < puzzleSolution.length) {
      const replyUci = puzzleSolution[newIndex];
      const replyArgs = uciToMoveArgs(replyUci);
      setBoardLocked(true);
      setTimeout(() => {
        game.move(replyArgs);
        setChessPosition(game.fen());
        setLastMove({ from: replyArgs.from, to: replyArgs.to });
        setBoardLocked(false);
      }, 500);
      newIndex += 1;
    }

    setSolutionIndex(newIndex);
    if (newIndex >= puzzleSolution.length) {
      setStatus(t('accessGranted'));
      setTimeout(() => onPuzzleSolved(), 1500);
    } else {
      const turn = game.turn() === 'w' ? 'White' : 'Black';
      setStatus(t('correctContinue', { turn }));
    }
    return true;
  }

  function getMoveOptions(square: string) {
    const moves = chessGame.moves({ square: square as Square, verbose: true });
    if (moves.length === 0) { setOptionSquares({}); return false; }
    const newSquares: Record<string, React.CSSProperties> = {};
    for (const move of moves) {
      const isCapture = chessGame.get(move.to as Square) && chessGame.get(move.to as Square)?.color !== chessGame.get(square as Square)?.color;
      newSquares[move.to] = {
        background: isCapture
          ? 'radial-gradient(circle, rgba(0,255,65,.15) 85%, transparent 85%)'
          : 'radial-gradient(circle, rgba(0,255,65,.15) 25%, transparent 25%)',
        borderRadius: '50%',
      };
    }
    newSquares[square] = { background: 'rgba(0, 255, 65, 0.25)' };
    setOptionSquares(newSquares);
    return true;
  }

  function handleHint() {
    const expected = puzzleSolution[solutionIndex];
    if (!expected) return;
    setHintSquare(expected.slice(0, 2));
  }

  function onSquareClick({ square, piece }: { square: string; piece?: string }) {
    if (boardLocked) return;
    setHintSquare(null);
    if (moveFrom === square) { setMoveFrom(''); setOptionSquares({}); return; }
    if (!moveFrom && piece) { const has = getMoveOptions(square); if (has) setMoveFrom(square); return; }
    const moves = chessGame.moves({ square: moveFrom as Square, verbose: true });
    const foundMove = moves.find((m) => m.from === moveFrom && m.to === square);
    if (!foundMove) { const has = getMoveOptions(square); setMoveFrom(has ? square : ''); return; }
    if (isPromotionMove(moveFrom, square)) { setPendingPromotion({ from: moveFrom, to: square }); setMoveFrom(''); setOptionSquares({}); return; }
    handleUserMove(moveFrom, square);
    setMoveFrom('');
    setOptionSquares({});
  }

  function onPieceDrop({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }) {
    if (boardLocked) return false;
    setHintSquare(null);
    if (!targetSquare) return false;
    if (isPromotionMove(sourceSquare, targetSquare)) { setPendingPromotion({ from: sourceSquare, to: targetSquare }); return false; }
    const success = handleUserMove(sourceSquare, targetSquare);
    if (!success) return false;
    setMoveFrom(''); setOptionSquares({});
    return true;
  }

  const mergedSquareStyles: Record<string, React.CSSProperties> = {};
  if (lastMove) {
    mergedSquareStyles[lastMove.from] = { background: 'rgba(0, 255, 65, 0.2)' };
    mergedSquareStyles[lastMove.to] = { background: 'rgba(0, 255, 65, 0.2)' };
  }
  if (hintSquare) mergedSquareStyles[hintSquare] = { background: 'rgba(0, 170, 255, 0.45)' };
  for (const [sq, style] of Object.entries(optionSquares)) mergedSquareStyles[sq] = { ...mergedSquareStyles[sq], ...style };
  if (wrongMoveSquare) mergedSquareStyles[wrongMoveSquare] = { background: 'rgba(255, 60, 60, 0.5)' };

  const chessboardOptions = {
    onPieceDrop, onSquareClick, position: chessPosition, squareStyles: mergedSquareStyles,
    id: 'puzzle-board', boardOrientation, animationDurationInMs: 200,
    customDarkSquareStyle: { backgroundColor: '#1a2a1a' },
    customLightSquareStyle: { backgroundColor: '#0f1a0f' },
    customBoardStyle: { borderRadius: '0px', border: '1px solid #00ff4133', boxShadow: '0 0 20px #00ff4111' },
  };

  const terminalStyles = (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap');
      .puzzle-terminal { font-family: 'Fira Code', 'Courier New', monospace; background: #0a0a0a; color: #00ff41; min-height: 100vh; position: relative; overflow: hidden; font-size: 13px; line-height: 1.6; }
      .puzzle-terminal::before { content: ''; position: fixed; inset: 0; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.02) 2px, rgba(0,255,65,0.02) 4px); pointer-events: none; z-index: 100; }
      .puzzle-terminal::after { content: ''; position: fixed; inset: 0; background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%); pointer-events: none; z-index: 99; }
      .p-phosphor { text-shadow: 0 0 3px #00ff4144, 0 0 6px #00ff4111; }
      .p-dim { color: #444; } .p-blue { color: #00aaff; } .p-yellow { color: #ffd93d; } .p-red { color: #ff6b6b; } .p-ok { color: #28c840; }
      @keyframes pBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      .p-matrix-col { position: absolute; top: -100%; font-size: 12px; color: #00ff4110; writing-mode: vertical-rl; animation: pMatrixFall linear infinite; white-space: nowrap; }
      @keyframes pMatrixFall { 0% { transform: translateY(-100%); } 100% { transform: translateY(calc(100vh + 100%)); } }
      @keyframes pPulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
      .p-loading-pulse { animation: pPulse 1.5s ease-in-out infinite; }
      @keyframes pFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      .p-fade-in { animation: pFadeIn 0.4s ease-out both; }
      .p-hint-btn { font-family: 'Fira Code', monospace; font-size: 12px; color: #00aaff; background: transparent; border: 1px solid #00aaff33; padding: 6px 16px; cursor: pointer; transition: all 0.2s; }
      .p-hint-btn:hover:not(:disabled) { border-color: #00aaff; box-shadow: 0 0 10px #00aaff22; color: #ffd93d; }
      .p-hint-btn:disabled { color: #333; border-color: #1a1a1a; cursor: not-allowed; }
      .p-promo-btn { font-family: 'Fira Code', monospace; width: 56px; height: 56px; background: #111; border: 1px solid #00ff4133; color: #00ff41; font-size: 28px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
      .p-promo-btn:hover { background: #1a2a1a; border-color: #00ff41; box-shadow: 0 0 12px #00ff4122; }
    `}</style>
  );

  if (isLoading) {
    return (
      <>{terminalStyles}
        <div className="puzzle-terminal">
          <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
            {MATRIX_RAIN_COLS.map((col, i) => (<div key={i} className="p-matrix-col" style={{ left: `${i * 10}%`, animationDuration: `${col.duration}s`, animationDelay: `${col.delay}s` }}>{col.bits}</div>))}
          </div>
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="p-phosphor text-center">
              <pre className="text-[10px] sm:text-xs p-yellow mb-6">{`
   ♚ ♛ ♜ ♝ ♞ ♟
  CHESS  PUZZLE
  AUTH  SYSTEM
   ♙ ♘ ♗ ♖ ♕ ♔
`}</pre>
              <div className="text-left inline-block">
                {LOADING_FRAMES.slice(0, loadingLine + 1).map((line, i) => (
                  <div key={i} className={i < loadingLine ? 'p-dim' : 'p-loading-pulse'}>
                    {i < loadingLine && <span className="p-ok">[OK] </span>}
                    {i === loadingLine && <span className="p-yellow">[..] </span>}
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-dim text-xs">{t('fetchingFrom')}</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>{terminalStyles}
        <div className="puzzle-terminal">
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="p-phosphor text-center max-w-md">
              <div className="p-red text-lg mb-4">{t('systemError')}</div>
              <div className="p-red mb-6">{error}</div>
              <div className="p-dim mb-6">
                <div>{t('possibleCauses')}</div>
                <div className="ml-4">{t('networkIssues')}</div>
                <div className="ml-4">{t('rateLimiting')}</div>
                <div className="ml-4">{t('serviceUnavailable')}</div>
              </div>
              <button onClick={() => window.location.reload()} className="p-hint-btn">$ sudo retry --force</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>{terminalStyles}
      <div className="puzzle-terminal">
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          {MATRIX_RAIN_COLS.map((col, i) => (<div key={i} className="p-matrix-col" style={{ left: `${i * 10}%`, animationDuration: `${col.duration}s`, animationDelay: `${col.delay}s` }}>{col.bits}</div>))}
        </div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-4 p-4">
          <div className="p-phosphor text-center p-fade-in">
            <div className="text-xs p-dim mb-1">$ ./chess-auth --puzzle daily</div>
            <div className="text-lg sm:text-xl p-yellow mb-1">{t('title')}</div>
            {puzzleInfo && (
              <div className="text-xs p-dim">
                <span className="p-blue">{t('rating')}:</span> {puzzleInfo.rating}
                <span className="mx-2">|</span>
                <span className="p-blue">{t('theme')}:</span>{' '}
                <span className="capitalize">{puzzleInfo.themes[0] || 'tactical'}</span>
              </div>
            )}
          </div>
          <div className="p-fade-in max-w-[min(90vw,500px)] w-full relative" style={{ animationDelay: '0.1s' }}>
            <Chessboard options={chessboardOptions as any} />
            {pendingPromotion && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                <div className="border border-[#00ff4133] bg-[#0a0a0a] p-4">
                  <p className="p-blue text-xs mb-3 text-center">{t('selectPromotion')}</p>
                  <div className="flex gap-2">
                    {PROMOTION_PIECES.map(({ piece, white, black, label }) => (
                      <button key={piece} onClick={() => { const { from, to } = pendingPromotion; setPendingPromotion(null); handleUserMove(from, to, piece); }} className="p-promo-btn" title={label}>
                        {boardOrientation === 'white' ? white : black}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-phosphor text-center p-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className={`text-sm font-medium mb-1 ${status.includes('ERROR') || status.includes('ERRORE') || status.includes('FEHLER') ? 'p-red' : status.includes('ACCESS GRANTED') || status.includes('ZUGANG') || status.includes('ACCESSO') ? 'p-ok' : status.includes('[OK]') ? 'p-ok' : 'p-yellow'}`}>
              {status}
            </div>
            <div className="text-xs p-dim mb-3">{t('clickOrDrag')}</div>
            <button onClick={handleHint} disabled={solutionIndex >= puzzleSolution.length} className="p-hint-btn">--hint</button>
          </div>
          <div className="text-[10px] p-dim text-center">{t('fetchingFrom')}</div>
        </div>
      </div>
    </>
  );
}
