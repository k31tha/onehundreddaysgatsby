import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/Layout'
import theme from './styles/theme'

export const wrapPageElement = ({ element, props }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ChakraProvider>
  )
}