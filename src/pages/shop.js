import * as React from "react"
import { Box, Container, Heading, Link, List, ListItem, Text } from "@chakra-ui/react"
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink, graphql } from "gatsby";

const ShopPage = ({ data }) => {
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">Shop</Heading>
      <List display="flex" alignItems="top" justifyContent="flex-start">
      {data.allShopifyProduct.edges.map(({ node }) => (
        <ListItem key={node.shopifyId} p="0 0.5rem">
          <Heading as="h3">
            <Link as={GatsbyLink} to={`/shop/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRangeV2.minVariantPrice.amount}
          </Heading>
          <GatsbyImage image={node.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={node.featuredImage.altText} />
          <Text>{node.description}</Text>
        </ListItem>
      ))}
    </List>
      </Container>
    </Box>
  )
}

export default ShopPage

export const query = graphql`
  {
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
`