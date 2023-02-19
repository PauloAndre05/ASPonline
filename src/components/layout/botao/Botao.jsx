import styles from './Botao.module.css'

function Botao({nome}) {
    return(
        <button className={styles.botao}> {nome} </button>
    )
}

export { Botao }