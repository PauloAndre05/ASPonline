import * as S from './stylesForm'
import { Input } from '../input/Input'
import { Select } from '../select/Selesct'

function Formulario() {
    return(
        <S.containerContainer>
                <S.text>
                    <h2>AGENDAR</h2>
                    <p>Preencha o formulário</p>
                </S.text>
                <S.containerForm>
                    <S.form>
                        <label htmlFor="servico">Serviço</label>
                        <Select name="servico" id="servico">
                            <option value=""></option>
                        </Select>
                        <label htmlFor="bi"></label>
                        <Input type="text" name="bi" id="bi"/>
                    </S.form>   
                </S.containerForm>
        </S.containerContainer>
    )
}

export { Formulario }