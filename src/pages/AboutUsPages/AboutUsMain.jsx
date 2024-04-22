import { useEffect, useState } from "react";
import { AboutUsPhone } from "./AUPhone/AboutUsePhone";
import { AboutUsComp } from "./AUComp/AboutUsComp";

function AboutUsMain() {
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
      {windowWidth <= 600 ? <AboutUsPhone /> : <AboutUsComp />}
    </div>
  );
}

export const aboutUsRoute = {
  element: <AboutUsMain />,
};
