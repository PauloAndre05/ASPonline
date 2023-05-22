import { useState, useEffect } from 'react'

import * as S from '../../routes/agendar/stylesAgendar'
import { Input } from '../../layout/input/Input'
import { Botao } from '../../layout/botao/Botao'
import {dataTable} from '../../layout/direcoes/data'


const options = [
    {
        name: "Bilhete 1ª via",
        value: 1
    },
    {
        name: "Bilhete 2ª via",
        value: 2
    },
    {
        name: "Cartão de contribuinte",
        value: 3
    },

    {
        name: "Recenseamento Militar",
        value: 4
    },

    {
        name: "Cartão de munícipe",
        value: 5
    },
]


function Agendar() {
    const [servicoSelecionado, setServicoSelecionado] = useState() 
    
    function biCedula(e) {
        setServicoSelecionado(e.target.value)
    }
    
  
    return(
        <S.containerContainer>
            <S.text>
                <h1>
                    Agendar
                </h1>
                <p>Preencha o formulário abaixo para proceder com o agendamento</p>
                <S.containerBorder>
                    <S.containerLine1>
                        <p>Passo 1</p>
                        <S.line1></S.line1>
                    </S.containerLine1>
                    
                    <S.containerLine2>
                        <p>Passo 2</p>
                        <S.line2></S.line2>
                    </S.containerLine2>

                    <S.containerLine3>
                        <p> Concluído</p>
                        <S.line3></S.line3>
                    </S.containerLine3>
                </S.containerBorder>
            </S.text>
            <S.containerForm>
                
                <S.form>
                    <S.inputs>
                        <div>
                            {/* <label htmlFor="nome"> Nome Completo</label> */}
                            <Input type="text" name="nome" id="nome" required="true " placeholder="Nome Completo *"  />
                        </div>
                        <div>
                            {/* <label htmlFor="servico">Serviço <span>*</span></label> */}
                            <select 
                                name="servico" 
                                id="servico" 
                                required
                                value={servicoSelecionado} onChange={biCedula}>
                                    
                                <option value="">Selecione o serviço  *</option>
                                {options.map(option => (
                                    <option key={option.value}  value={option.value} >{option.name}</option> 
                                ))}
                            </select>
                        </div>

                        <div>
                            {/* <label htmlFor="servico">Posto de atendimento</label> */}
                            <select name="servico" id="servico" >
                                <option selected>Posto de atendimento (seleção automática) </option>
                                
                                {dataTable.map(option => (
                                    <option value={option.id} key={option.id}>{option.nome}</option>
                                    ))}
                            </select>
                        </div>
                                
                        {servicoSelecionado !== "1" &&(
                            <div>
                                {/* <label htmlFor="bi">Nº do bilhete de identidade <span>*</span></label> */}
                                <Input type="text" name="bi" id="bi" required max={14} placeholder="Nº do bilhete *"/>
                            </div>
                        )}

                        {servicoSelecionado === "1" &&(
                            <div>
                            {/* <label htmlFor="cedula">Nº de cédula <span>*</span></label> */}
                            <Input type="text" name="cedula" id="cedula" required placeholder="Nº de cédula pessoal ou ertidão de nascimento *"/>
                        </div>
                        )}
                        

                    </S.inputs>

                    <S.inputs>
                        
                        <div>
                            {/* <label htmlFor="telefone"> Telefone <span>*</span></label> */}
                            <Input type="text" name="telefone" id="telefone" required max={12} placeholder="Telefone *"  />
                        </div>

                        <div>
                            {/* <label htmlFor="email">Email <span>*</span></label> */}
                            <Input type="email" name="email" id="email" required placeholder="E-mail *"/>
                        </div>

                        <div>
                            {/* <label htmlFor="emailConfirmar">Confirmar Email <span>*</span></label> */}
                            <Input type="email" name="emailConfirmar" id="emailConfirmar" required placeholder="Confirmar e-mail *"/>
                            
                        </div>
                        <p>(<span>*</span>) indica campo obrigatório</p>
                        <S.containerButton>
                            <Botao name="Seguinte" />
                    </S.containerButton>
                    </S.inputs>
                    
                </S.form>       
            </S.containerForm>
        </S.containerContainer>
    )
}

export { Agendar }