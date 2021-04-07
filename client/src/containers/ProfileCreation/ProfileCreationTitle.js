import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SetUpClubProfile = () => {
    return (
      <section>
        <ClubProfileTitle>Set Up Your Club Profile</ClubProfileTitle>
        <Subtext>Complete your profile for maximum outreach</Subtext>
      </section>
    );
};

export default SetUpClubProfile;
  
const ClubProfileTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 0;
    padding-top: 2rem;
    @media only screen and (max-width: 600px) {
      font-size: 1.5rem !important;
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