import styled from "styled-components"


export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const container2 = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 600px){
        width: 85%;
    }
`
            
export const containerArticle = styled.section`
    border: 6px solid transparent;
    
` 

export const article = styled.article`
    overflow: hidden;
    gap: .5rem;
    flex-direction: column;
    background-color: #000;
    box-shadow: 0 0 2px #00000060;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffffffb;

        @media screen and (max-width: 600px){
        article{
        }        
    }
`

export const cardTop = styled.section`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    background-color: #000;
    object-position: bottom;

    img{
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        opacity: .7;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 10rem;
        overflow: hidden;
        background-color: #000;

        img{
            width: 100%;
            object-fit: cover;
            object-position: left;
            opacity: .7;
        }
    }

    @media screen and (max-width: 380px ){
        height: 9.3rem;
    }

    @media screen and (max-width: 348px ){
        height: 9.5rem;
    }

    @media screen and (max-width: 321px ){
        height: 9rem;
    }
    
`

export const cardBotton = styled.section`
    width: 100%;
    min-height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: .5rem 1rem;
    gap: 1rem;

    h3{
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        color: #000;
    }

    p{
        width: 100%;
        text-align: left;
        text-align: center;
        color: #000;
        font-size: .9rem;
    }

    div{
        width: 80%;
        position: absolute;
        bottom: .7rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    a{  
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #000;
        text-decoration: none;
        color: #ffffff; 
        border-radius: .3rem;
        opacity: .9;
    }

    a:hover{
        opacity: 1;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        min-height: 15rem;
        padding: 1.5rem .7rem;

        p{
            width: 100%;
            text-align: center;
            font-size: .9rem;
            color: #000000; 
        }

        div{
            width: 60%;
            position: absolute;
            bottom: 2rem;
            height: 2.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        }

    @media screen and (max-width: 380px ){
        height: 15.7rem;
    }

        
    @media screen and (max-width: 348px ){
        height: 15.5rem;
    }

    @media screen and (max-width: 321px ){
        height: 16rem;
    }
`

export const containerEstado = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const aberto = styled.span`
    color: #00bd9df4    
`

export const fechado = styled.span`
    color: #ff1100; 
`