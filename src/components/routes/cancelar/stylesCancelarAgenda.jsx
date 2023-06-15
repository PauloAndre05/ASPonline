import styled from "styled-components";

export const main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: 1rem;
    background-color: #d3d3d3;
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
        gap: 1.5rem;

    }
   
    
    form input, select{
        height: 2.5rem;
        padding-left: .5rem;
        border: none;
        outline: none;
        border-bottom: 1px solid #00000045;
    }

    form input:focus {
        border-bottom: 1px solid #604dbd88;
    }

    form select:focus {
        border-bottom: 1px solid #604dbd88;
    }

    form button{
        background-color: #c73d3d;
        opacity: .8;
        height: 2.5rem;
        border: none;
        color: #ffffff;
        border-radius: .5rem;
        transition: all .4s;
    }

    form button:hover{
        color: #000;
        opacity: 1;
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