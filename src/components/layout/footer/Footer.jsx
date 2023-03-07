import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return(

        <footer className={styles.footer}>

            <div className={styles.coluna1}>
                <div>
                    <h2>Páginas</h2>
                </div>
                <p>Inicio</p>
                <p>Serviços</p>
                <p>Agendar</p>
                <p>Sobre</p>
            </div>

            <div className={styles.coluna2}>
                <div>
                    <h2>Serviços</h2>
                </div>

                <p>Atendimento do cliente online</p>

            </div>

            <div className={styles.coluna3}>
                <div>
                    <h2>Redes Sociais</h2>
                </div>
                <div className={styles.icons}>
                    <i> <FaFacebook/> </i>
                    <i> <FaInstagram/> </i>
                    <i> <FaLinkedinIn/> </i>
                </div>
            </div>

        </footer>

    )
}

export { Footer }