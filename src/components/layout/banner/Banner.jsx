import { Link } from 'react-router-dom'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Botao } from '../botao/Botao'

import banner from '../../../images/recenseamento.png'
import banner2 from '../../../images/banner2.png'
import banner4 from '../../../images/recenseamentoMob.png'
import banner5 from '../../../images/bannerMob.png'
import banner7 from '../../../images/banner3_.jpg'
import banner8 from '../../../images/banner3Mob.jpg'

import * as S from './stylesBanner';
import Slider from 'react-slick';



function Banner() {

    const carousel1 = [
        {
            id: 1,
            image: banner2
        },

        {
            id: 2,
            image: banner
        },
        
        {
            id: 4,
            image: banner7
        },

]

    const carousel2 = [
    {
        id: 4,
        image: banner4
    },

    {
        id: 5,
        image: banner5
    },

    

    {
        id: 6,
        image: banner8
    },
]


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    };

    return(
        <S.Banner>
            <S.ImageBanner>
                <Slider {...settings}>
                    {carousel1.map((image) => (
                        <S.Imagem 
                            src={image.image} 
                            alt="Imagem do banner"
                            key={image.id}
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
                <h1>Agendamento de Serviços Públicos Online</h1>
                <p>Agende online, imprima o recibo evite filas enormes. Fácil, rápido e conveniente!</p>
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