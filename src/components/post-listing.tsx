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
      <Grid container>
        {posts.map(post => (
          <PostPreviewTile post={post} />
        ))}
      </Grid>
    </Box>
  );
};
