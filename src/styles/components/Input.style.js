import styled from "styled-components";

export const InputNumber = styled.input`
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 1rem;
    outline: none;
    transition: all 0.2s 0s ease-in-out;

    &:active, &:focus { 
        border-left: 3px solid green; 
    }
`;