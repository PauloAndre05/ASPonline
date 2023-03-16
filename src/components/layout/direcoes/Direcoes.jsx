import * as S from './StylesDirecao'

function Direcoes() {
    return(
        <S.containerContainer>
            <S.containerMain>
                <h1>Direcções</h1>   
                <p>Segue as nossas direcções para chegar ao seu destino. Com a ajuda do Google Maps, fornecemos instruções precias e fáceis de seguir para que você possa navegar pela cidade com confiança </p>

                <S.tabela>
                    <S.column>
                        <S.title>Instituição</S.title>
                    </S.column>

                    <S.column>
                        <S.title>Localização</S.title>
                    </S.column>
                    
                    <S.column>
                        <S.title>Geográfica</S.title>
                    </S.column>
                </S.tabela>

            </S.containerMain>
        </S.containerContainer>
    )
}

export { Direcoes }