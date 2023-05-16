import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos'
import { Botao } from '../../layout/botao/Botao'
import { dataCard } from "./Dados";

import imageServico from '../../../images/bi.png'

import imageServico2 from '../../../images/contribuinte.png'

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
            <S.area1>
              <S.paragrafo>
                <h1>Agendamento</h1>
                <p> Mas baixo estão listados alguns serviços de acesso rápido disponíveis para você. Para obter informações sobre os requisitos para o tratamento presencial desses serviços, por favor, acesse a página de serviços para mais detalhes.</p>
                <a href="/agendar2">Ir para o agendamento</a>
              </S.paragrafo>
              <S.contImage>
                <S.img src={imageServico} alt="image servico" />
              </S.contImage>
            </S.area1> 

            <S.area2>
              <S.containerImage2>
                <S.img src={imageServico2} alt = "image servico" />
              </S.containerImage2>
              <S.text2>
                  <h1>Consultar Agenda</h1>
                  <p>Consulte a sua agenda e actualize-se do dia agendado</p>
                  <a href="/consultarAgenda">Consultar Agenda</a>
              </S.text2>

            </S.area2> 


            <S.area3>
              <S.text3>
                  <h1>Actualizar Agenda</h1>
                  <p>Actualize a sua agenda, e imprima o novo comprovativo de agendametno </p>
                  <a href="/actualizarAgenda">Actualizar Agenda</a>
              </S.text3>

              <S.containerImage3>
                <S.img src={imageServico2} alt = "image servico" />
              </S.containerImage3>
            </S.area3> 
        </S.content>

        <S.containerContainerS>
          <S.container>
            <h1>Agendar Documento </h1>
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
                    <S.a href="/servicos">Mais Informações</S.a>
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