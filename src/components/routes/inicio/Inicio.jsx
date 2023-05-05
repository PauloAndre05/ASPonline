import { Banner } from "../../layout/banner/Banner"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"
import * as S from './styles.inicio'

function Inicio() {
    return(
       
            <S.container >
                <Banner/>
                <SessaoServicos/>
                <QuemSomos/>
            </S.container>
    )
}

export { Inicio }