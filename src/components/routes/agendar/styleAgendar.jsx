import styled from "styled-components";

export const header = styled.header`
    position: relative;
`

export const main = styled.main`

`

export const banner = styled.section`
    
    overflow: hidden;
    >div{
        width: 100%;
        height: 400px;
        background-color: #000;
    }

    img{
        opacity: .4;
        width: 100%;
        height: 100%;
        object-fit: cover;
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

    h1{
        font-size: 1.5rem;
        opacity: 0;
        animation: moveBanner 1s 0.5s forwards;
    }

    p{
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
`