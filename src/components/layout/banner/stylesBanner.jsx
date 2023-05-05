import styled from "styled-components";

export const Banner = styled.main`
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box  ;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
}
    height: 430px;
    width: 100%;
    position: relative;


    @media screen and (max-width: 992px){
       height: 300px;
    }
    @media screen and (min-width: 601px) and (max-width: 768px) {
        height: 250px;
    }

    @media screen and (max-width: 600px) {
        height: 100%;
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

    @keyframes moveButton{
        0%{
            transform: translateX(10rem) rotateX(-30deg);
        }
        100%{
            transform: translateX(0) rotateX(0);
            opacity: 1;
    }
}

`

export const ImageBanner = styled.div`
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px){
       display: none;
    }
`

export const ImageBanner2 = styled.div`
    display: none;
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 290px;
    @media screen and (max-width: 600px){
        display: block;
    }

    img{
        object-fit: contain;
    }
`;

export const Imagem=styled.img`
    width: 100%;
    height: 100%;
    opacity: .4;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 600px){
        object-fit: contain;
}
`

export const Text = styled.div`
    width: 100%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
      
    
    > h1{
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 1px 2px 8px #000;
        opacity: 0;
        color: #e2e2e2;
        animation: moveBanner 1s 0.5s forwards;
    }

    p{
        text-align: center;
        width: 50%;
        display: flex;
        justify-content: center;
        font-size: 1.3rem;
        margin: 1.5rem auto;
        color: #d1d1d1;
        opacity: 0;
        animation: moveBanner 1s 0.9s forwards;
        text-shadow: 1px 2px 8px #000;
    }

    @media screen  and (max-width: 992px) {
            h1{
            font-size: 1.8rem;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 768px) {
        h1{
            font-size: 1.3rem;
        }

        p{
            font-size: 1.1rem;
            width: 70%;
        }
    }

    @media screen and (max-width: 600px){
        h1{
            font-size: 1rem;
            width: 80%;
            margin: 0 auto;
        }

        p{
            width: 95%;
            font-size: .8rem;
            margin: .8rem auto;
        }
    }

    @media screen and (max-width: 600px){
        
        h1{
            font-size: 1.1rem;
        }
      }

    @media screen and (min-width: 360px) and (max-width: 600px){
        h1{
            font-size: 1.1rem;
            width: 90%;
            margin: 0 auto;
        }

        p{
            width: 95%;
            font-size: 15px;
            margin: .8rem auto;
        }
    }
`

 export const ButtonContainer=styled.div`
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: moveButton 1s 1.5s forwards;
    
    a{
        text-decoration: none;
    }

     button{
        border: 1px solid #ffffff90;
        color: #cacaca;
        display: flex;
        align-items: center;
        width: 12rem;
        height: 2.2rem;
        background-color: #03242b;
        text-decoration: none;
        border-radius: .7rem;

    }

    button:hover{
        background-color: #021418;;
        color: #fff;
        box-shadow: none;
    }

    @media screen and (min-width: 601px) and (max-width: 768px) {
        button{
            width: 10.5rem;
            font-size: .9rem;
        }  
    }

    @media screen and (max-width: 600px){
      display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 600px){
        button{
            width: 10rem;
            height: 1.6rem;
            font-size: 14px;  
        } 
    }
`

export const toTop = styled.a`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 2rem;
    background-color: #061d38;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: all .7s;
    z-index: 1;

    :hover{
       padding-bottom: .5rem;
       background-color: #fff;
       color: #061d38;
       border-radius: 50%;
    }
    
    @media screen and (max-width: 768px) {
        display: none;
    } 
`
