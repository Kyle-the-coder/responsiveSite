import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json"; // Import your Lottie animation JSON file

function LottieAnimation() {
  const containerRef = useRef(null);
  const animRef = useRef(null);

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

  const handleAnimationClick = () => {
    if (animRef.current) {
      const currentFrame = animRef.current.currentFrame;
      console.log(currentFrame);
      console.log(animRef.current.isPaused);
      if (animRef.current.isPaused) {
        if (currentFrame === 42) {
          animRef.current.playSegments([currentFrame, 0], true);
        } else if (currentFrame === 0) {
          animRef.current.playSegments([0, 43], true);
        }
      } else if (
        !animRef.current.isPaused &&
        currentFrame > 0 &&
        currentFrame < 42
      ) {
        animRef.current.playSegments([currentFrame, 0], true);
      } else {
        animRef.current.pause();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      onClick={handleAnimationClick}
    >
      {/* This div will contain the Lottie animation */}
    </div>
  );
}

export default LottieAnimation;
