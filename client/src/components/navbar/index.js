import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <NavWrapper>
      <NavCenter>
        <NavHeader>
          <Logo>
            <a href='/'>Clubs@CU</a>
          </Logo>
          <NavToggle
            onClick={() => setShowLinks(!showLinks)}
            className={`${showLinks ? 'show-container' : null}`}
          >
            <FaBars />
          </NavToggle>
        </NavHeader>
        <LinksContainer className={`${showLinks ? 'show-container' : null}`}>
          <MenuLinks>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/explore'>Login</a>
            </li>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
            <li>
              <RegisterButton>Register Club</RegisterButton>
            </li>
          </MenuLinks>
        </LinksContainer>
      </NavCenter>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  height: 100%;
`;

const NavCenter = styled.div`
  @media screen and (min-width: 769px) {
    padding: 2rem 3rem 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 769px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  height: 100%;
  font-size: 1.5rem;
  font-family: 'Manrope', 'Arial', 'Helvetica';
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  @media (max-width: 769px) {
    padding-left: 0.5rem;
  }
`;

const NavToggle = styled.div`
  font-size: 1.3rem;
  color: black;
  background: transparent;
  border-color: transparent;
  margin-right: 1rem;
  transition: all 0.3s linear;
  cursor: pointer;

  &.show-container {
    transform: rotate(90deg);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  background-color: white;

  &.show-container {
    height: fit-content;
  }

  @media screen and (min-width: 769px) {
    height: auto !important;
    background-color: transparent;
  }
`;

const MenuLinks = styled.ul`
  list-style-type: none;

  li {
    padding: 1rem;
    text-align: center;
  }

  a {
    margin-top: 0.4rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 1.2rem;
    font-weight: 500;
    display: block;
    transition: color 0.2s linear;

    &:hover {
      color: ${(props) => props.theme.colors.gray};
    }
  }

  @media (min-width: 769px) {
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: auto;
    color: ${(props) => props.theme.colors.black};

    li {
      display: inline;
      padding: 0 1rem;
      color: inherit;
    }

    a {
      font-size: 1rem;
      color: inherit;
    }
  }
`;

const RegisterButton = styled.button`
  display: inline;
  text-align: center;
  background-color: ${(props) => props.theme.colors.red};
  border: 2px solid ${(props) => props.theme.colors.red};
  border-radius: 7px;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #c63416;
    border: 2px solid #c63416;
    color: ${(props) => props.theme.colors.lightGray};
  }

  @media (max-width: 769px) {
    background-color: transparent;
    border: 1.7px solid;
    color: ${(props) => props.theme.colors.red};

    &:hover {
      background-color: #c63416;
      border: 1.7px solid #c63416;
      color: ${(props) => props.theme.colors.lightGray};
    }
  }
`;

export default Navbar;
