import * as S from './stylesInstituicoes'

import { Artigo } from '../artigoInstituicao/Artigo'

function Isntituicoes() {
    return(
                <S.containerContent>
                    <h1>Instituições</h1>
                    <S.content>
                       <Artigo />
                    </S.content>
                </S.containerContent>
    )
}

export { Isntituicoes }