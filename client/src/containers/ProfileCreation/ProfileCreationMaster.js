import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileCreation1 from './ProfileCreation1/index';
import ProfileCreation2 from './ProfileCreation2/index';
import Navbar from '../../components/navbar/index';

const ProfileCreationMaster = ({ userCred }) => {
  const [clubProfile, setClubProfile] = useState({
    tags: [],
    clubName: '',
    shortDesc: '',
    longDesc: '',
    size: '',
    memberPeriod: [],
    requireApplication: '',
    meetTime: ['', ''],
    highlights: ['', '', '', '', ''],
    howToJoin: '',
    appLink: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
    clubEmail: '',
    mailingListLink: '',
  });

  useEffect(() => {
    console.log(clubProfile);
  }, [clubProfile]);

  // Updates state based on input text
  return (
    <>
      <Navbar />
      <PageContainer>
        <SetUpClubProfile />
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
                  userCred={userCred}
                />
              )}
            />
            <Route
              path='/profile-creation/1'
              render={(props) => (
                <ProfileCreation2
                  {...props}
                  clubProfile={clubProfile}
                  setClubProfile={setClubProfile}
                  userCred={userCred}
                />
              )}
            />
          </Switch>
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

export const PageDesc = styled.h2`
  font-weight: 600;
  padding-left: 0rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const Subtext = styled.h3`
  color: ${(props) => props.theme.colors.gray};
  margin-top: 0.5rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem !important;
  }
`;

export const ErrorMessage = styled(motion.div)`
  color: ${(props) => props.theme.colors.red};
  margin: 0.8rem 0;
`;
