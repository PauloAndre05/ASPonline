import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    background-color: #ebebeb;
`

export const text = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-size: 1.5rem;
    }

    p{
        font-size: 1.1rem;
    }

    margin: 2rem 0;

    @media screen and (max-width: 600px){
        margin: 0 0 1rem 0;
        h1{
            font-size: 1.3rem;
        }

        p{
            display: none;
        }
    }
`

export const containerForm = styled.section`
    width: 70%;
    background-color: #ffffff;
    border-radius: .4rem;
    padding: 4rem 4rem;
    box-shadow: 0 0 1rem #0000002d;
    margin-bottom: 3rem;
    
    /* ::-webkit-scrollbar {
    width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color:#ccc;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #9887F1;
    border-radius: .5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
    } */

    form{
        display: flex;
        flex-direction: column;
    }

    input, select{
        width: 100%;
        outline: none;
        height: 2.5rem;
        padding-left: .5rem;
        border: none;
        border-bottom: 1px solid #00000045;
        color: #000;
        background-color: transparent;
    }

    select{
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #00000045;
    }

    select:focus{
        border-bottom: 1px solid #604dbd88;
    }

    input:focus{
        border-bottom: 1px solid #604dbd88;
    }

    option :disabled{
        color: #000;
    }

    button{
        background-color: #604dbd;
        color: #fcfcfc;
        width: 12rem;
        height: 2.2rem;
        border: none;
        margin: 0 auto;
        font-size: .9rem;
        border-radius: .3rem;
    }

    button:hover{
        cursor: pointer;
        color: #000;
    }

    @media screen and (max-width: 768px){
        width: 98%;
        padding: 3rem 2rem;
        min-height: 85vh;
    }

    @media screen and (max-width: 600px){
        width: 98%;
        padding: 3rem 1rem;
    }
`

export const sessao1 = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0;
    }
`

export const inputs = styled.div`
    width: 100%;
    
    > div > div{
        min-height: 2rem;
        padding-left: .5rem;
        display: flex;
        align-items: center;
    } 

    > div > div > span{
        color: red;
        font-size: .8rem;
    } 
`

export const sessao2 = styled.div`
    display: flex;

    > div{
        width: 23.3rem;
    }
  
`

export const containerHoras = styled.div`
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 5rem;
    margin: 1rem 0;
    gap: 2rem;    

    > section{
        min-height: 2rem;
        padding-left: .5rem;
        display: flex;
    } 

    > section > span{
        color: red;
        font-size: .8rem;
    } 
`
export const horas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.3rem;

    label{
    }

    label:hover{
        cursor: pointer;
    }    

    input:hover{
        cursor: pointer;
    } 
`

export const contentModal = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`