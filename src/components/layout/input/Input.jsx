import * as S from './stylesInput'

function Input({ type, name, id, placeholder, max }){
    return(
        <S.container>
            <S.input type={type} name={name} id={id} placeholder ={placeholder} required maxLength={max}/>
        </S.container>
    )
}

export { Input }