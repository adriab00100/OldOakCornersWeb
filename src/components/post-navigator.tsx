import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import "../styles/default-layout.scss";
import { PostFrontmatter } from "./post-types";

export type PostNavigatorProps = {
  next?: PostFrontmatter | null;
  previous?: PostFrontmatter | null;
};

export const PostNavigator = (props: PostNavigatorProps) => {
  const { next, previous } = props;
  return (
    <Box component="nav" aria-label="Previous and/or next post" sx={{ paddingY: 2, marginX: "auto", width: "auto", justifyContent: "center", display: "flex" }}>
      <Stack direction="row" spacing={2}>
        {next && next.path && (
          <Stack>
            <Typography>Newer Post </Typography>
            <Link to={`/blog${next.path}`} rel="next">
              <Stack direction="row">
                <ArrowBackIcon />
                <Typography>{next.title ?? "Next"}</Typography>
              </Stack>
            </Link>
          </Stack>
        )}
        {previous && previous.path && (
          <Stack sx={{ textAlign: "right" }}>
            <Typography>
              Older Post <br />
            </Typography>
            <Link to={`/blog${previous.path}`} rel="previous">
              <Stack direction="row">
                <Typography>{previous.title ?? "Previous"}</Typography>
                <ArrowForwardIcon />
              </Stack>
            </Link>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
