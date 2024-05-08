import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json"; // Import your Lottie animation JSON file

function LottieAnimation({ isHamburgerActive, isAnimationActive }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  console.log("anim", isAnimationActive);
  console.log("ham", isHamburgerActive);

  useEffect(() => {
    // Initialize Lottie animation
    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // Specify the renderer
      loop: false,
      autoplay: false,
      animationData: lottieFile, // Your animation data
    });

    // Clean up animation when component unmounts
    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    const currentFrame = animRef.current.currentFrame;
    if (isAnimationActive === false) {
      // animRef.current.playSegments([0, 43], true);
      animRef.current.playSegments([currentFrame, 0], true);
    } else if (isHamburgerActive) {
      animRef.current.playSegments([0, 43], true);
    }
  }, [isHamburgerActive, isAnimationActive]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {/* This div will contain the Lottie animation */}
    </div>
  );
}

export default LottieAnimation;
