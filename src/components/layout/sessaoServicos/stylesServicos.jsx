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
`
export const titleSection = styled.h1`
    font-weight: normal;
    text-align: center;
    font-size: 2rem;
    color: #000;
    display: inline-block;
    width: 100%;

    @media screen and (max-width: 768px){
       font-size: 1.5rem;
    } 
`

export const content = styled.div`
    width: 90%;
    gap: 2rem;
    margin: auto;
    flex-wrap: wrap;
    
    >p{
        width: 70%;
        margin: 0 auto;
        font-size: 1.4rem;
        text-align: center;
        border-radius: 1rem;
    }

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

 
    @media screen and (max-width: 768px){
        width: 100%;

    } 
 

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 1.2rem;
        }

        >p {
            margin: 0 auto;
            text-align: center;
        }
        
        p{
            font-size: .9rem;
        }
    }

`

export const area1 = styled.div`
    margin: 2rem 0;
    width: 100%;
    height: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

   a{
        background-color: #258d84;
        text-decoration: none;
        padding: .5rem 0;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        width: 17rem;
        text-align: center;
        border-radius: .3rem;
    }

    a:hover{
        opacity: 1;
    }
    
    @media screen and (max-width: 768px){
        width: 100%;

        a{
            width: 95%;
        }
    } 

    @media screen and (max-width: 768px){
        a{
            width: 98%;
            font-size: .9rem;
        }
    } 

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 1.2rem;
        }
        
        p{
            font-size: .9rem;
        }

        a{
            font-size: .85rem;
        }
    }


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

export const containerArea2 = styled.div`
    width: 100%;
    display: flex;
    margin: 4rem 0;

    a{
        background-color: #258d84;
        text-decoration: none;
        padding: .5rem 0;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        width: 17rem;
        text-align: center;
        border-radius: .3rem;
    }

    a:hover{
        opacity: 1;
    }
    
    @media screen and (max-width: 768px){
        width: 100%;

        a{
            width: 95%;
        }
    } 

    @media screen and (max-width: 768px){
        a{
            width: 98%;
            font-size: .9rem;
        }
    } 

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 1.2rem;
        }
        
        p{
            font-size: .9rem;
        }

        a{
            font-size: .85rem;
        }
    }
`

export const area2_1 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;

   
`

export const area2_2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    
`

export const text2 = styled.div`
    background-color: #F5F5F5;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
`


export const area3 = styled.div`
    margin: 4rem 0;
    width: 100%;
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

    @media screen and (max-width:768px) {
        height: 100%;
    }
    

    a{
        background-color: #258d84;
        text-decoration: none;
        padding: .5rem 0;
        color: #fff;
        font-size: 1rem;
        opacity: .89;
        width: 17rem;
        text-align: center;
        border-radius: .3rem;
    }

    a:hover{
        opacity: 1;
    }
    
    @media screen and (max-width: 768px){
        width: 100%;

        a{
            width: 95%;
        }
    } 

    @media screen and (max-width: 768px){
        a{
            width: 98%;
            font-size: .9rem;
        }
    } 

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 1.2rem;
        }
        
        p{
            font-size: .9rem;
        }

        a{
            font-size: .85rem;
        }
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
    width: 100%;
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
    margin-bottom: 4rem;
    padding: 3rem 0;
    border-radius: 0rem;


    @media screen and (max-width: 600px) {  
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
        width: 89%;
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