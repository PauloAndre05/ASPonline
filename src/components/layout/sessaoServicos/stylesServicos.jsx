import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`
export const titleSection = styled.h1`
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    display: inline-block;
    padding: 1.5rem;
    width: 100%;
    height: 100%;
`

export const content = styled.div`
    display: flex;
    justify-content: space-evenly; 
    align-items: center;
    padding: 3rem;
    flex-wrap: wrap;
    background-color: #eeeeee;
    gap: 5rem;  
`

export const contImage = styled.div`
    width: 22rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 3px #00000028;

    img{
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-with: 768px) {
        width: 2rem;
    }
`

export const paragrafo = styled.div`
    width: 30rem;
    border-bottom: 1px solid #69696993;
    padding-bottom: 3rem;

    p{
        font-size: 1.2rem;
        color: #45707a;
    }
`

export const area2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`

export const text2 = styled.div`
    width: 55rem;

    p{
        width: 100%;
        font-size: 1.3rem;
    }
`

export const ContainerImage2 = styled.div`
    width: 10rem;
    overflow: hidden;
    border-radius: 50%;

    img{
        width: 100%;
        object-fit: cover;
    }
`

export const container = styled.div`
    width: 60%;
    margin: 0 auto;

    @media screen and (min-width: 320px) and (max-width: 600px){
        width: 45%;
    }
`

export const containerContainerS = styled.div` 
    background-color: #0c809740;    
    padding: 2rem;
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
    background-color: #ffffffdd;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    a{
        text-decoration: none;
        text-align: center;
    }

    button{
        background-color: transparent;
        border: 1px solid #00000022;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7.5rem;
        height: 1.7rem;
        padding-bottom: .2rem;
        text-decoration: none;
        font-size: .9rem;
        border-radius: 0;
    }
    button:hover{
        box-shadow: none;
        background-color: #000;
        color: #fff;
    }
`

export const a = styled.a`
        
`