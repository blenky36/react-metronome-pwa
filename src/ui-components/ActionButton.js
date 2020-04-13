import styled from 'styled-components';

const ActionButton = styled.button`
    border-radius: 8px;
    text-align: center;
    padding: 5px 10px;
    background-color: #ffffff00;
    color: white;
    margin: 2px;
    border: 2px solid #5AD7FA;
    &:hover {
        background-color: rgba(184, 240, 255, 0.5);
    }
    &:focus {
        outline: none;
    }
`;

export default ActionButton;