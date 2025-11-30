import { Chip, Container, Stack, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import { CustomMdxComponentProvider } from "../styles/mdx-components-provider";
import { toKebabCase } from "../utilities/string-manipulations";
import { PostFrontmatter } from "./post-types";

export type PostContentsProps = {
  frontmatter: PostFrontmatter;
  contents: React.ReactNode | React.ReactNode[];
};

export const PostContents = (props: PostContentsProps) => {
  const { contents, frontmatter } = props;
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
                          backgroundColor: theme => theme.palette.secondary.main,
                          color: theme => theme.palette.primary.main,
                          outlineColor: theme => theme.palette.primary.main,
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
      <CustomMdxComponentProvider>
        <Stack
          component="section"
          spacing={1}
          paddingX={{ xs: 0, sm: 2 }}
          sx={{
              img: {
                paddingY: 2
              },
          }}
        >
          {contents}
        </Stack>
      </CustomMdxComponentProvider>
    </Stack>
  );
};
