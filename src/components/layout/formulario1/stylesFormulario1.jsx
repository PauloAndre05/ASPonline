import styled from "styled-components";

export const containerForm = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px){
        gap: 2rem;
    }
` 

export const inputs = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;

    
    > div{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    > div  span{
        color: red;
    }

    >div >p{
        padding: 0;
        font-size: .9rem;
        text-align: center;
        margin-top: .1rem;
        border-radius: .5rem;
    }

    input,select{
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.212) ;
        outline: none;
        height: 2.5rem;
        width: 21rem;
        padding-left: .4rem; 
        font-size: .95rem;
        background-color: transparent;
        overflow: hidden;
        outline: none;
    }  

    select{
        color: #4b4b4b;
        padding-left: 0;
        border: none;
        border-bottom: 1px solid rgba(111, 111, 111, 0.5) ;
    }

    input:focus{
        background-color: transparent;
        border-bottom: 1px solid #C2DFE5;
    }  

    select:focus{
        color: #000000;
        background-color: transparent;
        border-bottom: 1px solid #C2DFE5 ;
    }
    
    @media screen and (max-width: 600px) {
        input,select{
        font-size: .9rem;
    } 
    }

    @media screen and (max-width: 375px){
        width: 100%;
        padding: 0 .5rem;
        input,select{
            width: 100%;
        }

        
    }

`