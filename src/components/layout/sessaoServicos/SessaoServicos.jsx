import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos'
import { Botao } from '../../layout/botao/Botao'
import { dataCard } from "./Dados";

function SessaoServicos() {
    const settings = {
        dots: false,
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
        <S.titleSection>Serviços</S.titleSection>
        <S.container>
          
          <Slider {...settings}>
          {dataCard.map((item, index) => (
          <S.containerCard>
            <S.card key={index}>
              <S.cardTop>
                <div>{item.img}</div>
              </S.cardTop>
              <S.cardBottom>
                <S.title>{item.servico}</S.title>
                <S.containerbutton>
                  <a href="/agendar">
                    <Botao name="Agendar"/>
                  </a>                  
                </S.containerbutton>
              </S.cardBottom>
            </S.card>
          </S.containerCard>
          ))}
          </Slider>
        
        </S.container>
      </S.containerContainer>
    )
}

export { SessaoServicos }