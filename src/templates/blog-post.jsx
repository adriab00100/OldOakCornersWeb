import React from "react";
import { Link, graphql } from "gatsby"
import PostContents from "../components/post-contents";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} datePublished={post.frontmatter.date} />
      <PostContents post={post} />
      <br/>
      <ul className="page-navigator">
        {previous && (
          <li><Link to={previous.frontmatter.path} rel="previous">← {previous.frontmatter.title}</Link></li>
        )}
        {next && (
          <li><Link to={next.frontmatter.path} rel="next">{next.frontmatter.title} →</Link></li>
        )}
      </ul>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        previewImage
      }
    }
  }
`;

export default BlogPost;
