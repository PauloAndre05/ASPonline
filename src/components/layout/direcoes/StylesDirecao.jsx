import styled from "styled-components";

export const containerContainer = styled.main `
   
`

export const containerMain = styled.section`
    
`

export const texto = styled.div`
    h1{
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 0;
        margin-bottom: 2rem;
        border-bottom: 3px solid red;
        line-height: 3rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    img{
        width: 9rem;
        text-align: right;
    }
    > p{
        color: #0000009f;
        font-size: 1.2rem;
        width: 35rem;
    }
`

export const textoImagem = styled.section`
    display: flex;
    align-items: top;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
`

export const cardImagem = styled.div`
    width: 30rem;
`

export const imagem = styled.img`
    width: 100%;
    height: 100%;
    border-radius: .5rem;
`

export const tabela = styled.table`
    margin: 5rem auto;
    text-transform: uppercase;
    width:80%;
`

export const line = styled.tr`
    color: #000;
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
    padding: .9rem;
`

export const link = styled.a`
    color: #fff;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }
`