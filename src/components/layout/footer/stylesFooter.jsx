import styled from "styled-components";

export const footer = styled.footer`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    background-color: #1d262d;
    bottom: 0;
    padding: 1rem 0 0 0;

     @media screen and (min-width: 320px) and (max-width: 600px){
        border: 1px solid red;
    }
`

export const container = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem 0;
    border-bottom: 1px solid #8AA8A9;
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
        font-size: 1.1rem;
        line-height: 1.6rem;
        color: #6a849e;
    }
`

export const containerIcons = styled.div`
   
`

export const icon = styled.div`
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
`

export const input = styled.div`
    
    form{
        display: flex;
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

    @media screen and (max-width: 600px){
        max-width: 310px;
    }
`

export const copy = styled.p`
    color: #6a849e;
    text-align: center;
    padding: .5rem 0;
`