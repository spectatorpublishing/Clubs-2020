import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const TomatoButton = ({
  theme,
  text,
  stateFunc,
  stateVal,
  onClick,
  history,
  wire,
  to,
  margin
}) => {
  const handleClick = () => {
    if (!onClick) {
      // For state change
      if (stateFunc) stateFunc(!stateVal);
      // For page change
      if (to) history.push(to);
    }

    // For custom function
    else {
      onClick();
    }
  };
  let hoverEffect = {};
  if (!wire) hoverEffect = { backgroundColor: theme.colors.darkRed };
  return (
    <StyledButton
      margin={margin}
      wire={wire}
      whileHover={hoverEffect}
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
  margin: ${props=>props.margin};
  width: auto;
  ${(props) =>
    props.wire &&
    css`
      color: ${(props) => props.theme.colors.red};
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.red};
    `}
  ${(props) =>
    !props.wire &&
    css`
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.fullWhite};
      border: none;
    `}
  border-radius: 0.4375rem;
  font-weight: 600;
  padding: 0.5rem 1rem;

  /* // font-family is necessary here */
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';  
  font-size: 1.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;
export default withRouter(withTheme(TomatoButton));
