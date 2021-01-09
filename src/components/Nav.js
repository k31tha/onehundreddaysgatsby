import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
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
`;

export default function Nav() {
    return (
      <NavStyles>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </NavStyles>
    );
  }