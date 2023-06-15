import styled from "styled-components";

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

    button{
        background-color: #000;
        color: #fff;
        padding: .5rem 1.6rem;
        border: none;
        opacity: .9;
        border-radius: .3rem;
    }
    
    button:hover{
        color: #fff;
        background-color: #24860c;
        opacity: 1;
    }
`


