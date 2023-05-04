import styled from "styled-components";

export const containerContainer = styled.main`
    background-color: #d6d6d62b;
    background: linear-gradient(to right,#000000ef, #122f47dc, #000000ef );
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    padding: 2rem 0 5rem 0;
`
export const text = styled.section`

    h1{
        font-size: 1.5rem;
        color: #FFF;
        text-align: center;
        font-weight: bold;
    }
`

export const containerForm = styled.section`
        display: flex;
        justify-content: space;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 3rem 0;
        width: 77%;
        margin: 0 auto;
        margin-top: 2rem;
        border-radius: .5rem;
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.133);
        background-color: #ffffff;
        
        p{
            text-align: center;
            width: 100%;
            padding-bottom: 2rem;
        }
        
   

    @media screen  and (max-width: 600px){
        width: 100%;
        border-radius: 0 ;
    }

  
`

export const form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (max-width: 768px){
        gap: 1rem;
    }
`

export const inputs = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    
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
    }

    input,select{
        border: 1px solid rgba(111, 111, 111, 0.5) ;
        border-radius: .2rem;
        outline: none;
        height: 2rem;
        width: 23rem;
        padding-left: .6rem;    
    }  

    input:focus{
        border: 1px solid rgba(0, 0, 0, 0.5) ;
    }  

    select:focus{
        border: 1px solid rgba(0, 0, 0, 0.5) ;
    }
    
    @media screen and (max-width: 375px){
        width: 100%;
        padding: .2rem;
        input,select{
            width: 100%;
            border-radius: 0;
        }
    }
`



export const containerButton = styled.div`
position: relative;
    button{
        background-color: #061d38;
        color: #fff;
        width: 7.5rem;
        height: 1.7rem;
        padding-bottom: .2rem;
        font-size: .9rem;
        position: absolute;
        right: 0;
    }
    button:hover{
        background-color: #0a2f59;
        box-shadow: none;
    }

    @media screen and (max-width: 768px){
        width: 100%;

        button{
            width: 100%;
        }
       
    }
`