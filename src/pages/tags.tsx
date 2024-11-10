import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { graphql } from "gatsby";
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
      <Box sx={{ padding: 2 }}>
        <SEO title="All Tags" />
        <Box component="section">
          <Typography variant="h4">Tags</Typography>
          <List>
            {group.map(tag => (
              <ListItem key={tag.fieldValue}>
                <Link href={`/tags/${toKebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
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
