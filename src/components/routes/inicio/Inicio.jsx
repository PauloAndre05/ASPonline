import { Banner } from "../../layout/banner/Banner"
import { Formulario } from "../../layout/formulario/Formulario"
import { NewsLetter } from "../../layout/newsLetter/NewsLetter"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"

function Inicio() {
    return(
        <>
            <Banner/> 
            <SessaoServicos/>
            <Formulario/> 
            <QuemSomos/>  
            <NewsLetter/>      
        </>
    )
}

export { Inicio }