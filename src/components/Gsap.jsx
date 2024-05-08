import gsap from "gsap";

export const despawnDropdown = gsap.to(
  ".navbar-phone-dropdown-main-container",
  {
    x: "-100%",
    duration: 1.3,
    ease: "power4.in",
    onComplete: () => {
      setIsHamburgerActive(false);
      setIsAnimtionActive(null);
    },
  }
);

export const spawnDropdown = gsap.from(
  ".navbar-phone-dropdown-main-container",
  {
    x: "-100%",
    duration: 1.2,
    ease: "power3.inOut",
  }
);
