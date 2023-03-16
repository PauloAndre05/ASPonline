import { Link } from 'react-router-dom'
import * as s from './stylesNavBar'


function NavBar() {
    return(
        <s.container>
            <s.menu>
                <s.lotipo> <img src="" alt="logo" /> </s.lotipo>
                <s.lista >
                    <s.itens> <Link to="/"> Inicio </Link> </s.itens>
                    <s.itens> <Link to="/servicos"> Serviços </Link> </s.itens>
                    <s.itens> <Link to="/agendar"> Agendar </Link> </s.itens>
                    <s.itens> <Link to="/sobre"> Sobre </Link> </s.itens>
                </s.lista>
            </s.menu>
        </s.container>
        
    )
}

export {NavBar}