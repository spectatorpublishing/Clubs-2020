import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Checkbox = () => {
  const [clicked, setClicked] = useState(false);
  const checkmark = () => {
    return (
      <svg
        width='14'
        height='11'
        viewBox='0 0 14 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13 1.5L4.75 9.75L1 6'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    );
  };
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
              stroke='white'
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
  border-radius: 5px;
  background-color: ${props => (props.clicked ? '#696969' : '#FFFFFF')};
  border: 0.5px solid ${props => (props.clicked ? '#696969' : '#c4c4c4')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Checkbox;
