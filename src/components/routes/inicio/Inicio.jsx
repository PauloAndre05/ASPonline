import { Banner } from "../../layout/banner/Banner"
import { Borda } from "../../layout/Borda/Borda"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"

function Inicio() {
    return(
        <>
            <Banner/> 
            <Borda/> 
            <SessaoServicos/>      
        </>
    )
}

export { Inicio }