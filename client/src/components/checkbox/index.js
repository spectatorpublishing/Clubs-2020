import React, { useState, useRef, useEffect } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { motion } from 'framer-motion';
import { useFocused, useViewport } from '../customHooks/index';

// orderNum is for when you want border radius on sides of mobile version

const Checkbox = ({ theme, labelText, orderNum }) => {
  const [clicked, setClicked] = useState(false);
  const checkbox = useRef(null);
  const checkboxFocused = useFocused(checkbox);
  const { width } = useViewport();
  const breakpoint = 600;
  const boxVariants = {
    checked: {
      background: '#696969',
    },
    unchecked: { background: '#ffffff' },
  };

  const checkVariants = {
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 },
  };

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
        <StyledCheckbox
          orderNum={orderNum}
          variants={boxVariants}
          clicked={clicked}
          initial={'unchecked'}
          animate={clicked ? 'checked' : 'unchecked'}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => setClicked(!clicked)}
        >
          {width <= breakpoint ? (
            <MobileLabel>{labelText}</MobileLabel>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox=' 0 0 150 150'
            >
              <motion.path
                d='M38 74.707l24.647 24.646L116.5 45.5'
                fill='transparent'
                strokeWidth='15'
                stroke='white'
                strokeLinecap='round'
                variants={checkVariants}
                animate={clicked ? 'checked' : 'unchecked'}
              />
            </svg>
          )}
        </StyledCheckbox>
      </CheckboxContainer>
      {width <= breakpoint ? (
        <></>
      ) : (
        <CheckboxLabel
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {labelText}
        </CheckboxLabel>
      )}
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  outline-color: ${(props) => props.theme.colors.blue};
`;

const MobileLabel = styled.h3`
  font-family: 'Roboto', 'Helvetica', 'Arial';
  font-size: 0.8125rem;
  font-weight: 400;
  text-align: center;
`;

const StyledCheckbox = styled(motion.div)`
  width: 25px;
  height: 25px;
  border-radius: 0.3125rem;
  border: 0.03125rem solid
    ${(props) =>
      props.clicked
        ? props.theme.colors.checkboxGray
        : props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    min-width: 5rem;
    width: auto;
    height: 1.25rem;
    padding: 0.5rem 0.5rem;
    border-radius: 0;
    color: ${(props) =>
      props.clicked
        ? props.theme.colors.fullWhite
        : props.theme.colors.checkboxGray};
    ${(props) =>
      props.orderNum === 0 &&
      css`
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
      `}
    ${(props) =>
      props.orderNum === 2 &&
      css`
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
      `}
  }
`;

const CheckboxLabel = styled.label`
  color: ${(props) => props.theme.colors.checkboxGray};
  font-size: 1.125rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  margin-left: 0.65rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  height: auto;

  width: auto;
  -ms-user-select: none;
  cursor: pointer;
`;

export default withTheme(Checkbox);
