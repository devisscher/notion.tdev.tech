import React from 'react';
import { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout/index';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useSiteMetadata from '@/hooks/useSiteMetadata';

const Home: React.FC<> = ({ data }) => {
    const { description } = useSiteMetadata();
    return (
        <Layout>
            <h3>{description}</h3>
            <div>
                {data.allMdx.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3>
                            {node.frontmatter.title}{' '}
                            <span>— {node.frontmatter.dates}</span>
                        </h3>
                        <MDXRenderer>{node.body}</MDXRenderer>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        dates
                    }
                    excerpt
                    body
                }
            }
        }
    }
`;

export default Home;
