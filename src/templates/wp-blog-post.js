import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Container, Heading, Link, List, ListItem  } from "@chakra-ui/react";

function WPBlogPostCat({categories}) {
    if (!categories.nodes.length)
    return (
        <></>
    )
    return (
        <List display="inline-flex" alignItems="center" justifyContent="flex-start">
            {categories.nodes.map(node => (
<ListItem p="0 0.5rem">
<Link as={GatsbyLink} to={'/myblog'+node.link}>
            <p>{node.name}</p>
          </Link>
</ListItem>
            ))}
        </List>
    )
}

export default function WPBlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  const cats = post.categories
  //console.log(post)
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Box as="div">
        <Heading as="h2">{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <WPBlogPostCat categories={cats}/>
      </Box>
      </Container>
      </Box>
    
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        categories {
            nodes {
              id
              name
              link
              slug
            }
          }
      }
    }
  }`