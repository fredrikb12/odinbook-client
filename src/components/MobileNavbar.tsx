import { useEffect, useRef, useState } from "react";
import useAuth from "../useAuth";
import Logout from "./Logout";
import { NoUnderlineLink } from "./styled/Links.styled";
import {
  StyledMobileHeader,
  StyledMobileNav,
} from "./styled/MobileNavbar.styled";
import hamburgerMenu from "../images/hamburger-menu.svg";

function MobileNavbar() {
  const { user } = useAuth();
  const [isDisplaying, setIsDisplaying] = useState(false);
  const element = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickEvent(e: MouseEvent) {
      if (isDisplaying === false) return;
      if (e.target === element.current || e.currentTarget === element.current)
        return;
      if (e.target === navRef.current || e.currentTarget === navRef.current)
        return;
      setIsDisplaying(false);
    }

    window.addEventListener("click", handleClickEvent);

    return () => window.removeEventListener("click", handleClickEvent);
  }, [isDisplaying]);

  return (
    <StyledMobileHeader>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: 1,
          display: isDisplaying ? "block" : "none",
          visibility: isDisplaying ? "visible" : "hidden",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      ></div>
      <button
        onClick={() => setIsDisplaying(true)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          ref={element}
          style={{ width: "40px" }}
          src={hamburgerMenu}
          alt="menu"
        />
      </button>

      <StyledMobileNav
        ref={navRef}
        style={{
          display: isDisplaying ? "flex" : "none",
          visibility: isDisplaying ? "visible" : "hidden",
        }}
      >
        <NoUnderlineLink to="/">Home</NoUnderlineLink>
        <NoUnderlineLink to="/users">Users</NoUnderlineLink>
        <NoUnderlineLink to={`users/${user}`}>Profile</NoUnderlineLink>
        <Logout />
      </StyledMobileNav>
    </StyledMobileHeader>
  );
}

export default MobileNavbar;
