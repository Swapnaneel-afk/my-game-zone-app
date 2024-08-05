import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GameCard from "./GameCard";

gsap.registerPlugin(ScrollTrigger);

const GameList = ({ games }) => {
  const gameGridRef = useRef(null);
  const gameCardsRef = useRef([]);

  useEffect(() => {
    gameCardsRef.current = gameCardsRef.current.slice(0, games.length);

    gsap.fromTo(
      gameCardsRef.current,
      { opacity: 0, y: 50 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gameGridRef.current,
          start: "top 80%",
        },
      }
    );
  }, [games]);

  return (
    <section>
      <h2>Our Games</h2>
      <div className="game-grid" ref={gameGridRef}>
        {games.map((game, index) => (
          <div key={game.id} ref={(el) => (gameCardsRef.current[index] = el)}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameList;
