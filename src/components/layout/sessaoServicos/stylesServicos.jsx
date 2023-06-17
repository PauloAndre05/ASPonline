import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    width: 100%;
    margin: 0 auto;
    padding-top: 3rem;   
    background-color: #ffffff;
    
    >h1{
        text-align: center;
    }

`
export const titleSection = styled.div`
    font-weight: lighter;
    text-align: center;
    color: #0f0f0f;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`

export const content = styled.div`
    width: 98%;
    margin: auto;
    flex-wrap: wrap;

    p{
        line-height: 1.7rem;
        color: #949494;
        width: 25rem;
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px){
        p{
            margin: .5rem 0;
            width: 90%;
        }
    }    
    
    @media screen and (max-width: 600px){
        font-size: .9rem;
    }

    @media screen and (max-width: 450px){
        font-size: .9rem;
    }    

`

export const area1 = styled.div`
    margin: 4rem auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
   
    a{
        background-color: #248B84;
        text-decoration: none;
        padding: .7rem 1rem;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        text-align: center;
        border-radius: .3rem;
    }

    h1{
        text-align: start;
        font-size: 1.5rem;
        color: #3a3a3a;
    }

    a:hover{
        opacity: 1;
        animation: pisca none;
    }

    @keyframes pisca{
        0% {
        }
        50% {
            background-color: #000;
            color: #fff;
        }
        100% {
            
        }
    }

    @media screen and (max-width: 600px) {
        a{
            padding: .5rem 1rem;
            font-size: .9rem;
        }
    
    }

    @media screen and (max-width:768px) {
        height: 100%;
    }
`

export const text1 = styled.div`  
    padding: 2rem;
    height: 100%;
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
        align-items: start;
        text-align: justify;
    } 

    @media screen and (max-width: 600px){
        background-color: #ebebeb;
        border-radius: 0 0 .7rem .7rem  ;
    }

`

export const contImage = styled.div` 
    height: 17rem;
    width: 33rem;
    overflow: hidden;
    border-radius: .7rem;
    background-color: #000;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

   
    @media screen and (max-width: 600px){
        width: 100%;
        height: 13rem;
        border-radius: .7rem .7rem 0 0 ;
    }
`

export const area3 = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
    a{
        background-color: #248B84;
        text-decoration: none;
        padding: .7rem 1rem;
        color: #fff;
        font-size: 1rem;
        text-align: center;
        opacity:  .89;
        border-radius: .3rem;
    }
    
    a:hover{
        opacity: 1;
    }
    
    h1{
        text-align: start;
        font-size: 1.5rem;
        color: #3a3a3a;
    }

    @media screen and (max-width: 600px) {
        a{
            padding: .5rem 1rem;
            font-size: .9rem;
        }
    
    }
`

export const text3 = styled.div`
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 768px){
        order: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: right;
    } 

    @media screen and (max-width: 600px){
        background-color: #ebebeb;
        border-radius: 0 0 .7rem .7rem  ;
    }
`



export const containerImage3 = styled.div`
    height: 17rem;
    width: 33rem;
    overflow: hidden;
    background-color: #000;
    border-radius: .7rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 13rem;
        border-radius: .7rem .7rem 0 0;
    }
`

export const area4 = styled.div`
    margin: 4rem auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
   
    a{
        background-color: #248B84;
        text-decoration: none;
        padding: .7rem 1rem;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        text-align: center;
        border-radius: .3rem;
    }

    h1{
        text-align: start;
        font-size: 1.5rem;
        color: #3a3a3a;
    }

    a:hover{
        opacity: 1;
        animation: pisca none;
    }

    @keyframes pisca{
        0% {
        }
        50% {
            background-color: #000;
            color: #fff;
        }
        100% {
            
        }
    }

    @media screen and (max-width: 600px) {
        a{
            padding: .5rem 1rem;
            font-size: .9rem;
        }
    
    }
    @media screen and (max-width:768px) {
        height: 100%;
    }
`

export const contImage4 = styled.div`
    height: 17rem;
    width: 33rem;
    overflow: hidden;
    border-radius: .7rem;
    background-color: #000;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

   
    @media screen and (max-width: 600px){
        width: 100%;
        height: 13rem;
        border-radius: .7rem .7rem 0 0;

    }
    
`
export const text4 = styled.div`
    padding: 1rem;
    height: 100%;
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
        align-items: start;
        text-align: justify;

    } 


    @media screen and (max-width: 600px){
        background-color: #ebebeb;
        border-radius: 0 0 .7rem .7rem  ;
    }

`


export const img = styled.img`
    width: 100%;
    object-fit: cover; 
`

export const containerContainerS = styled.div` 
    margin-bottom: 4rem;
    padding: 1rem 0;
    border-radius: 0rem;

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
`


export const containerCard =styled.div`
    border: 6px solid transparent;
`
export const card = styled.div`
    border-radius: 5px;
    overflow: hidden;
    gap: .5rem;
    background-color: #ffffff;
    box-shadow: 0 0 2px #00000060;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 13rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 0;
        min-height: 16rem;
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
        text-align: center  ;
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
    margin-top: .7rem;
    color: #009;
    font-size: .9rem;
`