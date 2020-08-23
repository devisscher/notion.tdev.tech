import React from 'react';
import styled from 'styled-components';

interface Props {
    type?: string;
}

const AppleButtonStyled = styled.button`
    border-radius: 50%;
    width: 1em;
    height: 1em;
    display: inline-block;
    background-color: ${(props) => {
        if (props.type === 'exit') return 'rgba(255, 69, 58, 1)';
        if (props.type === 'minimize') return 'rgba(255, 214, 10, 1)';
        if (props.type === 'maximize') return 'rgba(48, 209, 88, 1)';
    }};
`;

const AppleButton: React.FC<Props> = ({ type }) => (
    <AppleButtonStyled type={type}></AppleButtonStyled>
);

export default AppleButton;
