import * as React from "react";

import './styles.css';
import pdamLogo from "../../assets/pdamLogo3.svg";
import searchIcon from "../../assets/search.svg";

const Button = () => (
  <div className="wrapper-button">
    <button className="navbar-button navbar-icon">
      <img src={searchIcon} />
    </button>
    <button className="navbar-button customer-button">
      Customer Service
    </button>
  </div>
)

const Menu = () => (
  <>
    <ul>
      <li><a className="link" href="#home">Beranda</a></li>
      <li><a className="link" href="#about">Tentang</a></li>
      <li><a className="link" href="#gallery">Galeri</a></li>
      <li><a className="link" href="#blog">Blog</a></li>
    </ul>
    <Button />
  </>
)

const NavBar = () => {
  const [navColor, setNavColor] = React.useState("transparent");
  const [smallScreen, setSmallScreen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setScrolling(true) : setScrolling(false);
  };

  const listenResizeEvent = () => {
    window.innerWidth < 1100 ? setSmallScreen(true) : setSmallScreen(false);
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  };

  React.useEffect(() => {
    // For Mobile
    listenResizeEvent();

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener('resize', listenResizeEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", listenResizeEvent);
    };
  }, []);

  React.useEffect(() => {
    scrolling || smallScreen ? setNavColor("#157599") : setNavColor("transparent");
  }, [smallScreen, scrolling])

  return (
    <div
      className="navbar"
      style={{ backgroundColor: navColor }}
    >
      <div className="navbar-left-section">
        <img src={pdamLogo} />
        <button
          className="navbar-menu-button"
          onClick={toggleNav}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <nav className="navbar-right-section">
        {(smallScreen && toggleMenu) && <Menu />}
        {!smallScreen && <Menu />}
      </nav>
    </div>
  );
}

export default NavBar;