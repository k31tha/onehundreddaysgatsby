import * as React from "react";
import { Box, Container, Heading,Link } from "@chakra-ui/react";
import { Link as GatsbyLink, graphql } from "gatsby";

const MyBlogPage = ({ data }) => {
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">100 days of Gatsby Blog</Heading>
      <Heading as="h4">Posts</Heading>
      {data.allWpPost.nodes.map(node => (
        <Box as="div">
        <Link as={GatsbyLink} to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <Box as="div" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Box>
      ))}
      </Container>
    </Box>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }`

export default MyBlogPage