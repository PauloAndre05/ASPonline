import * as S from './stylesPreenchimento'

import { AiOutlineBell, AiOutlineBulb, AiOutlineCheckCircle } from 'react-icons/ai'

function Preenchimento() {
    return(
        <S.container>
            <S.itens >
                <S.icone><AiOutlineBell/></S.icone>
                <h4>Objectivo</h4>
                <p>Melhorar a Transparência</p>
                </S.itens>
            <S.itens >
                <S.icone><AiOutlineBulb/></S.icone>
                <h4>Criatividade</h4>
                <p>Responsabilidade</p>
                </S.itens>           
            <S.itens >
                <S.icone><AiOutlineCheckCircle/></S.icone>
                <h4>Inovação</h4>
                <p>Noso Comprimisso</p>
                </S.itens>
        </S.container>
    )
}
export { Preenchimento }