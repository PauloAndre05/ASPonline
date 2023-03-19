import * as S from './stylesSelect'

function Select({ name, id, value, option }) {
    return(
        <S.container>
            <S.select name={name} id={id}>
                <S.option value={value}>{option}</S.option>
            </S.select>
        </S.container>
    )
}

export { Select }