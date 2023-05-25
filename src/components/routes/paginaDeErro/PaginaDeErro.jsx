import * as S from './stylePaginaDeErro'

function PaginDeErro(){
    return(
        <S.container>
            <div>
                <h1>404</h1>
                <div>
                    <h3>FATAL ERROR!</h3>
                    <p>Page not found</p>
                </div>
            </div>
        </S.container>
    )
}

export { PaginDeErro }