import { dataTable } from './data'
import * as S from './StylesDirecao'
import imgDir2 from  '../../../images/imgDir2.jpg'
import imgDir3 from '../../../images/imgDir3.jpg'

function Direcoes() {
    return(
        <S.containerContainer>
            <S.containerMain>
                
                <S.textoImagem>
                    <S.texto>
                    <div>
                        <h1>Direcções</h1>
                        <S.imagem src={imgDir3} alt = "Imagem de localização"/>
                    </div>
                        <p>Segue as nossas direcções para chegar ao seu destino. Com a ajuda do Google Maps, fornecemos instruções precias e fáceis de seguir para que você possa navegar pela cidade com confiança <br/> <br />
                        Confira as coordenadas na tabela de Direcções abaixo </p>
                    </S.texto>

                    <S.cardImagem>
                        <S.imagem src={imgDir2} alt = "Imagem de direcções"/>
                    </S.cardImagem> 
                </S.textoImagem>

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