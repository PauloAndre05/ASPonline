import styled from "styled-components";

export const main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 1rem;
    background-color: #d3d3d3;
    padding: 2rem 0;
`

export const containerForm = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 3rem 4rem;
    box-shadow: 0 0 1rem #0000002d;
    gap: 1.5rem;

    form{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        border-radius: .5rem;
        padding: 3rem ;
        width: 100%;

    }

    form > div{
        width: 100%;
    }


    form > div > div{
        min-height: 1.5rem;
        padding-left: 1rem;
    }

    form > div > div > span{
        color: red;
        font-size: .9rem;
    }
   
    
    form input, select{
        width: 100%;
        height: 2.5rem;
        padding-left: .5rem;
        border: none;
        outline: none;
        border-bottom: 1px solid #00000045;
    }

     form >button{
        margin-top: 1rem;
        background-color: #248b84;
        color: #fff;
        height: 2.5rem;
        border: none;
        border-radius: .5rem;
        font-size: .9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .4s;
        opacity: .8;
    }

    form > button:hover{
        opacity: 1;
        cursor: pointer;
    }

    form input:focus {
        border-bottom: 1px solid #604dbd88;
    }

    form select:focus {
        border-bottom: 1px solid #604dbd88;
    }

   
    @media screen and (min-width: 768px){
        width: 50%;
        
    }

    @media screen and (max-width: 768px){
        width: 80%;
    }

    @media screen and (max-width: 600px){
        width: 97%;
        padding: 3rem 0;
    }


`

/* ============================================== MODAL ================================================ */



export const containerModal = styled.main`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0, 0, 0, .3);
    z-index: 1000;
`

export const modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    max-width: 35rem;
    min-width: 35rem;
    max-height: 20rem;
    min-height: 20rem;
    background-color: #ffffff;
    border-radius: .5rem;
    
    @media screen and (max-width: 700px ){
        max-width: 30rem;
        min-width: 30rem;
        max-height: 15rem;
        min-height: 15rem;
    }

    @media screen and (max-width: 600px ){
        max-width: 20rem;
        min-width: 20rem;
        max-height: 15rem;
        min-height: 15rem;
    }
`

export const close = styled.div`
    position: fixed;
    top: .8rem;
    right: .8rem; 

    :hover{
        cursor: pointer;
    }

    svg{
        color: #000000;
        opacity: .6;
    }

    svg:hover{
        opacity: 1;
    }
`

export const containerChildren = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1{
        text-align: center;
        margin-bottom: 1rem;
    }
`
export const form = styled.form`
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        border: none;
        outline: none;
        padding: 1rem;
        height: 3rem;
        width: 100%;
        font-size: .9rem;
        background-color: #0000007a;
        color: #ffffffbc;
    }

    textarea{
        outline: none;
        padding: 1rem;
        border: none;
        max-width: 100%;
        min-width: 100%;
        min-height: 10rem;
        max-height: 10rem;
        font-size: .9rem;
        background-color: #0000007a;
        color: #ffffffbc;


    ::-webkit-scrollbar {
    width: 6px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #000000ec;
    }

    }

    div{
        min-height: 1.7rem;
    }

    span{
        color: #ad7c33;
        height: 1.7rem;
        font-size: .8rem;
    }
`

export const contentModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    p{
        color: #35dd0b;
        text-align: center;
    }

    span{
        text-align: center;
        color: #000;
        display: flex;
    }

    
`


export const respostaConsulta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    p{
        color: #35dd0b;
    }

    > button{
        color: #ffffff;
        background: #000;
        padding: .5rem 1rem;
        border-radius: .3rem;
        border: none;
    }

    botton:hover{
        background-color: #267712;
    }
`