const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        content
        slug
      }
    }
  }
`)

result.data.allWpPost.nodes.forEach(node => {
    createPage({
      path: 'blog/'+node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  const resultcat = await graphql(`
  {
    allWpCategory {
        nodes {
          count
          description
          id
          name
          slug
          link
          posts {
            nodes {
              slug
              id
              title
            }
          }
        }
      }
  }
`)

resultcat.data.allWpCategory.nodes.forEach(node => {
    createPage({
      path: 'blog'+node.link,
      component: path.resolve(`./src/templates/blog-cat.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  /*
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
        createPage({
          path: 'blog/'+node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.slug,
          },
        })
      })
  })
  */
}