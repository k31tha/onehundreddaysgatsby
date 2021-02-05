import * as React from "react"
import { Box, Link, Container, Heading, List, ListItem } from '@chakra-ui/react';
import { Link as GatsbyLink, graphql } from "gatsby"

const LocationsPage = (props) => {
  const locations = props.data.locations.nodes;
    return (
      <>
      <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">Locations</Heading>
      </Container>
    </Box>
      <Box as="section" marginBottom="1.45rem" p=".5rem 1rem">
      <Container d="block" px="2rem" maxW="100%">
        <List>
        {locations.map(location => (
        <ListItem key={location.city}>
          <Link as={GatsbyLink} to={location.locationPath}>{location.city}</Link> 
        </ListItem>
      ))}
        </List>
        </Container>
        </Box>
        </>
      )
}

export const query = graphql`
  query {
    locations: allContentfulLocation {
        nodes {
      id
      country
      city
      locationPath: gatsbyPath(filePath: "/locations/{contentfulLocation.city}")
        }
    }
  }`

export default LocationsPage