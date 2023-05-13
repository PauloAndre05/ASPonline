import styled from "styled-components";
import img from '../../../images/bgAgendar.jpg'

export const containerContainer = styled.main`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    background-color: #f7f7f7;
    padding-bottom: 5rem;
`

export const container = styled.section`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 75%;
    min-height: 28rem;
    padding: 2rem 0;
    margin: 0 auto;
    margin-top: -14rem;
    border-radius: 1.2rem;
    box-shadow: 5px 3px 20px  rgba(0, 0, 0, 0.295);
    
    p{
        text-align: center;
        width: 100%;
        padding-bottom: 2rem;
    }

    @media screen  and (max-width: 600px){
        max-width: 95%;
    }

    @media screen  and (max-width: 320px){
        max-width: 98%;
    }

`

export const text = styled.div`
    background-image: url(${img});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0000006c;
    background-blend-mode: color;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    gap: 1rem;
    
    h1{
        font-size: 1.5rem;
        color: #fff;
        margin-top: 2rem;
        text-transform: uppercase;
    }

    p{
        font-weight: lighter;
        color: #ffffffdc;
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

export const containerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    width: 100%;
     button{
        overflow: hidden;
        background-color: #0a2f59;
        color: #fff;
        width: 14rem;
        height: 2.2rem;
        padding-bottom: .2rem;
        font-size: 1rem;
        right: 0;
        border-radius: 50px;
        border: none;
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

