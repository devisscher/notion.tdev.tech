import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const AvatarStyled = styled.div`
    width: 24px;
    height: 24px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    background-color: #aaa9a5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const AvatarImageStyled = styled(Image)`
    border-radius: 4px;
`;

const Avatar: React.FC<{}> = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    avatar: file(relativePath: { regex: "/small-me.png/" }) {
                        childImageSharp {
                            fixed(width: 24, height: 24) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                console.log('data', data);
                return (
                    <AvatarStyled>
                        {data.avatar ? (
                            <AvatarImageStyled
                                fixed={data.avatar.childImageSharp.fixed}
                            />
                        ) : (
                            'TD'
                        )}
                    </AvatarStyled>
                );
            }}
        />
    );
};

export default Avatar;
