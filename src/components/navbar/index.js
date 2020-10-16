import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
  position: fixed;
  background: #48C6DC;
  padding: 1rem; 
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: Roboto;
  font-style: normal;

  nav {
    height: 100%;
  }
`;

const NavHeader = styled.a`
  margin-left: 3vw;   
  margin-top: 2vh;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  align-self: flex-start;
`;

const NavLinksContainer = styled.ul`
  display: inline-block;

  li {
    display: inline;
    margin-right: 40px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Button = styled.div`
  display: inline;
  text-align: center;
  background-color: #EC6C52;
  border: 2px solid #EC6C52;
  border-radius: 5px;
  border-radius: 7px;
  padding: 0.3rem 1rem;
`;


export const Navbar = () => {
  return (
    <nav>
      <NavWrapper> 
        <NavHeader href="/">Clubs@CU</NavHeader>
        <NavLinksContainer>
          <li>
            <a href="/faq">FAQs</a>
          </li>
          <li>
            <a href="/explore">Club Login</a>
          </li>
          <li>
            <Button><a href="/faq">Register Club</a></Button>
          </li> 
        </NavLinksContainer>
      </NavWrapper>
    </nav>

  )
}