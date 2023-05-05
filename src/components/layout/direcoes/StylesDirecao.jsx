import styled from "styled-components";

export const containerContainer = styled.main `
   margin: 0 auto;
   padding-top: 4rem;
`

export const containerMain = styled.section`
    width: 80%;
    margin: 0 auto;
`

export const textoImagem = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
`

export const texto = styled.div`
    width: 30rem;
    text-align: justify;
    line-height: 1.7rem;
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    
    img{
        width: 100%;
        height: 100%;
    }
    > p{
        color: #0000009f;
        font-size: 1.1rem;
        width: 100%;
    }

    @media screen and (max-width: 768px){
       p{
        font-size: 1rem;
       }
    }
`

export const cardImagem = styled.div`
    width: 18rem;
    height: 100%;
`

export const imagem = styled.img`
    width: 100%;
    height: 100%;
    border-radius: .5rem;
`

export const tabela = styled.table`
    margin: 5rem auto;
    text-transform: uppercase;
    width:98%;

    @media screen and (max-width: 425px){
        display: block;
        overflow-x: scroll;
        width: 100%;
    }
`

export const line = styled.tr`
    color: #000;
    font-size: .9rem;
    :nth-child(2n){
        background-color: lightgrey;
    }
    a{
        color: blue;
    }

`
export const title = styled.th`
    text-align: center;
    padding: .9rem;
`

export const colunm = styled.td`
    padding: .6rem;
    @media screen and (max-width: 768px){
       font-size: .7rem;
    }
`

export const link = styled.a`
    color: #fff;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }
`