import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { PostContents } from "../components/post-contents";
import { PostNavigator } from "../components/post-navigator";
import { DiscussionEmbed } from "disqus-react";
import { Post } from "../components/post-types";

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
  const slug = latestPost.frontmatter.path.substring(1);

  const disqusConfig = {
    shortname: "oldoakcorners",
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO
        title={`Latest - ${latestPost.frontmatter.title}`}
        datePublished={latestPost.frontmatter.date}
        previewImage={latestPost.frontmatter.previewImage}
      />
      <PostContents post={latestPost} />
      <br />
      <PostNavigator previous={previousPost} />
      <hr />
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export const latestPageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
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
