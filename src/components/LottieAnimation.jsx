import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json"; // Import your Lottie animation JSON file

function LottieAnimation() {
  const containerRef = useRef(null);
  let anim;

  useEffect(() => {
    // Initialize Lottie animation
    anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // Specify the renderer
      loop: false,
      autoplay: false,
      animationData: lottieFile, // Your animation data
    });

    // Clean up animation when component unmounts
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleAnimationClick = () => {
    if (anim.isPaused) {
      console.log(anim.isPaused);
      // Play the next 2 seconds of the animation from the current time
      anim.playSegments([anim.currentRawTime, anim.currentRawTime + 0.2], true);
    } else {
      // Pause the animation
      anim.pause();
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
