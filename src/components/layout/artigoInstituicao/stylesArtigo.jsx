import styled from "styled-components"


export const containerContainer = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const container2 = styled.section`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1024px ){
        width: 52%;
    }
    @media screen and (max-width: 600px ){
        width: 70%;
    }

    @media screen and (max-width: 445px ){
        width: 80%;
    }

    @media screen and (max-width: 391px ){
        width: 82%;
    }
`
            
export const containerArticle = styled.section`
    border: 6px solid transparent;
    
` 

export const article = styled.article`
        /* width: 19rem;
        height: 25rem;
        overflow: hidden;
        box-shadow: 1px 5px 5px 1px #00000028;
        transition: all .2;
         */
    overflow: hidden;
    gap: .5rem;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 0 2px #00000060;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 13rem;
        background-color: #272727fc;

        @media screen and (max-width: 600px){
        article{
            height: 22rem;
        }        
    }
`

export const cardTop = styled.section`
    width: 100%;
    height: 17rem;
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
    min-height: 8rem;
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
        color: #d1d1d1;
    }

    p{
        width: 100%;
        text-align: left;
        text-align: center;
        color: #d1d1d1;
        font-size: .9rem;
    }

    div{
        width: 60%;
        position: absolute;
        bottom: .7rem;
        height: 2.3rem;
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
        color: #00bd9d9b; 
        opacity: .8;
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
            color: #d1d1d1;
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