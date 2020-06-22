import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Link to={post.node.frontmatter.path}>
          <h3>{post.node.frontmatter.title}</h3>
        </Link>
        <small>
          {post.node.frontmatter.author} on {post.node.frontmatter.date}
        </small>
      </div>
    ))}
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
        }
      }
    }
  }
`;

export default IndexPage;
