import styled from "styled-components";

export const container =  styled.main`
    background-color: #1d1d1d;
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
        color: #ffffff;
        text-shadow: 0 1px 2px #0f0f0fb5;
        width:100%;
        text-align: center;
    }

    p{
        color: #b1b1b1;
        font-size: 1.1rem;
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
        width:100%;

        div > div{
            min-height: 1.5rem;
            text-align: right;
        }

        div > div > span{
            height: 100%;
            font-size: .8rem;
        }
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
        overflow: hidden;
        max-height: 0;
        padding-bottom: 2.5rem;
        resize: none;
    }

    label{
        color: #ffff;
        margin-bottom: .3rem;
    }

    span {
        font-size: .9rem;
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
        width: 10rem;
        height: 2rem;
        color: #ffffff;
        font-size: 1.1rem;
        background-color: #258d84;
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