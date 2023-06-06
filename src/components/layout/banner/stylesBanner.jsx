import styled from "styled-components";

export const Banner = styled.main`
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box  ;
}
    height: 580px;
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

`

export const ImageBanner = styled.div`
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 100%;

    img{
        object-fit: cover;
        opacity: .4;
    }
    @media screen and (max-width: 600px){
       display: none;
    }
`

export const ImageBanner2 = styled.div`
    display: none;
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 500px;

    img{
        object-fit: contain;
        opacity: .4;
    }
    @media screen and (max-width: 600px){
        display: block;
    }

    @media screen and (max-width: 320px){
        height: 420px;
    }

`;

export const Imagem=styled.img`
    width: 100%;
    height: 100%;
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
        font-size: 2.8rem;
        text-align: center;
        opacity: 1;
        color: #ffffff;
        margin: 0 auto;
        font-weight: 700;
    }

    p{
        text-align: center;
        width: 50%;
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        margin: 0 auto;
        margin-top: .5rem;
        color: #ffffff;
        opacity: 1;
    }

    @media screen  and (max-width: 992px) {
            h1{
            font-size: 1.8rem;
        }
    }

    @media screen and (max-width: 768px) {
        h1{
            width: 80%;
        }

        p{
            font-size: 1.1rem;
            width: 80%;
        }
    }


    @media screen and (max-width: 600px){
        h1{
            width: 99%;
            margin: 0 auto;
            font-size: 2.4rem;
        }

        p{
            width: 70%;
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 320px) {
        h1{
            font-size: 1.1rem;
            margin: 0 auto;
        }
    }
`

 export const ButtonContainer=styled.div`
    display: flex;
    justify-content: center;
    transition: all .6s;
    
    a{
        text-decoration: none;
    }

     button{
        margin-top: 2rem;
        padding: 1.2rem 0;
        color: #ffffff;
        width: 12rem;
        height: 2.2rem;
        text-decoration: none;
        border-radius: .6rem;
        background-color: #613bc2;
        
    }
    
    button:hover{
        color: #000000;
        box-shadow: none;
    }

    @media screen and (min-width: 601px) and (max-width: 768px) {
        button{
            width: 10.5rem;
            font-size: .9rem;
        }  
    }

    @media screen and (max-width: 768px){ 
           button{
            width: 10rem;
            height: 2rem;
            font-size: .9rem; 
        } 
    }

   
`

export const toTop = styled.a`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 2rem;
    background-color: #258d84;
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
