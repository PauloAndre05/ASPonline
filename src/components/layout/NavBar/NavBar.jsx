import { Link } from 'react-router-dom'
import * as S from './stylesNavBar'
import logo from '../../../images/logo.svg'
import  logoAngola  from '../../../images/logo-angola.png'
import { TwitterLogo, LinkedinLogo,  CaretDown, EyeClosed } from 'phosphor-react'

import { useState } from 'react'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isMenuDropDown, setIsMenuDropDown] = useState(false)

    return(
        <S.container>
            <S.containerLogo isOpen = {isOpen}>
                <a href="/">
                    <img src={logoAngola} alt="" />
                </a>
                
                <S.icons isOpen = {isOpen}>
                    <a href="/"><i> <TwitterLogo size={25} weight="fill" /> </i></a>
                    <a href="/"><i> <LinkedinLogo size={25} weight="fill" /> </i></a>
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

            <S.sideBar isOpen={isOpen} >
                <S.lista2 >
                    <S.itens2 onClick={() => setIsOpen(false)}> <Link to="/"> Início </Link> </S.itens2>
                    <S.itemService2 onClick={() => setIsMenuDropDown(!isMenuDropDown)}> 
                        <div>
                            <Link > Serviços</Link> <EyeClosed  size={24} weight="bold" color='#fff'/> 
                        </div>
                        <S.dropDown2 isMenuDropDown = {isMenuDropDown} onClick={() => setIsMenuDropDown(false)}>
                            <Link to="/agendar" onClick={() => setIsOpen(false)}> Agendamento </Link>
                            <Link to="/consultarAgenda" onClick={() => setIsOpen(false)}> Consultar Agenda </Link>
                            <Link to="/actualizarAgenda" onClick={() => setIsOpen(false)}> Actualizar Agenda </Link>
                        </S.dropDown2>
                    </S.itemService2>
                    <S.itens2> <Link to="/sobre" onClick={() => setIsOpen(false)}> Sobre </Link> </S.itens2>
                    <S.icons2>
                    <a href="/"><i> <TwitterLogo size={25} weight="fill" /> </i></a>
                    <a href="/"><i> <LinkedinLogo size={25} weight="fill" /> </i></a>
                    </S.icons2>
                </S.lista2>
            </S.sideBar>
        </S.container>
        
    )
}

export {NavBar}