import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import SearchTag from '../components/searchTag/index';
import Checkbox from '../components/checkbox/index';
import Dropdown from '../components/dropdown/index';
<<<<<<< HEAD:src/containers/ProfileCreation.js
import FilledButton from '../components/filledButton/index';
import { motion } from 'framer-motion';
=======
import TextInput from '../components/textInput/index';
>>>>>>> e6cc94ef233884d7e0d0416a6698ccbb61de366d:client/src/containers/ProfileCreation.js

const ProfileCreation = ({ theme }) => {
  const [buttonState, setButtonState] = useState(false);
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
<<<<<<< HEAD:src/containers/ProfileCreation.js
          <FilledButton
            text='Etesam was here'
            stateFunc={setButtonState}
            stateVal={buttonState}
          />
          <ButtonTestText>
            button state is currently{' '}
            <motion.b
              initial={{ color: theme.colors.red }}
              animate={
                buttonState
                  ? { color: theme.colors.blue }
                  : { color: theme.colors.red }
              }
            >
              {buttonState + ''}
            </motion.b>
          </ButtonTestText>
=======
          <TextInput
            compulsory
            width='25rem'
            height='7.5rem'
            multiline
            characterMax={20}
            placeholder='Write your description here'
            labelHeader='Short Description:'
            labelDesc='20 characters max'
          />
>>>>>>> e6cc94ef233884d7e0d0416a6698ccbb61de366d:client/src/containers/ProfileCreation.js
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

const ButtonTestText = styled.span`
  margin-left: 0.75rem;
`;

const TempItem = styled.div`
  margin: 0.25rem;
`;

export default withTheme(ProfileCreation);
