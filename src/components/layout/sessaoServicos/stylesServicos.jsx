import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;    
`
export const titleSection = styled.h1`
    font-weight: normal;
    text-align: center;
    font-size: 2rem;
    color: #000;
    display: inline-block;
    width: 100%;
`

export const content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column; 
    gap: 2rem;
    align-items: center;
    padding: 2rem 0;
    margin: auto;
    flex-wrap: wrap;

    h1{
        text-align: start;
        font-size: 1.5rem;
        font-weight: lighter;
    }

    p{
        line-height: 1.8rem;
        font-weight: lighter;
        color: #1b1b1b;
    }

    a{
        text-decoration: none;
        padding: .5rem 0;
        color: #133d8d;
        font-size: 1.1rem;
    }

    a:hover{
        text-decoration: underline;
    }
    
    @media screen and (max-width: 768px){
        width: 98%;
    } 

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 1.2rem;
        }
        
        p{
            font-size: .9rem;
        }

        a{
            font-size: .9rem;
        }
    }

`

export const area1 = styled.div`
    width: 100%;
    height: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width:768px) {
        height: 100%;
    }
`

export const paragrafo = styled.div`  
    background-color: #F5F5F5;
    width: 50%;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    

    @media screen and (max-width: 768px){
        width: 100%;
        order: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    } 
`
export const contImage = styled.div`
    width: 50%; 
    height: 100%;
    overflow: hidden;
    background-color: #000;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
    
    @media screen and (max-width: 600px){
        height: 12rem;
    }
`

export const area2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 3rem 0;
`

export const text2 = styled.div`
    background-color: #F5F5F5;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    width: 50%;
    @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
`


export const area3 = styled.div`
    width: 100%;
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width:768px) {
        height: 100%;
    }
    
`

export const text3 = styled.div`
    background-color: #eee;
    width: 50%;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px){
        order: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    } 
`


export const containerImage2 = styled.div`
    width: 50%;
    height: 100%;
    background-color: #000;
    overflow: hidden;

    img{
        opacity: .6;
        object-fit: cover;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }

    @media screen and (max-width: 600px){
        height: 12rem;
    }
`

export const containerImage3 = styled.div`
    width: 50%; 
    height: 100%;
    overflow: hidden;
    background-color: #000;

    img{
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    } 

    @media screen and (max-width: 600px){
        height: 12rem;
    }
`

export const img = styled.img`
    width: 100%;
    object-fit: cover; 
`

export const containerContainerS = styled.div` 
    background-color: #373d42;
    padding: 2rem 0;
    @media screen and (max-width: 600px) {
        padding: 4.5rem 0;
    }
`
export const container = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1{
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
    }

    @media screen and  (max-width: 600px){
        width: 63%;
    }
`


export const containerCard =styled.div`
    border: 6px solid transparent;
`
export const card = styled.div`
    border-radius: 5px;
    overflow: hidden;
    gap: .5rem;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.199);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 13rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 0;
    } 
`

export const cardTop = styled.div`
    margin-bottom: 1rem;

    div{
        display: flex;
        justify-content: center;
        color: #DC9833;
    }
`
export const cardBottom = styled.div`
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    padding-bottom: 1rem;
`
export const imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
export const title = styled.h3`
    font-weight: bolder;
    font-size: .9rem;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: .8rem;
    } 
`

export const containerbutton =styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    a{
        text-decoration: none;
        text-align: center;
    }

    button{
        background-color: #000000dd;
        border: 1px solid #00000022;
        border-radius: .3rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7.5rem;
        height: 1.7rem;
        text-decoration: none;
        font-size: .9rem;
    }
    button:hover{
        box-shadow: none;
        background-color: #000;
        color: #fff;
    }
`

export const a = styled.a`

`