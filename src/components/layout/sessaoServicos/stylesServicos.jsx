import styled from "styled-components";

export const containerContainer = styled.main`
    background-color: #e7e7e7;
    padding: 5rem 0 8rem 0;
`
export const titleSection = styled.h1`
    margin-bottom: 3rem;
    text-align: center;
    border-bottom: 3px solid #061d38 ;
    color: #061d38;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.7rem;
`

export const container = styled.div`
    width: 70%;
    margin: 0 auto;    
`
export const card = styled.div`
    border: 10px solid transparent;
    border-radius: 8px;
    overflow: hidden;
`

export const cardTop = styled.div`
    height: 8rem;
`
export const cardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0;
`
export const imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
export const title = styled.h3`
    font-size: 1.1rem;
    text-transform: uppercase;
`

export const containerbutton =styled.div`
    button{
        background-color: #061d38;
    }
    button:hover{
        background-color: #fff;
        color: #000;
    }
`