import * as React from "react"
import { Box, Container, Heading, List, ListItem } from "@chakra-ui/react"
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';

const Variants = ({variants}) => {
    return (
        <>
        <List display="inline-flex" alignItems="center" justifyContent="flex-start">
        {variants.map(variant => (
        <ListItem key={variant.id} p="0 0.5rem">
          {variant.selectedOptions[0].value} 
        </ListItem>
      ))}
        </List>
        </>
    )
}
const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
<>
<SEO title={`${product.title}`}/>
<Box as="section" marginBottom="1.45rem">
<Container d="block" px="2rem" maxW="100%">
<Heading as="h2" marginBottom="1rem">{product.title}</Heading>
<GatsbyImage image={product.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={product.featuredImage.altText} />
      <Box as="p">{product.description}</Box>
      <Variants variants={product.variants} />
      </Container>
      </Box>
    </>
  )
}

//<GatsbyImage image={product.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={product.featuredImage.altText} />

export default ProductTemplate