import { DiscussionEmbed } from "disqus-react";
import { graphql } from "gatsby";
import React from "react";
import { ErrorMessage } from "../components/error-message";
import { Layout } from "../components/layout";
import { PostContents } from "../components/post-contents";
import { PostNavigator } from "../components/post-navigator";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type BlogPostProps = {
  data: Queries.BlogPostByPathQuery;
  pageContext: {
    previous?: Post;
    next?: Post;
  };
  children: React.ReactNode | React.ReactNode[];
};

const BlogPost = (props: BlogPostProps) => {
  const { data, pageContext } = props;
  const post = data.mdx;
  const slug = post?.frontmatter?.path?.substring(1) ?? "broken-slug";
  const { previous, next } = pageContext;
  if (!post?.frontmatter) {
    return <ErrorMessage />;
  }
  const disqusConfig = {
    shortname: "oldoakcorners",
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO title={post.frontmatter.title ?? "Untitled"} datePublished={post.frontmatter.date} description={post.excerpt} previewImage={post.frontmatter.previewImage} />
      <PostContents frontmatter={post.frontmatter} contents={props.children} />
      <br />
      <PostNavigator next={next?.frontmatter} previous={previous?.frontmatter} />
      <hr />
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($postPath: String!) {
    mdx(frontmatter: { path: { eq: $postPath } }) {
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
