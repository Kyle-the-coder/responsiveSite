import { useEffect, useState } from "react";
import gsap from "gsap";
import hamburger from "../../../assets/menu.png";
import logo from "../../../assets/solarLogo.jpeg";
import "./navbarphone.css";

export function NavbarPhone() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
    } else if (isHamburgerActive) {
      gsap.to(".navbar-phone-dropdown-main-container", {
        height: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
      setTimeout(() => {
        setIsHamburgerActive(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-main-container", {
        height: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }
  }, [isHamburgerActive]);

  const links = [
    { linkName: "About Us" },
    { linkName: "Product" },
    { linkName: "Services" },
    { linkName: "Locations" },
    { linkName: "Contact Us" },
  ];
  console.log(isHamburgerActive);
  return (
    <div className="navbar-phone-main-container">
      <img src={logo} width="200" />
      <img
        src={hamburger}
        width="50"
        className="navbar-phone-hamburger"
        onClick={() => handleActivateHamburger()}
      />
      {isHamburgerActive && (
        <div className="navbar-phone-dropdown-main-container">
          {links.map((link, index) => {
            return (
              <div key={link.linkName}>
                <h3>{link.linkName}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
