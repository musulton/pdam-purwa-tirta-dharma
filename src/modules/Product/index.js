import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';

import "./styles.css";
import pdamLogo from "../../assets/pdamLogo.svg";

const CONTENT = [
  {src: pdamLogo},
  {src: pdamLogo},
  {src: pdamLogo},
  {src: pdamLogo},
]

const StyledCarousel = styled(Carousel)`
  width: 90%;
  margin: auto;
  height: auto;
  border-radius: 8px;
  padding: 32px 0;

  background-color: #EAEAEA;
`

const Product = () => (
  <StyledCarousel showThumbs={false} showStatus={false}>
    {CONTENT.map(item => (
      <div className="product-image-wrapper">
        <img src={item.src} className="product-image" />
      </div>
    ))}
  </StyledCarousel>
)

export default Product;