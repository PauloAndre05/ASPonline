import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    width: 100%;
    height: 100vh;
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    > div > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .3rem;
    }
   
    h1{
        font-size: 5rem;
        border-right: 2px solid grey;
        padding-right: 1rem;
        color: #258d84;
    }

    p{
        color: #258d84;
    }
`