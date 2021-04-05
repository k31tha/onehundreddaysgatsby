import React from 'react';
import { Box, Link, List, ListItem } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

/*import styled from 'styled-components';
const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }
  li {
}
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
  }
`;*/

export default function Nav() {
    return (
      <Box as="nav" d="inline">
        <List display="inline-flex" alignItems="center" justifyContent="flex-start">
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink} to="/" textDecoration="none" _hover={{
    textDecoration:"none"
  }}>Home</Link>
          </ListItem>
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink}  to="/about/" _hover={{
    textDecoration:"none"
  }}>About</Link>
          </ListItem>
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink}  to="/locations" textDecoration="none" _hover={{
    textDecoration:"none"
  }}>Locations</Link>
          </ListItem>
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink}  to="/myblog" textDecoration="none" _hover={{
    textDecoration:"none"
  }}>Blog</Link>
          </ListItem>
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink}  to="/shop" textDecoration="none" _hover={{
    textDecoration:"none"
  }}>Shop</Link>
          </ListItem>
          <ListItem p="0 0.5rem">
            <Link as={GatsbyLink}  to="/contact" textDecoration="none" _hover={{
    textDecoration:"none"
  }}>Contact</Link>
          </ListItem>
        </List>
      </Box>
    );
  }