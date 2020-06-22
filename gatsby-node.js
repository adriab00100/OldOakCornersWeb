const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('src/templates/blog-post.jsx')
    return graphql(`
    {
        allMarkdownRemark {
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
    `).then(response => {
        if (response.errors) {
            return Promise.reject(response.errors);
        }
        response.data.allMarkdownRemark.edges.forEach(({node}) => 
            {
                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate
                })
            }
        )
    })
}