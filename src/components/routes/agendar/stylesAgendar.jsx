import styled from "styled-components";

export const containerContainer = styled.main`
    background-color: #C2DFE5;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    padding: 0 0 2rem 0;
`
export const text = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to right,#000000ef, #212222dc, #000000ef );
    width: 100%;
    height: 25rem;
    gap: 1rem;
    
    h1{
        font-size: 1.5rem;
        color: #ffffffdc;
        margin-top: 2rem;
        text-transform: uppercase;
    }

    p{
        font-weight: lighter;
        color: #ffffffdc;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        h1{
            font-size: 1rem;
        }

        p{
            font-size: .9rem;
        }
    }
`

export const containerBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    gap: 1rem;
    flex-wrap: wrap;

`

export const containerLine1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: #fff;

    p{
        color: #07a0dd;
    }
`

export const containerLine2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: #fff;
`

export const containerLine3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: #fff;
`

export const line1 = styled.div`
    width: 10rem;
    height: .4rem;
    background-color: #0686b9;
    color: #fff;
    border-radius: 50px;
`

export const line2 = styled.div`
    width: 10rem;
    height: .4rem;
    background-color: #ffffffd5;
    color: #fff;
    border-radius: 50px;
`

export const line3 = styled.div`
    width: 10rem;
    height: .4rem;
    background-color: #ffffffd5;
    color: #fff;
    border-radius: 50px;
`

export const containerForm = styled.section`
        display: flex;
        justify-content: space;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 3rem 1rem;
        width: 75%;
        margin: 0 auto;
        margin-top: -7rem;
        border-radius: 1.2rem;
        box-shadow: 5px 3px 20px  rgba(0, 0, 0, 0.295);
        background-color: #ffffff;
        
        p{
            text-align: center;
            width: 100%;
            padding-bottom: 2rem;
        }
        
   

    @media screen  and (max-width: 600px){
        width: 95%;
    }

    @media screen  and (max-width: 320px){
        width: 98%;
    }

  
`

export const form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
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
        border-bottom: 1px solid rgba(0, 0, 0, 0.212) ;
        outline: none;
        height: 2.5rem;
        width: 21rem;
        padding-left: .4rem; 
        font-size: .95rem;
        background-color: transparent;
        overflow: hidden;
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



export const containerButton = styled.div`
    button{
        overflow: hidden;
        background-color: #0a2f59;
        color: #fff;
        width: 100%;
        height: 2.5rem;
        padding-bottom: .2rem;
        font-size: 1rem;
        right: 0;
        border-radius: 50px;
    }
    button:hover{
        background-color: #01346e;
        box-shadow: none;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        button{
            width: 60%;
            margin: 0 auto;
        }
       
    }
`