import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const FooterStyles = styled.nav`
  #footer {
    margin-top: 20px;
  }
`;

export default function Footer() {
    return (
      <FooterStyles>
        <section id="footer">
        <p>#100daysofgatsby 2021 sprint 1</p>
        </section>
      </FooterStyles>
    );
  }