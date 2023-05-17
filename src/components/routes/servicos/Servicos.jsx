import { dataCard } from '../../layout/sessaoServicos/Dados'
import * as S from './stylesServicos'

function Servicos() {
    return(
        <S.container>

                <S.containerCards>   
                    {dataCard.map((item) => (
                    <a href="/agendar2">
                        <S.card>
                                <h1>{item.servico}</h1>
                                <p>{item.desc}</p>
                                <ul>
                                    <li>{item.a}</li>
                                    <li>{item.b}</li>
                                    <li>{item.c}</li>
                                    <li>{item.d}</li>
                                </ul>
                        </S.card>
                    </a>
                    ))}               
                </S.containerCards>
        </S.container>
    )
}

export { Servicos }