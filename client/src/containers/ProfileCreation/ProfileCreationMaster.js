import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import ProfileCreation1 from './ProfileCreation1/index';
import ProfileCreation2 from './ProfileCreation2';
import WebsiteTitle from '../../components/websiteTitle/index';
import Logout from '../../components/logout/index';
import FilledButton from '../../components/filledButton/index';
import { ProfileCreationContext } from '../../components/contexts/index';
const ProfileCreationMaster = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [tags, setTags] = useState([]);
  const [clubName, setClubName] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [longDesc, setLongDesc] = useState('');
  const [size, setSize] = useState('');
  const [memberPeriod, setMemberPeriod] = useState('');
  const [requireApp, setRequireApp] = useState(false);
  const [meetTime, setMeetTime] = useState(['', '']);
  const [clubProfile, setClubProfile] = useState({
    tags: [],
    clubName: '',
    shortDesc: '',
    longDesc: '',
    size: '',
    memberPeriod: '',
    requireApplication: true,
    meetTime: ['', ''],
  });

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  // Updates state based on input text
  return (
    <PageContainer>
      <StyledHeader>
        <LogoContainer>
          <WebsiteTitle />
        </LogoContainer>
        <Logout />
      </StyledHeader>
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
              <ProfileCreation1 {...props} tags={tags} setTags={setTags} />
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
  );
};

export default ProfileCreationMaster;

const SetUpClubProfile = () => {
  return (
    <section style={{ paddingLeft: '0.3rem' }}>
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
  padding: 0 4.375rem;
  @media only screen and (max-width: 600px) {
    padding: 0 2.375rem !important;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding-left: 0.3rem;
`;

const PageDesc = styled.h2`
  font-family: 'Roboto', 'Arial', 'Helvetica';
  font-weight: 400;
  padding-left: 0.3rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const Subtext = styled.h3`
  color: ${(props) => props.theme.colors.gray};
  font-family: 'Roboto', 'Arial', 'Helvetica';
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
