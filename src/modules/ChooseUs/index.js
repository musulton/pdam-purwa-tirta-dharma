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
  height: 331px;
  background-color: ${(props) => props.bgColor};

  @media only screen and (max-width: 1200px) {
    padding-top: 25px;
  }
`

const BoxSubtitle = styled.p`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 31px;

  color: ${(props) => props.color};
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
    <CardBox bgColor="#157599" text="Profesional" img={icon1} />
    <CardBox bgColor="#2093BE" text="24H Nonstop" img={icon2} />
    <CardBox bgColor="#2EB3E6" text="Full Support" img={icon3} />  
  </div>
)

export default ChooseUs