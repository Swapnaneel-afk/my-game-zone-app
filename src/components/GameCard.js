import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import "./GameCard.css";

gsap.registerPlugin(ScrollTrigger);

const GameCard = ({ game }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Entrance animation
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100px",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Tilt effect
    VanillaTilt.init(card, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      card.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div className="game-card" ref={cardRef}>
      <div className="game-image"></div>
      <h3>{game.name}</h3>
      <button>Play Now</button>
    </div>
  );
};

export default GameCard;
