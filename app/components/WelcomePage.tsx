'use client';

import React from 'react';

interface WelcomePageProps {
  onPlayPuzzle: () => void;
  onSkipToWebsite: () => void;
}

/**
 * WelcomePage Component
 *
 * Initial landing screen that presents users with a choice:
 * 1. Solve a chess puzzle to access the website (for chess enthusiasts)
 * 2. Skip directly to the portfolio (for recruiters/visitors)
 */
export default function WelcomePage({ onPlayPuzzle, onSkipToWebsite }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome
          </h1>
          <p className="text-xl text-slate-300">
            Software Engineer & Chess Enthusiast
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Chess Puzzle Option */}
          <button
            onClick={onPlayPuzzle}
            className="group relative bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="text-6xl mb-4 text-center">♟️</div>
            <h2 className="text-2xl font-bold text-white mb-3 text-center">
              Chess Player
            </h2>
            <p className="text-slate-300 text-center leading-relaxed">
              Solve a chess puzzle from Lichess to unlock access to the website
            </p>
            <div className="mt-6 text-sm text-blue-400 text-center font-semibold group-hover:text-blue-300">
              → Solve Puzzle
            </div>
          </button>

          {/* Skip to Website Option */}
          <button
            onClick={onSkipToWebsite}
            className="group relative bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-green-500 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="text-6xl mb-4 text-center">💼</div>
            <h2 className="text-2xl font-bold text-white mb-3 text-center">
              Skip to Portfolio
            </h2>
            <p className="text-slate-300 text-center leading-relaxed">
              Go directly to my professional experience and projects
            </p>
            <div className="mt-6 text-sm text-green-400 text-center font-semibold group-hover:text-green-300">
              → View Portfolio
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Choose your adventure - both paths lead to the same destination! ♟️</p>
        </div>
      </div>
    </div>
  );
}
