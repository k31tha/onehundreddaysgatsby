import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
    </>
  );
}