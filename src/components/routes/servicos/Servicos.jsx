import { useEffect, useState } from 'react'
import { NavBar } from '../../layout/NavBar/NavBar'
import { Footer } from '../../layout/footer/Footer'
import * as S from './stylesServicos'
import Slider from 'react-slick'

function Servicos() {
    const urlServico = "http://localhost:5555/servico"
    const [dataService, setDataService] = useState([])
    const [openDesc, setOpenDesc] = useState(false)
    
    const getService = async () => {
      try{
        const response = await fetch(urlServico)
        const responseData = await response.json()
        setDataService(responseData)
      }
      catch (error){
        console.log(error);
      }
    } 
      
    useEffect(() => {
      getService()
    }, [])

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
        <>
            <NavBar />
            <S.container>
                <S.content>
                    <S.text>
                        <h3>Informe-se</h3>
                        <p>Confira os requisitos necessário para tratar o seu documento</p>
                        <p>selecione um documento</p>
                    </S.text>

                    <S.containerSlider>
                            <S.coment>
                                <Slider {...settings}>
                                    {
                                        dataService.map((item) => (
                                            <S.containerCard key = {item.id} onClick={() => setOpenDesc(item)}>
                                                <S.card >
                                                <h1>{item.nome}</h1>  
                                                </S.card>
                                            </S.containerCard>
                                        ))
                                    }
                                </Slider>
                            </S.coment>
                        </S.containerSlider> 
                </S.content>

                <S.desc opendesc = "true">
                  <div>
                    <h3>Requisitos</h3>
                    <div>{openDesc.descricao}</div>
                  </div>                          
                </S.desc> 
            </S.container>
            
            <Footer />

        </>
    )
}

export { Servicos }