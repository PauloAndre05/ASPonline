import * as S from './stylesInput'

function Input({ type, name, id, placeholder, max, v, on }){
    return(
        <S.container>
            <S.input type={type} name={name} id={id} placeholder ={placeholder} required maxLength={max} value={v} onchange={on} />
        </S.container>
    )
}

export { Input }