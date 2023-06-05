import * as S from './stylesButton'

function Botao({name, type}) {
    return(
        <S.button type={type}> {name} </S.button>
    )
}

export { Botao }