import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const BackAndForthStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BackAndForth: React.FC<{}> = () => (
    <BackAndForthStyled>
        <FiArrowLeft />
        <FiArrowRight />
    </BackAndForthStyled>
);

export default BackAndForth;
