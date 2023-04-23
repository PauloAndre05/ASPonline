import { Link } from 'react-router-dom'
import * as S from './stylesNavBar'
import logo from '../../../images/logo.svg'

function burger() {
    
}

function NavBar() {
    return(
        <S.container>
            
            <S.menu>
                <S.lotipo> <img src={logo} alt="logo" /> </S.lotipo>
                <S.lista >
                    <S.itens> <Link to="/"> Inicio </Link> </S.itens>
                    <S.itens> <Link to="/servicos"> Serviços </Link> </S.itens>
                    <S.itens> <Link to="/agendar"> Agendar </Link> </S.itens>
                    <S.itens> <Link to="/sobre"> Sobre </Link> </S.itens>
                </S.lista>
                <S.hamburguer onClick={burger}>
                    <S.line1></S.line1>
                    <S.line2></S.line2>
                    <S.line3></S.line3>
                </S.hamburguer>
            </S.menu>

            <S.sideBar className='paulo'>
                <S.lista2 >
                    <S.itens2> <Link to="/"> Inicio </Link> </S.itens2>
                    <S.itens2> <Link to="/servicos"> Serviços </Link> </S.itens2>
                    <S.itens2> <Link to="/agendar"> Agendar </Link> </S.itens2>
                    <S.itens2> <Link to="/sobre"> Sobre </Link> </S.itens2>
                </S.lista2>
            </S.sideBar>
        </S.container>
        
    )
}

export {NavBar}