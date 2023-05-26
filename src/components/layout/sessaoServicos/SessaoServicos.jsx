import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos'
import { Botao } from '../../layout/botao/Botao'
import { dataCard } from "./Dados";

import imageServico from '../../../images/bi.png'
import imageServico4 from '../../../images/bgAgendar2.jpg'

function SessaoServicos() {
    const settings = {
        dots: true,
        infinite: true,
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
              slidesToShow: 2,
              slidesToScroll: 2,
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
        
        <S.content>
            <S.area1>
              <S.paragrafo>
                <h1>Agendamento</h1>
                <p> Agende serviços públicos como, Bilhete de Identidade, Contribuinte, Atestado de Residência e muitos outros serviços de agendamento disponíveis para si</p>
                <a href="/agendar2">Ir para o agendamento</a>
              </S.paragrafo>
              <S.contImage>
                <S.img src={imageServico} alt="image servico" />
              </S.contImage>
            </S.area1> 

              <S.titleSection><h1>Escolha um Serviço</h1></S.titleSection>
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
                      <a href="/agendar2">
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
            <p>Gerencie a sua agenda. Consulte o estado da sua agenda, faça actualização ou cancele a sua agenda</p>
           {/*  <S.containerArea2>
            
              <S.area2_1>
                <S.containerImage2>
                  <S.img src="" alt = "image servico" />
                </S.containerImage2>
                <S.text2>
                    <h1>Consultar Agenda</h1>
                    <p>Consulte a sua agenda e actualize-se do dia agendado</p>
                    <a href="/consultarAgenda">Consultar Agenda</a>
                </S.text2>
              </S.area2_1>
               <S.area2_2>
                <S.containerImage2>
                  <S.img src="" alt = "image servico" />
                </S.containerImage2>
                <S.text2>
                    <h1>Consultar Agenda</h1>
                    <p>Consulte a sua agenda e actualize-se do dia agendado</p>
                    <a href="/consultarAgenda">Consultar Agenda</a>
                </S.text2>
              </S.area2_2> 
            </S.containerArea2>  */}
           

            <S.area3>
              <S.text3>
                  <h1>Actualizar Agenda</h1>
                  <p>Actualize a sua agenda, e imprima um novo comprovativo de agendametno </p>
                  <a href="/actualizarAgenda">Actualizar Agenda</a>
              </S.text3>

              <S.containerImage3>
                <S.img src={imageServico4} alt = "image servico" />
              </S.containerImage3>
            </S.area3> 
        </S.content>

        
      </S.containerContainer>
    )
}

export { SessaoServicos }