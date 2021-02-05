import * as React from "react"
import { Box, Container, Heading } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">Home Page</Heading>
      </Container>
    </Box>
  )
}

export default HomePage