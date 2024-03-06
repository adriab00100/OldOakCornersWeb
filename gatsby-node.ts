import { GatsbyNode } from "gatsby";
import path from "path";
import { toKebabCase } from "./src/utilities/string-manipulations";

type GraphQLType = <TData, TVariables = any>(
  query: string,
  variables?: TVariables | undefined,
) => Promise<{
  errors?: any;
  data?: TData | undefined;
}>;

type AllPageTemplatesPromise = Promise<
  [
    {
      errors?: any;
      data?: Queries.BlogPostQuery;
    },
    {
      errors?: any;
      data?: Queries.BlogArchiveQuery;
    },
    {
      errors?: any;
      data?: Queries.BlogTagsQuery;
    },
  ]
>;

const queryAllPageTemplates = async (graphql: GraphQLType): AllPageTemplatesPromise => {
  const postTemplateQuery = graphql<Queries.BlogPostQuery>(`
    query BlogPost {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  const archiveTemplateQuery = graphql<Queries.BlogArchiveQuery>(`
    query BlogArchive {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 1000) {
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
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 2000) {
        edges {
          node {
            frontmatter {
              tags
              path
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  return Promise.all([postTemplateQuery, archiveTemplateQuery, tagTemplateQuery]);
};

type CreateRedirectType = (
  this: void,
  redirect: {
    [key: string]: unknown;
    fromPath: string;
    isPermanent?: boolean | undefined;
    toPath: string;
    redirectInBrowser?: boolean | undefined;
    force?: boolean | undefined;
    statusCode?: number | undefined;
    ignoreCase?: boolean | undefined;
  },
  plugin?: any | undefined,
) => void;

const setupRedirects = (createRedirect: CreateRedirectType) => {
  const oldBlogPosts = [
    "mallet-madness",
    "wooden-rings",
    "dads-bar-cart",
    "fish-tank-stand",
    "flag-coffee-tables",
    "under-deck",
    "garage-shelves",
    "sun-blocker",
    "cup-holder",
    "welcome",
    "file-handles",
    "grape-arbor",
    "corner-bookshelf",
    "maple-mallet",
    "cedar-mallet",
  ];
  oldBlogPosts.forEach(post => {
    createRedirect({
      fromPath: `/${post}`,
      toPath: `/blog/${post}`,
    });
  });

  createRedirect({
    fromPath: "/archive",
    toPath: "/blog-posts",
  });
};

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;
  const postTemplate = path.resolve("src/templates/blog-post.tsx");
  const archiveTemplate = path.resolve("src/templates/archive.tsx");
  const tagsTemplate = path.resolve("src/templates/tags.tsx");
  const [postGraph, archiveGraph, tagsGraph] = await queryAllPageTemplates(graphql);
  if (postGraph.errors || archiveGraph.errors || tagsGraph.errors) {
    return Promise.reject([...postGraph.errors, ...archiveGraph.errors, ...tagsGraph.errors]);
  }
  // posts
  const allPosts = postGraph?.data?.allMdx.edges ?? [];
  allPosts.forEach(({ node }, index) => {
    const previous = index === allPosts.length - 1 ? null : allPosts[index + 1].node;
    const next = index === 0 ? null : allPosts[index - 1].node;
    if (node?.frontmatter?.path) {
      let postPath = node.frontmatter.path;
      if (postPath.endsWith("/")) {
        postPath = postPath.substring(0, postPath.length - 1);
      }
      createPage({
        path: `/blog${postPath}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          postPath: postPath,
          previous,
          next,
        },
      });
    }
  });
  // archive
  const archivePosts = archiveGraph?.data?.allMdx.edges ?? [];
  const postsPerPage = 10;
  const numPages = Math.ceil(archivePosts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog-posts` : `/blog-posts/${i + 1}`,
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
  setupRedirects(createRedirect);
};
