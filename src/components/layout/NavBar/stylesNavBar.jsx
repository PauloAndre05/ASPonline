import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
`

export const hamburguer = styled.div`

    display: none;

    @media screen and (max-width: 768px){
        width: 2rem;
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div{
            width: 100%;
            height: .15rem;
            background-color: #fff;
        }
    }
`

export const line1 = styled.div`
    
`

export const line2 = styled.div`
`

export const line3 = styled.div`
`

export const menu = styled.nav`
    right: 0;
    left: 0;
    display: flex;  
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: .6rem 8rem .9rem 8rem;
    background: #185090;
    color: #fff;
    z-index: 100;
    box-shadow: 1px 5px 8px rgba(0, 0, 0, .3);

    @media screen and (max-width: 768px) {
        padding: .6rem 3rem .9rem 3rem;
    } 

    @media screen and (min-width: 768px) and (max-width: 992px){
        padding: .6rem 4rem .9rem 4rem;
    } 
`

export const sideBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: #4A4F52;
    display: none;
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

{/* <Lightbulb size={48} weight="thin" />
<Bell size={48} weight="thin" />
<CheckCircle size={48} weight="thin" />
<IdentificationBadge size={48} weight="thin" />
<Keyboard size={48} weight="thin" />
<LightbulbFilament size={48} weight="thin" />
<SealCheck size={48} weight="thin" />
<UserRectangle size={48} weight="thin" />
*/}

export const lista2 = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    list-style: none;

    a{
        color: black;
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

    :hover{
        background-color: #82b6e0a5;
    }

    :active{
        background-color: #1d1c33ba;
    }
    a{
        
        padding: .7rem 0;
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        color: #82B6E0;
        text-decoration: none;
    }

    a:hover{
        color: #fff;
    }

    a:active{
    }
`