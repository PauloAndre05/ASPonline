import * as S from './styledQuemSomos'
import style from './style.module.css'

function QuemSomos() {
    return(
        
            <S.container>
                <div className={style.container2}>
                    <S.texto>
                        <h2>Quem  Somos</h2>
                        <p>O ASPO é um sistema que lhe permite agendar serviços públicos sem sair de casa, você não precisa estar registado para utilizar a plataforma. Somos uma equipe dedicada a tornar a vida dos cidadãos mais fácil e prática. Nosso sistema de agendamento de serviços públicos online permite que você agende seus compromissos com rapidez e facilidade, sem a necessidade de esperar em longas filas ou enfrentar burocracias desnecessárias.</p>       
                    </S.texto>   
                </div>
            </S.container>
        
    )
}
export{ QuemSomos }