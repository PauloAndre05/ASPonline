import * as S from './stylesForm'
import { Input } from '../input/Input'
import { Botao } from '../botao/Botao'

function Formulario() {
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

    return(
        <S.containerContainer>
                <S.text>
                    <h1>AGENDAR</h1>
                </S.text>
                <S.containerForm>
                    <h3>Preencha o formulário</h3>
                    <S.form>
                        <S.inputs>
                            <label htmlFor="servico">Serviço</label>
                            <select name="servico" id="servico" required>
                                <option selected></option>
                                {options.map((option, index) => (
                                    <option value={option.value} key={index}>{option.name}</option>
                                ))}
                            </select>
                        </S.inputs>

                        <S.inputs> 
                            <label htmlFor="bi">Nº do bilhete de identidade <span>*</span></label>
                        <Input type="text" name="bi" id="bi" required max={14}/>
                        </S.inputs>
                       

                        <S.inputs>
                            <label htmlFor="cedula">Nº de cédula <span>*</span></label>
                            <Input type="text" name="cedula" id="cedula" required/>
                        </S.inputs>

                        <S.inputs>
                            <label htmlFor="emailAgendar">Email <span>*</span></label>
                            <Input type="email" name="emailAgendar" id="emailAgendar" required/>
                        </S.inputs>

                        <S.inputs>
                            <label htmlFor="contacto">Contacto <span>*</span></label>
                            <Input type="number" name="contacto" id="contacto" required/>
                        </S.inputs>

                        <S.containerButton>
                            <Botao name="Submeter"/>
                        </S.containerButton>
                    </S.form>       
                </S.containerForm>
        </S.containerContainer>
    )
}

export { Formulario }