import { Banner } from "../../layout/banner/Banner"
import { Direcoes } from "../../layout/direcoes/Direcoes"
import { Formulario } from "../../layout/formulario/Formulario"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"
import * as S from './styles.inicio'

function Inicio() {
    return(
       
            <S.container >
                <Banner/>
                <SessaoServicos/>
                <Formulario/>
                <Direcoes/>
                <QuemSomos/>
            </S.container>
    )
}

export { Inicio }