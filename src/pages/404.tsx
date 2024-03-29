import { Image, Transformation } from "cloudinary-react";
import { Link } from "gatsby";
import React from "react";
import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { cloudinaryCloudId } from "../images/constants";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container type="centering">
      <h1>PAGE NOT FOUND</h1>
    </Container>
    <Container type="centering">
      <Container type="side-by-side">
        <Image cloudName={cloudinaryCloudId} secure="true" width="440" alt="An empty tool bag" publicId="site-assets/notFound_ipwmwf">
          <Transformation width="440" crop="scale" fetchFormat="auto" quality="auto" />
        </Image>
        <Container type="stacked" additionalClass="pls">
          <h2>There&apos;s nothing here</h2>
          <span>
            Unfortunately the page you&apos;re trying to visit doesn&apos;t seem to exist.
            <br />
            Try going back to the <Link to="/">home page</Link> instead.
          </span>
        </Container>
      </Container>
    </Container>
  </Layout>
);

export default NotFoundPage;
