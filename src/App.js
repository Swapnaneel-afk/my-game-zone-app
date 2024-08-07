// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import Preloader from "./components/PreLoader";
import "./styles/index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
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

  return (
    <div className="App">
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
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
