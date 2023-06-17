import styled from "styled-components";

export const containerModal = styled.main`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0, 0, 0, .4);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const modal = styled.div`
   
    color: #fff;
    background-color: #ffffff;
    
    @media screen and (max-width: 700px ){
    }

    @media screen and (max-width: 600px ){
    }
`

export const close = styled.div`
    display: flex;
    justify-content: end;
    border-bottom: 1.5px solid #bbbbbb;
    padding: 1rem .5rem;

    svg{
        color: #000;
        opacity: .5;
    }
    
    svg:hover{
        opacity: 1;
    }

    :hover{
        cursor: pointer;
    }
`

export const containerChildren = styled.div`
    h1{
        text-align: center;
        margin-bottom: 1rem;
    }
`


export const contentModal = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: #000;

    > div{
        gap: .5rem;
        display: flex;
    }

    p{
        color: #8a8a8a;
    }

    article{
        margin-top: 2rem;
    }

    button{
        background-color: #24860c;
        color: #fff;
        padding: .5rem 1.6rem;
        border: none;
        opacity: .9;
        border-radius: .3rem;
        margin-top: 1rem;
    }
    
    button:hover{
        color: #dfdfdf;
        opacity: 1;
    }
`

export const sucesso = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
`


