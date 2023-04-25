import { NewsLetter } from "../../layout/newsLetter/NewsLetter"
import * as S from './styleSobre'

import banner from '../../../images/bgQuemSomos.png'
import imgSobre from '../../../images/direction9.png'

import {Lightbulb, Bell, CheckCircle} from 'phosphor-react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Sobre() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        cssEase: ""
      };
    return(
        <S.container>
            <S.header>
                <S.banner>
                    <div>
                        <img src={banner} alt="image banner" />
                    </div>
                </S.banner>
                <S.text>
                    <h1>Quem Somos</h1>
                    <p>Saiba mais sobre o ASPonline</p>
                </S.text>
            </S.header>

            <S.content>
                <div>
                    <img src={imgSobre} alt="Image about" />
                </div>  

                <div>
                    <p>Estamos aqui para atender às necessidades da comunidade e tornar a vida mais fácil para todos. Conheça mais sobre nós e nossa equipe, e saiba como podemos ajudá-lo a obter acesso a nossos serviços de maneira simples e fácil."</p>
                </div>
            </S.content>

            
            <S.more>
                <h1>ASPonline</h1>
                    <S.carrossel>
                        <Slider {...settings}>
                        <div>
                            <Lightbulb size={40} weight="thin" color="#82B6E0" />
                            <h6>Transparência</h6>
                        </div>
                        <div>
                            <Bell size={40} weight="thin" color="#fff" />
                            <h6>Responsabilidade</h6>
                        </div>
                        <div>
                            <CheckCircle size={40} weight="thin" color="#82B6E0" />
                            <h6>Inovação</h6>
                        </div> 
                        </Slider>
                    </S.carrossel>
           
            </S.more>
            
            

            <NewsLetter/>
        </S.container>
    )
}

export { Sobre }