import React from 'react';
import {Box, Text, Container, useColorModeValue} from '@chakra-ui/react'
/*import styled from 'styled-components';
const FooterStyles = styled.nav`
  #footer {
    margin-top: 20px;
  }
`;*/

export default function Footer() {

  const bg = useColorModeValue("gray.50", "gray.100")
  const color = useColorModeValue("black", "gray.800")

    return (
      <Box as="footer" h="50px" d="flex" justifyContent="space-around" p=".5rem 1rem" marginBottom="1.45rem" bg={bg} color={color}
      alignContent="center" borderTop="1px" borderColor="gray.200">      
        <Container as="section">
        <Text>#100daysofgatsby 2021 sprint 3</Text>     
        </Container> 
      </Box>
    );
  }