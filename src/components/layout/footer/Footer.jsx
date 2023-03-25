import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Botao } from '../botao/Botao'
import { Input } from '../input/Input'

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
                    <S.input>
                        <form action="">
                            <Input type="email" name="email" id="email" placeholder = {"Seu email..."} required/>
                            <Botao name="Enviar"/>
                        </form>
                    </S.input>
                </S.colunas>
                <S.colunas >
                    <div>
                        <h2>Redes Sociais</h2>
                    </div>
                    <S.containerIcons>
                        <S.icon>
                            <i> <FaFacebook/> </i>
                            <i> <FaInstagram/> </i>
                            <i> <FaLinkedinIn/> </i>
                        </S.icon>
                
                    </S.containerIcons>
                </S.colunas>
            </S.container>

            <S.copy>Todos os direitos reservados</S.copy>

        </S.footer>
    )
}

export { Footer }