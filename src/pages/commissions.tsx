import { Typography } from "@mui/material";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const CommissionsPage = () => (
  <Layout>
    <SEO title="Commissions" />
    <Typography variant="h4" padding={1}>
      Welcome to Brian&apos;s workshop commission zone
    </Typography>
    <section className="padded-content">
      <Typography>Coming soon...</Typography>
    </section>
  </Layout>
);

export default CommissionsPage;
