import * as S from '../../routes/inicio/styles.inicio'

function Artigo( {img, alt, nome, local, mapa, target} ){
    return(
        <article>
            <S.cardTop><img src={img} alt={alt} /></S.cardTop>
            <S.cardBotton>
                <h3>{nome}</h3>
                <p>{local}</p>
                <a href={mapa} target={target}>Ver no mapa</a>
            </S.cardBotton>
        </article>
    )
}

export { Artigo }