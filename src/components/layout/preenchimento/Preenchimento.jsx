import styles from './Preenchimento.module.css'

import { AiOutlineBell, AiOutlineBulb, AiOutlineCheckCircle } from 'react-icons/ai'

function Preenchimento() {
    return(
        <main className={styles.container}>
            <div className={styles.circle}>
                <i><AiOutlineBell/></i>
                <h4>Objectivo</h4>
                <p>Melhorar a Transparência</p>
                </div>
            <div className={styles.circle}>
                <i><AiOutlineBulb/></i>
                <h4>Criatividade</h4>
                <p>Responsabilidade</p>
                </div>           
            <div className={styles.circle}>
                <i><AiOutlineCheckCircle/></i>
                <h4>Inovação</h4>
                <p>Noso Comprimisso</p>
                </div>
        </main>
    )
}
export { Preenchimento }