import styles from './Footer.module.css'

function Footer() {
    return(

        <footer className={styles.footer}>

            <div className={styles.coluna1}>
                <h2>Páginas</h2>
                <p>Inicio</p>
                <p>Serviços</p>
                <p>Agendar</p>
                <p>Sobre</p>
            </div>

            <div className={styles.coluna2}>
            <h2>Serviços</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>

            <div className={styles.coluna3}>
            <h2>Redes Sociais</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>

        </footer>

    )
}

export { Footer }