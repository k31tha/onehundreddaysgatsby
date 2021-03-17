import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Heading, List, ListItem } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from '../../components/seo';
/*import styled from 'styled-components'*/

/*const Title = styled.h1`
  text-transform: uppercase;
`;*/

export default function LocationComponent(props) {
  const location = props.data.location;
  const city= props.params.city;
  return  <>
  <SEO title={`${city}`}/>
  <Box as="section" marginBottom="1.45rem">
<Container d="block" px="2rem" maxW="100%">
<GatsbyImage image={location.heroImage.gatsbyImageData} alt={location.heroImage.title}  />
  <Heading as="h2" marginBottom="1rem">{props.params.city}</Heading>
  <List>
    <ListItem>Country: {location.country}</ListItem>
  </List>
  </Container>
  </Box>
  </>
}


export const query = graphql`
  query contentfulLocation($id: String) {
    location: contentfulLocation(id: {eq: $id}) {
          id
          city
          country
          heroImage {
            title
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
`