import styled from "styled-components";

export const footer = styled.footer`
    background-color: #000;
    bottom: 0;
    padding: 1rem 0 1rem 0;
`

export const container = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin: 2rem 0;
    border-bottom: 1px solid #8AA8A9;
`

export const colunas = styled.div`
    margin-bottom: 1rem;
    
    h2{
        font-size: 1.1rem;
        color: #2a4769;
    }

    p{
        font-size: 1rem;
        line-height: 1.5rem;
        color: grey;
    }
`

export const containerIcons = styled.div`
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
`

export const copy = styled.p`
    color: grey;
    font-size: .9rem;
    text-align: center;
`