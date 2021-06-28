const path = require("path");
const { toKebabCase } = require("./src/utilities/string-manipulations");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplateQuery = graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  const archiveTemplateQuery = graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  );

  const tagTemplateQuery = graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2000) {
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
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  const postTemplate = path.resolve("src/templates/blog-post.jsx");
  const archiveTemplate = path.resolve("src/templates/archive.jsx");
  const tagsTemplate = path.resolve("src/templates/tags.jsx");
  const [postGraph, archiveGraph, tagsGraph] = await Promise.all([
    postTemplateQuery,
    archiveTemplateQuery,
    tagTemplateQuery,
  ]);
  if (postGraph.errors || archiveGraph.errors || tagsGraph.errors) {
    return Promise.reject([...postGraph.errors, ...archiveGraph.errors, ...tagsGraph.errors]);
  }
  // posts
  const allPosts = postGraph.data.allMarkdownRemark.edges;
  allPosts.forEach(({ node }, index) => {
    const previous = index === allPosts.length - 1 ? null : allPosts[index + 1].node;
    const next = index === 0 ? null : allPosts[index - 1].node;
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        previous,
        next,
      },
    });
  });
  // archive
  const archivePosts = archiveGraph.data.allMarkdownRemark.edges;
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
  const tags = tagsGraph.data.tagsGroup.group;
  tags.forEach(tag => {
    const tagPath = toKebabCase(tag.fieldValue);
    createPage({
      path: `/tags/${tagPath}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
