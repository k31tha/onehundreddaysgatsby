import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
    <Nav />
    {children}
    </>
  );
}