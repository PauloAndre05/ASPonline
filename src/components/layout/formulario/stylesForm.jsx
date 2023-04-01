import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    padding: 2rem 0 8rem 0;

   
`
export const text = styled.section`

    h1{
        font-size: 1.5rem;
        color: #061d38;
        text-align: center;
        font-weight: bold;
    }
`

export const containerForm = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2rem 3rem;
        border: 1px solid red;
        h3{
            text-align: center;
            text-transform: uppercase;
            width: 100%;
        }
    @media screen  and (max-width: 320px){
        max-width: 450px;
        margin: 0 auto;
        h3{
            font-size: .9rem;
        }
    }
`

export const form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column; 
    flex-wrap: wrap;
`

export const inputs = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;


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