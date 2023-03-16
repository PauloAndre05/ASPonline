import * as styles from './stylesButton'

function Botao({nome}) {
    return(
        <styles.button> {nome} </styles.button>
    )
}

export { Botao }