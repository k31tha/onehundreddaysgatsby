import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './seo';

/*<Header />*/

export default function Layout({ children }) {
  return (
    <>
    <SEO />
    <Header />
    {children}
    <Footer />
    </>
  );
}