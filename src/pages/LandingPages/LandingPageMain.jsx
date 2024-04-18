import { useEffect, useState } from "react";
import { LandingPageComp } from "./LPComp/LandingPageComp";
import { LandingPagePhone } from "./LPPhone/LandingPagePhone";
import "./landingpagemain.css";

function LandingPageMain() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-page-main-container">
      {windowWidth <= 600 ? <LandingPagePhone /> : <LandingPageComp />}
    </div>
  );
}

export const landingRoute = {
  element: <LandingPageMain />,
};
