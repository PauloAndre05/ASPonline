import * as S from './stylesInput'

function Input({ type, name, id, placeholder }){
    return(
        <S.container>
            <S.input type={type} name={name} id={id} placeholder ={placeholder} />
        </S.container>
    )
}

export { Input }