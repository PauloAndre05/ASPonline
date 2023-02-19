import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'

function NavBar() {
    return(
        <nav className={styles.menu}>
                <div className={styles.logo}> <img src={logo} alt="logo" /> </div>
                <ul className={styles.lista}>
                    <li> <Link to="/"> Inicio </Link> </li>
                    <li> <Link to="/servicos"> Serviços </Link> </li>
                    <li> <Link to="/agendar"> Agendar </Link> </li>
                    <li> <Link to="/sobre"> Sobre </Link> </li>
                </ul>
            </nav>
    )
}

export {NavBar}