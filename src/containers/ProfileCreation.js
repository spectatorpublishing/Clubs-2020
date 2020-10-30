import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import SearchTag from '../components/searchTag/index';
import Checkbox from '../components/checkbox/index';
import Dropdown from '../components/dropdown/index';
import FilledButton from '../components/filledButton/index';
import { motion } from 'framer-motion';

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

const ButtonTestText = styled.span`
  margin-left: 0.75rem;
`;

const TempItem = styled.div`
  margin: 0.25rem;
`;

export default withTheme(ProfileCreation);
