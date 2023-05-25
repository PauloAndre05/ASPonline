import { Link } from 'react-router-dom'
import * as S from './stylesArtigo'
import { dataTable } from '../direcoes/data'
import Slider from 'react-slick'

function Artigo(  ){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        speed: 900
      };
    return(
        <S.containerContainer>
                <S.container2>
                    <Slider {...settings}>
                        {dataTable.map((instituicao) => (
                            <S.containerArticle  key={instituicao.id}>
                                <S.article>
                                    <S.cardTop>
                                        <img src={instituicao.img} alt={instituicao.nome} />
                                    </S.cardTop>
                                    <S.cardBotton>
                                        <h3>{instituicao.nome}</h3>
                                        <p>{instituicao.localizacao}</p>
                
                                        <div>
                                            <Link to={`/perfil/${instituicao.id}`}>Ver Perfil</Link>
                                        </div>
                                    </S.cardBotton>
                                </S.article>
                            </S.containerArticle>
                         ))}
                        </Slider>
                </S.container2>
        </S.containerContainer>
    )
}

export { Artigo }