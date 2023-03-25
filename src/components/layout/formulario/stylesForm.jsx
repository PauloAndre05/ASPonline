import styled from "styled-components";

export const containerContainer = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`
export const text = styled.section`
    margin-left: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h2{
        font-size: 1.8rem;
    }
    p{
        color: #fff;
        background: linear-gradient(to left, #93BDB4, #869FA4);
        display: inline-block;
        padding: .5rem 0;
        width: 20rem;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
`

export const containerForm = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin: 0 auto;
        padding: 2rem 3rem;
        border-radius: 10px;
`

export const form = styled.form`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    select{
        width: 400px;
    }
`