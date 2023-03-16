import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import *  as S from './stylesFooter'

function Footer() {
    return(

        <S.footer >

            <S.container>
                <S.colunas >
                    <div>
                        <h2>Páginas</h2>
                    </div>
                    <p>Inicio</p>
                    <p>Serviços</p>
                    <p>Agendar</p>
                    <p>Sobre</p>
                </S.colunas>
                <S.colunas >
                    <div>
                        <h2>Serviços</h2>
                    </div>
                    <p>Atendimento do cliente online</p>
                </S.colunas>
                <S.colunas >
                    <div>
                        <h2>Redes Sociais</h2>
                    </div>
                    <S.containerIcons>
                        <i> <FaFacebook/> </i>
                        <i> <FaInstagram/> </i>
                        <i> <FaLinkedinIn/> </i>
                    </S.containerIcons>
                </S.colunas>
            </S.container>

            <S.copy>Todos os direitos reservados</S.copy>

        </S.footer>

    )
}

export { Footer }