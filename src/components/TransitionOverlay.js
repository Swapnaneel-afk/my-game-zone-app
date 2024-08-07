// TransitionOverlay.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./TransitionOverlay.css";

const TransitionOverlay = ({ onComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
        gsap.set(overlay, { display: "none" });
      },
    });

    tl.to(overlay, {
      duration: 0.5,
      opacity: 1,
      ease: "power2.inOut",
    }).to(overlay, {
      duration: 1,
      clipPath: "circle(0% at 50% 50%)",
      ease: "power3.inOut",
    });
  }, [onComplete]);

  return <div ref={overlayRef} className="transition-overlay"></div>;
};

export default TransitionOverlay;
