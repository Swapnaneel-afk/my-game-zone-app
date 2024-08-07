// Preloader.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";

const Preloader = ({ setLoading }) => {
  const preloaderRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the progress bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });

    // Animate the loading text
    tl.to(
      textRef.current,
      {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.5"
    );

    // Animate out the preloader
    tl.to(preloaderRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setLoading(false),
    });
  }, [setLoading]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={progressRef} className="progress-bar"></div>
      <div ref={textRef} className="loading-text">
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
