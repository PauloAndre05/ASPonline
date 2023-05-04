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
                <div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum delectus eius nostrum! Hic animi, nobis quo recusandae itaque quibusdam quis? Rerum optio cumque eligendi ullam excepturi molestias quasi quo.</p> 
                </div>
                <Formulario/>
                <Direcoes/>
            </div>
        </S.main>
    )
}

export { Agendar }