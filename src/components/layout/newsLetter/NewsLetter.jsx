import { Botao } from '../botao/Botao'
import { Preenchimento } from '../preenchimento/Preenchimento'
import * as S from './StylesNewSletter'


function NewsLetter(){
    return(
        <>
        <Preenchimento/>   
        <S.container>
            <S.texto>
                <h2>NewsLetter</h2>
                <p>Inscreva-se e receba nossas novidades e ofertas exclusivas. Garantimos privacidade e conteúdos úteis para aproveitar ao máximo nossos serviços.</p>
            </S.texto>
            <S.containerFormulario >
                <S.form action="">
                    <S.containerLabelInput>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" name='nome' id='nome' placeholder='Seu Nome Completo'/>
                    </S.containerLabelInput>

                    <S.containerLabelInput >
                        <label htmlFor="email">Email <span>*</span> </label>
                        <input type="email" name='email' id='email' placeholder='Seu Email'/>
                    </S.containerLabelInput>

                    <S.containerLabelInput>
                        <label htmlFor="mensagem">Mensagem <span>*</span> </label>
                        <textarea name="mensagem" id="mensagem" cols="30" rows="5" placeholder='Sua Mensagem'></textarea>
                    </S.containerLabelInput>

                    <S.buttonNewsLetter>
                        <Botao nome="Enviar"/>
                    </S.buttonNewsLetter>

                </S.form>
            </S.containerFormulario>
        </S.container>
        </>    
    )
}

export { NewsLetter }