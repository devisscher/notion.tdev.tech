import React from 'react';
import AppleButton from './AppleButton';
import styled from 'styled-components';

const AppButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8px;
`;

const AppButtons: React.FC<{}> = () => (
    <AppButtonsContainer>
        <AppleButton type="exit" />
        <AppleButton type="minimize" />
        <AppleButton type="maximize" />
    </AppButtonsContainer>
);

export default AppButtons;
