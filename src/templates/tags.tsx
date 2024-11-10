import { Container, Typography } from "@mui/material";
import { Link, graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { PostListing } from "../components/post-listing";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type TagsProps = {
  pageContext: {
    tag: string;
  };
  data: {
    allMdx: {
      totalCount: number;
      edges: { node: Post }[];
    };
  };
};

const Tags = (props: TagsProps) => {
  const { pageContext, data } = props;
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={tagHeader} />
      <Container>
        <Typography variant="h3">{tagHeader}</Typography>
      </Container>
      <PostListing posts={edges.map(p => p.node)} />
      <Container>
        <Link to="/tags">View full tag listing</Link>
      </Container>
    </Layout>
  );
};

export default Tags;

export const tagsPageQuery = graphql`
  query ($tag: String) {
    allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`;
