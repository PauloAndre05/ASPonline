import { Banner } from "../../layout/banner/Banner"
import { Formulario } from "../../layout/formulario/Formulario"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"

function Inicio() {
    return(
        <>
            <Banner/> 
            <SessaoServicos/>
            <Formulario/>         
        </>
    )
}

export { Inicio }