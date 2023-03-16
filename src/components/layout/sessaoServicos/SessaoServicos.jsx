import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SessaoServicos() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1500,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
      <main>

      </main>
    )
}

export { SessaoServicos }