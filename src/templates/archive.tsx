import { Box, Chip, Container, Link, Stack, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
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
      <Box sx={{ marginX: "auto", width: "auto", justifyContent: "center", display: "flex" }}>
        <Container component="section">
          <Box paddingY={1}>
            <Typography variant="h5">More blog posts</Typography>
          </Box>
          <Box component="nav" aria-label="pages of blog posts in archive">
            <Stack direction="row" spacing={2} justifyContent="center" alignContent="center">
              {pages.map(page => {
                return (
                  <Typography key={page}>
                    {currentPage === page ? (
                      <Chip label={page} />
                    ) : (
                      <Link href={page === 1 ? "/blog-posts" : `/blog-posts/${page}`}>
                        <Chip
                          label={page}
                          variant="outlined"
                          sx={{
                            ":hover": {
                              backgroundColor: theme => theme.palette.secondary.main,
                              color: theme => theme.palette.primary.main,
                              outlineColor: theme => theme.palette.primary.main,
                              outlineWidth: "1px",
                              outlineStyle: "solid",
                            },
                          }}
                        />
                      </Link>
                    )}
                  </Typography>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  };

  return (
    <Layout>
      <SEO title="Blog posts" />
      <Stack>
        <Typography variant="h4" padding={2}>
          Blog Posts
        </Typography>
        <Box sx={{ marginX: "auto", width: "auto", justifyContent: "center", display: "flex" }}>
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
