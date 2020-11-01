import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileCreation1 from './ProfileCreation1';
import ProfileCreation2 from './ProfileCreation2';
import WebsiteTitle from '../../components/websiteTitle/index';
import Logout from '../../components/logout/index';

export const ProfileCreationMaster = () => {
  return (
    <PageContainer>
      <StyledHeader>
        <WebsiteTitle />
        <Logout />
      </StyledHeader>
      <SetUpClubProfile />
      <Router>
        <Switch>
          <Route path='/profile-creation' exact component={ProfileCreation1} />
          <Route
            path='/profile-creation/2'
            exact
            component={ProfileCreation2}
          />
        </Switch>
      </Router>
    </PageContainer>
  );
};

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
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 0 4.375rem;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Subtext = styled.h3`
  color: ${props => props.theme.colors.gray};
  font-family: 'Roboto', 'Arial', 'Helvetica';
  margin-top: 0.5rem;
  font-weight: 500;
`;
