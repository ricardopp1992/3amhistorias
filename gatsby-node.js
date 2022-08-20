const { slugify } = require("./src/utils")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`{
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date }) {
      nodes {
        html
        frontmatter {
          title
          date
        }
      }
    }
  }`)

  data.allMarkdownRemark.nodes.forEach(story => {
    createPage({
      path: `/${slugify(story.frontmatter.title)}`,
      component: require.resolve("./src/templates/simple-story/index.js"),
      context: story
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
