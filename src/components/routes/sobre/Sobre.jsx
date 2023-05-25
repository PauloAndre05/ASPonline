import { NewsLetter } from "../../layout/newsLetter/NewsLetter"
import * as S from './styleSobre'
import {Lightbulb, Bell, CheckCircle} from 'phosphor-react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import style from './style.module.css' 
import { NavBar } from "../../layout/NavBar/NavBar";
import { Footer } from "../../layout/footer/Footer";

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
            <NavBar/>
            <div className={style.container3}>
                    <S.text>
                        <p>Nós somos uma plataforma online que permite que você agende serviços públicos de forma rápida e fácil. Oferecemos serviços como bilhete de identidade, atestado de residência, cartão de munícipe, recenseamento militar e muito mais. Nosso objetivo é tornar o processo de agendamento de serviços públicos simples e acessível para todos </p>
                    </S.text>
            </div>

            {/* <S.content>
                <S.containerImg>
                    <S.img src={imgSobre} alt="Image about" />
                </S.containerImg>  

                <div>
                    <p>Estamos aqui para atender às necessidades da comunidade e tornar a vida mais fácil para todos. Conheça mais sobre nós e nossa equipe, e saiba como podemos ajudá-lo a obter acesso a nossos serviços de maneira simples e fácil."</p>
                </div>
            </S.content> */}

            
            <S.more>
                    <S.carrossel>
                        <Slider {...settings}>
                        <div>
                            <Lightbulb size={40} weight="thin" color="#82B6E0" />
                            <h6>Transparência</h6>
                        </div>
                        <div>
                            <Bell size={40} weight="thin" color="#82B6E0" />
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
            <Footer/>
        </S.container>
    )
}

export { Sobre }