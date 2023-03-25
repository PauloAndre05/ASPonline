import { Botao } from '../../layout/botao/Botao'
import { dataCard } from '../../layout/sessaoServicos/Dados'
import { SessaoServicos } from '../../layout/sessaoServicos/SessaoServicos'
import * as S from './stylesServicos'

function Servicos() {
    return(
        <S.container>
            <SessaoServicos/>

                <S.containerCards>   
                    {dataCard.map((item) => (
                    <S.card>
                        <h1>{item.servico}</h1>
                        <p>{item.desc}</p>
                        <ul>
                            <li>{item.a}</li>
                            <li>{item.b}</li>
                            <li></li>
                            <li></li>
                        </ul>
                        
                        <Botao name={`Agendar ${item.servico}`}/>
                    </S.card>
                    ))}               
                </S.containerCards>
        </S.container>
    )
}

export { Servicos }