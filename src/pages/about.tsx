import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Image, Transformation } from "cloudinary-react";
import React from "react";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { cloudinaryCloudId } from "../images/constants";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Box sx={{ padding: 2 }}>
      <Box component="section">
        <Typography variant="h4" sx={{ paddingY: 3 }}>
          About this blog
        </Typography>
        <Typography>
          I want to share my projects with the general public because I was inspired to get into this hobby by looking through similar blogs. I figure here I might be able to
          inspire someone else to pick up the saw and get in to this themselves. I also hope that my projects that I show can provide ideas that others can build on, or reuse for
          their own needs.
        </Typography>
        <Typography>
          Any advice I provide, or designs I share are free to use at your own risk. I&apos;m not an expert, and not a professional, but I sure do love the craft!
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          About Brian
        </Typography>
        <Typography>
          As a kid I told my parents I want to be a carpenter when I grew up. They were understandably skeptical about that. After all how many five-year-olds follow through and
          become what they say they want to be? I&apos;m pretty sure I&apos;ve also wanted to be an astronomer, astronaut, fiction author, and at least several other things.
        </Typography>
        <Typography>
          Largely my dreams of carpentry had faded away by the time college came around, and I turned myself into a software engineer. Building software is interesting and fun, but
          you can&apos;t reach out and touch it. One of my former co-workers, Scott, was an avid woodworking hobbyist and he rekindled my interest in building stuff out of wood.
          Most of my projects these days might fall more under the area of joinery, but I also have worked on a few projects that might fall under carpentry.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          Inspirations
        </Typography>
        <Typography>Several amazing wood-crafters have inspired me to build and create, and I&apos;ll list some of them here.</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={<ExternalLink href="https://www.pbs.org/woodwrightsshop/">The Woodwright&apos;s Shop</ExternalLink>}
              secondary="with expert crafter, Roy Underhill"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<ExternalLink href="https://christophermschwarz.com/">Christopher Schwartz</ExternalLink>}
              secondary="a furniture maker, author, and also researchers traditional woodworking
            techniques"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<ExternalLink href="https://www.youtube.com/watch?v=lrAAglKLPh8">Frank Klausz</ExternalLink>}
              secondary="a master jointer with many videos on YouTube"
            />
          </ListItem>
        </List>
        <Typography>There are loads more interesting people sharing their work on YouTube and Facebook, so I encourage you to look around.</Typography>
      </Box>
      <Box component="section">
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          How is this blog made?
        </Typography>
        <Stack direction="row">
          <Box>
            <Typography>
              I&apos;ve used a combination of <ExternalLink href="https://www.gatsbyjs.org/">Gatsby</ExternalLink> and{" "}
              <ExternalLink href="https://reactjs.org/">React</ExternalLink> for this blog, while I am storing the code in a{" "}
              <ExternalLink href="https://github.com/adriab00100/OldOakCornersWeb">github repository</ExternalLink>. I am hosting the website on{" "}
              <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink> and using <ExternalLink href="https://cloudinary.com/">Cloudinary</ExternalLink> for all my image
              and video needs.
            </Typography>
            <Typography>
              The inspiration for how I built this was from a crash-course by{" "}
              <ExternalLink href="https://www.youtube.com/watch?v=6YhqQ2ZW1sc">TraversyMedia on YouTube</ExternalLink>
            </Typography>
          </Box>
          <Image cloudName={cloudinaryCloudId} secure="true" width="440" alt="A hatchet lodged in a large piece of oak" publicId="site-assets/hatchet_asiz4d">
            <Transformation width="440" crop="scale" fetchFormat="auto" quality="auto" />
          </Image>
        </Stack>
      </Box>
    </Box>
  </Layout>
);

export default AboutPage;
