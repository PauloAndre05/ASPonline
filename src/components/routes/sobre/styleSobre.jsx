import styled from "styled-components";


export const container = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ebebeb;
`

export const header= styled.header`
    position: relative;
`

export const banner = styled.main`
    > div{
        width: 100%;
        height: 430px;
        background-color: black;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .3;
    }

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

    @media screen and (max-width: 768px){
        h1{
            font-size: 1.1rem;
        }

        p{
            font-size: 1rem;
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
    text-align: justify;

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


@media screen and (max-width: 768px){
        h1{
            font-size: 1.1rem;
        }

        p{
            font-size: 1rem;
        }
    }  
`

export const img = styled.img`
    width: 100%;
`

export const more = styled.section`
    background-color: #1d262d;
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

