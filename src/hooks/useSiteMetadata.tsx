import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};
export default useSiteMetadata;
