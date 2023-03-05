import styles from './SessaoServicos.module.css'
import Slider from "react-slick";
import { HiIdentification } from 'react-icons/hi2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataCard } from './Dados';
import { Botao } from '../botao/Botao';


function SessaoServicos() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
        <section className= {styles.sessaoServicos}>                
            <div className={styles.container_itens}>
              <h2>Serviços</h2>
              <Slider {...settings}>
                {dataCard.map((item) => (
                  <div className={styles.lista}>
                    <div className={styles.item}>
                      <i> <HiIdentification/> </i>
                      <h3> {item.servico} </h3>
                      <p> {item.desc}</p>
                      <Botao nome="Agendar"/>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
        </section>
    )
}

export { SessaoServicos }