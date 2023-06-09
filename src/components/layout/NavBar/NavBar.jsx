import { Link } from 'react-router-dom'
import { useState } from 'react'

import * as S from './stylesNavBar'
import logo from '../../../images/logo.svg'
import  logoAngola  from '../../../images/logo-angola.png'
import { TwitterLogo, LinkedinLogo,  CaretDown} from 'phosphor-react'



function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isMenuDropDown, setIsMenuDropDown] = useState(false)
    const [isMenuDropDown2, setIsMenuDropDown2] = useState(false)

    return(
        <S.container>
           
            <S.menu>
                <S.containerLogo2>
                    <S.angola href="/">
                        <img src={logoAngola} alt="logo" />
                    </S.angola>
                    <S.logotipo href='/'> <img src={logo} alt="logo" /> </S.logotipo>
                </S.containerLogo2>
                <S.lista >
                    <S.itens> <Link to="/"> Inicio </Link> </S.itens>
                    <S.itemService> 
                        <Link onClick={() => setIsMenuDropDown2(!isMenuDropDown2)}> Serviços <CaretDown size={10} weight="thin" /> </Link>
                        <S.dropDown isMenuDropDown2 = {isMenuDropDown2} onClick={() => setIsMenuDropDown2(false)}>
                            <Link to="/agendar"> Agendamento </Link>
                            <Link to="/consultarAgenda"> Consultar agendamento </Link>
                            <Link to="/cancelarAgenda"> Cancelar agendamento </Link>
                        </S.dropDown>
                    </S.itemService>
                    <S.itens> <Link to="/sobre"> Sobre </Link> </S.itens>
                    <S.itens> <Link to="/servicos"> Informe-se</Link> </S.itens>
                </S.lista>

                <S.icons isOpen = {isOpen}>
                    <a href="/"><i> <TwitterLogo size={21} weight="fill" /> </i></a>
                    <a href="/"><i> <LinkedinLogo size={21} weight="fill" /> </i></a>
                    <p>onlineaspo@gmail.com</p>
                </S.icons>
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
                            <Link > Serviços</Link>
                        </div>
                        <S.dropDown2 isMenuDropDown = {isMenuDropDown} onClick={() => setIsMenuDropDown(false)}>
                            <Link to="/agendar" onClick={() => setIsOpen(false)}> Agendamento </Link>
                            <Link to="/consultarAgenda" onClick={() => setIsOpen(false)}> Consultar agendamento </Link>
                            <Link to="/cancelarAgenda" onClick={() => setIsOpen(false)}> Cancelar agendamento </Link>
                        </S.dropDown2>
                    </S.itemService2>
                    <S.itens2> <Link to="/sobre" onClick={() => setIsOpen(false)}> Sobre </Link> </S.itens2>
                    <S.itens2> <Link to="/servicos" onClick={() => setIsOpen(false)}> Informe-se </Link> </S.itens2>
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