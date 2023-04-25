import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    background-color: #6275795a;
    padding: 2rem 0 3rem 0;
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
    width: 60%;
    margin: 0 auto; 
    @media screen and (min-width: 320px) and (max-width: 600px){
        width: 45%;
    }
`

export const containerCard =styled.div`
    border: 6px solid transparent;
`
export const card = styled.div`
    border-radius: 5px;
    overflow: hidden;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    background-color: #ffffff83;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.199);
`

export const cardTop = styled.div`
    div{
        display: flex;
        justify-content: center;
        color: #DC9833;
    }
`
export const cardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 1rem;
`
export const imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
export const title = styled.h3`
    font-size: .9rem;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: .8rem;
    } 
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
        width: 7.5rem;
        height: 1.7rem;
        padding-bottom: .2rem;
        text-decoration: none;
        font-size: .9rem;
    }
    button:hover{
        background-color: #fff;
        color: #000;
    }
`