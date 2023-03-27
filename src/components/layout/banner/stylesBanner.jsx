import styled from "styled-components";

export const Banner = styled.main`
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box  ;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
}
    height: 500px;
    width: 100%;
    position: relative;
`;

export const ImageBanner = styled.div`
    background-color: rgba(0, 0, 0, 0.863);
    overflow: hidden;
    width: 100%;
    height: 100%;

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
    opacity: .4;
    object-fit: cover;
`

export const Text = styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
      
    
    > h1{
        width: 100%;
        font-size: 2.4rem;
        text-align: center;
        text-shadow: .1px 2px 8px rgba(0, 0, 0, 0.797);
    }

    p{
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        margin: 1.5rem 0;
    }

`;

 export const ButtonContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    a{
        text-decoration: none;
    }

     button{
        border: 1px solid #ffffff31;
        box-shadow: 1px 2px 5px #000000af;
        color: #fff;
        display: flex;
        align-items: center;
        width: 12rem;
        height: 2rem;
        background-color: #000;
        text-decoration: none;
    }

    button:hover{
        background-color: #131313;
    }
`;

export const toTop = styled.a`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 3rem;
    background-color: #061d38;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: all .5s;
    z-index: 1;

    :hover{
       padding-bottom: 1rem;
       background-color: #fff;
       color: #061d38;
       border-radius: 50%;
    }
`