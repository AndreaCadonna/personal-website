'use client';

import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import ChessPuzzleLogin from './components/ChessPuzzleLogin';
import Portfolio from './components/Portfolio';

type PageState = 'welcome' | 'puzzle' | 'portfolio';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('welcome');

  const handlePlayPuzzle = () => {
    setCurrentPage('puzzle');
  };

  const handleSkipToWebsite = () => {
    setCurrentPage('portfolio');
  };

  const handlePuzzleSolved = () => {
    setCurrentPage('portfolio');
  };

  // Render the appropriate component based on current state
  if (currentPage === 'welcome') {
    return (
      <WelcomePage
        onPlayPuzzle={handlePlayPuzzle}
        onSkipToWebsite={handleSkipToWebsite}
      />
    );
  }

  if (currentPage === 'puzzle') {
    return <ChessPuzzleLogin onPuzzleSolved={handlePuzzleSolved} />;
  }

  return <Portfolio />;
}
