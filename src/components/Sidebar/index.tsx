import { useToggleSidebarContext } from '@/context/useToggleSidebarContext';
import useSiteMetaData from '@/hooks/useSiteMetadata';
import { useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Avatar from './Avatar';
import device from '../../utils/mediaQueries';

const SidebarStyled = styled.div`
    position: relative;
    display: ${({ sidebarToggled }) => (sidebarToggled ? 'none' : 'flex')};
    flex-direction: column;
    width: ${({ sidebarToggled }) => (sidebarToggled ? '0px' : '240px')};
    height: 100%;
    flex: 1 0 auto;
    background-color: #f7f6f3;
    padding-left: ${({ sidebarToggled }) => (sidebarToggled ? '0px' : '8px')};
    @media ${device.tablet} {
        position: absolute;
        z-index: 2;
    }
`;

const SidebarTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    margin-top: 16px;
    > span {
        margin-left: 8px;
    }
`;
const SidbarMenu = styled.div`
    display: flex;
    width: ${({ sidebarToggled }) => (sidebarToggled ? '0px' : '240px')};
    flex-direction: column;
`;

const Sidebar: React.FC<{}> = () => {
    const { title } = useSiteMetadata();
    const { sidebarToggled } = useToggleSidebarContext();
    return (
        <SidebarStyled sidebarToggled={sidebarToggled}>
            <SidebarTitle>
                <Avatar />
                <span>{title}</span>
            </SidebarTitle>
            <SidbarMenu>
                <div>Me</div>
                <div>Resume</div>
                <div>Digital garden</div>
            </SidbarMenu>
        </SidebarStyled>
    );
};

export default Sidebar;
