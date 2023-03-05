
import { Botao } from '../botao/Botao'
import styles from './Banner.module.css'
function Banner() {
    return(
        <section className={styles.banner}>
            <div className={styles.imagem_banner}> 
                <h1>AGENDAMENTO DE SERVIÇOS PÚBLICOS ONLINE</h1>
                <p>Agende online, imprima o recibo evite filas enormes. Fácil, rápido e conveniente!</p>
                <Botao nome="Agendar Agora"/>
            </div>

            
        </section>
    )
}

export {Banner}