import { Box, Card, CardContent, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { ErrorMessage } from "./error-message";
import { Post } from "./post-types";

export type PostPreviewTileProps = {
  post: Post;
};

export const PostPreviewTile = (props: PostPreviewTileProps) => {
  const { post } = props;
  if (!post?.frontmatter) {
    return <ErrorMessage />;
  }
  return (
    <Box padding={1}>
      <Card sx={{ "@media screen and (min-width: 501px)": { maxWidth: "400px" }, height: "100%", borderColor: "hsl(39, 16%, 76%)" }} variant="outlined" key={post.frontmatter.path}>
        <CardContent>
          <Stack spacing={1}>
            {post.frontmatter.path ? (
              <Link href={post.frontmatter.path ? `/blog${post.frontmatter.path}` : "/404"} sx={{ color: "black" }} underline="hover">
                <Typography variant="h5" paddingTop={1}>
                  {post.frontmatter.title}
                </Typography>
              </Link>
            ) : (
              <Typography variant="h5" paddingTop={1}>
                {post.frontmatter.title}
              </Typography>
            )}
            <Typography variant="subtitle1" paddingBottom={1}>
              {post.frontmatter.author} on {post.frontmatter.date}
            </Typography>
            <Typography>{post.excerpt}</Typography>
            {post.frontmatter.path && (
              <Link href={post.frontmatter.path ? `/blog${post.frontmatter.path}` : "/404"}>
                <Typography sx={{ paddingTop: 1, textAlign: "right" }}>Read Post</Typography>
              </Link>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
