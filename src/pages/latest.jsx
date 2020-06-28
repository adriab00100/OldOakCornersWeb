import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostContents from "../components/post-contents";

const LatestPage = ({ data }) => {
    const latestPost = data.allMarkdownRemark.edges[0].node;

    return (
        <Layout>
            <SEO title={`Latest - ${latestPost.frontmatter.title}`} />
            <PostContents post={latestPost} />
        </Layout>
    );
};


export const latestPageQuery = graphql`
{
  allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: 1
    ) {
    edges {
      node {
        html
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }
}
`;

export default LatestPage;