import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    background-color: #6275795a;
    padding: 2rem 0 8rem 0;
`
export const titleSection = styled.h1`
    margin-bottom: 1rem;
    text-align: center;
    color: #061d38;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    padding-bottom: .5rem;
    width: 100%;
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

    a{
        text-decoration: none;
    }

    button{
        background-color: #061d38;
        border: 1px solid #ffffff31;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;
        height: 2rem;
        padding-bottom: .2rem;
        text-decoration: none;
        
    }
    button:hover{
        background-color: #fff;
        color: #000;
    }
`