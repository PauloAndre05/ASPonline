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
    background-color: #258d84c8;
    padding:.3rem 0 .2rem 0;
    display: flex;
    justify-content: center;
    align-items: top;
    >a {
        width: 5rem;
        height: 100%;
    }
    img{
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        padding: .6rem 4rem .9rem 4rem;
    } 

    @media screen  and (max-width: 600px) {
        padding: .5rem 2rem;
        ${({ isOpen }) => isOpen && css`
        justify-content: center;
    `}
        
        >a{
            width: 6rem;
        }
    } 


    @media screen  and (max-width: 424px) {
        padding: .5rem 2rem;
    } 
`

export const lotipo = styled.a`
    display: inline-block;
    overflow: hidden;
    width: 6rem;
    img{
        height: 100%;
        width: 100%;
    }

@media screen and (max-width: 768px){
    width: 4rem;
}
`

export const icons = styled.article`
    display: flex;
    gap: .3rem;

    ${({ isOpen }) => isOpen && css`
        display: none;
    `}

    a{
        color: #000;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: top;
    }
    i{
        object-fit: cover;
    }

    a:hover{
        color: #ff0000c7;
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
            width: 1.7rem;
            height: 2rem;
            background-color: #ffffffd5;
        }
        :active{
            
        border: 3px solid #ffffff58;
        }
    }    
`

export const containrHamburguer = styled.section`

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
    padding: .9rem 15rem;
    background: #2b2b2b;
    z-index: 100;
    
    

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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: visibility 0;
    /* max-height: ${({isOpen}) => isOpen?'40vh':'0'}; */
    background-color: #2b2b2b;
    transition: height .7s;
    ${({ isOpen }) => isOpen && css`
        height: 370px;
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

export const itens = styled.li`
    a{
        font-size: .95rem;                
        text-decoration: none;
        transition: all .2s;
        color: #ffffffd5;
    }

    a:active{
        border-bottom: 3px solid #258d84;
    }

    a:hover{
        padding-bottom: .5rem;
        border-bottom: 3px solid #258d84;
    }
`

export const lista2 = styled.ul`
    height: 100%;
    display: flex;
    padding: 3rem 2rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    

    a{
        color: black;
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
        color: #ffffffd5;
        text-decoration: none;
        border-bottom: 1px solid #ffffff44;
    }

    a:hover{
        color: #000;
        background-color: #ffffff44;
    }
    

    a:active{
        background-color: #ffffff44;
        color: #000;
        
    }
`

/* ============================== MENU DROPDOWN 1 =================================== */

export const itemService = styled.li`
    position: relative;
    list-style: none;
    text-align: center;
    
    a{
        font-size: .95rem;                
        text-decoration: none;
        color: #ffffffd5;
        padding-bottom: .4rem;
        transition: all .2s;
    }
    
    a:active{
        border-bottom: 3px solid #258d84;
    }

    a:hover{
        padding-bottom: .5rem;
        border-bottom: 3px solid #258d84;
    }
`


export const dropDown = styled.div`
    background-color: #ffffffd5;
    position: absolute;
    top: 3rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .2s;

    ${({isMenuDropDown2} ) => isMenuDropDown2 && css`
        opacity: 1;
    `}

    a{
        width:100%;
        text-align: center;
        font-weight: lighter;
        font-size: .7rem;
        color: #000;
        padding: .5rem;
    }

    a:hover{
        border: none;
        color: #fff;
        background-color: #2b2b2b;
    }
`



/* ============================== MENU DROPDOWN 2 =================================== */

export const itemService2 = styled.li`
    position: relative;
    list-style: none;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ffffff44;

    >div{
        padding: .5rem 0;
        width: 100%;
        display: flex;
        align-items: top;
        gap: .3rem;
    }

    
    
    a{
        font-size: 1rem;                
        text-decoration: none;
        color: #ffffffd5;
        text-transform: uppercase;
    }

    a:hover{
        color: #000;
    }

    >div:hover{
        cursor: pointer;
        background-color: #ffffff44;
        color: #000;
    }

    >div:active{
        background-color: #ffffff44;
        color: #000;
    }
`

export const dropDown2 = styled.div`
    top: 5.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .5s;

    ${({isMenuDropDown} ) => isMenuDropDown && css`
        height: 120px;
        opacity: 1;
        visibility: visible;
    `}

    a{
        width: 100%;
        text-align: center;
        font-weight: lighter;
        color: #ffffffd5;
        padding: .5rem 1rem;
        font-size: .8rem;
    }

    a:hover{
        color: #258d84;
        background-color: #2d2d2d;
    }
  
`


export const icons2 = styled.article`
    margin-top: 8rem;
    display: flex;
    gap: 1rem;

    a{  padding: .5rem;
        color: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-align: center;
        
    }
    a:hover{
        color: #ca2323;
    }

    margin-bottom: .5rem;
`


