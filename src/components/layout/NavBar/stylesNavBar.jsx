import styled from "styled-components";

export const container = styled.main`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

export const menu = styled.nav`
    right: 0;
    left: 0;
    display: flex;  
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: .5rem 8rem;
    background: #185090;
    color: #fff;
    z-index: 100;
    box-shadow: 1px 5px 8px rgba(0, 0, 0, .3);
`

export const lotipo = styled.div`

`
export const lista = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
       display: none;
    } 
`

export const itens = styled.li`
    a{
        font-size: 1.1rem;
        color: #c6c6c6;
        text-decoration: none;
        transition: all .4s;
    }

    a:hover{
        color: #9f9f9f;
    }
`