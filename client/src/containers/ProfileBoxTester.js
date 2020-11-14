import React from 'react';
import { ProfilePageBox } from '../components/profilePageBox';
import styled from 'styled-components';
import Navbar from '../components/navbar';

export const ProfileBoxTester = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Title>This is a Profile Page Box</Title>
        <ProfilePageBox
          memberRange='20-50'
          acceptingMembers='true'
          applicationRequired='true'
          tags={[
            'Music',
            'Performing Arts',
            'Community Service',
            'Global Affairs',
            'Pre-professional',
          ]}
        />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.main`
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
`;
