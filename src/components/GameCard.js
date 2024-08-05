// GameCard.js
import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => (
  <div className="game-card">
    <div className="game-image"></div>
    <h3>{game.name}</h3>
    <button>Play Now</button>
  </div>
);

export default GameCard;
