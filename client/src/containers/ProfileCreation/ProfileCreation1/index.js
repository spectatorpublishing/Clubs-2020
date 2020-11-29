import React from 'react';
import styled from 'styled-components';

import TextInput from '../../../components/textInput/index';
import { inputData } from './data';

import {
  ClubSize,
  NewMembers,
  RequireApplication,
  MeetFrequency,
  Tags,
} from './helpers';

const ProfileCreation1 = ({
  clubProfile,
  setClubProfile,
  clubNameRef,
  shortDescRef,
  longDescRef,
}) => {

  const inputs = inputData.map((item, index) => {
    const key = Object.keys(item)[0];
    const getRef = () => {
      if (key === 'clubName') return clubNameRef;
      else if (key === 'shortDesc') return shortDescRef;
      else if (key === 'longDesc') return longDescRef;
    };
    return (
      <InputContainer key={`input-${index}`}>
        <TextInput
          compulsory
          width='100%'
          multiline={item[key].multiline}
          height={item[key].height}
          characterMax={item[key].characterMax}
          labelHeader={item[key].labelHeader}
          labelDesc={item[key].labelDesc}
          identifier={key}
          reference={getRef()}
        />
      </InputContainer>
    );
  });

  return (
    <StyledBody>
      <Column left>
        <Tags clubProfile={clubProfile} setClubProfile={setClubProfile} />
      </Column>
      <Column right>
        {inputs}
        <ClubSize clubProfile={clubProfile} setClubProfile={setClubProfile} />
        <NewMembers clubProfile={clubProfile} setClubProfile={setClubProfile} />
        <RequireApplication
          clubProfile={clubProfile}
          setClubProfile={setClubProfile}
        />
        <MeetFrequency
          clubProfile={clubProfile}
          setClubProfile={setClubProfile}
        />
      </Column>
    </StyledBody>
  );
};

export default ProfileCreation1;

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 30% 70%;
  padding-top: 1rem;
  @media only screen and (max-width: 801px) {
    grid-template-rows: auto auto !important;
    grid-template-columns: none;
    padding-top: 0.5rem;
    grid-auto-flow: dense;
  }
`;

const Column = styled.div`
  width: 100%;
  padding-left: ${(props) => (props.right ? '2.5rem' : '0rem')};
  @media only screen and (max-width: 801px) {
    padding-left: 0;
    order: ${(props) => (props.right ? '-1' : '1')};
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 45rem;
`;

const TagHeader = styled.h3`
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-weight: 400;
  margin-left: 0.3rem;
  font-size: 1.125rem;
`;

const TagContainer = styled.div`
  margin: 0.3rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
`;
