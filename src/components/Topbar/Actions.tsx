import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const ActionsStyled = styled.ul`
    margin-bottom: 0;
    list-style: none;
`;

const ActionsLi = styled.li`
    display: inline;
    margin-left: 8px;
`;

const Actions: React.FC<{}> = () => (
    <ActionsStyled>
        <ActionsLi>share</ActionsLi>
        <ActionsLi>updates</ActionsLi>
        <ActionsLi>favorite</ActionsLi>
        <ActionsLi>...</ActionsLi>
    </ActionsStyled>
);

export default Actions;
