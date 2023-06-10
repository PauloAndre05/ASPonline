import styled from "styled-components";

export const containerModal = styled.main`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0, 0, 0, .5);
    z-index: 1000;
`

export const modal = styled.div`
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    max-width: 40rem;
    min-width: 40rem;
    max-height: 20rem;
    min-height: 20rem;
    background-color: #ffffffeb;
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
    top: .5rem;
    right: .5rem; 

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

    button{
        margin-top: 1rem;
        background-color: #000;
        color: #fff;
        height: 3rem;
        border: none;
        font-size: .9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .7;
        transition: all .4s;
    }

    button:hover{
        opacity: 1;
        cursor: pointer;
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
    gap: 1rem;
    align-items: center;

    p{
        color: #000;
    }

`