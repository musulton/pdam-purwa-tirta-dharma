import styled from "styled-components";

import "./styles.css";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";

const CONTENT = [
  {title: 'Pemberhentian Air Mengalir Sementara Pada Daerah ...', category: 'Pengumuman', img: news1},
  {title: 'PDAM Purwa Tirta Dharma memberikan bantuan ...', category: 'Berita Terbaru', img: news2},
  {title: 'Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...', category: 'Pengumuman', img: news3},
]

const StyledCategory = styled.p`
  width: 106px;
  height: 34px;

  background-color: ${props => props.category !== "Pengumuman" ? '#CCBC29' : '#DA2525'};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0px 10px;

  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #FFFFFF;
`

const Content = () => (
  <div className="news-content-container">
    { CONTENT.map(item => (
        <div className="news-content-wrapper">
          <StyledCategory category={item.category}>{item.category}</StyledCategory>
          <div className="news-card-wrapper">
            <div className="news-content">
              <img className="news-content-photo" src={item.img} />
              <h1 className="news-content-title">{item.title}</h1>
              <button className="button button-secondary button-small">
                Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

const News = () => (
  <div className="news-container">
    <h1 className="news-title">Ikuti Pengumuman Terbaru Kami</h1>
    <p className="news-subtitle">Jangan sampai ketinggalan pengumuman hingga berita terbaru kami</p>
    <Content />
  </div>
)

export default News;