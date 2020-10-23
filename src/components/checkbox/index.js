import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';

const Checkbox = ({ theme }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <CheckboxContainer
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <HiddenCheckbox />
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
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        ) : (
          <div></div>
        )}
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled(motion.div)`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.3125rem;
  background-color: ${props =>
    props.clicked
      ? props.theme.colors.checkboxGray
      : props.theme.colors.fullWhite};
  border: .03125rem solid
    ${props =>
      props.clicked
        ? props.theme.colors.checkboxGray
        : props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.0625rem;
`;

export default withTheme(Checkbox);
