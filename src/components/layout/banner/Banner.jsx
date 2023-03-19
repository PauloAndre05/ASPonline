import { AiOutlineArrowUp } from 'react-icons/ai'
import { Botao } from '../botao/Botao'
import banner from '../../../images/recenseamento.png'
import * as S from './stylesBanner';

function Banner() {
    return(
        <S.Banner>
            <S.ImageBanner>
                <S.Imagem 
                    src={banner} 
                    alt="Imagem do banner" 
                /> 
            </S.ImageBanner>
                
            <S.Text>
                <h1>AGENDAMENTO DE SERVIÇOS PÚBLICOS ONLINE</h1>
                <p>Agende online, imprima o recibo evite filas enormes. Fácil, rápido e conveniente!</p>
                <S.ButtonContainer>
                    <Botao nome="Agendar Agora"/>
                </S.ButtonContainer>
            </S.Text>
            <S.toTop href=''>
                <AiOutlineArrowUp/>
            </S.toTop>
        </S.Banner>
    )
}

export {Banner}