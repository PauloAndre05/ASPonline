import styled from "styled-components";
import bg from '../../../images/direction8.png'

export const containerContent = styled.main`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: calc(50rem);
    background-position: left bottom;
    background-blend-mode: color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 4rem 0;
    background-color: #09292499;
    margin-bottom: 4rem;
    height: 100vh;

    h1{
        color: #ffffff;
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
    }   
`

export const content = styled.section`
    width: 100%;
    gap: 2rem;
    margin: auto;
    flex-wrap: wrap;
`

export const buttom = styled.a`
    text-decoration: none;
    padding: .3rem 1.5rem;
    border-radius: 1rem;
    background-color: #000000d1;
    color: #e7e7e7;
    box-shadow: 1px 2px 8px #00000053;

    :hover{
        background-color:#000;
        color: #fff;
    }
`