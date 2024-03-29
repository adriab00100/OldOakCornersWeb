import { Link, graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { toKebabCase } from "../utilities/string-manipulations";

export type TagsPageProps = {
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
};

const TagsPage = (props: TagsPageProps) => {
  const group = props.data.allMdx.group;
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
    allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
