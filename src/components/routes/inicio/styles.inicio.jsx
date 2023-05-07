import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const containerContent = styled.section`
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h1{
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5rem;
    }   
`

export const content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    article{
        width: 19rem;
        height: 25rem;
        border-radius: .5rem;
        overflow: hidden;
        box-shadow: 1px 5px 5px 1px #00000028;
        transition: all .2;
    }

    @media screen and (max-width: 600px){
        article{
            height: 22rem;
        }        
    }
    
`


export const cardTop = styled.section`
    width: 100%;
    height: 10.5rem;
    overflow: hidden;
    border-radius: .5rem;
    position: relative;

    ::before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        opacity: .4;
        background-color: #000;
    }

    img{
        width: 100%;
        object-fit: cover;
    }
`

export const cardBotton = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    padding: .7rem;
    h3{
        font-size: 1.2rem;
    }

    p{
        font-size: .9rem;
    }
`

export const buttom = styled.a`
    text-decoration: none;
    padding: .3rem 1.5rem;
    border-radius: 1rem;
    background-color: #000000d1;
    color: #e7e7e7;
    box-shadow: 1px 2px 8px #00000053;

    :hover{
        background-color:#000;
        color: #fff;
    }
`
