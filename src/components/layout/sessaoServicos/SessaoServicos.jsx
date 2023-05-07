import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos'
import { Botao } from '../../layout/botao/Botao'
import { dataCard } from "./Dados";

import imageServico from '../../../images/imageServico.jpg'
/* import imageServico2 from '../../../images/imageServico2.jpg' */

function SessaoServicos() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
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
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <S.content>
            <S.paragrafo>
              <h1>Bem-vindo à sessão de serviços do sistema de agendamento de serviços públicos online.</h1>
              <p> Mas baixo estão listados alguns serviços de acesso rápido disponíveis para você. Para obter informações sobre os requisitos para o tratamento presencial desses serviços, por favor, acesse a página de serviços para mais detalhes.</p>
            </S.paragrafo>

            <S.contImage>
              <S.img src={imageServico} alt="image servico" />
            </S.contImage>
            {/* <S.area2>
              <S.text2>
                  <p>Bem-vindo à página de serviços do sistema de agendamento de serviços públicos online. Aqui, você encontrará todos os serviços disponíveis para agendamento oferecidos pelo governo. Os serviços estão organizados em categorias para facilitar a navegação e o acesso às informações necessárias para realizar o agendamento.</p>
              </S.text2>

              <S.ContainerImage2>
                <S.img src={imageServico2} alt = "image servico" />
              </S.ContainerImage2>
            </S.area2> */}
        </S.content>

        <S.containerContainerS>
          <S.container>
          
            <Slider {...settings}>
            {dataCard.map((item, index) => (
            <S.containerCard key={index}>
              <S.card >
                <S.cardTop>
                  <div>{item.img}</div>
                </S.cardTop>
                <S.cardBottom>
                  <S.title>{item.servico}</S.title>
                  <S.containerbutton>
                    <a href="/agendar">
                      <Botao name="Agendar"/>
                    </a>
                    <S.a href="/servicos">Saiba Mais</S.a>
                  </S.containerbutton>
                </S.cardBottom>
              </S.card>
            </S.containerCard>
            ))}
            </Slider>
          
          </S.container>
        </S.containerContainerS>
      </S.containerContainer>
    )
}

export { SessaoServicos }