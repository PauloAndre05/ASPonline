import { Formulario1 } from "../../layout/formulario1/Formulario1"
import { Formulario2 } from "../../layout/formulario2/Formulario2"
import { Formulario3 } from "../../layout/formulario3/Formulario3"
import { Etapa } from "../../layout/etapas/Etapa"

import { UseForm } from "../../../hooks/UseForm"
import { useState, useEffect } from "react"

import * as S from './StyleAgendar2'


const formTemplate = {
    nome: "",
    servico: "",
    posto: "",
    bi: "",
    cedula: "",
    telefone: "",
    email: "",
    confirmarEmanil: "",
    dataHora: "",
}

function Agendar2() {

    useEffect(() => {
        
        fetch("http://localhost:3001",{
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(response => {
            response.json()
            console.log(response);
        })
        .then(data => {
            console.log(data);
        })
    }, []) 
        

        const [data, setData] = useState(formTemplate)
        
        const updateFieldHandler = (key, value) => {
            setData((prev) => {
                return { ...prev, [key]: value}
            })
        }
        const formComponents = [
            <Formulario1 data={data} updateFieldHandler={updateFieldHandler}/>, 
            <Formulario2 data={data} />, 
            <Formulario3 data={data} />
        ]

        const { currentSteps, currentComponets, changeStep, isLastStep, isFirstStep } = UseForm(formComponents)

        return(
            <S.containerContainer>

                <S.text>
                    <h1>Agendar</h1>
                    <p>Entre com os dados no formulário abaixo para agendar</p> <Etapa currentStep={currentSteps}/>
                </S.text>

                <S.container>
                    
                    <form onSubmit={(e) => changeStep(currentSteps + 1, e)}>
                        <div className="inputContainer">
                            {currentComponets}
                        </div>
                
                        <S.containerButton>
                            {!isFirstStep && (
                                <button type="button" onClick={() => changeStep(currentSteps - 1)}>Voltar</button>
                            )}
                            {!isLastStep ? (
                                <button type="submit">Seguinte</button>
                            ) : (
                                <button type="submit">Agendar</button>
                            )}
                        </S.containerButton>
                    </form>

                </S.container>
            </S.containerContainer>
    )
}

export { Agendar2 }