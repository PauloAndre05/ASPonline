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
    background: linear-gradient(to left, #000, #fff);
    padding:.5rem 11.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0000004e;
    >a {
        width: 8.5rem;
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
    gap: .5rem;

    ${({ isOpen }) => isOpen && css`
        display: none;
    `}

    a{
        color: #ca2323;
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
    background-color: #000000;/* 
    background: linear-gradient(to right,#131313, #122f47dc); */
    color: #fff;
    z-index: 100;
    border-bottom: 3px solid #ff000090;
    /*   */
    
    

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
    background-color: #000;
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

export const itens = styled.li`
    a{
        font-size: 1rem;                
        text-decoration: none;
        transition: all .2s;
        color: #fff;
    }

    a:active{
        color: #DC9833;
        border-bottom: 3px solid #DC9833;
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
        color: #ffffff;
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
        font-size: 1rem;                
        text-decoration: none;
        color: #fff;
        padding-bottom: .4rem;
    }
    
`


export const dropDown = styled.div`
    background-color: #fff;
    position: absolute;
    top: 3rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all .2s;
    padding: .2rem;

    ${({isMenuDropDown2} ) => isMenuDropDown2 && css`
        opacity: 1;
    `}

    a{
        width:100%;
        text-align: center;
        font-weight: bold;
        font-size: .7rem;
        color: #000;
        padding: .5rem;
    }

    a:hover{
        color: #fff;
        background: linear-gradient(to right,#000000ef, #122f47dc, #000000ef );
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
        color: #fff;
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
    padding: .2rem;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .5s;
    background-color: #ffffff44;

    ${({isMenuDropDown} ) => isMenuDropDown && css`
        height: 120px;
        opacity: 1;
        visibility: visible;
    `}

    a{
        width: 100%;
        text-align: center;
        font-weight: bold;
        color: #fff;
        padding: .5rem 1rem;
        font-size: .8rem;
    }

    a:hover{
        color: #f8f8f7;
        background-color: #ffffff44;
    }

    :active{
        color: #f8f8f7;
        background-color: #ffffff44;
    }
  
`


export const icons2 = styled.article`
    margin-top: 8rem;
    display: flex;
    gap: 1rem;

    a{  padding: .5rem;
        background-color: #0000009d;
        color: #ca2323a9;
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


