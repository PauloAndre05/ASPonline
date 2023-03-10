import styles from './Direcoes.module.css'

function Direcoes() {
    return(
        <main className={styles.container}>
            <section className={styles.texto}>
                <h1>Direções</h1>   
                <p>Nossa sesssão de direções torna mais fácil para você chegar ao seu destino e aproveitar nossos serviços. Com a ajuda do Google Maps, fornecemos instruções precias e fáceis de seguir para que você possa navegar pela cidade com confiança </p>
            </section>
        </main>
    )
}

export { Direcoes }