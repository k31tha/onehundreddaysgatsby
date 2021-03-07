import * as React from "react"
import { Box, Container, Heading, Link } from "@chakra-ui/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink, graphql } from "gatsby";

const ShopPage = ({ data }) => {
  return (
    <Box as="section" marginBottom="1.45rem">
    <Container d="block" px="2rem" maxW="100%">
      <Heading as="h2">Shop</Heading>
      <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link as={GatsbyLink} to={`/shop/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRangeV2.minVariantPrice.amount}
          </h3>
          <GatsbyImage image={node.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={node.featuredImage.altText} />
          <p>{node.description}</p>
        </li>
      ))}
    </ul>
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
          title
          shopifyId
          description
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
          featuredImage {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(height: 100)
              }
            }
            altText
          }
        }
      }
    }
  }
`