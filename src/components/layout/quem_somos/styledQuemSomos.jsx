import styled from "styled-components";


export const containerContainer = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const container = styled.section`
    width: 100%;
    color: #000;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 5rem;
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
`

export const texto = styled.section`
    font-weight: lighter;
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