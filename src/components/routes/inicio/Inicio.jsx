import { Artigo } from "../../layout/artigoInstituicao/Artigo"
import { Banner } from "../../layout/banner/Banner"
import { QuemSomos } from "../../layout/quem_somos/QuemSomos"
import { SessaoServicos } from "../../layout/sessaoServicos/SessaoServicos"

import adminMaianga from '../../../images/adminMaianga.jpg'
import adminViana from '../../../images/adminViana.jpeg'
import adminCacuaco from '../../../images/adminCacuaco.jpg'

import * as S from './styles.inicio'

function Inicio() {
    return(
       
            <S.container >
                <Banner/>
                <SessaoServicos/>

                <S.containerContent>
                    <h1>Instituições</h1>
                    <S.content>
                        <Artigo img={adminMaianga} alt="Imagem admin maianga" target="_blank" nome="Administracão da Maianga" local="564G+2Q7, Luanda" mapa="https://www.google.com/maps/place/Administra%C3%A7%C3%A3o+Municipal+da+Maianga/@-8.8449693,13.1507206,13z/data=!4m10!1m2!2m1!1sadministra%C3%A7%C3%B5es+municipais+de+luanda!3m6!1s0x1a51f399276859eb:0x426954b96833410d!8m2!3d-8.8449692!4d13.226934!15sCiVhZG1pbmlzdHJhw6fDtWVzIG11bmljaXBhaXMgZGUgbHVhbmRhkgEfbXVuaWNpcGFsX2FkbWluaXN0cmF0aW9uX29mZmljZeABAA!16s%2Fg%2F11gf4pk_jg?hl=pt-PT"/>

                        <Artigo img={adminViana} alt="Imagem admin viana" target="_blank" nome="Administracão de Viana" local="39RF+V28, R. 11 de Novembro, Luanda, Luanda" mapa="https://www.google.com/maps/place/Administra%C3%A7%C3%A3o+Municipal+de+Viana/@-8.8449692,13.0868583,12z/data=!4m10!1m2!2m1!1sadministra%C3%A7%C3%B5es+de+luanda!3m6!1s0x1a51f8319add2057:0xcc48a23ac12452ff!8m2!3d-8.9078398!4d13.372574!15sChphZG1pbmlzdHJhw6fDtWVzIGRlIGx1YW5kYZIBCWNpdHlfaGFsbOABAA!16s%2Fg%2F11bzt7vcx8"/>
                        
                        
                        <Artigo img={adminCacuaco} alt="Imagem admin maianga" target="_blank" nome="Administracão da Maianga" local="57Q4+GGG, Rua de Antonio Enes, Luanda" mapa="https://www.google.com/maps/place/Administra%C3%A7%C3%A3o+Municipal+de+Cacuaco/@-8.776638,13.3679027,17z/data=!3m1!4b1!4m6!3m5!1s0x1a51faadf44fee9b:0x32493c3bddea0979!8m2!3d-8.776638!4d13.3700914!16s%2Fg%2F11f_n91qz7?hl=pt-PT"/>
                    </S.content>

                    <S.buttom href="/tabelaDirecoes">Ver mais</S.buttom>
                </S.containerContent>
                
                <QuemSomos/>
            </S.container>
    )
}

export { Inicio }