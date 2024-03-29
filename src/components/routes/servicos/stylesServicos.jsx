import styled from "styled-components";

export const container = styled.main`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    background-color: #d3d3d3;
`

export const content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const text = styled.div` 
    padding: 3rem 0;
    color: #000000;
    h3{
        text-align: center;

    }

    p{
        text-align: center;
    }
`

export const containerCards = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    color: #000000d1;

    a{
        text-decoration: none;
        color: #a5a5a5;
    }
    
`

/* =============================== SLIDER ======================================= */

export const containerSlider = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    border-radius: .3rem;
`

export const coment = styled.div`
    width: 60%;
`

export const card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    border: .3px solid #9b9b9bc5;
    border-radius: 5px;
    transition: all .5s;
    background-color: #fff;

    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 5px #5f5f5f;
    } 
    h1{
        text-align: center;
        font-size: 1rem;
        text-transform: uppercase;
        color: #000;
    }
    p{
        font-weight: bolder;
        color: #ebebeb;
    }
`

export const containerCard = styled.div`
    border: 6px solid transparent;
`

export const desc = styled.div`
    padding: 3rem 0;

    >div{
        padding: 1rem;
        text-align: center;
        background-color: #fff;
        max-width: 60%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: .3rem;
        box-shadow: 0 0 10px #0000004e;
    }

    div>div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 1.5rem;
    }

    @media screen and (max-width: 600px){

        >div{
            max-width: 95%;
            height: 15rem;
        }
    }
`