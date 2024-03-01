import { GatsbyNode } from "gatsby";
import path from "path";
import { toKebabCase } from "./src/utilities/string-manipulations";

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplateQuery = graphql<Queries.BlogPostQuery>(`
    query BlogPost {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
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
  `);

  const archiveTemplateQuery = graphql<Queries.BlogArchiveQuery>(`
    query BlogArchive {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const tagTemplateQuery = graphql<Queries.BlogTagsQuery>(`
    query BlogTags {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2000) {
        edges {
          node {
            frontmatter {
              tags
              path
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  const postTemplate = path.resolve("src/templates/blog-post.tsx");
  const archiveTemplate = path.resolve("src/templates/archive.tsx");
  const tagsTemplate = path.resolve("src/templates/tags.tsx");
  const [postGraph, archiveGraph, tagsGraph] = await Promise.all([postTemplateQuery, archiveTemplateQuery, tagTemplateQuery]);
  if (postGraph.errors || archiveGraph.errors || tagsGraph.errors) {
    return Promise.reject([...postGraph.errors, ...archiveGraph.errors, ...tagsGraph.errors]);
  }
  // posts
  const allPosts = postGraph?.data?.allMarkdownRemark.edges ?? [];
  allPosts.forEach(({ node }, index) => {
    const previous = index === allPosts.length - 1 ? null : allPosts[index + 1].node;
    const next = index === 0 ? null : allPosts[index - 1].node;
    if (node?.frontmatter?.path) {
      let postPath = node.frontmatter.path;
      if (postPath.endsWith("/")) {
        postPath = postPath.substring(0, postPath.length - 1);
      }
      createPage({
        path: postPath,
        component: postTemplate,
        context: {
          postPath: postPath,
          previous,
          next,
        },
      });
    }
  });
  // archive
  const archivePosts = archiveGraph?.data?.allMarkdownRemark.edges ?? [];
  const postsPerPage = 10;
  const numPages = Math.ceil(archivePosts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/archive` : `/archive/${i + 1}`,
      component: archiveTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
  // tags
  const tags = tagsGraph?.data?.tagsGroup.group ?? [];
  tags.forEach(tag => {
    const tagPath = tag?.fieldValue ? toKebabCase(tag.fieldValue) : undefined;
    if (tagPath) {
      createPage({
        path: `/tags/${tagPath}/`,
        component: tagsTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    }
  });
};
