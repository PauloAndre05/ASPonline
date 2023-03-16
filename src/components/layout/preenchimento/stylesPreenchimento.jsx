import styled from "styled-components";


export const container = styled.main`
     width: 100%;
    background-color: #646d74;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
`

export const itens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    width: 11rem; 

    p{
        width: 40rem;     
        text-align: center;   
    }
`

export const icone = styled.i`
    color: #fff;
    font-size: 2rem;
`