import * as S from './stylesInput'

function Input({ type, name, id }){
    return(
        <S.container>
            <S.input type={type} name={name} id={id} />
        </S.container>
    )
}

export { Input }