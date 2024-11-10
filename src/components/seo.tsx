import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export type MetaType = {
  name: string;
  content: string;
};

export type SeoProps = {
  description?: string | null;
  lang?: string | null;
  meta?: MetaType[] | null;
  title: string;
  datePublished?: string | null;
  previewImage?: string | null;
};

export const SEO = (seoProps: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const { description, meta, title, datePublished, previewImage } = seoProps;
  const lang = seoProps.lang ?? "en";

  const metaDescription = description || (site.siteMetadata.description as string);
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
          content: metaPreviewImage,
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
      ].concat(meta ?? [])}
    >
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Blog",
          "name": "Brian Adriance's Website",
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
};
