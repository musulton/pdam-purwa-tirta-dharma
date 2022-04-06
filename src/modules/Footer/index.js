import "./styles.css";
import pdamLogo from "../../assets/pdamLogo2.svg";
import whatsapp from "../../assets/whatsapp.png";
import marker from "../../assets/marker.png";
import mail from "../../assets/mail.png";
import fb from "../../assets/fb.png"
import ig from "../../assets/ig.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"

const ICON = [fb, twitter, ig, youtube];

const CONTACT = [
  { text: 'Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi, Kabupaten Grobogan, Jawa Tengah 58111', icon: marker },
  { text: '+62 896 666 666', icon: whatsapp },
  { text: 'hallo@purwatirtadharma.com', icon: mail },
]

const AboutMe = () => (
  <div className="footer-section-wrapper footer-about">
    <img className="footer-logo" src={pdamLogo} />
    <p className="footer-about-text">PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang mampu memberikan kontribusi PAD pada kabupaten Grobogan</p>
    <div>
      {ICON.map(item => (
        <a href="#"><img className="footer-social-media" src={item} /></a>
      ))}
    </div>
  </div>
)

const Navigation = () => (
  <nav className="footer-section-wrapper">
    <h1 className="footer-about-title">NAVIGASI</h1>
    <ul>
      <li><a className="link" href="#">Home</a></li>
      <li><a className="link" href="#">Tentang Kami</a></li>
      <li><a className="link" href="#">Blog</a></li>
      <li><a className="link" href="#">Karir</a></li>
      <li><a className="link" href="#">Galeri</a></li>
    </ul>
  </nav>
)

const Contact = () => (
  <div className="footer-section-wrapper">
    <h1 className="footer-about-title">KONTAK</h1>
    <div className="footer-contact-container">
      {CONTACT.map(item => (
        <div className="contact-wrapper">
          <div><img className="contact-icon" src={item.icon} /></div>
          <p className="contact-info">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
)

const Footer = () => (
  <div className="footer-container">
    <AboutMe />
    <Navigation />
    <Contact />
  </div>
)

export default Footer;