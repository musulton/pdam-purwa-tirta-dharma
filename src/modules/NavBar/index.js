import * as React from "react";

import './styles.css';
import pdamLogo from "../../assets/logoWhite.png";
import searchIcon from "../../assets/searchIcon.png";

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

const NavBar = () => {
  const [navColor, setNavColor] = React.useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#157599") : setNavColor("transparent");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className="navbar"
      style={{ backgroundColor: navColor }}
    >
      <img src={pdamLogo} />
      <ul>
        <li><a className="link" href="#home">Beranda</a></li>
        <li><a className="link" href="#about">Tentang</a></li>
        <li><a className="link" href="#gallery">Galeri</a></li>
        <li><a className="link" href="#blog">Blog</a></li>
      </ul>
      <Button />
    </div>
  );
}

export default NavBar;