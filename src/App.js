import React, { useState } from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import "./styles/index.css";

const App = () => {
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
      {!showGames ? (
        <Header onStartPlaying={handleStartPlaying} />
      ) : (
        <GameList games={games} />
      )}
    </div>
  );
};

export default App;
