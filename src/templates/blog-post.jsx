import React from "react";
import { Link, graphql } from "gatsby"
import PostContents from "../components/post-contents";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { DiscussionEmbed } from "disqus-react";

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const slug = post.frontmatter.path.substring(1);
  const { previous, next } = pageContext;

  const disqusConfig = {
    shortname: 'oldoakcorners',
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO title={post.frontmatter.title} datePublished={post.frontmatter.date} />
      <PostContents post={post} />
      <br />
      <nav aria-label="Previous and/or next post">
        <ul className="page-navigator">
          {previous && (
            <li>Previous Post <br />
              <Link to={previous.frontmatter.path} rel="previous">← {previous.frontmatter.title}</Link>
            </li>
          )}
          {next && (
            <li style={{textAlign: 'right'}}>Next Post <br />
              <Link to={next.frontmatter.path} rel="next">{next.frontmatter.title} →</Link>
            </li>
          )}
        </ul>
      </nav>
      <hr />
      <DiscussionEmbed {...disqusConfig} />
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
