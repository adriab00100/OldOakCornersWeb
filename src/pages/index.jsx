import React from "react";
import { graphql } from "gatsby";
import { Image, Transformation } from "cloudinary-react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostListing from "../components/post-listing";
import { cloudinaryCloudId } from "../images/constants";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="text-image">
      <div className="text-image-top-left">
        <h1 className="extra-large">Welcome to Old Oak Corners, Brian's hobbyist workshop</h1>
      </div>
      <Image
        cloudName={cloudinaryCloudId}
        secure="true"
        width="100%"
        alt="Close up of hard maple wood grain"
        publicId="site-assets/wood-grain-hm_uk660z"
      >
        <Transformation
          width="1280"
          height="220"
          crop="scale"
          fetchFormat="auto"
          quality="auto"
        />
      </Image>
      <h2>This is my blog about woodworking projects, thoughts, ideas. Look below for the latest few posts.</h2>
    </section>
    <PostListing posts={data.allMarkdownRemark.edges.map(p => p.node)} />
  </Layout>
);

export const indexPageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
