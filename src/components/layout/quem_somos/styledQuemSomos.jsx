import styled from "styled-components";


export const containerContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const assineAqui = styled.div`
    width: 100%;
    background-color: #634939;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    gap: 1rem;
    justify-content: center;

    h2{
        color: #fff;
    }

    form input, button{
        border: none;
        height: 3rem;
    }

    form input{
        outline: none;
        width: 25rem;
        padding-left: 1rem;
        border-radius: .3rem 0 0 .3rem;
    }

    form button{
        width: 8rem;
        border-radius: 0 .3rem .3rem 0;
        background-color: #5d3ab4;
        color: #ffffff;
    }

    form button:hover{
        color: #000000;
    }

    @media screen and (max-width: 600px){
        form input{
        width: 20rem;
        } 
    }

    @media screen and (max-width: 450px){
        form input{
        width: 15rem;
        } 
    }
`

export const container = styled.section`
    width: 100%;
    color: #000;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin: 3rem 0;
    gap: 1.5rem;
`

export const imagem = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: #000;
    overflow: hidden;
    border-radius: 50%;
    img{
        height: 100%;
        width: 100%;
        opacity: .5;
        object-fit: cover;
    }

    @media screen and (max-width: 768px){
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 600px){
        width: 20rem;
        height: 20rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
`

export const texto = styled.section`
    color: #000000;
    width: 30rem;

    h2{
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
    }
    
    p{        
        font-size: 1.2rem;
        font-weight: normal;
        margin-top: 2rem;
        text-align: justify;
    }
    
    @media screen and (max-width: 930px) {
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        p{
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 367px) {
        width: 95%;
        p{
            font-size: .9rem;
        }
    }

    @media screen and (max-width: 320px) {
        width: 95%;
    }
`   