import React from 'react';
import styled from 'styled-components';
import SearchTag from '../components/searchTag/index';
import Checkbox from '../components/checkbox/index';
import Dropdown from '../components/dropdown/index';
import TextInput from '../components/textInput/index';

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
        <TempItem>
          <TextInput
            compulsory
            multiline
            characterMax={20}
            placeholder='Write your description here'
            height='9rem'
            labelHeader='Short Description:'
            labelDesc='20 characters max'
          />
        </TempItem>
      </TempContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 2rem;
  height: 100vh;
  background: #f4f6f8;
`;

const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TempItem = styled.div`
  margin: 0.25rem;
`;

export default ProfileCreation;
