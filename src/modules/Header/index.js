import "./styles.css";
import phone from "../../assets/phone.svg"
import socialMedia from "../../assets/socialMedia.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"

const ICON = [socialMedia, facebook, instagram, twitter, youtube];

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-text">
        <h1 className="header-title">
          Menjadi Perusahaan<br/>Air Minum Modern
        </h1>
        <p className="header-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className="header-button">
          <img className="header-icon" src={phone} />
          Hubungi Kami
        </button>
      </div>

      <div className="header-social-media-wrapper">
        {ICON.map(item => (
          <a href="#"><img className="header-social-media" src={item} /></a>
        ))}
      </div>
    </div>
  </header>
)

export default Header;