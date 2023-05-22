import * as S from './styleFormulario2'

function Formulario2({ data,  updateFieldHandler}) {
    return(
        <S.containerInputs>
            <input 
            type="date" 
            required placeholder='Selecione Uma Data'
            /* value = {data.data || ""} 
            onChange={(e) => updateFieldHandler("date", e.target.value)} */
            />

            <input 
            type="time" 
            required placeholder='Selecione Uma Hora'
            /* value = {data.hora || ""} 
            onChange={(e) => updateFieldHandler("time", e.target.value)}  */
            />
        </S.containerInputs>
    )
}


export { Formulario2 }