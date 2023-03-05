import { Banner } from "../../layout/banner/Banner"
import { Formulario } from "../../layout/formulario/Formulario"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"

function Inicio() {
    return(
        <>
            <Banner/> 
            <SessaoServicos/>
            <Formulario/> 
            <QuemSomos/>        
        </>
    )
}

export { Inicio }