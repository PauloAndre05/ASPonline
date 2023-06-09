import * as S from './stylesInstituicoes'

import { Artigo } from '../artigoInstituicao/Artigo'

function Isntituicoes() {
    return(
                <S.containerContent>
                    <h2>Postos de atendimento</h2>
                    <S.content>
                       <Artigo />
                    </S.content>
                </S.containerContent>
    )
}

export { Isntituicoes }