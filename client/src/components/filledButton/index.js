import React from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';

const FilledButton = ({ theme, text, stateFunc, stateVal }) => {
  const handleClick = () => {
    if (stateFunc) stateFunc(!stateVal);
    else console.error(`state func not defined for button with text "${text}"`);
  };
  return (
    <StyledButton
      whileHover={{ backgroundColor: theme.colors.darkRed }}
      whileTap={{ backgroundColor: '#C45B45', scale: 0.95 }}
      onClick={handleClick}
    >
      {text ? text : 'no text passed in'}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  min-width: 9.4375rem;
  max-width: 13rem;
  min-height: 2.225rem;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.fullWhite};
  border-radius: 0.4375rem;
  border: none;
  padding: 0.3rem;
  font-size: 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export default withTheme(FilledButton);
