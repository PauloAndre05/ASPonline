import styled from "styled-components";

export const container = styled.div`
    background: bgQuemSomos;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c8;
    background-blend-mode: color;
    width: 100%;
    padding: 3rem 3rem;

    h2{
        color: #d5d5d5;
        font-size: 1.8rem;
        text-transform: uppercase;
    }
`

export const texto = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;

    p{
    color: #ffffffbe;
    width: 50rem;
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: justify;
    }
`   