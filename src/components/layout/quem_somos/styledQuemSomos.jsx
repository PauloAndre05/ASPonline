import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const texto = styled.section`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    width: 50%;
    max-height: 100%;
    margin: 0 auto;

    h2{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
    
    p{
    font-size: 1.1rem;
    margin-top: 2rem;
    text-align: justify;
    }
`   