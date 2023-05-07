import styled from "styled-components";

export const header = styled.header`
    position: relative;
    display: none;
`

export const main = styled.main`

`

export const banner = styled.section`
   

    @media screen and (max-width: 992px){
       height: 300px;
    }
    @media screen and (min-width: 601px) and (max-width: 768px) {
        height: 250px;
    }

    @media screen and (max-width: 600px) {
        height: 100%;
    }
`

export const text = styled.div`
    position: absolute;
    text-align: center ;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 90%;

    h1{
        text-transform: uppercase;
        font-size: 1.5rem;
        opacity: 0;
        animation: moveH1 1.5s 0.5s forwards;
        text-shadow: 1px 2px 8px #000;
    }

    p{
        opacity: 0;
        animation: moveBanner 2s 0.7s forwards;
        text-shadow: 1px 2px 8px #000;
    }

    @keyframes moveH1{
        0%{
            transform: translateX(-10rem) rotateY(-30deg);
        }
        100%{
            transform: translateX(0) rotateY(0);
            opacity: 1;
        }
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

    @media screen and (max-width: 768px){
        h1{
            font-size: 1.1rem;
        }

        p{
            font-size: 1rem;
        }
    }  
`