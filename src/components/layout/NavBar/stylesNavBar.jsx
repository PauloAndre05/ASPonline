import styled, { css } from "styled-components";

export const container = styled.main`
    display: flex;
    flex-direction: column; 
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
`

export const containerLogo = styled.div`
    background-color: #FFFFFF;
    padding:.5rem 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0000004e;
    >div {
        width: 10rem;
        height: 100%;
    }
    img{
        width: 100%;
    }

    @media screen  and (min-width: 425px) and (max-width: 600px) {
        padding: .5rem 2rem;
        
        >div{
            width: 7rem;
        }
    } 


    @media screen  and (max-width: 424px) {
        padding: .5rem 2rem;
    } 
`

export const lotipo = styled.a`
    display: inline-block;
    overflow: hidden;
    img{
        height: 100%;
        width: 100%;
    }

@media screen and (max-width: 768px){
    width: 4.5rem;
}
`

export const icons = styled.article`
    display: flex;
    gap: 1rem;

    a{
        color: #ee1010;
        width: 2rem;
        height: 2rem;
        border: 1px solid #ffee00;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: top;
    }
    i{
        object-fit: cover;
    }

   

   
`

export const hamburguer = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        width: 2.8rem;
        height: 2.1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .4rem;
        align-items: center;
        border: 1px solid #ffffff58;
        padding: .4rem;
        border-radius: .2rem;

        div{
            width: 2rem;
            height: 2rem;
            background-color: #ffffffd5;
        }
    }

    
`

export const containrHamburguer = styled.section`
    ${({ isOpen }) => isOpen && css`
        > div >{
            display: none;
        }
    `}
`

export const line1 = styled.div`
    
`

export const line2 = styled.div`

`

export const line3 = styled.div`
`

export const menu = styled.nav`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: .9rem 16rem;
    background-color: #f3f3f3dc;
    background: linear-gradient(to right,#000000ef, #122f47dc, #000000ef );
    color: #fff;
    z-index: 100;
    box-shadow: 1px 5px 8px rgba(0, 0, 0, .3);
    
    

    @media screen and (max-width: 768px) {
        padding: .5rem 2rem .5rem 2rem;
    } 

    @media screen and (min-width: 768px) and (max-width: 992px){
        padding: .6rem 4rem .9rem 4rem;
    } 

    @media screen and (min-width: 768px) and (max-width: 992px){
        padding: .6rem 4rem .9rem 4rem;
    } 
`

export const sideBar = styled.div`
    height: 0;
    visibility: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-height: ${({isOpen}) => isOpen?'40vh':'0'}; */
    background: linear-gradient(to right,#000000ef, #122f47dc, #000000ef );
    transition: all 1s;

    ${({ isOpen }) => isOpen && css`
        height: 200px;
        visibility: visible;
    `}
    

`

export const lista = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
       display: none;
    } 
`


export const lista2 = styled.ul`
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    

    a{
        color: black;
    }
`

export const itens = styled.li`
    a{
        font-size: 1rem;                
        text-decoration: none;
        transition: all .4s;
        color: #fff;
    }

    a:hover{
        color: #DC9833;
    }

    a:active{
        color: #DC9833;
    }
`

export const itens2 = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-transform: uppercase;

    
    :active{
        background-color: #82b6e0a5;
    }
    a{
        
        padding: .7rem 0;
        width: 100%;
        font-size: 1rem;
        color: #82B6E0;
        text-decoration: none;
        font-size: .9rem;
    }

    a:hover{
        color: #fff;
    }

    a:active{
    }
`