import { dataTable } from './data'
import * as S from './StylesDirecao'

function Direcoes() {
    return(
        <S.containerContainer>
            <S.containerMain>
                <h1>Direcções</h1>   
                <p>Segue as nossas direcções para chegar ao seu destino. Com a ajuda do Google Maps, fornecemos instruções precias e fáceis de seguir para que você possa navegar pela cidade com confiança </p>

                <S.tabela>
                    <S.line>
                        <S.title>Instituição</S.title>
                        <S.title>Localização</S.title>
                        <S.title>Coordenadas</S.title>
                    </S.line>
                    {dataTable.map((item) => (
                    <S.line>
                        <S.colunm>{item.nome}</S.colunm>
                        <S.colunm>{item.localizacao}</S.colunm>
                        <S.colunm> <S.link href={item.link}> {item.cooredenada}</S.link> </S.colunm>
                    </S.line> 
                    ))}
                      

                </S.tabela>

            </S.containerMain>
        </S.containerContainer>
    )
}

export { Direcoes }