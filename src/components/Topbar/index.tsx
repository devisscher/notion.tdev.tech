import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    height: 40px;
`;

const Header: React.FC<{}> = () => (
    <HeaderStyled>
        <Navigation />
    </HeaderStyled>
);

export default Header;
