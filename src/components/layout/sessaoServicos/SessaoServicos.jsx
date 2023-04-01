import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos'
import { Botao } from '../../layout/botao/Botao'
import { dataCard } from "./Dados";
import { Link } from "react-router-dom";

function SessaoServicos() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinitbe: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      <S.containerContainer>
        <S.container>
          <S.titleSection>Serviços</S.titleSection>
          <Slider {...settings}>
          {dataCard.map((item, index) => (
          <S.card key={index}>
            <S.cardTop>
              <S.imagem src={item.img} alt={item.servico}/>
            </S.cardTop>
            <S.cardBottom>
              <S.title>{item.servico}</S.title>
              <S.containerbutton>
                <Link to="/agendar">
                  <Botao name="Agendar"/>
                </Link>
              </S.containerbutton>
            </S.cardBottom>
          </S.card>
          ))}
          </Slider>
        
        </S.container>
      </S.containerContainer>
    )
}

export { SessaoServicos }