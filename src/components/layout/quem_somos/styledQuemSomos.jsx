import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const texto = styled.section`
    font-weight: normal;
    width: 50%;
    max-height: 100%;
    margin: 1rem auto;
    color: #FFf;
    padding: 2.5rem 1rem;
    box-shadow:  0 0 10px rgba(0, 0, 0, .2);
    border-radius: .3rem;

    h2{
        text-align: center;
        font-weight: normal;
        font-size: 1.5rem;
        text-transform: uppercase;
        text-shadow: 1px 3px 5px #000;
    }
    
    p{        
        font-size: 1.4rem;
        font-weight: lighter;
        margin-top: 2rem;
        text-align: justify;
        text-shadow: 1px 3px 5px #000000ae;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }
`   