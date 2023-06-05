import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const containerCards = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3rem 0; 
    background-color: #000000c8;
    color: #ffffff9a;
    

    a{
        text-decoration: none;
        color: #a5a5a5;
    }
`

export const card = styled.article`
    width: 16rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding-top: 1rem;
    border: .3px solid #ffffff14;
    border-radius: 5px;
    transition: all .5s;

    :hover{
        box-shadow: 0px 0px 3px #fff;
    } 
    h1{
        text-align: center;
        font-size: 1rem;
        text-transform: uppercase;
        color: #00bd9df4; 
    }
    p{
        font-weight: bolder;
        color: #ebebeb;
    }

    ul{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem;
        list-style: none;
        width: 100%;
        
    }

    li{
        list-style: none;
    }
`