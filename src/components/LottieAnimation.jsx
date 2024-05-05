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
    // Check if the animation instance is available
    if (animRef.current) {
      // Get the current frame of the animation
      const currentFrame = animRef.current.currentFrame;

      console.log(currentFrame);

      if (animRef.current.isPaused) {
        // If the current frame is 43, play frames 115-177
        if (currentFrame === 42) {
          animRef.current.playSegments([115, 177], true);
        } else {
          // Otherwise, play frames 0 to 43 and then pause
          animRef.current.playSegments([0, 43], true);
        }
      } else {
        // Pause the animation
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
