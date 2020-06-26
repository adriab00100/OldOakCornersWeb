import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostListing from "../components/post-listing";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PostListing posts={data.allMarkdownRemark.edges.map(p => p.node)} />
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
