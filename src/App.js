// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import Preloader from "./components/PreLoader";
import TransitionOverlay from "./components/TransitionOverlay";
import "./styles/index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [showGames, setShowGames] = useState(false);
  const games = [
    { id: 1, name: "Tic-Tac-Toe" },
    { id: 2, name: "Hangman" },
    { id: 3, name: "Minesweeper" },
    { id: 4, name: "Sudoku" },
    { id: 5, name: "Rock Paper Scissors" },
  ];

  const handleStartPlaying = () => {
    setShowGames(true);
  };

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setTransitioning(false);
  };

  return (
    <div className="App">
      {loading && <Preloader setLoading={handlePreloaderComplete} />}
      {transitioning && (
        <TransitionOverlay onComplete={handleTransitionComplete} />
      )}
      {!loading && !transitioning && (
        <>
          {!showGames ? (
            <Header onStartPlaying={handleStartPlaying} />
          ) : (
            <GameList games={games} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
