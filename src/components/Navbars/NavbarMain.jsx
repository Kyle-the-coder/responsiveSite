import { useEffect, useState } from "react";
import { NavbarComp } from "./NavbarComp/NavbarComp";
import { NavbarPhone } from "./NavbarPhone/NavbarPhone";
import hamburger from "../../assets/menu.png";

export function NavbarMain() {
  const [isPhoneView, setIsPhoneView] = useState(false);
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
    <div className="navbar-main-container">
      {windowWidth <= 600 ? (
        <img src={hamburger} width="10" />
      ) : (
        <h1>computer</h1>
      )}
    </div>
  );
}
