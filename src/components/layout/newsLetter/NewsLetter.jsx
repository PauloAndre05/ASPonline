import { Botao } from '../botao/Botao'
import styles from './NewsLetter.module.css'
import { Preenchimento } from '../preenchimento/Preenchimento'


function NewsLetter(){
    return(
        <>
        <Preenchimento/>   
        <main className={styles.container}>
            <div className={styles.texto}>
                <h2>NewsLetter</h2>
                <p>Inscreva-se e receba nossas novidades e ofertas exclusivas. Garantimos privacidade e conteúdos úteis para aproveitar ao máximo nossos serviços.</p>
            </div>
            <div className={styles.formulario}>
                <form action="">
                    <div className={styles.nome}>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" name='nome' id='nome' placeholder='Seu Nome Completo'/>
                    </div>

                    <div className={styles.email}>
                        <label htmlFor="email">Email <span>*</span> </label>
                        <input type="email" name='email' id='email' placeholder='Seu Email'/>
                    </div>

                    <div className={styles.mensagem}>
                        <label htmlFor="mensagem">Mensagem <span>*</span> </label>
                        <textarea name="mensagem" id="mensagem" cols="30" rows="5" placeholder='Sua Mensagem'></textarea>
                    </div>

                    <div className={styles.botao}>
                        <Botao nome="Enviar"/>
                    </div>
                </form>
            </div>
        </main>
        </>    
    )
}

export { NewsLetter }