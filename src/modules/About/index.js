import "./styles.css"
import presidentImg from "../../assets/president.png";

const Photo = () => (
  <div className="photo-wrapper">
    <img className="photo" src={presidentImg} />
    <p className="photo-name">Ir.H.Ady Setiawan.SH</p>
    <p className="photo-job">President of PDAM Purwa Tirta Dharma</p>
  </div>
)

const KnowUs = () => (
  <div>
    <div className="about-title-wrapper">
      <blockquote><h1/></blockquote>
      <h1 className="about-title">Mari Kenali Kami<br/>dan Perjalanan Kami</h1>
    </div>
    <div className="about-subtitle-wrapper">
      <p className="about-subtitle">
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore “.
      </p>
    </div>
  </div>
)

const About = () => (
  <div className="about-container">
    <div className="middle-section">
      <KnowUs />
      <div style={{ width: 131 }} />
      <Photo />
    </div>
    <button className="button button-secondary button-medium">Lebih Lengkap</button>
  </div>
)

export default About;