import { Link } from 'react-router-dom'
import * as S from './stylesNavBar'
import logo from '../../../images/logo.svg'
import  logoAngola  from '../../../images/logo-angola.png'
import { TwitterLogo, LinkedinLogo,  CaretDown} from 'phosphor-react'

import { useState } from 'react'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isMenuDropDown, setIsMenuDropDown] = useState(false)

    return(
        <S.container>
            <S.containerLogo>
                <a href="/">
                    <img src={logoAngola} alt="" />
                </a>
                
                <S.icons>
                    <a href="/"><i> <TwitterLogo /> </i></a>
                    <a href="/"><i> <LinkedinLogo /> </i></a>
                </S.icons>            
            </S.containerLogo>
            <S.menu>
                
                <S.lotipo href='/'> <img src={logo} alt="logo" /> </S.lotipo>
                <S.lista >
                    <S.itens> <Link to=""> Início </Link> </S.itens>
                    <S.itemService> 
                        <Link onClick={() => setIsMenuDropDown(!isMenuDropDown)}> Serviços <CaretDown size={10} weight="thin" /> </Link>
                        <S.dropDown isMenuDropDown = {isMenuDropDown} onClick={() => setIsMenuDropDown(false)}>
                            <Link to="/agendar"> Agendamento </Link>
                            <Link to="/consultarAgenda"> Consultar Agenda </Link>
                            <Link to="/actualizarAgenda"> Actualizar Agenda </Link>
                        </S.dropDown>
                    </S.itemService>
                    {/* <S.itens> <Link to="/agendar"> Agendar </Link> </S.itens> */}
                    <S.itens> <Link to="/sobre"> Sobre </Link> </S.itens>
                </S.lista>
                <S.hamburguer onClick={() => setIsOpen(!isOpen)}>
                    <S.line1 ></S.line1>
                    <S.line2></S.line2>
                    <S.line3></S.line3>
                </S.hamburguer>
            </S.menu>

            <S.sideBar isOpen={isOpen} onClick={() => setIsOpen(false)}>
                <S.lista2 >
                    <S.itens2 onClick={() => setIsOpen(isOpen)}> <Link to="/"> Início </Link> </S.itens2>
                    <S.itens2> <Link to="/servicos"> Serviços </Link> </S.itens2>
                    <S.itens2> <Link to="/agendar"> Agendar </Link> </S.itens2>
                    <S.itens2> <Link to="/sobre"> Sobre </Link> </S.itens2>
                </S.lista2>
            </S.sideBar>
        </S.container>
        
    )
}

export {NavBar}