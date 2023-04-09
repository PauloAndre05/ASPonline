import styled from "styled-components";

export const container = styled.main`
  
`

export const containerCards = styled.section`
  *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 5rem 0;
    background-color: #000;
    color: #ffffff9a;

    a{
        text-decoration: none;
    }
    h1{
        font-size: 1.3rem;
        color: #bd5500a2; 
    }    
`

export const card = styled.article`
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .6rem;
    border: .3px solid #ffffff14;
    border-radius: 5px;
    transition: all .5s;

    :hover{
        box-shadow: 0px 0px 3px #fff;
    } 
    h1{
        font-size: 1.3rem;
        color: #bd5500a2; 
    }
    p{
        width: 100%;
        font-weight: bolder;
        margin: 1rem 0 .5rem 0;
        color: #fff;
    }

    ul{
        list-style: none;
    }

    button{
        font-size: .8rem;
        background-color: #000;
        color: #fff;
        border: 1px solid #ffffff9a;
        width:100%;
        height: 2.5rem;
        border-radius: none;
    }
`