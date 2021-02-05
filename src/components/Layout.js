import React from 'react';
import Footer from './Footer';
import Header from './Header';

/*<Header />*/

export default function Layout({ children }) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
}