import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import { useTitleContext } from '../../context/useTitleContext';
const PostTitleStyled = styled.div``;

const PostTitle: React.FC<{}> = () => {
    const { title } = useTitleContext();
    return <PostTitleStyled>{title}</PostTitleStyled>;
};

export default PostTitle;
