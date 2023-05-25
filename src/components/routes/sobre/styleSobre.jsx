import styled from "styled-components";


export const container = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ebebeb;
`

export const header= styled.header`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`



export const text = styled.div`
    width: 60%;
    opacity: 1;
    color: #fff;
    padding: 0 1rem;

    p{
        width: 100%;
        height: 100%;
        font-size: 1.4rem;
        font-weight: lighter;
        opacity: 0;
        animation: moveBanner 1s 0.7s forwards;
    }

    @keyframes moveBanner{
        0%{
            transform: translateY(10rem) rotateY(-30deg);
        }
        100%{
            transform: translateY(0) rotateY(0);
            opacity: 1;
    }
}

    @media screen and (max-width: 910px){
        width: 80%;
    }   

    @media screen and (max-width: 768px){
        width: 90%;
    }
    
    @media screen and (max-width: 600px){
        width: 100%;
        
    }   

    @media screen and (max-width: 350px){
        width: 100%;
        p{
            font-size: 1.2rem;
        }
    } 
`

export const more = styled.section`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ffffff14;

    div{
        display: flex;
        text-align: center;
    }

    h6{
            color: #dedede;
            margin: 0;
    }

    @media screen and (max-width: 600px) {
        h6{
            font-size: .8rem;
        }
    }
`

export const carrossel = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    overflow: hidden;
    /* box-shadow: inset 0px 0px 20px rgba(237, 237, 237, 0.35); */
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 50%;
    }
`


export const containerImg = styled.div`
    border: 1px solid red;
    width: 23rem;
    overflow: hidden;
    opacity: 0;
    animation: moveBanner 1s 0.7s forwards;
    display: none;
`

