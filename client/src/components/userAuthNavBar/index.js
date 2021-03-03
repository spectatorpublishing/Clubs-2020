import React from 'react';
import styled from 'styled-components'

const NavWrapper = styled.nav`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  height: 100%;
`;

const NavLinksContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;

  &.show-container {
    height: fit-content;
  }

  @media screen and (min-width: 769px) {
    height: auto !important;
    background-color: transparent;
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
              <a href="/portal">Admin Portal</a>
            </li>
            <li>
              <a href="/portal/login">Admin Portal Log-in</a>
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
              <a href="/test_signin">Firebase Sign In Test</a>
            </li>
            <li>
              <a href="/test_signup">Firebase Sign Up Test</a>
            </li>
          </NavLinksContainer>
        </nav>
      </NavWrapper>
    )
  }