import React from "react";
import { Link } from "gatsby";
import { Image, Transformation } from "cloudinary-react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import LazyLoad from "react-lazyload";
import { cloudinaryCloudId } from "../images/constants";

const placeholderImage = () => (
  <Image
    cloudName={cloudinaryCloudId}
    secure="true"
    width="40"
    alt="An empty tool bag"
    publicId="site-assets/notFound_ipwmwf"
  >
    <Transformation width="40" crop="scale" fetchFormat="auto" quality="auto" />
  </Image>
);

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container type="centering">
      <h1>PAGE NOT FOUND</h1>
    </Container>
    <Container type="centering">
      <Container type="side-by-side">
        <LazyLoad height={330} once={true} placeholder={placeholderImage}>
          <Image
            cloudName={cloudinaryCloudId}
            secure="true"
            width="440"
            alt="An empty tool bag"
            publicId="site-assets/notFound_ipwmwf"
          >
            <Transformation width="440" crop="scale" fetchFormat="auto" quality="auto" />
          </Image>
        </LazyLoad>
        <Container type="stacked" additionalClass="pls">
          <h2>There's nothing here</h2>
          <span>
            Unfortunately the page you're trying to visit doesn't seem to exist.
            <br />
            Try going back to the <Link to="/">home page</Link> instead.
          </span>
        </Container>
      </Container>
    </Container>
  </Layout>
);

export default NotFoundPage;
