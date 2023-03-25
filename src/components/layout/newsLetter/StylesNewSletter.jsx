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
        color: #fff;
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
    input{
        background-color: #ffffff;
        width: 25rem;
        height: 2.5rem;
        border-radius: .5rem;
        border: none;
        outline: none;
        border: .3px solid rgba(0, 0, 0, 0.224);
        padding: .5rem;
    }

    textarea{
        background-color: #ffffff;
        width: 25rem;
        height: 3.5rem;
        border-radius: .5rem;
        border: none;
        outline: none;
        border: .3px solid rgba(0, 0, 0, 0.224);
        padding: .5rem;
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
        width: 100%;
    }
`