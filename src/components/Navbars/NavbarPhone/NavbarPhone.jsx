import { useState } from "react";
import hamburger from "../../../assets/menu.png";
import logo from "../../../assets/solarLogo.jpeg";
import "./navbarphone.css";

export function NavbarPhone() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  return (
    <div className="navbar-phone-main-container">
      <img src={logo} width="200" />
      <img src={hamburger} width="50" className="navbar-phone-hamburger" />
    </div>
  );
}
