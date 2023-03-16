import styled from "styled-components";

export const containerContainer = styled.main `
    margin: 5rem 0;
`

export const containerMain = styled.section`
    > h1{
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: center;
    }

    > p{
        color: #00000077;
        margin: 0 auto;
        font-size: 1.1rem;
        width: 50rem;
        text-align: center;
    }
`

export const tabela = styled.table`
    margin: 5rem auto;
    text-transform: uppercase;
    width:90%;
`

export const line = styled.tr`
    background-color: #939393;
    :nth-child(2n){
        background-color: lightgrey;
    }

    :nth-child(2n) a{
        color: #010101;
    }
`
export const title = styled.th`
    background-color: black;
    color:#fff;
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