import { Formulario1 } from "../../layout/formulario1/Formulario1"
import { Formulario2 } from "../../layout/formulario2/Formulario2"
import { Formulario3 } from "../../layout/formulario3/Formulario3"
import { Etapa } from "../../layout/etapas/Etapa"

import { UseForm } from "../../../hooks/UseForm"
import { useState } from "react"

import * as S from './StyleAgendar2'
import { Footer } from "../../layout/footer/Footer"


const formTemplate = {
    nome: "",
    servico: "",
    posto: "",
    bi: "",
    cedula: "",
    telefone: "",
    email: "",
    confirmarEmail: "",
    data: "",
    hora: "",
}

function Agendar2() {

        const [data, setData] = useState(formTemplate)
        let validation = ["", "", "", "", "", ""]
        
        function validateBI(value){
            const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            const ref = ["LA", "UE"]

            if(value.length !==  13){
                validation[6] = "BI inválido"
                return false
            }//  0 0 0 0 0 0 0 0 0 LA 0 0 0

            else{
                validation[6] = ""
            }

            for(var i = 0; i < value.length; i++){
                if(!ref.contains(value[9]+''+value[10])){
                    validation[6] = "BI inválido"
                    return false
                }
                    validation[6] = ""

                if(i !== 9 && i !== 10) {
                    if(!num.contains(value[i])){
                        validation[6] = "BI inválido"
                        return false
                    }

                    validation[6] = ""

                }
            }

            validation[6] = ""
            return true
        }

        /* async function reqBI(value) {
            const resp = await fetch("http://localhost:3001/identificacao", value).then((response) => response.json()).catch((e) => {
                    validation[6] = "BI não existe"
                    return false
                }
            )

            if(resp.bi !== value && resp.nome !== data.nome) {
                validation[6] = "BI não compatível"
                return false
            }

            return true
        } */

        const updateFieldHandler = (key, value) => {

            if(key === 'bi'){
                if(validateBI(value)) {
                    setData((prev) => {
                        return { ...prev, [key]: value}
                    })
                    validation[6] = ""
                }
            } else {
                setData((prev) => {
                    return { ...prev, [key]: value}
                })
            }
        }

        const formComponents = [
            <Formulario1 data={data} validation={validation} updateFieldHandler={updateFieldHandler}/>, 
            <Formulario2 data={data} />, 
            <Formulario3 data={data} />
        ]
        const { currentSteps, currentComponets, changeStep, isLastStep, isFirstStep } = UseForm(formComponents)

        return(
            <>
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
                                <button type="submit" >Agendar</button>
                            )}
                        </S.containerButton>
                    </form>

                </S.container>
               
            </S.containerContainer>
          
             <Footer />
            </>
    )
}

export { Agendar2 }