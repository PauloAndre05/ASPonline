
import { Botao } from '../botao/Botao'
import styles from './Banner.module.css'
function Banner() {
    return(
        <section className={styles.banner}>
            <div className={styles.imagem_banner}> 
                <h1>AGENDAMENTO DE SERVIÇOS PÚBLICOS ONLINE</h1>
                <p>Faça aqui o seu agendamento online, imprima o seu recibo e evite filas enormes</p>
                <Botao nome="Agendar"/>
            </div>

            
        </section>
    )
}

export {Banner}