import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import ProfileCreation1 from './ProfileCreation1/index';
import ProfileCreation2 from './ProfileCreation2';
import FilledButton from '../../components/filledButton/index';
import Navbar from '../../components/navbar/index';

const ProfileCreationMaster = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const clubNameInput = useRef(null);
  const shortDescInput = useRef(null);
  const longDescInput = useRef(null);
  const [clubProfile, setClubProfile] = useState({
    tags: [],
    clubName: '',
    shortDesc: '',
    longDesc: '',
    size: '',
    memberPeriod: [],
    requireApplication: true,
    meetTime: [],
  });

  useEffect(() => {
    console.log(clubProfile);
  }, [clubProfile]);

  const nextPage1 = () => {
    let tempProfile = { ...clubProfile };
    tempProfile.clubName = clubNameInput.current.value;
    tempProfile.shortDesc = shortDescInput.current.value;
    tempProfile.longDesc = longDescInput.current.value;
    setClubProfile(tempProfile);
  };
  // Updates state based on input text
  return (
    <>
      <Navbar />
      <PageContainer>
        <SetUpClubProfile />
        {currentPath === '/profile-creation/1' && (
          <PageDesc>Get-to-Know-You's: Why Students Should Join</PageDesc>
        )}
        {currentPath === '/profile-creation' && (
          <PageDesc>Opening Statement: Provide Basic Info</PageDesc>
        )}
        <Router>
          <Switch>
            <Route
              path='/profile-creation'
              exact
              render={(props) => (
                <ProfileCreation1
                  {...props}
                  clubProfile={clubProfile}
                  setClubProfile={setClubProfile}
                  clubNameRef={clubNameInput}
                  shortDescRef={shortDescInput}
                  longDescRef={longDescInput}
                />
              )}
            />
            <Route path='/profile-creation/1' component={ProfileCreation2} />
          </Switch>

          <ButtonContainer>
            <NavLink
              style={{ textDecoration: 'none' }}
              to='/profile-creation/1'
              isActive={(match) => {
                if (match) {
                  setCurrentPath('/profile-creation/1');
                } else {
                  setCurrentPath('/profile-creation');
                }
              }}
            >
              <FilledButton
                onClick={nextPage1}
                text={
                  currentPath === '/profile-creation/1'
                    ? 'Make my club profile'
                    : 'Next'
                }
                path='/profile-creation/1'
              />
            </NavLink>
          </ButtonContainer>
        </Router>
      </PageContainer>
    </>
  );
};

export default ProfileCreationMaster;

const SetUpClubProfile = () => {
  return (
    <section>
      <ClubProfileTitle>Set Up Your Club Profile</ClubProfileTitle>
      <Subtext>Complete your profile for maximum outreach</Subtext>
    </section>
  );
};
const ClubProfileTitle = styled.h1`
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem !important;
  }
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 0 3rem 0 4rem;
  @media only screen and (max-width: 768px) {
    padding: 0 1.375rem !important;
  }
`;

const PageDesc = styled.h2`
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-weight: 400;
  padding-left: 0rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const Subtext = styled.h3`
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  margin-top: 0.5rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem !important;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;
`;
