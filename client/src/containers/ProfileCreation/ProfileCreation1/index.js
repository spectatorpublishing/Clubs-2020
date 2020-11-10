import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import RedAsterisk from '../../../components/redAsterisk/index';
import SearchTag from '../../../components/searchTag/index';
import Checkbox from '../../../components/checkbox/index';
import Dropdown from '../../../components/dropdown/index';
import TextInput from '../../../components/textInput/index';
import GrayTag from '../../../components/grayTag/index';
import FilledButton from '../../../components/filledButton/index';
import { inputData, tagData } from './data';
const ProfileCreation1 = ({ clubProfile, setClubProfile }) => {
  const tagComponents = tagData.map((tagName, index) => {
    return (
      <TagContainer>
        <SearchTag
          text={tagName}
          key={`tag-${index}`}
          data={clubProfile}
          setData={setClubProfile}
          objId='tags'
        />
      </TagContainer>
    );
  });

  const inputs = inputData.map((item, index) => {
    const key = Object.keys(item)[0];
    return (
      <InputContainer>
        <TextInput
          key={`input-${index}`}
          compulsory
          width='100%'
          multiline={item[key].multiline}
          height={item[key].height}
          characterMax={item[key].characterMax}
          labelHeader={item[key].labelHeader}
          labelDesc={item[key].labelDesc}
          identifier={key}
        />
      </InputContainer>
    );
  });

  return (
    <StyledBody>
      <Column left>
        <TagHeader>
          <RedAsterisk>*</RedAsterisk>
          Select up to 5 tags that describe your club:
        </TagHeader>
        <TagsContainer>{tagComponents}</TagsContainer>
      </Column>
      <Column right>
        {inputs}
        <ClubSize />
        <NewMembers clubProfile={clubProfile} setClubProfile={setClubProfile} />
        <RequireApplication />
        <MeetFrequency />
      </Column>
    </StyledBody>
  );
};

export default ProfileCreation1;

const ClubSize = ({ clubProfile, setClubProfile }) => {
  const sizes = ['0-10', '10-20', '20-50', '50-100', '100+'];
  const sizeTags = sizes.map(() => {
    return (
      <SizeContainer>
        <GrayTag />
      </SizeContainer>
    );
  });
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> Size:
      </RowHeader>
      <FlexRow>{sizeTags}</FlexRow>
    </QuestionContainer>
  );
};

const NewMembers = ({ clubProfile, setClubProfile }) => {
  const checkboxData = [
    ['left', 'Fall'],
    ['mid', 'Spring'],
    ['right', 'Not taking members'],
  ];
  const checkboxes = checkboxData.map((item) => {
    return (
      <CheckboxContainer>
        <Checkbox
          order={item[0]}
          labelText={item[1]}
          objId='memberPeriod'
          data={clubProfile}
          setData={setClubProfile}
        />
      </CheckboxContainer>
    );
  });
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> When do you take new members?
      </RowHeader>
      <FlexRow>{checkboxes}</FlexRow>
    </QuestionContainer>
  );
};

const RequireApplication = () => {
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> Do you require an application?
      </RowHeader>
      <FlexRow>
        <CheckboxContainer>
          <Checkbox labelText='Yes' order='left' />
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox labelText='No' order='right' />
        </CheckboxContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

const MeetFrequency = () => {
  return (
    <QuestionContainer>
      <RowHeader>How often do you meet?</RowHeader>
      <FlexRow>
        <DropdownContainer>
          <Dropdown items={['1x', '2x', '3x', '4x or more']} />
        </DropdownContainer>
        <QuestionBody>per</QuestionBody>
        <DropdownContainer>
          <Dropdown items={['week', 'month']} />
        </DropdownContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 30% 70%;
  padding-top: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-rows: auto auto !important;
    grid-template-columns: none;
    padding-top: 0.5rem;
    grid-auto-flow: dense;
  }
`;

const Column = styled.div`
  width: 100%;
  padding-left: ${(props) => (props.right ? '2.5rem' : '0rem')};
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    order: ${(props) => (props.right ? '-1' : '1')};
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 40vh;
`;

const QuestionBody = styled.span`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.checkboxGray};
  font-family: 'Roboto', 'Arial', 'Helvetica';
  @media screen and (max-width: 600px) {
    margin: 0 0.75rem;
  }
`;

const TagHeader = styled.h3`
  font-family: 'Roboto', 'Arial', 'Helvetica';
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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin-top: 0.75rem;
  }
`;

const QuestionContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const RowHeader = styled(TagHeader)`
  margin: 0;
  max-width: 12.5rem;
  @media screen and (max-width: 600px) {
    max-width: 85%;
  }
`;

const CheckboxContainer = styled.div`
  margin: 0 0.75rem;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const DropdownContainer = styled(CheckboxContainer)``;
const SizeContainer = styled(CheckboxContainer)``;
