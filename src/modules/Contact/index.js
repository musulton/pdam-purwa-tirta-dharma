import "./styles.css";
import contactImage from "../../assets/contact.png";

const Contact = () => (
  <div className="contact-container">
    <div>
      <h1 className="contact-title">layanan berkualitas tinggi untuk masyarakat indonesia</h1>
      <p className="contact-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <div className="contact-button-wrapper">
        <button className="button button-primary button-large">Kontak Kami</button>
        <div style={{width: 20}} />
        <button className="button button-secondary button-large">Konsultasi</button>
      </div>
    </div>
    <img className="contact-circle" src={contactImage} />
  </div>
)

export default Contact;