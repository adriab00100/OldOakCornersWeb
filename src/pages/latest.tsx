import { DiscussionEmbed } from "disqus-react";
import { graphql } from "gatsby";
import React from "react";
import { ErrorMessage } from "../components/error-message";
import { Layout } from "../components/layout";
import { PostContents } from "../components/post-contents";
import { PostNavigator } from "../components/post-navigator";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type LatestPageProps = {
  data: {
    allMarkdownRemark: {
      edges: { node: Post }[];
    };
  };
};

const LatestPage = (props: LatestPageProps) => {
  const latestPost = props.data.allMarkdownRemark.edges[0].node;
  const previousPost = props.data.allMarkdownRemark.edges[1].node;

  if (!latestPost.html || !latestPost.frontmatter || !latestPost.frontmatter?.path) {
    return <ErrorMessage />;
  }
  const slug = latestPost.frontmatter.path.substring(1);

  const disqusConfig = {
    shortname: "oldoakcorners",
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO title={`Latest - ${latestPost.frontmatter.title}`} datePublished={latestPost.frontmatter.date} previewImage={latestPost.frontmatter.previewImage} />
      <PostContents post={latestPost} />
      <br />
      <PostNavigator previous={previousPost.frontmatter} />
      <hr />
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const latestPageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
            author
            previewImage
            tags
          }
        }
      }
    }
  }
`;

export default LatestPage;
