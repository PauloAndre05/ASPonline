import styled from "styled-components";

export const container =  styled.main`
    background: url("../../../images/bgNewsLetter.jpg"), no-repeat;
    background-color: #1d262d;
    background-blend-mode: color;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 3rem 0;
    gap: 3rem;  
`
export const texto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
        text-transform: uppercase;
        font-size: 1.8rem;
        color: #bd5500a2; ;
    }

    p{
        width: 30rem;
        font-size: 1.1rem;
        color: #fff;
    }
`

export const containerFormulario = styled.div`

`

export const form =  styled.form`
        display: flex;
        flex-direction: column;
        gap: 1rem;
`

export const containerLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    input, textarea{
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #fff;
        padding: 1rem 0;
        color: #fff;
        font-size: 1.1rem;
        width: 30rem;
        background: none;
    }

    textarea{
        max-height: 5rem;
        min-height: 3.4rem;
    }

    label{
        color: #ffff;
        margin-bottom: .3rem;
    }

    label > span {
        color: rgba(255, 0, 0, 0.6);
    }
`

export const buttonNewsLetter = styled.div`
    button{
        background-color: transparent;
        border: 1px solid #bd5500a2; ;
        width: 10rem;
        height: 2rem;
        color: #fff;
        font-size: 1.1rem;
    }

    button:hover{
        background-color: #000;
        color: #fff;
        border-color: #ffffff7c;
    }
`