import styled from "styled-components";

export const container = styled.main`
    background-color: #000000c8;
    width: 100%;
    position: relative;

    h2{
        color: #d5d5d5;
        font-size: 1.8rem;
        text-transform: uppercase;
    }
`

export const containerImg = styled.section` 
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    width: 100%;
    height: 80vh;
    
`

export const background = styled.img`
    object-fit: cover;
    width: 100%;
    opacity: .5;
`

export const texto = styled.section` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   

    p{
    color: #ffffffbe;
    width: 50rem;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: justify;
    }
`   