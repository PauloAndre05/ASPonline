import styled from "styled-components";


export const container = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const header= styled.header`
    position: relative;
`

export const banner = styled.main`
    > div{
        width: 100%;
        height: 72vh;
        background-color: black;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .3;
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
        text-transform: uppercase;
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

export const content = styled.section`
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 3rem 2rem;
    > div{
        width: 23rem;
        overflow: hidden;
        opacity: 0;
        animation: moveBanner 1s 0.7s forwards;
    }

    img{
        width: 100%;
    }

    

    p{
        font-size: 1.2rem;
        width: 100%;
        opacity: 0;
        animation: moveAbout 1s 0.7s forwards;
    }

    @keyframes moveAbout{
        0%{
            transform: translateX(10rem) rotateX(-30deg);
        }
        100%{
            transform: translateX(0) rotateX(0);
            opacity: 1;
        }
    }

    @keyframes moveAboutImg{
        0%{
            transform: translateY(10rem) rotateY(-30deg);
        }
        100%{
            transform: translateY(0) rotateY(0);
            opacity: 1;
    }
}
`

export const more = styled.section`
    background-color: #4A4F52;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 1rem 0;

    div{
        display: flex;
        text-align: center;
    }

    h6{
            color: #dedede;
            margin: 0;
    }

    h1{
        color: #82B6E0;
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

