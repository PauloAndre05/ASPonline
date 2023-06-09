import { useState } from 'react'
import * as S from './stylesCancelarAgenda'
import { NavBar } from '../../layout/NavBar/NavBar'

export const CancelarAgenda = () => {
    const [data, setData] = useState()
    function ID(e) {
        setData(e.target.value)
    }
    return(
        <>
            <NavBar />
            <S.main>
                <h2>Consultar Agendamento</h2>
                <S.containerForm>
                    
                    <form >
                        <select
                            name="tipoConsulta"
                            id="tipoConsulta"
                            required
                            value={data} onChange={ID}>
                            <option value="" disabled selected>Consultar Por</option>
                            <option value="Bilhete">Nº do Bilhete</option>
                            <option value="Comprovativo">Nº do comprovativo de agendamento</option>
                        </select>
                        {
                        data === "Bilhete"?(
                            <input type="text" placeholder="Número do Bilhete"/>
                        ):
                        (
                            <input type="text" placeholder="Número do comprovativo"/>
                        )
                        }

                        <button>Cancelar</button>
                    </form>

                </S.containerForm>

            </S.main>
        </>
    )
}