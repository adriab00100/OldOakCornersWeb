import { Image, Transformation } from "cloudinary-react";
import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { PostListing } from "../components/post-listing";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";
import { cloudinaryCloudId } from "../images/constants";

export type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: Post;
      }[];
    };
  };
};

const IndexPage = (props: IndexPageProps) => (
  <Layout>
    <SEO title="Home" />
    <section className="text-image">
      <div className="text-image-top-left">
        <h1 className="extra-large">Welcome to Brian&apos;s workshop</h1>
      </div>
      <Image cloudName={cloudinaryCloudId} secure="true" width="100%" alt="Close up of hard maple wood grain" publicId="site-assets/wood-grain-hm_uk660z">
        <Transformation width="1280" height="220" crop="scale" fetchFormat="auto" quality="auto" />
      </Image>
      <h2>This is my blog about woodworking projects, thoughts, ideas. Look below for the latest few posts.</h2>
    </section>
    <PostListing posts={props.data.allMarkdownRemark.edges.map(p => p.node)} />
  </Layout>
);

export const indexPageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 10) {
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
