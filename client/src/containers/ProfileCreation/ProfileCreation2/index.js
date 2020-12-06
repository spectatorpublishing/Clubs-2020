import React from 'react';
import styled from 'styled-components';
import { PageDesc } from '../ProfileCreationMaster';
import { Highlights, Socials } from './helpers';
import TextInput from '../../../components/textInput/index';
const ProfileCreation2 = () => {
  return (
    <ProfileContainer>
      <section>
        <PageDesc>Get-to-Know-You's: Why Students Should Join</PageDesc>
        <TextInputContainer>
          <Highlights />

          <TextInput
            identifier='join-text'
            labelHeader='How to join:'
            labelDesc='500 characters max (Displayed on your club profile)'
            characterMax={500}
            multiline
            labelWidth='8.75rem'
            width='100%'
            height='11.25rem'
          />
          <TextInput
            identifier='application-text'
            labelHeader='Link to application:'
            labelDesc='(if any)'
            labelWidth='8.75rem'
            width='100%'
          />
        </TextInputContainer>
      </section>
      <section>
        <PageDesc>Links and Socials</PageDesc>
        <TextInputContainer>
          <Socials />
        </TextInputContainer>
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
  width: max(42.75rem, 67.5%);
  @media screen and (max-width: 801px) {
    width: inherit;
  }
`;
export default ProfileCreation2;
