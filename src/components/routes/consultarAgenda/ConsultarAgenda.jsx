import * as S from '../agendar/stylesAgendar'
import { Input } from '../../layout/input/Input'
import { useState } from 'react'
import { Botao } from '../../layout/botao/Botao'

const options = [
    {
        name: "Número de Comprovativo",
        value: 1
    },
    {
        name: "Número do Bilhe de Indentidade",
        value: 2
    },
    {
        name: "Número de Cédula Pessoal ou Assento",
        value: 3
    },

]

function ConsultarAgenda() {

    const [idSelecionado, setIdSelecionado] = useState()
    
    function ID(e) {
        setIdSelecionado(e.target.value)
    }


    return(
        <S.containerContainer>
        <S.text>
            <h1>
                Consulta de Agenda
            </h1>
            <p>Entre com o número do Comprovativo ou Identificação </p>
            <S.containerBorder>
                <S.containerLine1>
                    <p>Passo 1</p>
                    <S.line1></S.line1>
                </S.containerLine1>
                
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
                        
                        <select 
                            name="tipoConsulta" 
                            id="tipoConsulta" 
                            required
                            value={idSelecionado} onChange={ID}>
                                
                            <option value="">Consultar Por</option>
                            {options.map(option => (
                                <option key={option.value}  value={option.value} >{option.name}</option> 
                            ))}
                        </select>
                    </div>

                    <div>
                       
                    </div>
                            
                    {idSelecionado === "1" &&(
                        <div>
                            {/* <label htmlFor="bi">Nº do bilhete de identidade <span>*</span></label> */}
                            <Input type="text" name="numeroDeComprovativo" id="numeroDeComprovativo" required max={6} placeholder="Nº do Comprovativo de Agendamento *"/>
                        </div>
                    )}

                    {idSelecionado === "2" && (
                        <Input type="text" name="bi" id="bi" required placeholder="Nº de BI  *"/>
                    )}

                    {idSelecionado === "3" &&(
                        <div>
                        {/* <label htmlFor="cedula">Nº de cédula <span>*</span></label> */}
                        <Input type="text" name="cedula" id="cedula" required placeholder="Nº de cédula pessoal ou Asento *"/>
                    </div>
                    )}
                    
                    <S.containerButton>
                        <Botao name="Consultar" />
                    </S.containerButton>

                </S.inputs>
                
            </S.form>       
        </S.containerForm>
    </S.containerContainer>
    )
}

export { ConsultarAgenda }