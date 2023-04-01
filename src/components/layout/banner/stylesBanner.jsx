import styled from "styled-components";

export const Banner = styled.main`
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box  ;
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
}
    height: 350px;
    width: 100%;
    position: relative;

    

    @media screen and (max-width: 992px){
       height: 300px;
    }
    @media screen and (min-width: 601px) and (max-width: 768px) {
        height: 250px;
        border: 1px solid red;
    }

    @media screen and (min-width: 320px) and (max-width: 600px){
        height: 205px;
    }
`;

export const ImageBanner = styled.div`
    background-color: rgba(0, 0, 0, 0.863);
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

export const Imagem=styled.img`
    width: 100%;
    height: 100%;
    opacity: .4;
    object-fit: cover;
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
        text-shadow: .1px 2px 8px rgba(0, 0, 0, 0.797);
    }

    p{
        text-align: center;
        width: 50%;
        display: flex;
        justify-content: center;
        font-size: 1.3rem;
        margin: 1.5rem auto;
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

    @media screen and (min-width: 320px) and (max-width: 600px){
        h1{
            font-size: 1.5rem;
            width: 80%;
            margin: 0 auto;
        }

        p{
            width: 95%;
            font-size: 17px;
            margin: .8rem auto;
        }
    }
`

 export const ButtonContainer=styled.div`
    display: flex;
    justify-content: center;
    
    a{
        text-decoration: none;
    }

     button{
        border: 1px solid #ffffff31;
        box-shadow: 1px 2px 5px #000000;
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

    @media screen and (min-width: 601px) and (max-width: 768px) {
        button{
            width: 10.5rem;
            font-size: .9rem;
        }  
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