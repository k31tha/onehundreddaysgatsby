import * as React from "react"
import { Box, Heading, Container } from "@chakra-ui/react"
import SEO from '../components/seo';

const AboutPage = () => {
  return (
    <>
    <SEO title={"about"}/>
      <Box as="section" marginBottom="1.45rem">
      <Container d="block" px="2rem" maxW="100%">
        <Heading as="h2">About Page</Heading>
        </Container>
      </Box>
      </>
  )
}

export default AboutPage