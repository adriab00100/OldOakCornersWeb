import { Box, Grid } from "@mui/system";
import React from "react";
import "../styles/default-layout.scss";
import { PostPreviewTile } from "./post-preview-tile";
import { Post } from "./post-types";

export type PostListingProps = {
  posts: Post[];
};

export const PostListing = (props: PostListingProps) => {
  const { posts } = props;
  return (
    <Box justifyContent="center" width="100%">
      <Grid container paddingX={3}>
        {posts.map(post => (
          <Grid size={{ xs: 12, sm: 4 }} key={post.frontmatter?.path}>
            <PostPreviewTile post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
