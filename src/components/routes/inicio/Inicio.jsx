
import { NavBar } from "../../layout/NavBar/NavBar"
import { Banner } from "../../layout/banner/Banner"
import { Isntituicoes } from "../../layout/istituicoes/Instituicoes"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"
import { Footer } from '../../layout/footer/Footer'



import * as S from './styles.inicio'

function Inicio() {
    return(
       
            <S.container >
                <NavBar/>
                <Banner/>
                <SessaoServicos/>
                <Isntituicoes/>
                <QuemSomos/>
                <Footer/>
            </S.container>
    )
}

export { Inicio }