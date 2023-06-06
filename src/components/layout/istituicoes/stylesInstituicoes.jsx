import styled from "styled-components";

export const containerContent = styled.main`
    background-repeat: no-repeat;
    background-position: left bottom;
    background-blend-mode: color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0;
    background-color: #e2e2e2;
    margin-bottom: 4rem;
    margin-top: 3rem;
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
    opacity: .7;

    :hover{
        background-color:#000;
        color: #fff;
    }
`