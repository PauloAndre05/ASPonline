import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../../images/logo.svg'
import logoAngola from '../../../images/logo-angola.png'

import *  as S from './stylesFooter'

function Footer() {
    return(
        <S.footer >

            <S.container>
                <S.colunas >
                    <div>
                        <h2>Páginas</h2>
                    </div>
                        <a href="/">
                            <p>Inicio</p>
                        </a>
                        <a href="/servicos">
                            <p>Informe-se</p>
                        </a >
                        <a  href="/agendar">
                            <p>Agendar</p>
                        </a>
                        <a  href="/sobre">
                            <p>Sobre</p>
                        </a>
                        
                </S.colunas>
                <S.colunas >
                    <div>
                        <h2>Serviços</h2>
                    </div>
                    <p>Agendamento</p>
                    <p>Consultar</p>
                    <p>Eliminar</p>
                    
                </S.colunas>

                <S.colunas >
                    <div>
                        <h2>Contacto</h2>
                    </div>
                    <p>onlineaspo@gmail.com</p>
                    <p>Luanda-Angola</p>
                    <p>944617903</p>
                    <p>Aspo</p>
                    
                </S.colunas>
                <S.coluna >
                    
                    <S.containerIcons>
                        <div>
                        <h2>Redes Sociais</h2>
                        </div>
                        <S.icon>
                            <a href="/"><i> <FaFacebook/> </i></a>
                            <a href="/"><i> <FaInstagram/> </i></a>
                            <a href="/"><i> <FaLinkedinIn/> </i></a>
                        </S.icon>

                        <S.containerLogo2>
                            <S.angola href="/">
                                <img src={logoAngola} alt="logo" />
                            </S.angola>
                            <S.logotipo href='/'> <img src={logo} alt="logo" /> </S.logotipo>
                        </S.containerLogo2>
                    </S.containerIcons>
                </S.coluna>
            </S.container>

            <S.copy>Copyrigth &copy; Todos os direitos reservados 2023</S.copy>

        </S.footer>
    )
}

export { Footer }