import React from 'react';
import styled from 'styled-components';
import SearchTag from '../components/searchTag/index';
import Checkbox from '../components/checkbox/index';
import Dropdown from '../components/dropdown/index';

const ProfileCreation = () => {
  return (
    <Container>
      <TempContainer>
        <TempItem>
          <SearchTag text='Academic' />
        </TempItem>
        <TempItem>
          <SearchTag text='Advising' />
        </TempItem>
        <TempItem>
          <SearchTag text='Global Affairs' />
        </TempItem>
        <TempItem>
          <Checkbox />
        </TempItem>
        <TempItem>
          <Dropdown items={['1x', '2x', '3x', '4x or more']} />
        </TempItem>
      </TempContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 2rem;
`;

const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TempItem = styled.div`
  margin: 0.25rem;
`;

export default ProfileCreation;
