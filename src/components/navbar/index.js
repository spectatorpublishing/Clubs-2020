import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
  background-color: lightpink;
  padding: 10px;
  color: black;

  nav {
    height: 100%;
  }
`;

const NavLinksContainer = styled.ul`
  display: inline-block;
  padding: 0;
  margin-top: 20px;

  li {
    display: inline;
    margin-right: 30px;
  }
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <NavLinksContainer>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/explore">Explore Page</a>
          </li>
          <li>
            <a href="/faq">FAQ Page</a>
          </li>
        </NavLinksContainer>
      </nav>
    </NavWrapper>
  )
}