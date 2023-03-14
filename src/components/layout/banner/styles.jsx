import styled from "styled-components";

export const Banner=styled.section`
    
`;

export const ImageBanner=styled.div`
    background-color: rgba(0, 0, 0, 0.8);overflow: hidden;
    width: 100%;
    height: 100%;

   
@keyframes zoom{
    0%{
        transform: scale(1.3);
    }
    100%{
        transform: scale(1);
    }
}


@media screen and (max-width: 600px){
    height: 26rem;
    > h1{
        font-size: 1.8rem;
    }
    p{
        font-size: 1.2rem;
        width: 95%;
    }
}
`;

export const Imagem=styled.img`
    width: 100%;
    height: 100%;
    opacity: .7;
    object-fit: cover;
    animation: zoom 2.5s;
`

export const Text=styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;    
    
    > h1{
        display: flex;
        justify-content: center;
        font-size: 2.8rem;
        text-shadow: .1px 2px 8px rgba(0, 0, 0, 0.797);
    }

    p{
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
    }


    button{
        background-color: #05162A;
        color: #fff;
        display: flex;
        align-items: center;
    }

    button:hover{
        background-color: #061d38;
    }

    
@media screen and (min-width: 600px) and (max-width: 768px){
    h1{
        font-size: 1.6rem;
        width: 35rem;
    }
    p{
        margin: 0 auto;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    button{
        padding: .5rem 1.4rem;  
        font-size: 1rem;
    }
}
`;

export const ButtonContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
   
`;