import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const getErrorMessage = (showErrorMessage, excessCharacters) => {
  return (
    <AnimatePresence>
      {showErrorMessage && (
        <ErrorMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Your message is {excessCharacters} characters too long
        </ErrorMessage>
      )}
    </AnimatePresence>
  );
};

export const getLabel = (compulsory, labelHeader, labelDesc, textId) => {
  return (
    <TextLabel htmlFor={textId}>
      {compulsory ? <RedAsterisk>*</RedAsterisk> : <div />}
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
  if (e.target.value.length > characterMax) {
    setShowErrorMessage(true);
    setExcessCharacters(e.target.value.length - characterMax);
  } else if (e.target.value.length <= characterMax) {
    setShowErrorMessage(false);
    setExcessCharacters(0);
  }
};

const ErrorMessage = styled(motion.div)`
  color: ${props => props.theme.colors.red};
  margin-top: 0.2rem;
`;

const TextLabel = styled.label`
  margin-right: 0.5rem;
  max-width: 10.1875rem;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  font-size: 1.125rem;
  font-family: 'Roboto', 'Helvetica', 'Arial';
  display: flex;
  flex-direction: column;
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
const RedAsterisk = styled.span`
  position: absolute;
  margin: -0.9rem 0 0 -0.575rem;
  font-size: 1.5625rem;
  color: ${props => props.theme.colors.red};
`;
