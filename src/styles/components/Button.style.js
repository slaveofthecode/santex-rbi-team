import styled, { css, createGlobalStyle } from "styled-components";

export const Button = styled.button`
    border-radius: 3px;
    padding: 1rem;
    border:1px solid green;
    cursor: pointer;
    color: green;
    font-weight: 600;
    transition: all 0.2s 0s  ease-in-out;

    ${({ isLink }) => isLink && css`
        background: transparent;
        border: none;
        color: #fff;
        font-weight: 400;        
    `}
    
    &:hover { 
        background: green; 
        color: #fff;
    } 
`;

