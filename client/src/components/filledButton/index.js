import React, { useRef, useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const FilledButton = ({
  theme,
  text,
  stateFunc,
  stateVal,
  onClick,
  path,
  history
}) => {

  const handleClick = () => {
    // For updating path
    if (path) {
      setTimeout(function() {
        history.push('/profile-creation/2');
      }, 200);
    }
    // For state change
    else if (!onClick) {
      if (stateFunc) stateFunc(!stateVal);
      else
        console.error(`state func not defined for button with text "${text}"`);
    }
    // For custom function
    else {
      onClick();
    }
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
  min-width: 6.4375rem;
  max-width: 13rem;
  min-height: 2.225rem;
  width: auto;
  background-color: ${props => props.theme.colors.red};
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
  cursor: pointer;
`;
export default withRouter(withTheme(FilledButton));
