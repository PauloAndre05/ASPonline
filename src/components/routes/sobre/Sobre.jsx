import { NewsLetter } from "../../layout/newsLetter/NewsLetter"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"

function Sobre() {
    return(
        <div>
            <QuemSomos/>
            <NewsLetter/>
        </div>
    )
}

export { Sobre }