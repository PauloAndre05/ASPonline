import { useEffect, useState } from 'react'
import { NavBar } from '../../layout/NavBar/NavBar'
import { Footer } from '../../layout/footer/Footer'
import * as S from './stylesServicos'

function Servicos() {
    const urlServico = "http://localhost:3001/servico"
    const [dataService, setDataService] = useState([])

    useEffect(() => {
        getService()
    }, [])

    const getService = async () => {
        try{
            const response = await fetch(urlServico)
            const responseData = await response.json()
            setDataService(responseData)
        }
        catch (error){
            console.log(error);
        }
    }

    return(
        <>
            <NavBar />
            <S.container>
                
                <h3>Mantenha-se informado</h3>
                <p>Temos para si uma lista de requisitos necessários para tratamento dos documentos</p>
                <S.containerCards>   
                    {dataService.map((item) => (
                        <S.card key = {item.id}>
                                <h1>{item.nome}</h1>
                                <ul>
                                    <li>{item.descricao}</li>
                                </ul>
                        </S.card>
                
                    ))}               
                </S.containerCards>
            </S.container>
            
            <Footer />

        </>
    )
}

export { Servicos }