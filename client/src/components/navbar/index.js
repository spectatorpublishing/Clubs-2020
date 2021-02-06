import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
  /* Example of using theme colors */
  background-color: ${props=>props.theme.colors.white};
  padding: 10px;
  color: ${props=>props.theme.colors.black};
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
          <li>
            <a href="/signup">Sign Up Page</a>
          </li>
          <li>
            <a href="/confirm">Confirmation Page</a>
          </li>
          <li>
            <a href="/clubprofile">Club Profile</a>
          </li>
          <li>
            <a href="/test">Firebase Test</a>
          </li>
        </NavLinksContainer>
      </nav>
    </NavWrapper>
  )
}
