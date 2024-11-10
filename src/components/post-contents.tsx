import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { toKebabCase } from "../utilities/string-manipulations";
import { PostFrontmatter } from "./post-types";

export type PostContentsProps = {
  frontmatter: PostFrontmatter;
  contents: React.ReactNode | React.ReactNode[];
};

export const PostContents = (props: PostContentsProps) => {
  const { frontmatter } = props;
  return (
    <Stack>
      <Container sx={{ padding: 3, justifyContent: "center" }}>
        <Stack spacing={1} justifyContent="center">
          <Typography variant="h4" textAlign="center">
            {frontmatter.title}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            by {frontmatter.author} on <time>{frontmatter.date}</time>
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            {(frontmatter.tags ?? []).map(tag => {
              return (
                tag && (
                  <Link to={`/tags/${toKebabCase(tag)}`}>
                    <Chip
                      label={tag}
                      sx={{
                        ":hover": {
                          backgroundColor: "hsl(38, 63%, 82%)",
                          color: "hsl(30, 80%, 17%)",
                          outlineColor: "hsl(30, 80%, 17%)",
                          outlineWidth: "1px",
                          outlineStyle: "solid",
                        },
                      }}
                    />
                  </Link>
                )
              );
            })}
          </Stack>
        </Stack>
      </Container>
      <Box component="section" className="blog-post-contents">
        {props.contents}
      </Box>
    </Stack>
  );
};
