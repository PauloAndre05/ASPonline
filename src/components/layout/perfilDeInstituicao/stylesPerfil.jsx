import styled from "styled-components";


export const container = styled.main`
    width: 100%;
    height: 100%;
    background-color: #000000c8;;
`

export const mapa = styled.div`
    
`

export const containerMain = styled.section`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    div{
        margin: 2rem 0;
        width: 37rem;
        height: 100%;
        overflow: hidden;
        background-color: #000;
        box-shadow: 0 0 3px #00000090;
        border-radius: 0% 1rem;
    }

    width: 100%;
    padding: 2rem;
   
    h2{
        color: #00bd9df4; 
    }

    h3{
        padding: .3rem 0;
        color: #ffffffcc;
    }

    p{
        color: #ffffffcc; 
        padding: .5rem 0;    
    }

    img{
        object-fit: cover;
        opacity: .8;
        width: 100%;
        height: 100%;
    } 

    a{
        text-decoration: none;
        background-color: #fff;
        color: #000;
        border-radius: 0%.3rem;
        padding: .3rem 1rem;
    }

    @media screen and (max-width: 768px ){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        div{
            margin: 2rem 0;
            width: 25rem;
        }

        h2{
            text-align: center;
        }

        h3{
            text-align: center;
        }

        p{
            text-align: center;    
        }


    }


    @media screen and (max-width: 600px ){

        div{
            width: 20rem;

        }
    }

    @media screen and (max-width: 320px ){

        div{
            width: 100%;
            border-radius: 0;
        }   
        
        h3{
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }

        p{
            font-size: .9rem;
        }
    }
`

export const containerEstado = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const aberto = styled.span`
    color: #00bd9df4    
`

export const fechado = styled.span`
    color: #ff1100; 
`