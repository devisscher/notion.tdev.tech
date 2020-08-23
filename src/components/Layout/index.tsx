import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import Header from '../Topbar';
import ToggleSidebarContext from '../../context/useToggleSidebarContext';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../Sidebar';
import SEO from './Seo';
import { FiVolumeX } from 'react-icons/fi';
import TitleContext from '@/context/useTitleContext';
import device from '../../utils/mediaQueries';
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === 'black' ? 'black' : 'black')};
  }
  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 0;
    max-width: 100%;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: #37352F;
  }
`;

const MainWrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    width: 1000px;
    flex: 1 1 auto;
    margin: 0 auto;

    padding: 64px 15px 0 15px;
    @media ${device.laptopL} {
        width: 800px;
    }
    @media ${device.laptop} {
        width: 600px;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`;

const Banner = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80');
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    flex: 1 1 auto;
    height: 350px;
    object-fit: cover;
`;

const BannerEmoji = styled.div`
    display: flex;
    width: 1000px;
    flex: 0 1 auto;
    margin: -72px auto 0 auto;
    padding: 15px 0;
    z-index: 1;
    font-size: 5em;
    @media ${device.laptopL} {
        width: 800px;
    }
    @media ${device.laptop} {
        width: 600px;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`;

const Layout: React.FC<PageProps> = ({ children }) => {
    const [sidebarToggled, setSidebarToggled] = useState<boolean>();
    const [title, setTitle] = useState<string>();
    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <ToggleSidebarContext.Provider
                value={{ sidebarToggled, setSidebarToggled }}
            >
                <SEO title="Hello" />
                <div className="content">
                    <GlobalStyle theme="black" />
                    <div>
                        <Header />
                    </div>
                    <div style={{ display: 'flex', height: '100%' }}>
                        <Sidebar />
                        <MainWrapper>
                            <Banner></Banner>
                            <BannerEmoji>🔥</BannerEmoji>
                            <Content>{children}</Content>
                        </MainWrapper>
                    </div>
                </div>
            </ToggleSidebarContext.Provider>
        </TitleContext.Provider>
    );
};

export default Layout;
