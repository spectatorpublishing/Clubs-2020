import React from 'react';
import styled from 'styled-components';

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
        <TextInput  key={`input-${index}`}
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
        <TagsContainer>{tags}</TagsContainer>
      </Column>
      <Column right>
        {inputs}
      </Column>
    </StyledBody>
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
  max-height: 60vh;
  overflow-y: auto;
  padding-left: ${props => (props.right ? '2.5rem' : '0rem')};
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    order: ${props => (props.right ? '-1' : '1')};
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const TagContainer = styled.div`
  margin: 0.3rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
  overflow: visible;
`;


export default ProfileCreation1;
