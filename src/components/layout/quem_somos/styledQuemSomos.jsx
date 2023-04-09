import styled from "styled-components";

export const container = styled.main`
    background-color: #000000;
    width: 100%;
    height: 35rem;
    position: relative;

    div{
        position: absolute;
        right: 6rem;
        bottom: 5rem;
        width:20rem; 
    }
    div>img{
        width:100%;
        height: 100%;
    }

    @media screen and (max-width: 768px){
        div{
            width:13rem;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 600px){
        div{
            width:13rem;
            right: 3rem;
            bottom: 2rem;
        }
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
    opacity: .3;
`

export const texto = styled.section` 
    position: absolute;
    width: 50%;
    max-height: 100%;
    margin: 0 auto;
    top: 4rem;
    left: 4rem;

    h2{
        color: #d5d5d5;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
    
    p{  
    color: #ffffffbe;
    font-size: 1.1rem;
    margin-top: 2rem;
    text-align: justify;
    }

    @media screen and (max-width: 768px){
        width:90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 600px){
        idth:90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
        
        p{
            margin-top: 1rem;     
        }
    }
`   