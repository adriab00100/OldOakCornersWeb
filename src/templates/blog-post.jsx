import React from "react";
//import { graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <div className="centering-container">
        <div className="post-heading">
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Authored by {post.frontmatter.author} on{" "}
            <time>{post.frontmatter.date}</time>
          </h4>
        </div>
      </div>
      <div className="centering-container">
        <section className="blog-post-contents">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </div>
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
