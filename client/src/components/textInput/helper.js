import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import RedAsterisk from '../redAsterisk/index';

export const getErrorMessage = (showErrorMessage, excessCharacters) => {
  return (
    <ErrorMessage
      initial={{ opacity: 0, height: 0 }}
      animate={
        showErrorMessage
          ? { opacity: 1, height: 'auto' }
          : { opacity: 0, height: 0, transition: { height: { delay: 0.5 } } }
      }
    >
      Your message is {excessCharacters} characters too long
    </ErrorMessage>
  );
};

export const getLabel = (
  compulsory,
  labelHeader,
  labelDesc,
  textId,
  labelWidth
) => {
  return (
    <TextLabel labelWidth={labelWidth} htmlFor={textId}>
      {compulsory ? <RedAsterisk>*</RedAsterisk> : <></>}
      <LabelHeader>{labelHeader}</LabelHeader>
      <LabelDesc>{labelDesc}</LabelDesc>
    </TextLabel>
  );
};

export const limitSize = (
  e,
  characterMax,
  setShowErrorMessage,
  setExcessCharacters
) => {
  if (characterMax !== null && e.target.value.length > characterMax) {
    setShowErrorMessage(true);
    setExcessCharacters(e.target.value.length - characterMax);
  } else if (characterMax !== null && e.target.value.length <= characterMax) {
    setShowErrorMessage(false);
  }
};

const ErrorMessage = styled(motion.div)`
  color: ${(props) => props.theme.colors.red};
  margin-top: 0.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  font-family: 'Manrope', 'Roboto', 'Helvetica', 'Arial';
`;

const TextLabel = styled.label`
  margin-right: 0.5rem;
  width: ${(props) => (props.labelWidth ? props.labelWidth : '15rem')};
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  font-size: 1.125rem;
  font-family: 'Manrope', 'Roboto', 'Helvetica', 'Arial';
  height: fit-content;
  padding: 0.3rem 0;
  @media only screen and (max-width: 768px) {
    padding: 0 0.35rem 0.3rem;
    max-width: 70%;
  }
`;

const LabelHeader = styled.div`
  font-size: 1.125rem;
`;
const LabelDesc = styled.div`
  font-size: 0.875rem;
`;
