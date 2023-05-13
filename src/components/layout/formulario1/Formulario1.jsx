import * as S from './stylesFormulario1'
import { useState } from 'react'
import { dataCard } from '../../layout/sessaoServicos/Dados'
import { dataTable } from '../direcoes/data'

function Formulario1 ({data, updateFieldHandler}) {

    const [servicoSelecionado, setServicoSelecionado] = useState()
    function biCedula(e) {
        setServicoSelecionado(e.target.value)
    }

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
                        
                    <option>Selecione o serviço  *</option>
                    {dataCard.map(option => (
                        <option key={option.id}  value={option.id}>
                            {option.servico}
                        </option> 
                    ))}
                </select>
            </div>

            <div>
                
                <select name="servico" id="servico"  required   >
                    <option selected>Posto de atendimento (seleção automática) </option>
                    {dataTable.map(option => (
                        <option value={option.id} key={option.id}>{option.nome}</option>
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
                        value = {data.bi || ""}
                        onChange={(e) => updateFieldHandler("bi", e.target.value)}
                    />
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
                    required placeholder="E-mail *"
                    value = {data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}        
                />
            </div>

            <div>
            
                <input 
                    type="email" 
                    name="emailConfirmar" 
                    id="emailConfirmar" 
                    required placeholder="Confirmar e-mail *"
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