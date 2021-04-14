import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import FilledButton from '../tomatoButton/index';
import { NavLink } from 'react-router-dom';
import { useViewport } from '../customHooks';
import Manage from '../manageAccount/index';
import Logout from '../logout/index';

export const Navbar = ({loggedIn = null, authLevel = "user", profileId}) => {
  const [showLinks, setShowLinks] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [scrollY, setScrollY] = useState(0);
  const { width } = useViewport();

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return ( 
    <NavWrapper className={(scrollY > 5 || showLinks) ? "scrolled" : "normal"}>
      <NavCenter>
        <NavHeader>
          <Logo
            onClick={() => {
              setCurrentPath('/');
            }}
          >
            <a href="/">Lion<b>Clubs</b></a>
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
              <StyledListItem hideItem = {!loggedIn || authLevel !== "admin"}>
                <a href='/portal'><h3>Admin Portal</h3></a>
              </StyledListItem>
              <StyledListItem hideItem = {false}>
                <a href='/faq'><h3>FAQs</h3></a>
              </StyledListItem>
              <StyledListItem hideItem = {loggedIn}>
                <a href='/login'><h3>Club Login</h3></a>
              </StyledListItem>
              <StyledListItem hideItem = {!loggedIn}>
                <a href="/"> <Logout/> </a>
              </StyledListItem>
              {/* <StyledListItem hideItem = {!loggedIn}>
                <a href="/manage"> <Manage/> </a>
              </StyledListItem> */}
              <StyledListItem hideItem = {loggedIn}>
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to='/signup'
                >
                  <FilledButton text='Register Club' />
                </NavLink>
              </StyledListItem>
              <StyledListItem hideItem = {!loggedIn || authLevel !== "user"}>
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={`/club/${profileId}`}
                >
                  <FilledButton text='My Profile' />
                </NavLink>
              </StyledListItem>
              {/* Spectator Publishing Logo */}
              {/* <StyledListItem hideItem = {false}>
                <a href="http://www.specpublishing.com/">
                  <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png"/>
                </a>
              </StyledListItem> */}
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: 1;

  &.scrolled{
    background-image: none;
    background-color: #F4F6F8;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`;

const StyledListItem = styled.li`
  display: ${props =>  props.hideItem ? `none` : `flex` };
  align-items: center;
  & > * > h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0rem;
  }

  img {
    height: 2rem;
    margin-left: 2rem;
  }

`;

const NavCenter = styled.div`
  @media screen and (min-width: 769px) {
    padding: 0.5rem 3rem 0.5rem 4rem;
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
  font-size: 2rem;
  font-weight: 400;

  b {
    font-weight: 900;
    color: ${(props) => props.theme.colors.red};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
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

export default Navbar;
