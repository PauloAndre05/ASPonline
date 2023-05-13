import styled from "styled-components";

export const container = styled.main`
    z-index: 100;
`

export const containerCards = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 5rem 3rem;
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
        list-style: none;
        width: 100%;
    }

    li{
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