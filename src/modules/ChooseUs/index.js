import styled from "styled-components"

import "./styles.css";
import icon1 from "../../assets/chooseUsIcon1.svg";
import icon2 from "../../assets/chooseUsIcon2.svg";
import icon3 from "../../assets/chooseUsIcon3.svg";

const Box = styled.div`
  flex: ${(props) => props.size};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200px;
  max-height: 320px;
  background-color: ${(props) => props.bgColor};
`

const BoxSubtitle = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  margin: 0;

  color: ${(props) => props.color};

  @media  (max-width: 1100px) { 
    font-size: 16px;
  }
`

const CardBox = ({
  bgColor,
  text,
  img
}) => (
  <Box bgColor={bgColor} size={1}>
    <div className="box-image" src={img}>
      <img src={img} height={56} />
    </div>
    <BoxSubtitle color="#FFF">{text}</BoxSubtitle>
  </Box>
)

const CardTitle = () => (
  <Box bgColor="#FFF" size={1.5}>
    <div className="card-wrapper">
      <div className="box-title">
        Kenapa Memilih Kami?
      </div>
      <BoxSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</BoxSubtitle>
    </div>
  </Box>
)

const ChooseUs = () => (
  <div className="box-container">
    <CardTitle />
    <div className="box-item">
      <CardBox bgColor="#157599" text="Profesional" img={icon1} />
      <CardBox bgColor="#2093BE" text="24H Nonstop" img={icon2} />
      <CardBox bgColor="#2EB3E6" text="Full Support" img={icon3} />
    </div>
  </div>
)

export default ChooseUs