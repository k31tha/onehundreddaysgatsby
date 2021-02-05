import { Box, Container, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';

/* const Header1 = ({ siteTitle }) (
<Box as="header" background="rebeccapurple" marginBottom="1.45rem">
{siteTitle}
</Box>
) */

export default function Header () {
    return (
   <Box as="header" pos="relative" minHeight="50px" marginBottom="1.45rem" borderBottom="1px" borderColor="gray.200">
    <Container px="2rem" maxW="100%">
    <Box as="div" position="fixed" right="100px" top="10px">
            <ThemeToggle />
        </Box>
    <Box d="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start" pt="2rem" pb="0.5rem" mb="1rem">
        <Box pr="1em">
        <StaticImage src="../images/headphones-unsplash.jpg" alt="headphones" height={100}/>
        </Box>
        <Box pr="1em">      
            <Heading as="h1">100days</Heading>
        </Box>
       
    </Box>
    <Box d="flex" flexDirection="row" alignItems="flex-end" justifyContent="justify-between" flexWrap="wrap" mb="1rem">
        <Nav />
    </Box>
    </Container>
   </Box>
    )
}

