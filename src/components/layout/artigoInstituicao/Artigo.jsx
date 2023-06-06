import { Link } from 'react-router-dom'
import * as S from './stylesArtigo'
import { dataTable } from '../direcoes/data'
import {  } from '../../layout/direcoes/data'
import Slider from 'react-slick'

function Artigo(  ){

    const time = new Date()
    const hours = time.getHours()

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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
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
                                        <S.containerEstado>
                                          <p>Estado: </p>
                                            {hours >= 8 && hours <= 15 ? (
                                              <S.aberto>Aberto</S.aberto>
                                            ): (
                                              <S.fechado>Fechado</S.fechado>
                                            )}
                                        </S.containerEstado>
                                        <div>
                                            <Link to={instituicao.link} target='_blanck'>Ver no mapa</Link>
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