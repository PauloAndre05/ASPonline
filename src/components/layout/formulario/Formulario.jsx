import { useState, useEffect } from 'react'

import * as S from './stylesForm'
import { Input } from '../input/Input'
import { Botao } from '../botao/Botao'
import {dataTable} from '../direcoes/data'


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
function Formulario() {
    const [servicoSelecionado, setServicoSelecionado] = useState()
    
    function biCedula(e) {
        setServicoSelecionado(e.target.value)
    }
    
    useEffect(() => {
        
        fetch("https://api.gov.ao/consultarBI/v2/007578210LA044",{
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }, []) 
    
    return(
        <S.containerContainer>
                <S.text>
                    <h1>AGENDAR</h1>
                </S.text>
                <S.containerForm>
                    <p>Por favor, forneça os seus detalhes no formulário abaixo para proceder com o agendamento.</p>
                    <S.form>
                        <S.inputs>
                            <div>
                                <label htmlFor="nome"> Nome Completo</label>
                                <Input type="text" name="nome" id="nome" required max={1} placeholder="Nome Completo"  />
                            </div>
                            <div>
                                <label htmlFor="servico">Serviço <span>*</span></label>
                                <select 
                                    name="servico" 
                                    id="servico" 
                                    required
                                    value={servicoSelecionado} onChange={biCedula}>
                                        
                                    <option value="">Selecione o serviço</option>
                                    {options.map(option => (
                                        <option key={option.value}  value={option.value} >{option.name}</option> 
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="servico">Posto de atendimento</label>
                                <select name="servico" id="servico" >
                                    <option selected>Seleção automática</option>
                                    
                                    {dataTable.map(option => (
                                        <option value={option.id} key={option.id}>{option.nome}</option>
                                        ))}
                                </select>
                            </div>
                                    
                            {servicoSelecionado !== "1" &&(
                                <div>
                                    <label htmlFor="bi">Nº do bilhete de identidade <span>*</span></label>
                                    <Input type="text" name="bi" id="bi" required max={14} placeholder="EX: 009999999LA000"/>
                                </div>
                            )}

                            {servicoSelecionado === "1" &&(
                                <div>
                                <label htmlFor="cedula">Nº de cédula <span>*</span></label>
                                <Input type="text" name="cedula" id="cedula" required/>
                            </div>
                            )}
                            

                        </S.inputs>

                        <S.inputs>
                            
                            <div>
                                <label htmlFor="telefone"> Telefone <span>*</span></label>
                                <Input type="number" name="telefone" id="telefone" required max={1} placeholder="EX: 944 617 903"  />
                            </div>

                            <div>
                                <label htmlFor="email">Email <span>*</span></label>
                                <Input type="email" name="email" id="email" required placeholder="EX: pauloasamuel011@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="emailConfirmar">Confirmar Email <span>*</span></label>
                                <Input type="email" name="emailConfirmar" id="emailConfirmar" required placeholder="EX: pauloasamuel011@gmail.com"/>
                                <p>(<span>*</span>) indica campo obrigatório</p>
                            </div>


                            <S.containerButton>
                                <Botao name="Seguinte"/>
                            </S.containerButton>
                        </S.inputs>
                        
                    </S.form>       
                </S.containerForm>
        </S.containerContainer>
    )
}

export { Formulario }