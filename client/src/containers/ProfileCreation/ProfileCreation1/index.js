import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../../components/textInput/index';
import { inputData } from './data';
import { withRouter } from 'react-router-dom';
import { ErrorMessage, PageDesc } from '../ProfileCreationMaster';
import TomatoButton from '../../../components/tomatoButton/index';
import ImageUploadButton from '../../../components/ImageUpload/ImageUploadButton';
import SetUpYourClubProfile from '../ProfileCreationTitle';
import {
  ClubSize,
  NewMembers,
  RequireApplication,
  MeetFrequency,
  Tags,
} from './helpers';

const ProfileCreation1 = ({ clubProfile, setClubProfile, history, saveHandler, clubProfileId }) => {
  const [errorMessage, setErrorMesssage] = useState('');
  const clubNameRef = useRef(null);
  const shortDescRef = useRef(null);
  const longDescRef = useRef(null);

  const inputs = inputData.map((item, index) => {
    const key = Object.keys(item)[0];
    const refs = [clubNameRef, shortDescRef, longDescRef];
    const defaultVals = [
      clubProfile.clubName,
      clubProfile.shortDesc,
      clubProfile.longDesc,
    ];

    return (
      <InputContainer key={`input-${index}`}>
        <TextInput
          compulsory
          defaultValue={defaultVals[index]}
          width='100%'
          multiline={item[key].multiline}
          height={item[key].height}
          characterMax={item[key].characterMax}
          labelHeader={item[key].labelHeader}
          labelDesc={item[key].labelDesc}
          identifier={key}
          reference={refs[index]}
        />
      </InputContainer>
    );
  });

  const saveProfile = (next) => {
    let tempProfile = { ...clubProfile };
    tempProfile.clubName = clubNameRef.current.value;
    tempProfile.shortDesc = shortDescRef.current.value;
    tempProfile.longDesc = longDescRef.current.value;

    // Left empty
    if (
      tempProfile.clubName === '' ||
      tempProfile.shortDesc === '' ||
      tempProfile.longDesc === '' ||
      tempProfile.size === '' ||
      tempProfile.memberPeriod === [] ||
      tempProfile.requireApplication === '' ||
      tempProfile.tags === []
    ) {
      setErrorMesssage('Mandatory Field Missing!');
      return;
    } else if (
      tempProfile.shortDesc.length > 150 ||
      tempProfile.longDesc.length > 500
    ) {
      setErrorMesssage('Character Limit Exceeded!');
      return;
    }
    
    if(next) history.push('/profile-creation/1');
    
    setClubProfile(tempProfile);
    saveHandler(tempProfile, false);
    setErrorMesssage('');
  };

  return (
    <>
    <SetUpYourClubProfile/>
      <PageDesc>Opening Statement: Provide Basic Info</PageDesc>
      <StyledBody>
        <Column left>
          <Tags clubProfile={clubProfile} setClubProfile={setClubProfile} />
        </Column>
        <Column right>
          {inputs}
          <ImageUploadButton 
            clubProfileId={clubProfileId} 
            clubProfile={clubProfile}
            setClubProfile={setClubProfile}
          />
          <ClubSize clubProfile={clubProfile} setClubProfile={setClubProfile} />
          <NewMembers
            clubProfile={clubProfile}
            setClubProfile={setClubProfile}
          />
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
      <ButtonContainer>
        {/* <TomatoButton text='Save' margin="0 1rem" onClick={() => saveProfile(false)} /> */}
        <TomatoButton text='Next' margin="0 1rem" onClick={() => saveProfile(true)} />
      </ButtonContainer>
      <ErrorMessage
          initial={{ opacity: 0 }}
          animate={errorMessage === '' ? { opacity: 0 } : { opacity: 1 }}
        >
          {errorMessage}
        </ErrorMessage>
    </>
  );
};

export default withRouter(ProfileCreation1);

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
  width: auto;
  padding-left: ${(props) => (props.right ? '2.5rem' : '0rem')};
  @media only screen and (max-width: 801px) {
    padding-left: 0;
    order: ${(props) => (props.right ? '-1' : '1')};
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;
`;
