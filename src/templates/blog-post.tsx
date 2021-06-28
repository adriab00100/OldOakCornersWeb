import React from "react";
import { graphql } from "gatsby";
import { PostContents } from "../components/post-contents";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { PostNavigator } from "../components/post-navigator";
import { DiscussionEmbed } from "disqus-react";
import { Post } from "../components/post-types";

export type BlogPostProps = {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    previous?: Post;
    next?: Post;
  };
};

const BlogPost = (props: BlogPostProps) => {
  const { data, pageContext } = props;
  const post = data.markdownRemark;
  const slug = post.frontmatter.path.substring(1);
  const { previous, next } = pageContext;

  const disqusConfig = {
    shortname: "oldoakcorners",
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        datePublished={post.frontmatter.date}
        description={post.excerpt}
        previewImage={post.frontmatter.previewImage}
      />
      <PostContents post={post} />
      <br />
      <PostNavigator next={next} previous={previous} />
      <hr />
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        title
        author
        date
        previewImage
        tags
      }
    }
  }
`;

export default BlogPost;
