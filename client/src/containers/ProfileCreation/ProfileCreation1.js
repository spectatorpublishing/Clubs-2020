import React from 'react';
import styled from 'styled-components';

import SearchTag from '../../components/searchTag/index';
import Checkbox from '../../components/checkbox/index';
import Dropdown from '../../components/dropdown/index';
import TextInput from '../../components/textInput/index';
import FilledButton from '../../components/filledButton/index';
const ProfileCreation1 = () => {
  const inputData = [
    {
      header: {
        labelHeader: 'Club Name:',
        labelDesc: null,
        height: '2.635rem',
        multiline: false,
        characterMax: null,
      }
    },
    {
      shortDesc: {
        labelHeader: 'Short Description:',
        labelDesc: '200 characters max',
        height: '6.135rem',
        multiline: true,
        characterMax: 200,
      }
    },
    {
      longDesc: {
        labelHeader: 'Long Description:',
        labelDesc: '400 characters max',
        height: '10.125rem',
        multiline: true,
        characterMax: 400,
      }
    }
  ];
  const inputs = inputData.map((item, index) => {
    const key = Object.keys(item)[0];
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
        />
      </InputContainer>
    );
  });

  return (
    <StyledBody>
      <Column>
        <div>test1</div>
      </Column>
      <Column>
        {inputs}

        <FilledButton text='Next' path='profile-creation/2' />
      </Column>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 3rem;
  @media only screen and (max-width: 768px) {
    grid-template-rows: 100% 100% !important;
    grid-template-columns: none;
  }
`;

const Column = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
`;

export default ProfileCreation1;
