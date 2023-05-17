import * as S from './styleFormulario2'

function Formulario2({ data }) {
    return(
        <S.containerInputs>
            <input type="date" required placeholder='Selecione Uma Data'/>
            <input type="time" required placeholder='Selecione Uma Hora'/>
        </S.containerInputs>
    )
}


export { Formulario2 }