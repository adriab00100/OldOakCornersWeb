import { Box, Link, Stack, Typography } from "@mui/material";
import { Image, Transformation } from "cloudinary-react";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { cloudinaryCloudId } from "../images/constants";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box sx={{ paddingX: 2 }}>
      <Box sx={{ paddingY: 2 }} alignContent="center" textAlign="center">
        <Typography variant="h4">PAGE NOT FOUND</Typography>
      </Box>
      <Box sx={{ padding: 2 }} alignContent="center">
        <Stack direction="row" spacing={2}>
          <Image cloudName={cloudinaryCloudId} secure="true" width="440" alt="An empty tool bag" publicId="site-assets/notFound_ipwmwf">
            <Transformation width="440" crop="scale" fetchFormat="auto" quality="auto" />
          </Image>
          <Stack spacing={1}>
            <Typography variant="h5">There&apos;s nothing here</Typography>
            <Typography>
              Unfortunately the page you&apos;re trying to visit doesn&apos;t seem to exist.
              <br />
              Try going back to the <Link href="/">home page</Link> instead.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  </Layout>
);

export default NotFoundPage;
