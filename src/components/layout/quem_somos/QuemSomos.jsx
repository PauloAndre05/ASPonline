import styles from './QuemSomos.module.css'
import { Preenchimento } from '../preenchimento/Preenchimento'


function QuemSomos() {
    return(
        <>
            <main className={styles.container}>
                <section>
                    <h2>Quem  Somos</h2>
                    <p>O ASPonline é um sistema que lhe permite agendar serviços públicos sem sair de casa, você não precisa estar registado para utilizar a nossa plataforma e se beneficiar dos serviços que lhe oferece, você pode agendar e encontrar administrações municipais mais próximo de si.</p>
                </section>
                
            </main>

            <Preenchimento/>
        </>
        
    )
}
export{ QuemSomos }