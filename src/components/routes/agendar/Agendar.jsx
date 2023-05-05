import { Formulario } from "../../layout/formulario/Formulario"
import { Direcoes } from '../../layout/direcoes/Direcoes'

import bannerAgendar from '../../../images/bgAgendar2.jpg'

import * as S from './styleAgendar'

function Agendar() {
    return(
        <S.main>
            <S.header>
                <S.banner>
                    <div><img src={bannerAgendar} alt="imagem banner" /></div>
                </S.banner>
                <S.text>
                    <h1>Agendar</h1>
                    <p>Preencha o formulário abaixo para proceder ao agendamento</p>
                </S.text>
            </S.header>
            <div>
                <Formulario/>
                <Direcoes/>
            </div>
        </S.main>
    )
}

export { Agendar }