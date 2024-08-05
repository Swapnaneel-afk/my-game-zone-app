import React from "react";

const Header = ({ onStartPlaying }) => (
  <header>
    <h1>Welcome to GameZone</h1>
    <p>Play your favorite games and challenge your friends!</p>
    <button onClick={onStartPlaying}>Start Playing</button>
  </header>
);

export default Header;
