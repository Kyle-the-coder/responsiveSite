import { useEffect, useState } from "react";
import gsap from "gsap";
import logo from "../../../assets/solarLogo.jpeg";
import "./navbarphone.css";
import { useNavigate } from "react-router-dom";
import LottieAnimation from "../../LottieAnimation";

export function NavbarPhone() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const navigate = useNavigate();

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
    } else if (isHamburgerActive) {
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  function handleNavigate(link) {
    if (link === "/aboutUs") {
      navigate(link);
      gsap.to(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
      });
      setTimeout(() => {
        setIsHamburgerActive(false);
      }, 300);
    }
  }

  function handleHomeNavigate() {
    navigate("/");
    gsap.to(".navbar-phone-dropdown-main-container", {
      x: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
    });
    setTimeout(() => {
      setIsHamburgerActive(false);
    }, 300);
  }

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-main-container", {
        x: "-100%",
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  }, [isHamburgerActive]);

  const links = [
    { linkName: "About Us", link: "/aboutUs" },
    { linkName: "Product" },
    { linkName: "Services" },
    { linkName: "Locations" },
    { linkName: "Contact Us" },
  ];

  return (
    <div className="navbar-phone-main-container">
      <img
        src={logo}
        width="200"
        className="navbar-logo"
        onClick={() => handleHomeNavigate()}
      />

      <div
        className="navbar-phone-hamburger"
        onClick={() => handleActivateHamburger()}
      >
        <LottieAnimation />
      </div>

      {isHamburgerActive && (
        <div className="navbar-phone-dropdown-main-container">
          {links.map((link, index) => {
            return (
              <div key={link.linkName}>
                <h3
                  className="dropdown-link-name"
                  onClick={() => handleNavigate(link.link)}
                >
                  {link.linkName}
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
