import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import SearchTagActive from '../../components/searchTagActive/index';
import Checkbox from '../../components/checkbox/index';
import Dropdown from '../../components/dropdown/index';
import FilledButton from '../components/filledButton/index';
import { motion } from 'framer-motion';
import TextInput from '../../components/textInput/index';

const ProfileCreation = ({ theme }) => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <>
      <Container>
        <TempContainer>
          <TempItem>
            <SearchTagActive text='Academic' />
          </TempItem>
          <TempItem>
            <SearchTagActive text='Advising' />
          </TempItem>
          <TempItem>
            <SearchTagActive text='Global Affairs' />
          </TempItem>
          <TempItem>
            <Checkbox />
          </TempItem>
          <TempItem>
            <Dropdown items={['1x', '2x', '3x', '4x or more']} />
          </TempItem>
        </TempContainer>
        <TempContainer>
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
        </TempContainer>
        <TempItem>
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
          </TempItem>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-left: 2rem;
  height: 100vh;
  background: #f4f6f8;
  padding-top: 7rem;
`;

const TempContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 2rem;
`;

const ButtonTestText = styled.span`
  margin-left: 0.75rem;
`;

const TempItem = styled.div`
  margin: 0.25rem;
`;

export default withTheme(ProfileCreation);
