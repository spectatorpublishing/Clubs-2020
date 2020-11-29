import React from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const FilledButton = ({ theme, text, stateFunc, stateVal, onClick }) => {
  const handleClick = () => {
    // For state change
    if (!onClick) {
      if (stateFunc) stateFunc(!stateVal);
    }
    // For custom function
    else {
      onClick();
    }
  };
  return (
    <StyledButton
      whileHover={{ backgroundColor: theme.colors.darkRed }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {text ? text : 'no text passed in'}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  min-width: 6.4375rem;
  max-width: 13rem;
  min-height: 2.225rem;
  width: auto;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.fullWhite};
  border-radius: 0.4375rem;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;
export default withRouter(withTheme(FilledButton));
