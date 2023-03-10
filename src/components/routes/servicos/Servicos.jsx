import { Botao } from '../../layout/botao/Botao'
import { SessaoServicos } from '../../layout/sessaoServicos/SessaoServicos'
import styles from './Servicos.module.css'

function Servicos() {
    return(
        <main className={styles.container}>
            <SessaoServicos/>

            <section className={styles.sessaoServicos}>   
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
                <article>
                    <Botao/>
                </article>
            </section>
        </main>
    )
}

export { Servicos }