import React from 'react';
import AppButtons from './AppButtons';
import SidebarToggle from './SidebarToggle';
import styled from 'styled-components';
import BackAndForth from './BackAndForth';
import PostTitle from './PostTitle';
import Actions from './Actions';
import device from '../../utils/mediaQueries';
import { useToggleSidebarContext } from '@/context/useToggleSidebarContext';
const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavigationSidebar = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: row;
    padding-left: 8px;
    background-color: #f7f6f3;
    height: 40px;
    width: 240px;
    align-items: center;
    /* @media ${device.tablet} {
        width: 100%;
        flex: 0;
    } */
`;

const NavigationContent = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    width: 100%;
    flex: 1 1 auto;
`;

const NavigationActions = styled.div`
    flex: 0 0 auto;
    width: 240px;
    @media ${device.tablet} {
        display: none;
    }
`;

const Navigation: React.FC<{}> = () => {
    const { sidebarToggled } = useToggleSidebarContext();
    return (
        <NavigationWrapper>
            <NavigationSidebar>
                <AppButtons />
                <SidebarToggle />
            </NavigationSidebar>
            <NavigationContent>
                <BackAndForth />
                <PostTitle />
            </NavigationContent>
            <NavigationActions>
                <Actions />
            </NavigationActions>
        </NavigationWrapper>
    );
};

export default Navigation;
