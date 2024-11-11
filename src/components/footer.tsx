import { Box, Container, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container component="footer" sx={{ padding: 2 }}>
      <Box component="section">
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
          <Stack padding={2}>
            <Typography variant="overline">© {year} Brian Adriance</Typography>
            <Typography variant="body2">
              All plans and designs presented in the blog are FREE TO USE, COPY, OR MODIFY for personal or commercial use unless otherwise specified on the page. Images MAY NOT be
              shared for commercial use or use by a publication without consent of author/creator.
            </Typography>
          </Stack>
          <Box>
            <Stack padding={2} spacing={1}>
              <Link href="/rss.xml">
                <Typography>RSS</Typography>
              </Link>
              <Link href="/about">
                <Typography>About</Typography>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
