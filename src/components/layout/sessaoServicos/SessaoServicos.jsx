import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as S from './stylesServicos';


import b5 from '../../../images/B12.jpeg'
import b1 from '../../../images/B13.jpeg'
import b10 from "../../../images/b10.jpg"

function SessaoServicos() {
 
    return(
      <S.containerContainer>
        <h1>Nossos Serviços</h1>
        <S.content>
            <S.area1>
              <S.contImage>
                <S.img src={b5} alt="image servico" />
              </S.contImage>
              <S.text1>
              <h1>Agendamento</h1>
                <p> Agende serviços prestado pelas administrações públicas como o Bilhete, Contribuinte, Atestado de Residência e outros serviços disponíveis para si</p>
                <a href="/agendar">Fazer agendamento</a>
              </S.text1>
            </S.area1> 

            <S.area3>
              <S.text3>
                <h1>Consultar agendamento</h1>
                  <p>Faça uma busca na plataforma para ver o estado do seu agendamento e poder imprimir o comprovativo de agendamento caso já não o tenha consigo</p>
                  <a href="/consultarAgenda">Consultar agendamento</a>
              </S.text3>

              <S.containerImage3>
                <S.img src={b1} alt = "image servico" />
              </S.containerImage3>
            </S.area3> 

            <S.area4>
              <S.contImage4>
                <S.img src={b10} alt="image servico" />
              </S.contImage4>
              <S.text4>
              <h1>Cancelar agendamento</h1>
                <p>Cancele o seu agendamento de forma mais rápido e simples</p>
                <a href="/cancelarAgenda">Cancelar agendamento</a>
              </S.text4>
            </S.area4> 
        </S.content>
      </S.containerContainer>
    )
}

export { SessaoServicos }