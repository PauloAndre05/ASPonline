import * as S from './styledQuemSomos'
import img from '../../../images/b9.jpg'

function QuemSomos() {
    return(
        
            <S.containerContainer>

                <S.container>
                        <S.imagem>
                            <img src={img} alt="Iamage quem somos" />
                        </S.imagem>
                        <S.texto>
                            <h2>O que é o ASPO?</h2>
                            <p>O ASPO é um sistema que lhe permite agendar serviços públicos sem sair de casa, você não precisa estar registado para utilizar a plataforma, pois permite que você agende seus compromissos com rapidez e facilidade, sem a necessidade de esperar em longas filas ou enfrentar burocracias desnecessárias.</p>
                        </S.texto>
                </S.container>
            </S.containerContainer>
        
    )
}
export{ QuemSomos }