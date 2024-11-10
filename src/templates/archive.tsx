import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link, graphql } from "gatsby";
import React from "react";
import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { PostListing } from "../components/post-listing";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type ArchiveProps = {
  data: {
    allMdx: {
      edges: { node: Post }[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
};

const Archive = (props: ArchiveProps) => {
  const { data, pageContext } = props;
  const { currentPage, numPages } = pageContext;
  const pages = new Array(numPages);
  for (let i = 0; i < pages.length; i++) {
    pages[i] = i + 1;
  }
  const PageListing = (props: { pages: number[]; currentPage: number }) => {
    const { pages, currentPage } = props;
    return (
      <section>
        <Container type="centering">
          <h4 className="page-listing-title">More pages in the archive</h4>
        </Container>
        <nav aria-label="pages of blog posts in archive">
          <ul className="pages-listing">
            {pages.map(page => {
              return (
                <li key={page}>
                  {currentPage === page ? <span className="current-page">{page}</span> : <Link to={page === 1 ? "/blog-posts" : `/blog-posts/${page}`}>{page}</Link>}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    );
  };

  return (
    <Layout>
      <SEO title="Blog posts" />
      <Stack>
        <Typography variant="h4" padding={3}>
          Blog Posts
        </Typography>
        <Box justifyContent="center">
          <PostListing posts={data.allMdx.edges.map(p => p.node)} />
        </Box>
        {pages.length > 1 && <PageListing pages={pages} currentPage={currentPage} />}
      </Stack>
    </Layout>
  );
};

export const archiveQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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

export default Archive;
