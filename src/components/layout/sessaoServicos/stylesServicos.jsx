import styled from "styled-components";

export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`
export const titleSection = styled.h1`
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #000;
    display: inline-block;
    margin: 1.5rem 0;
    width: 100%;
    height: 100%;
`

export const content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 5rem 2rem;
    flex-wrap: wrap;
    background-color: #eeeeee;
    line-height: 1.7rem;

    h1{
        text-align: start;
        font-size: 2rem;
        font-weight: lighter;
    }

    p{
        line-height: 1.8rem;
        font-size: 1.2rem;
        font-weight: 300;
        color: #1b1b1b;
    }

    a{
        text-decoration: none;
        padding: .5rem 0;
        display: block;
    }
    
    @media screen and (max-width: 768px){
        h1{
            font-size: 1.5rem;
        }

        p{
            font-size: 1rem;
        }
    } 

    @media screen and (max-width: 768px){
        gap: 3rem;
    } 
`

export const area1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
`

export const paragrafo = styled.div`  
    width: 30rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    @media screen and (max-width: 768px){
        width: 90%;
        margin: 0 auto;
    } 
`
export const contImage = styled.div`
    overflow: hidden;
    background-color: #000;
    border-radius: 2rem 0 2rem 0;
    width: 25rem;

    img{
        height: 100%;
        object-fit: cover;
        opacity: .6;
    }

    @media screen and (max-width: 768px){
        width: 15rem;
    }   
`

export const area2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    margin: 3rem 0;
`

export const text2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    width: 20rem;
    padding-bottom: 2rem;

    p{
        width: 100%;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 1rem;
        }
    } 
`


export const area3 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    
`

export const text3 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    width: 30rem;
    padding-bottom: 2rem;

    p{
        width: 100%;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 1rem;
        }
    } 
`


export const containerImage2 = styled.div`
    width: 18rem;
    background-color: #000;
    overflow: hidden;
    border-radius: .5rem;
    margin: 2rem 0;
    img{
        opacity: .6;
        object-fit: cover;
    }

    @media screen and (max-width: 768px){
        width: 15rem;
    }
`

export const containerImage3 = styled.div`
    width: 25rem;

    @media screen and (max-width: 768px){
        width: 15rem;
    }
`

export const img = styled.img`
    width: 100%;
    object-fit: cover; 
`

export const containerContainerS = styled.div` 
    background-color: #0c8097;    
    background: linear-gradient(to right,#131313, #122f47dc, #131313);
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
    background-color: #f5f5f5;
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
    gap: .4rem;
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
        padding-bottom: .1rem;
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