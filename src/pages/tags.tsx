import { Box, Link, Typography } from "@mui/material";
import { Grid } from "@mui/system";
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
          <Typography variant="h4" paddingY={2}>
            Tags
          </Typography>
          <Grid container spacing={1}>
            {group.map(tag => (
              <Grid size={2}>
                <Link key={tag.fieldValue} href={`/tags/${toKebabCase(tag.fieldValue)}/`}>
                  <Typography>
                    {tag.fieldValue} ({tag.totalCount})
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
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
