import styles from './Formulario.module.css'
import { Botao } from '../botao/Botao'

function Formulario() {
    return(
        <main className={styles.container}>
                <div className={styles.texto}>
                    <h2>AGENDAR</h2>
                    <p>Preencha o formulário</p>
                </div>
                <div className={styles.formulario}>
                    <form>
                        <div className={styles.primeira_linha}>

                            <div className={styles.servico}>
                                <label htmlFor="servico">Serviço <span>*</span></label>
                                <select name="servico" id="servico"></select>
                            </div>
                            <div className={styles.bilhete}>
                                <label htmlFor="bilhete">Bilhete de Indentidade <span>*</span></label>
                                <input type="text" name='bilhete' id='bilhete' placeholder='Número do Bilhete de Identidade'/>
                            </div>

                        </div>

                        <div className={styles.segunda_linha}>

                            <div className={styles.cedula}>
                                <label htmlFor="cedula">Cédula <span>*</span></label>
                                <input type="text" name="cedula" id="cedula" placeholder='Númedo de Cédula'/>
                            </div>
                            <div className={styles.instituicao}>
                                <label htmlFor="instituicao">Instituição <span>*</span></label>
                                <select name="instituicao" id="instituicao"></select>
                            </div>
                            
                        </div>

                        <div className={styles.terceira_linha}>

                            <div className={styles.data_hora}>
                                <label htmlFor="data">Data <span>*</span></label>
                                <div className={styles.inputs}>
                                    <input type="date" name="data" id="data" />
                                </div>
                            </div>
                            <div className={styles.botao}>
                                <p>É obrigátorio preencher todos os campos <span>*</span></p>
                                <Botao nome="Agendar"/>
                            </div>

                        </div>
                    </form>
                </div>
        </main>
    )
}

export { Formulario }