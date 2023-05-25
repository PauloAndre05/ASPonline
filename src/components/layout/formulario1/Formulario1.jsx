import * as S from './stylesFormulario1'
import { useState } from 'react'

function Formulario1 ({data, validation, updateFieldHandler}) {

    const [servicoSelecionado, setServicoSelecionado] = useState()
    const [bi, setBi] = useState("")
    function biCedula(e) {
        setServicoSelecionado(e.target.value)
    }

    const [dataService, setDataService] = useState([])
    const [dataPosto, setDataPosto] = useState([])

    /* ==================== REQUEST SERVICO ========================= */

/*     fetch("http://localhost:3001/servico")
    .then(response => response.json())
    .then(data => {
    })  */
    setDataService(data)

    /* ==================== REQUEST POSTO DE ATENDIMENTO =======================0 */

   /*  fetch("http://localhost:3001/posto")
    .then(response => response.json())
    .then(data => {
})*/
setDataPosto(data)
 

    /* ================================== REQUEST IDENTIFICATION ====================================== */
    

    return(
        <S.containerForm>
            <S.inputs>
            <div>
                <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    required="true " 
                    placeholder="Nome Completo *"  
                    value = {data.nome || ""} 
                    onChange={(e) => updateFieldHandler("nome", e.target.value)} 
                />
            </div>
            <div>
                
                <select 
                    name="servico" 
                    id="servico" 
                    required
                    value={servicoSelecionado} onChange={biCedula}>
                        
                    <option value="">Selecione o serviço  *</option>
                    {dataService.map(option => (
                        <option key={option.id}  value={option.id}>
                            {option.nome}
                        </option> 
                    ))}
                </select>
            </div>

            <div>
                
                <select name="servico" id="servico"  required   >
                    <option selected>Posto de atendimento (seleção automática) </option>
                    {dataPosto.map(option => (
                        <option value={option.id} key={option.id}
                            selected = {data.servico}
                            onChange={(e) => updateFieldHandler("servico",e.target.value)}
                        >
                            {option.nome}
                        </option>
                        ))}
                </select>
            </div>
                    
            {servicoSelecionado !== "1" &&(
                <div>
                    <input 
                        type="text" 
                        name="bi" id="bi" 
                        required max={14} 
                        placeholder="Nº do bilhete *"
                        value = {bi || ""}
                        onChange={(e) => {
                            setBi(e.target.value)
                            updateFieldHandler("bi", bi)
                        }}
                    />
                    <span>{validation}</span>
                </div>
            )}

            {servicoSelecionado === "1" &&(
                <div>
                <input 
                    type="text" 
                    name="cedula" 
                    id="cedula" 
                    required placeholder="Nº de cédula pessoal ou ertidão de nascimento *"
                    value = {data.cedula || ""}
                    onChange={(e) => updateFieldHandler("cedula", e.target.value)}
                />
            </div>
            )}
        </S.inputs>

        <S.inputs>
        
            <div>
                <input 
                    type="text" 
                    name="telefone" 
                    id="telefone" 
                    required max={12} 
                    placeholder="Telefone *"  
                    value = {data.telefone || ""}
                    onChange={(e) => updateFieldHandler("telefone", e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    placeholder="E-mail *"
                    value = {data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}        
                />
            </div>

            <div>
            
                <input 
                    type="email" 
                    name="confirmarEmail" 
                    id="confirmarEmail" 
                    required 
                    placeholder="Confirmare-mail *"
                    value = {data.confirmarEmail || ""}
                    onChange={(e) => updateFieldHandler("confirmarEmail", e.target.value)}
                />
                
            </div>
            <p>(<span>*</span>) indica campo obrigatório</p>
            
        </S.inputs>
        </S.containerForm>  
    )
}

export { Formulario1 }