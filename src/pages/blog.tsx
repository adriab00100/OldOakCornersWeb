import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { PostListing } from "../components/post-listing";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type BlogPageProps = {
  data: {
    allMdx: {
      edges: {
        node: Post;
      }[];
    };
  };
};

const BlogPage = (props: BlogPageProps) => (
  <Layout>
    <SEO title="Blog Home" />
    <section>
      <h1>Welcome to Brian&apos;s workshop</h1>
      <p>This is my blog about woodworking projects, thoughts, ideas. Look below for the most recent 10 posts. Check the archive for more!</p>
    </section>
    <PostListing posts={props.data.allMdx.edges.map(p => p.node)} />
  </Layout>
);

export const blogPageQuery = graphql`
  query BlogIndexQuery {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
