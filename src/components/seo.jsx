/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, datePublished, previewImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaDatePublished = datePublished || "2020-06-28";
  const metaPreviewImage = previewImage || "https://res.cloudinary.com/dgqmwqi0v/image/upload/f_auto,q_auto,w_800/site-assets/mallet_vfigwm.jpg";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title}`}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          property: `og:image`,
          content: metaPreviewImage
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Blog",
          "name": "Old Oak Corners Blog",
          "author": {
            "@type": "Person",
            "name": "${site.siteMetadata.author}"
          },
          "datePublished": "${metaDatePublished}",
          "description": "${metaDescription}",
        }`}
      </script>
    </Helmet>
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
  datePublished: PropTypes.string, 
  previewImage: PropTypes.string,
};

export default SEO;
