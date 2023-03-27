import styled from "styled-components";
export const button = styled.button`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    display: flex;
    justify-content: center;
    align-items: center;    
    letter-spacing: .15rem; 
    border-radius: 5px;
    border: none;
    transition: all .5s;
    
    :hover{
        cursor: pointer;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.703);
    }
`