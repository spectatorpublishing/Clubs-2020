import React from 'react';
import styled from 'styled-components';
import { PageDesc } from '../ProfileCreationMaster';
import { Highlights } from './helpers';
import TextInput from '../../../components/textInput/index';
const ProfileCreation2 = () => {
  return (
    <ProfileContainer>
      <section>
        <PageDesc>Get-to-Know-You's: Why Students Should Join</PageDesc>
        <Highlights />

        <TextInput
          identifier='join-text'
          labelHeader='How to join:'
          labelDesc='500 characters max (Displayed on your club profile)'
          characterMax={500}
          multiline
          labelWidth='8.7rem'
          width='max(38.75rem, 60%)'
          height='11.25rem'
        />

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
  width: 100%;
  @media screen and (max-width: 801px) {
    width: 100%;
  }
`;

const TextInputContainer = styled.div`
  width: max(38.75rem, 67.5%);
  @media screen and (max-width: 801px) {
    width: inherit;
  }
`;
export default ProfileCreation2;
