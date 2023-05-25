import * as S from './stylesPerfil'
import {dataTable} from '../direcoes/data'
import { useParams, Link } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'

function Perfil() {

    const {id} = useParams()
    const instituicao = dataTable.find((inst) =>  inst.id === parseInt(id) )
    const data = instituicao
    
    const time = new Date()
    const hours = time.getHours()

    
    

    if (!instituicao) {
        return <p>Carregando...</p>;
    }
    return(
        <S.container>
            <NavBar/>
           <S.containerMain>
               <h2>Perfil da Instituição</h2>
               <div><img src={data.img} alt={data.nome} /></div>
               <h3>{data.nome}</h3>
               <p>Localização: {data.localizacao}</p>
               <S.containerEstado>
                <p>Estado: </p>
                   {hours >= 8 && hours <= 15 ? (
                    <S.aberto>Aberto</S.aberto>
                   ): (
                    <S.fechado>Fechado</S.fechado>
                   )}
               </S.containerEstado>
               <Link to={data.link}>Ver no mapa</Link>
           </S.containerMain>
        </S.container>
    )
}

export { Perfil }