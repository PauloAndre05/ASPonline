import styled from "styled-components";

export const container =  styled.main`
    background-color: #1d262d;
    padding: 2.5rem 0;
    display: flex; 
    justify-content: center;
    align-items: center;
`

export const containerMain= styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 1rem;
    margin: 0 auto;

    @media screen and (max-width: 600px){
        width: 90%;
    }
`

export const texto = styled.div`
    width:25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1{
        text-transform: uppercase;
        font-size: 1.8rem;
        color: #DC9833;
        width:100%;
        text-align: center;
    }

    p{
        font-size: 1.1rem;
        color: #fff;
    }

    @media screen and (max-width: 600px){
        width:100%;

        p{
            font-size: 1rem;
        }
    }
`

export const containerFormulario = styled.div`
    width: 30rem;
    @media screen and (max-width: 600px){
        width:100%;
    }
`

export const form =  styled.form`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width:100%;
`

export const containerLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    input, textarea{
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #ffffff86;
        padding: 1rem 0 1rem .3rem;
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

    @media screen and (max-width: 600px){
        width:100%;
        input, textarea{
            width:100%;
            font-size: 1rem;
        }
    }
`

export const buttonNewsLetter = styled.div`
    text-align: right;
    width:100%;
    button{
        background-color: transparent;
        width: 10rem;
        height: 2rem;
        color: #82b6e0;
        font-size: 1.1rem;
        background-color: #263f4f;
    }

    button:hover{
        border-color: #ffffff7c;
        border: none;
    }
    @media screen and (max-width: 600px){
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        button{
            width: 15rem;
        }
    }
`