import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Layout/Seo';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPostTemplate = ({ data }) => {
    const siteMetadata = useSiteMetadata();
    const post = data.mdx;
    console.log('post', post);
    const siteTitle = siteMetadata.title;
    const image = post.frontmatter.featured
        ? post.frontmatter.featured.childImageSharp.resize
        : null;

    return (
        <Layout title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
                image={image}
                pathname="/"
            />
            <h1>{post.frontmatter.title}</h1>
            <MDXRenderer>{post.body}</MDXRenderer>
        </Layout>
    );
};

export default BlogPostTemplate;

export const query = graphql`
    query MyQuery {
        mdx {
            id
            slug
            body
            frontmatter {
                title
                description
                image: featured {
                    childImageSharp {
                        resize(width: 1200) {
                            src
                            height
                            width
                        }
                    }
                }
            }
        }
    }
`;
