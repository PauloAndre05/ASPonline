import { useFormik } from 'formik'
import * as S from './stylesFormulario1'
import { useState, useEffect } from 'react'
import * as yup from "yup"


function Formulario1 ({data, updateFieldHandler, formik}) {

    const [dataService, setDataService] = useState([])
    const [dataPosto, setDataPosto] = useState([])
    
    /* ==================== REQUEST SERVICO ========================= */

    async function getService(){
        try{
            const res = await fetch("http://localhost:3001/servico")
            const data = await res.json()
            setDataService(data)
        } catch(error){
            console.log("Erro na requisiçao");
        }
    }

    useEffect(() => {
        getService()
        getPosto()
    }, [])

    /* ==================== REQUEST POSTO DE ATENDIMENTO =======================0 */
    async function getPosto(){
        try{
           const res = await fetch("http://localhost:3001/posto")
           const data = await res.json()  
            setDataPosto(data)
        } catch(error){
            console.log("Erro na requisição");
        }
    }
 
    /* ================================== REQUEST IDENTIFICATION ====================================== */
    
   
    
    



    

    return(
        <S.containerForm>
            <S.inputs>

            <div>
                <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    placeholder="Nome Completo *"  
                    value = {formik.values.nome} 
                    onChange={(e) => {updateFieldHandler("nome", e.target.value)     
                        formik.handleChange(e)
                    }} 
                    onBlur={formik.handleBlur}
                />
                {}
            </div>

            <div>
                <input 
                    type="text" 
                    name="telefone" 
                    id="telefone" 
                    placeholder="Telefone *"  
                    value = {formik.values.telefone}
                    onChange={(e) => {updateFieldHandler("telefone", e.target.value)
                        formik.handleChange(e)
                    }}
                    onBlur={formik.handleBlur}
                />
            </div>

            <div>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="E-mail *"
                    value = {formik.values.email}
                    onChange={(e) => {updateFieldHandler("email", e.target.value)
                        formik.handleChange(e)
                    }}        
                    onBlur={formik.handleBlur}
                />
            </div>

        </S.inputs>

        <S.inputs>

        <div>
                <select
                    name="servico"
                    id="servico"
                    value={formik.values.servico }
                    onChange={(e) => {updateFieldHandler("servico", e.target.value)
                        formik.handleChange(e)
                    }}
                    onBlur={formik.handleBlur}
                >
                    <option value="" disabled>Selecione o serviço *</option>
                    {dataService.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nome}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <select
                    name="posto"
                    id="posto"
                    value={formik.values.posto}
                    onChange={(e) => updateFieldHandler("posto", e.target.value)}
                >
                    <option value="">Posto de atendimento (seleção automática)</option>
                    {dataPosto.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                    ))}
                </select>
            </div>
                    
            {data.servico !== "de15629f-b447-480d-a778-60d2b984f8a3" &&(
                <div>
                    <input 
                        type="text" 
                        name="bi" id="bi" 
                        placeholder="Nº do bilhete *"
                        value = {formik.values.bi}
                        onChange={(e) => { 
                             updateFieldHandler("bi", e.target.value)
                        }}
                    />
                   
                </div>
            )}

            {data.servico === "de15629f-b447-480d-a778-60d2b984f8a3" &&(
                <div>
                <input 
                    type="text" 
                    name="cedula" 
                    id="cedula" 
                    required placeholder="Nº de cédula pessoal ou certidão de nascimento *"
                    value = {formik.values.cedula}
                    onChange={(e) => updateFieldHandler("cedula", e.target.value)}
                />
            </div>
            )}
           
            <p>(<span>*</span>) indica campo obrigatório</p>
            
        </S.inputs>
        </S.containerForm>  
    )
}

export { Formulario1 }