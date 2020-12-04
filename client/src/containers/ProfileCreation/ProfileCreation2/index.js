import React from 'react';
import styled from 'styled-components'
import { PageDesc } from '../ProfileCreationMaster';
import { Highlights } from './helpers';

const ProfileCreation2 = () => {
  return (
    <ProfileContainer>
      <section>
        <PageDesc>Get-to-Know-You's: Why Students Should Join</PageDesc>
        <Highlights />
        <section>how to join</section>
        <section>link to application</section>
      </section>
      <section>
        <PageDesc>Links and Socials</PageDesc>
        <section>highlights</section>
      </section>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 65%;
  @media screen and (max-width: 801px){
    width: 100%;
  }
`;
export default ProfileCreation2;
