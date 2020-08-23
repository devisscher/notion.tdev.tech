import React from 'react';
import Navigation from './Navigation';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import styled from 'styled-components';
import { useToggleSidebarContext } from '@/context/useToggleSidebarContext';

const SidebarToggleStyled = styled.div`
    margin-right: 8px;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    > button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #aaa9a5;
        height: 36px;
        width: 36px;
        border: none;
    }
`;
const SidebarToggle: React.FC<{}> = () => {
    const { sidebarToggled, setSidebarToggled } = useToggleSidebarContext();
    const handleToggleSideBar = () => {
        setSidebarToggled((sidebarToggled) => !sidebarToggled);
    };
    return (
        <SidebarToggleStyled sidebarToggled={sidebarToggled}>
            <button onClick={handleToggleSideBar}>
                {sidebarToggled ? <FiChevronsRight /> : <FiChevronsLeft />}
            </button>
        </SidebarToggleStyled>
    );
};

export default SidebarToggle;
