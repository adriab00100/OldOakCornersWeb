import React from "react";
import { graphql } from "gatsby"
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <Container type="centering">
        <div className="post-heading">
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Authored by {post.frontmatter.author} on{" "}
            <time>{post.frontmatter.date}</time>
          </h4>
        </div>
      </Container>
      <Container type="centering">
        <section className="blog-post-contents">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </Container>
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
      }
    }
  }
`;

export default BlogPost;
