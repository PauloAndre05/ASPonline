import styles from './QuemSomos.module.css'


function QuemSomos() {
    return(
        <>
        
            <main className={styles.container}>
                <h2>Quem  Somos</h2>
                <section className={styles.texto}>
                    
                    <p>O ASPonline é um sistema que lhe permite agendar serviços públicos sem sair de casa, você não precisa estar registado para utilizar a plataforma. Somos uma equipe dedicada a tornar a vida dos cidadãos mais fácil e prática. Nosso sistema de agendamento de serviços públicos online permite que você agende seus compromissos com rapidez e facilidade, sem a necessidade de esperar em longas filas ou enfrentar burocracias desnecessárias.</p>

                    <p>Nosso objetivo é fornecer uma solução eficiente para a sociedade, permitindo que os cidadãos tenham acesso aos serviços públicos com facilidade e agilidade. Estamos comprometidos em oferecer um atendimento de qualidade e excelência em todas as etapas do processo, desde o agendamento até o atendimento do serviço, garantindo a satisfação de todos os nossos usuários.</p>

                </section>             
            </main>

        </>
        
    )
}
export{ QuemSomos }