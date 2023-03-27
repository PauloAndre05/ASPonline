import styled from "styled-components";

export const containerContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0 8rem 0;
    background-color: #000;
`
export const text = styled.section`

    h1{
        font-size: 1.5rem;
        color: #061d38;
        text-align: center;
        color: #bd5500a2; 
    }
`

export const containerForm = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 2rem 3rem;
        border-radius: 10px;
        max-width: 50rem;

        h3{
            text-transform: uppercase;
            width: 30rem;
        }
`

export const form = styled.form`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column; 
`

export const inputs = styled.div`
    display: flex;
    flex-direction: column;


    input,select{
        border: none;
        box-shadow: 1px 2px 7px black;
        border-radius: .5rem;
        outline: none;
        height: 2rem;
        padding-left: .6rem;    
    }  
    
`

export const containerButton = styled.div`
    margin-top: 1rem;

    button{
        
    }
`