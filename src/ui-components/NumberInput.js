import styled from 'styled-components';

const NumberInput = styled.input`
    border-radius: 8px;
    text-align: center;
    padding: 2px;
    margin-bottom: 5px;
    background-color: #ffffff00;
    color: #5AD7FA;
    border: 2px solid #5AD7FA;
    &:hover {
        background-color: rgba(184, 240, 255, 0.5);
    }
    &:focus {
        outline: none;
    }
`;

export default NumberInput;