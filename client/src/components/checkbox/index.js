import React, { useState, useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { useFocused } from '../customHooks/index';

const Checkbox = ({ theme, labelText }) => {
  const [clicked, setClicked] = useState(false);
  const checkbox = useRef(null);
  const checkboxFocused = useFocused(checkbox);

  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      checkbox.current.click();
    }
  };

  useEffect(() => {
    if (checkboxFocused) {
      document.addEventListener('keypress', onKeypress);
    }
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [checkboxFocused]);

  return (
    <LabelContainer>
      <CheckboxContainer
        tabIndex={0}
        ref={checkbox}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <StyledCheckbox clicked={clicked}>
          {clicked ? (
            <svg
              width='14'
              height='11'
              viewBox='0 0 14 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 1.5L4.75 9.75L1 6'
                stroke={theme.colors.white}
                strokeWidth={2}
              />
            </svg>
          ) : (
            <div></div>
          )}
        </StyledCheckbox>
      </CheckboxContainer>
      <CheckboxLabel
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {labelText}
      </CheckboxLabel>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  outline-color: ${(props) => props.theme.colors.blue};
`;

const StyledCheckbox = styled(motion.div)`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.3125rem;
  background-color: ${(props) =>
    props.clicked
      ? props.theme.colors.checkboxGray
      : props.theme.colors.fullWhite};
  border: 0.03125rem solid
    ${(props) =>
      props.clicked
        ? props.theme.colors.checkboxGray
        : props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: ${(props) => props.theme.colors.checkboxGray};
  font-size: 1.125rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  margin-left: 0.65rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
`;

export default withTheme(Checkbox);
