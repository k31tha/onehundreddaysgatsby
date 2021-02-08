import * as React from "react"
import { Box, Container, Heading } from "@chakra-ui/react"
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">100 days of Gatsby</Heading>
      <StaticImage src="../images/headphones-unsplash.jpg" alt="headphones" height={400} />
      </Container>
    </Box>
  )
}

export default HomePage