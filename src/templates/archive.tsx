import React from "react";
import { graphql, Link } from "gatsby";
import { PostListing } from "../components/post-listing";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Container } from "../components/container";
import { Post } from "../components/post-types";

export type ArchiveProps = {
  data: {
    allMarkdownRemark: {
      edges: { node: Post }[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
};

const Archive = (props: ArchiveProps) => {
  const { data, pageContext } = props;
  const { currentPage, numPages } = pageContext;
  const pages = new Array(numPages);
  for (let i = 0; i < pages.length; i++) {
    pages[i] = i + 1;
  }
  const PageListing = (props: { pages: number[]; currentPage: number }) => {
    const { pages, currentPage } = props;
    return (
      <section>
        <Container type="centering">
          <h4 className="page-listing-title">More pages in the archive</h4>
        </Container>
        <nav aria-label="pages of blog posts in archive">
          <ul className="pages-listing">
            {pages.map(page => {
              return (
                <li>
                  {currentPage === page ? (
                    <span className="current-page">{page}</span>
                  ) : (
                    <Link to={page === 1 ? "/archive" : `/archive/${page}`}>{page}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    );
  };

  return (
    <Layout>
      <SEO title="Post archive" />
      <Container type="centering">
        <h1>Post Archive</h1>
      </Container>
      <PostListing posts={data.allMarkdownRemark.edges.map(p => p.node)} />
      {pages.length > 1 && <PageListing pages={pages} currentPage={currentPage} />}
    </Layout>
  );
};

export const archiveQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            author
            date
          }
        }
      }
    }
  }
`;

export default Archive;
