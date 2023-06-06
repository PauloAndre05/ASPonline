import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    width: 100%;
    margin: 0 auto;
    padding-top: 4rem;   
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
    
   /*  @media screen and (max-width: 768px){
       font-size: 1.5rem;
    }  */

`

export const content = styled.div`
    width: 90%;
    gap: 2rem;
    margin: auto;
    flex-wrap: wrap;

    p{
        line-height: 1.7rem;
        color: #1b1b1b;
        width: 25rem;
        text-align: justify;
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px){
        p{
            margin: .5rem 0;
            text-align: center;
            width: 90%;
        }
    }    
    
    @media screen and (max-width: 600px){
        
    }

    @media screen and (max-width: 450px){
        
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
        background-color: #613bc2;
        text-decoration: none;
        padding: .7rem 0;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        width: 15rem;
        text-align: center;
        border-radius: .3rem;
        animation: pisca 8s linear infinite;
    }

    h1{
        text-align: start;
        font-size: 1.8rem;
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

    
    @media screen and (max-width: 768px){
        margin: 2rem 0;
        a{
            width: 60%;
        }
    } 

    @media screen and (max-width:768px) {
        height: 100%;
    }
`

export const text1 = styled.div`  
    height: 100%;
    padding: 1rem 0;
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
    height: 25rem;
    width: 40rem;
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
        height: 28rem;
    }
`

export const area3 = styled.div`
    margin: 2rem auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
    a{
        background-color: #000;
        text-decoration: none;
        padding: .7rem 0;
        color: #fff;
        font-size: 1rem;
        width: 17rem;
        text-align: center;
        border-radius: .3rem;
    }
    
    a:hover{
        background-color: #613bc2;
    }
    
    h1{
        text-align: start;
        font-size: 1.5rem;
    }
    
    @media screen and (max-width: 768px){
        a{
            width: 60%;
        }
    } 

    @media screen and (max-width: 768px){
        a{
            width: 60%;
        }
    } 

    @media screen and (max-width: 1024px) {
    }
`

export const text3 = styled.div`
    height: 100%;
    padding: 1rem 0;
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



export const containerImage3 = styled.div`
    width: 40%; 
    height: 25rem;
    overflow: hidden;
    background-color: #000;
    border-radius: .5rem;

    img{
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 28rem;
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