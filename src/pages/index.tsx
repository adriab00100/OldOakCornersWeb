import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { PostPreviewTile } from "../components/post-preview-tile";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type LatestPostProps = {
  data: {
    allMdx: {
      edges: { node: Post }[];
    };
  };
};

const IndexPage = (props: LatestPostProps) => (
  <Layout>
    <SEO title="Home" />
    <Box sx={{ padding: 2 }} component="section">
      <Stack>
        <Box textAlign="center" sx={{ paddingY: 3 }}>
          <Typography>
            Welcome to Brian's personal website. This is primarily a space where I write about woodworking projects. Checkout my latest post, or the blog for older posts.
          </Typography>
        </Box>
        <div className="blog-listing">
          <Box>
            <Stack direction="row">
              <Stack>
                <Typography variant="h4" sx={{ paddingY: 1 }}>
                  Latest commission
                </Typography>
                <PostPreviewTile
                  post={{
                    excerpt: "Something interesting is coming here soon. Stay tuned...",
                    frontmatter: {
                      date: "2024-11-08",
                      title: "Commissions coming soon",
                      path: null,
                      previewImage: null,
                      author: null,
                      tags: [],
                    },
                  }}
                />
              </Stack>

              <Stack>
                <Typography variant="h4" sx={{ paddingY: 1 }}>
                  Latest blog entry
                </Typography>
                <PostPreviewTile post={props.data.allMdx.edges[0].node} />
              </Stack>
            </Stack>
          </Box>
        </div>
      </Stack>
    </Box>
  </Layout>
);

export const latestPageQuery = graphql`
  query LatestPost {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default IndexPage;
