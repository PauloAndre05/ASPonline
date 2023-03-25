import styled from "styled-components";



export const container = styled.main`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;

export const menu = styled.nav`
    display: flex;  
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 1rem 6rem;
    background: #05162A;
    color: #fff;
    z-index: 100;
`

export const lotipo = styled.div`

`

export const lista = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
`

export const itens = styled.li`
    a{
    color: #c6c6c6;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all .4s;
    }
`