import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import styles from './Sobre.module.css'

function Sobre() {
    return(
        <div className={styles.container}>
            <QuemSomos className={styles.QuemSomos}/>
        </div>
    )
}

export { Sobre }