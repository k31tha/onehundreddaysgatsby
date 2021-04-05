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
       path: 'myblog/'+node.slug,
       component: path.resolve(`./src/templates/wp-blog-post.js`),
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
      path: 'myblog'+node.link,
      component: path.resolve(`./src/templates/wp-blog-cat.js`),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: node.slug,
      },
    })
  })

  const resultshop = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            id
            handle
            description
            tags
            storefrontId
            title
            variants {
              id
              price
              sku
              selectedOptions {
                name
                value
              }
            }
            featuredImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout:FIXED, width:100)
                }
              }
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `)

  
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
resultshop.data.allShopifyProduct.edges.forEach(({ node }) => {
   createPage({
      path: `/shop/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
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