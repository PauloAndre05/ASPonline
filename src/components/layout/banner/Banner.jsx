import { AiOutlineArrowUp } from 'react-icons/ai'
import { Botao } from '../botao/Botao'
import banner from '../../../images/recenseamento.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/contribuinte.png'
import * as S from './stylesBanner';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'


function Banner() {

    const carousel = [
        {
            id: 1,
            image: banner2
        },

        {
            id: 2,
            image: banner
        },

        {
            id: 3,
            image: banner3
        }
]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    };

    return(
        <S.Banner>
            <S.ImageBanner>
                <Slider {...settings}>
                    {carousel.map((image) => (
                        <S.Imagem 
                            src={image.image} 
                            alt="Imagem do banner"
                            key={image}
                        /> 
                    ))}
                </Slider>

                
                
            </S.ImageBanner>
                
            <S.Text>
                <h1>AGENDAMENTO DE SERVIÇOS PÚBLICOS ONLINE</h1>
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