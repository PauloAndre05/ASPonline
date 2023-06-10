import { Link } from 'react-router-dom'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Botao } from '../botao/Botao'

import banner2 from '../../../images/b2.jpg'
import b6 from '../../../images/b6.jpg'
import b7 from '../../../images/b7.jpg'
import b8 from '../../../images/b8.jpg'
import banner4 from '../../../images/b6Mob.jpg'
import banner8 from '../../../images/b8Mob.jpg'
import banner7 from '../../../images/b7Mob.jpg'
import b13 from "../../../images/B13.jpeg"
import b13Mob from "../../../images/B13Mob.jpeg"

import * as S from './stylesBanner';
import Slider from 'react-slick';



function Banner() {

const carousel1 = [
    {
        id: 5,
        image: b8,
    },
    
    {
        id: 4,
        image: b7,
    },
    
    
    {
        id: 2,
        image: banner2,
    },
    
    {
        id: 3,
        image: b6,
    },
    {
        id: 1,
        image: b13,
    },
]

const carousel2 = [
    {
        id: 1,
        image: b13Mob,
    },
    
    {
        id: 2,
        image: banner4,
    },

    {
        id: 3,
        image: banner8,
    },

    {
        id: 4,
        image: banner7,
    },
]


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 8000,
        pauseOnHover: false,
    };

    return(
        <S.Banner>
            <S.ImageBanner>
                <Slider {...settings}>
                    {carousel1.map((image) => (
                        <S.Imagem 
                            key={image.id}
                            src={image.image} 
                            alt="Imagem do banner"
                        /> 
                    ))}
                </Slider>
            </S.ImageBanner>

            <S.ImageBanner2>
                <Slider {...settings}>
                    {carousel2.map((image) => (
                        <S.Imagem 
                            src={image.image} 
                            alt="Imagem do banner"
                            key={image.id}
                        /> 
                    ))}
                </Slider>
            </S.ImageBanner2>
                
            <S.Text>
                <h1>Agendamento de Serviços Públicos</h1>
                <p>Agende online, imprima o recibo e evite filas enormes. Fácil, rápido e conveniente! </p>
                <S.ButtonContainer>
                    <Link to="agendar">
                        <Botao name="Agendar Agora"/>
                    </Link>
                </S.ButtonContainer>
            </S.Text>
            <S.toTop href='#'>
                <AiOutlineArrowUp/>
            </S.toTop>
        </S.Banner>
    )
}

export {Banner}