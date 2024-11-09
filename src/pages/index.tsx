import { graphql } from "gatsby";
import React from "react";
import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { PostPreviewTile } from "../components/post-preview-tile";
import { Post } from "../components/post-types";
import { SEO } from "../components/seo";

export type LatestPostProps = {
  data: {
    allMdx: {
      edges: { node: Post }[];
    };
  };
};

const IndexPage = (props: LatestPostProps) => (
  <Layout>
    <SEO title="Home" />
    <section className="padded-content">
      <Container type="stacked">
        <Container type="centering">
          <p>Welcome to Brian's personal website. This is primarily a space where I write about woodworking projects. Checkout my latest post, or the blog for older posts.</p>
        </Container>
        <div className="blog-listing">
          <Container type="centering">
            <Container type="side-by-side">
              <Container type="stacked">
                <h2>Latest commission</h2>
                <PostPreviewTile
                  post={{
                    excerpt: "Something interesting is coming here soon. Stay tuned...",
                    frontmatter: {
                      date: "2024-11-08",
                      title: "Commissions coming soon",
                      path: null,
                      previewImage: null,
                      author: null,
                      tags: [],
                    },
                  }}
                />
              </Container>

              <Container type="stacked">
                <h2>Latest blog entry</h2>
                <PostPreviewTile post={props.data.allMdx.edges[0].node} />
              </Container>
            </Container>
          </Container>
        </div>
      </Container>
    </section>
  </Layout>
);

export const latestPageQuery = graphql`
  query LatestPost {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default IndexPage;
