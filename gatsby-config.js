module.exports = {
    siteMetadata: {
        title: `Thomas Devisscher`,
        author: `Thomas Devisscher`,
        description: 'Resume',
        keywords: [
            'personal',
            'software engineer',
            'javascript',
            'adventure',
            'running',
            'outdoors',
            'photography',
        ],
        siteUrl: 'https://tdev.tech',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/posts`,
            },
        },

        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    content: require.resolve('./src/templates/blog-post.js'),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },

        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
};
