import styled from "styled-components";
import img from '../../../images/bandeira-de-angola.jpg'


export const containerContainer = styled.main`
    
`

export const container = styled.section`
    margin-top: 4rem;
    width: 100%;
    height: 400px;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.199);
    box-shadow: inset  0 0 10px rgba(0, 0, 0, .6);
    width: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const texto = styled.section`
    font-weight: lighter;
    width: 50%;
    max-height: 100%;
    margin: 1rem auto;
    color: #FFf;
    padding: 2.5rem 1rem;
    border-radius: .3rem;

    h2{
        text-align: center;
        font-weight: lighter;
        font-size: 1.5rem;
        text-transform: uppercase;
        text-shadow: 1px 3px 5px #000;
    }
    
    p{        
        font-size: 1.2rem;
        font-weight: lighter;
        margin-top: 2rem;
        text-align: justify;
        text-shadow: 1px 3px 5px #000000ae;
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