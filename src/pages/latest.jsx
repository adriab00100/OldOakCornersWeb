import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostContents from "../components/post-contents";
import { DiscussionEmbed } from "disqus-react";

const LatestPage = ({ data }) => {
  const latestPost = data.allMarkdownRemark.edges[0].node;
  const previousPost = data.allMarkdownRemark.edges[1].node;
  const slug = latestPost.frontmatter.path.substring(1);

  const disqusConfig = {
    shortname: 'oldoakcorners',
    config: { identifier: slug },
  };

  return (
    <Layout>
      <SEO title={`Latest - ${latestPost.frontmatter.title}`} />
      <PostContents post={latestPost} />
      <br />
      <ul className="page-navigator">
        {previousPost && (
          <li>Previous Post<br />
            <Link to={previousPost.frontmatter.path} rel="previousPost">← {previousPost.frontmatter.title}</Link>
          </li>
        )}
      </ul>
      <hr />
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};


export const latestPageQuery = graphql`
{
  allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      limit: 2
    ) {
    edges {
      node {
        html
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

export default LatestPage;