import styled from "styled-components";

export const footer = styled.footer`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    background-color: #1D262D;
    bottom: 0;
    padding: 2rem 0 0 0;

     @media screen and (min-width: 320px) and (max-width: 600px){
   
    }
`

export const container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const colunas = styled.div`
    margin-bottom: 1rem; 
    > div{
        margin-bottom: 1rem;
    }

    h2{
        font-size: 1.1rem;
        color: #ffffffbc;
    }

    p{  
        font-size: 1rem;
        line-height: 1.6rem;
        color: #6a849e;
        width:7rem;
    }

    a{
        text-decoration: none;
    }

    a>p:hover{
        color: #000000;
    }

    @media screen and (max-width: 600px){
        p{
            width: 10rem;
        }
    }

    @media screen and (max-width: 320px){
       p{
        width: 8rem;
       }
    }
`

export const coluna = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2{
        color: #ffffffbc;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 609px){
       width: 100%;
    }
`


export const containerIcons = styled.div`
   div > h2{
    margin-bottom: .5rem;
    text-align: center;
   }
`

export const icon = styled.div`
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const input = styled.div`

    width: 25rem;
    form{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
    input{
        background-color: #00000059;
        padding-left: 1rem;
        height: 2.5rem;
        color: #fff;
    }
    button{
        padding: .4rem 2rem;
        background-color: #00000059;
        color: #fff;
        border-radius: 0;
        box-shadow: none;
        
    }

    button:hover{
        background-color: #000;
        box-shadow: none;
    }

    @media screen and (max-width: 768px){
        width: 24rem;
    }
    
    @media screen and (max-width: 420px){
       width: 95%;
    }
`

export const copy = styled.p`
    color: #6a849e;
    text-align: center;
    padding: 2rem 0 .8rem 0;
`