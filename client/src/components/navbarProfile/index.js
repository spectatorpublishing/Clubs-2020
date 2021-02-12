import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Logout from '../logout/index';
import Manage from '../manageAccount/index';
import { useViewport } from '../customHooks';

export const NavbarProfile = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const { width } = useViewport();

  return (
    <NavWrapper>
      <NavCenter>
        <NavHeader>
          <Logo
            onClick={() => {
              setCurrentPath('/');
            }}
          >
            <a href='/'>Clubs@CU</a>
          </Logo>
          {currentPath === '/' && (
            <NavToggle
              onClick={() => setShowLinks(!showLinks)}
              className={`${showLinks ? 'show-container' : null}`}
            >
              <FaBars />
            </NavToggle>
          )}
          {currentPath.includes('/profile-creation') && width < 769 && (
            <Logout />
          )}
        </NavHeader>
        {currentPath.includes('/profile-creation') && width >= 769 && (
          <Logout />
        )}
        {currentPath === '/' && (
          <LinksContainer className={`${showLinks ? 'show-container' : null}`}>
            <MenuLinks>
              <StyledListItem>
                <a href='/manage'> <Manage/> </a>
              </StyledListItem>
              <StyledListItem>
                <a href='/logout'> <Logout/> </a>
              </StyledListItem>
            </MenuLinks>
          </LinksContainer>
        )}
      </NavCenter>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  height: 100%;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0rem;
  }

`;

const NavCenter = styled.div`
  @media screen and (min-width: 769px) {
    padding: 0.5rem 3rem 0 4rem;
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
  font-weight: 700;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  @media (max-width: 768px) {
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
    margin-top: 0;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 1.25rem;
    font-weight: 600;
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

    a {
      font-size: 1rem;
      color: inherit;
    }
  }
`;

export default NavbarProfile;
