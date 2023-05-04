import * as S from './styledQuemSomos'
import background  from '../../../images/bgAgendar4.png'
import logo from '../../../images/logo.svg'

function QuemSomos() {
    return(
        
            <S.container>
                <S.containerImg>
                    <S.background src = {background} alt = "Imagem de fundo"/>
                </S.containerImg>
                <S.texto>
                    <h2>Quem  Somos</h2>
                    <p>O ASPonline é um sistema que lhe permite agendar serviços públicos sem sair de casa, você não precisa estar registado para utilizar a plataforma. Somos uma equipe dedicada a tornar a vida dos cidadãos mais fácil e prática. Nosso sistema de agendamento de serviços públicos online permite que você agende seus compromissos com rapidez e facilidade, sem a necessidade de esperar em longas filas ou enfrentar burocracias desnecessárias.</p>       
                </S.texto>   
                    <div><img src={logo} alt="" />  </div>
        
            </S.container>
        
    )
}
export{ QuemSomos }