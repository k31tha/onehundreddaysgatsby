import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Heading } from "@chakra-ui/react";

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Box as="div">
        <Heading as="h2">{post.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
      }
    }
  }`