import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Box, Container, Heading, Link } from "@chakra-ui/react";

export default function BlogCat({ data }) {
  const cat = data.allWpCategory.nodes[0]
  const posts = cat.posts.nodes
  console.log(posts)
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Box as="div">
        <Heading as="h2">{cat.name}</Heading>
        {posts.map(node => (
        <Box as="div">
        <Link as={GatsbyLink} to={'/blog/'+node.slug}>
            <p>{node.title}</p>
          </Link>
        </Box>
      ))}
      </Box>
      </Container>
      </Box>
    
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpCategory(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        name
        posts {
          nodes {
            slug
            id
            title
          }
        }
      }
    }
  }`