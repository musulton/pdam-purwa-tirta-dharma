import "./styles.css";
import phoneIcon from "../../assets/phone.png"
import socialMedia from "../../assets/socialMedia.png"
import fb from "../../assets/fb.png"
import ig from "../../assets/ig.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"

const ICON = [socialMedia, fb, ig, twitter, youtube];

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div>
        <h1 className="header-title">
          Menjadi Perusahaan<br/>Air Minum Modern
        </h1>
        <p className="header-subtitle">
          Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore
        </p>
        <button className="header-button">
          <img className="header-icon" src={phoneIcon} />
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