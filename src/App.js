import "react-responsive-carousel/lib/styles/carousel.min.css";

import About from './modules/About';
import ChooseUs from './modules/ChooseUs';
import Contact from './modules/Contact';
import Footer from './modules/Footer';
import Header from './modules/Header';
import NavBar from './modules/NavBar';
import News from './modules/News';
import Product from './modules/Product';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <ChooseUs />
      <News />
      <Product />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
