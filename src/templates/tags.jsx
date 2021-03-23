import React from "react";
import { Link, graphql } from "gatsby";
import PostListing from "../components/post-listing";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={tagHeader} />
      <Container type="centering">
        <h1>{tagHeader}</h1>
      </Container>
      <PostListing posts={edges.map(p => p.node)} />
      <Container type="centering">
        <Link to="/tags">View full tag listing</Link>
      </Container>
    </Layout>
  );
};

export default Tags;

export const tagsPageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`;
