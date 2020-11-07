import React from 'react';
import styled, { css } from 'styled-components';
import RedAsterisk from '../../../components/redAsterisk/index';
import SearchTag from '../../../components/searchTag/index';
import Checkbox from '../../../components/checkbox/index';
import Dropdown from '../../../components/dropdown/index';
import TextInput from '../../../components/textInput/index';
import FilledButton from '../../../components/filledButton/index';
import { inputData, tagData } from './data';
const ProfileCreation1 = () => {
  const tags = tagData.map((tagName, index) => {
    return (
      <TagContainer>
        <SearchTag text={tagName} key={`tag-${index}`} />
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
        <TagsContainer>{tags}</TagsContainer>
      </Column>
      <Column right>
        {inputs}
        <NewMembers />
        <RequireApplication />
        <MeetFrequency />
      </Column>
    </StyledBody>
  );
};

export default ProfileCreation1;

const NewMembers = () => {
  return (
    <FlexRow>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> When do you take new members?
      </RowHeader>
      <CheckboxContainer>
        <Checkbox labelText='Fall' />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox labelText='Spring' />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox labelText='Not currently taking new members' />
      </CheckboxContainer>
    </FlexRow>
  );
};

const RequireApplication = () => {
  return (
    <FlexRow>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> Do you require an application?
      </RowHeader>
      <CheckboxContainer>
        <Checkbox labelText='Yes' />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox labelText='No' />
      </CheckboxContainer>
    </FlexRow>
  );
};

const MeetFrequency = () => {
  return (
    <FlexRow>
      <RowHeader>How often do you meet?</RowHeader>
      <DropdownContainer>
        <Dropdown items={['1x', '2x', '3x', '4x or more']} />
      </DropdownContainer>
      <DropdownContainer>
        <Dropdown items={['week', 'month']} />
      </DropdownContainer>
    </FlexRow>
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
  max-height: 60vh;
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

const FlexRow = styled(InputContainer)`
  display: flex;
  
`;

const RowHeader = styled(TagHeader)`
  margin: 0;
  max-width: 12.5rem;
`;

const CheckboxContainer = styled.div`
  margin: 0 0.75rem;
`;

const DropdownContainer = styled(CheckboxContainer)``;
