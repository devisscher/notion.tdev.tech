import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import { useTitleContext } from '../../context/useTitleContext';
function SEO({
    description,
    lang,
    meta,
    image: metaImage,
    title: titleProp,
    pathname,
}) {
    useEffect(() => {
        if (title) {
            setTitle(titleProp);
        } else if (siteMetadata.title) {
            setTitle(siteMetadata.title);
        }
    }, [titleProp]);

    const { title, setTitle } = useTitleContext();
    const siteMetadata = useSiteMetadata();
    const metaDescription = description || siteMetadata.description;
    const image =
        metaImage && metaImage.src
            ? `${siteMetadata.siteUrl}${metaImage.src}`
            : null;
    const canonical = pathname ? `${siteMetadata.siteUrl}${pathname}` : null;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${title}`}
            link={
                canonical
                    ? [
                          {
                              rel: 'canonical',
                              href: canonical,
                          },
                      ]
                    : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: siteMetadata.keywords.join(','),
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    metaImage
                        ? [
                              {
                                  property: 'og:image',
                                  content: image,
                              },
                              {
                                  property: 'og:image:width',
                                  content: metaImage.width,
                              },
                              {
                                  property: 'og:image:height',
                                  content: metaImage.height,
                              },
                              {
                                  name: 'twitter:card',
                                  content: 'summary_large_image',
                              },
                          ]
                        : [
                              {
                                  name: 'twitter:card',
                                  content: 'summary',
                              },
                          ]
                )
                .concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
    pathname: PropTypes.string,
};

export default SEO;
