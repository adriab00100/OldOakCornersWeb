import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { toKebabCase } from "../utilities/string-manipulations";

export type TagsPageProps = {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
};

const TagsPage = (props: TagsPageProps) => {
  const group = props.data.allMarkdownRemark.group;
  return (
    <Layout>
      <SEO title="All Tags" />
      <section>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${toKebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default TagsPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
