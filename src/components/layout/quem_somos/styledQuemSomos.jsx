import styled from "styled-components";

export const container = styled.main`
    background-color: #000000;
    width: 100%;
    height: 35rem;
    position: relative;
    
    h2{
        color: #d5d5d5;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    @media screen and (min-width: 320px) and (max-width: 600px){
        border: 1px solid red;
    }
`

export const containerImg = styled.section` 
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 100%;
`

export const background = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: .2;
`

export const texto = styled.section` 
    position: absolute;
    width: 50%;
    height: 100%;
    margin: 0 auto;
    top: 4rem;
    left: 4rem;
   

    p{  
    color: #ffffffbe;
    font-size: 1.1rem;
    margin-top: 2rem;
    text-align: justify;
    }
`   