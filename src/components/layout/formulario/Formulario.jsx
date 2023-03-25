import * as S from './stylesForm'
import { Input } from '../input/Input'

function Formulario() {
    const options = [
        {
            name: "Paulo",
            value: 1
        },
        {
            name: "Luis",
            value: 2
        },
        {
            name: "Dário",
            value: 3
        },
    ]

    return(
        <S.containerContainer>
                <S.text>
                    <h2>AGENDAR</h2>
                    <p>Preencha o formulário</p>
                </S.text>
                <S.containerForm>
                    <S.form>
                        <label htmlFor="servico">Serviço</label>
                        <select name="servico" id="servico">
                            <option selected>Selecione</option>
                            {options.map((option, index) => (
                                <option value={option.value} key={index}>{option.name}</option>
                            ))}
                        </select>
                        <label htmlFor="bi"></label>
                        <Input type="text" name="bi" id="bi"/>

                        <label htmlFor=""></label>
                        <Input type=""/>
                    </S.form>   
                </S.containerForm>
        </S.containerContainer>
    )
}

export { Formulario }