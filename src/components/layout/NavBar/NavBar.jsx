import { Link } from 'react-router-dom'
import * as S from './stylesNavBar'
import logo from '../../../images/logo.svg'


function NavBar() {
    return(
        <S.container>
            
            <S.menu>
                <S.hamburguer>
                    <S.line1></S.line1>
                    <S.line2></S.line2>
                    <S.line3></S.line3>
                </S.hamburguer>
                <S.lotipo> <img src={logo} alt="logo" /> </S.lotipo>
                <S.lista >
                    <S.itens> <Link to="/"> Inicio </Link> </S.itens>
                    <S.itens> <Link to="/servicos"> Serviços </Link> </S.itens>
                    <S.itens> <Link to="/agendar"> Agendar </Link> </S.itens>
                    <S.itens> <Link to="/sobre"> Sobre </Link> </S.itens>
                </S.lista>
            </S.menu>

            <S.sideBar>
                <S.lista >
                    <S.itens> <Link to="/"> Inicio </Link> </S.itens>
                    <S.itens> <Link to="/servicos"> Serviços </Link> </S.itens>
                    <S.itens> <Link to="/agendar"> Agendar </Link> </S.itens>
                    <S.itens> <Link to="/sobre"> Sobre </Link> </S.itens>
                </S.lista>
            </S.sideBar>
        </S.container>
        
    )
}

export {NavBar}