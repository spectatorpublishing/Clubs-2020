import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextInput = ({
  height,
  width,
  multiline,
  labelHeader,
  labelDesc,
  compulsory,
  placeholder
}) => {
  const [focused, setFocused] = useState(false);

  const inputVariants = {
    init: {
      boxShadow: '2px 10px 30px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3 }
    },
    anim: {
      boxShadow: '2px 10px 30px rgba(120, 192, 245, 0.35)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {multiline ? (
        <TextContainer>
          <TextLabel htmlFor='textArea'>
            {compulsory ? <RedAsterisk>*</RedAsterisk> : <div />}
            <LabelHeader>{labelHeader}</LabelHeader>
            <LabelDesc>{labelDesc}</LabelDesc>
          </TextLabel>
          <StyledTextArea
            id='textArea'
            variants={inputVariants}
            focused={focused}
            height={height}
            width={width}
            placeholder={placeholder}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            initial='init'
            animate={focused ? 'anim' : 'init'}
          />
        </TextContainer>
      ) : (
        <TextContainer>
          <TextLabel htmlFor='textInput'>
            {compulsory ? <RedAsterisk>*</RedAsterisk> : <div />}
            <LabelHeader>{labelHeader}</LabelHeader>
            <LabelDesc>{labelDesc}</LabelDesc>
          </TextLabel>
          <StyledInput
            id='textInput'
            variants={inputVariants}
            focused={focused}
            height={height}
            width={width}
            placeholder={placeholder}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            initial='init'
            animate={focused ? 'anim' : 'init'}
          />
        </TextContainer>
      )}
    </>
  );
};
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
  }
`;

const StyledTextArea = styled(motion.textarea)`
  background: ${props => props.theme.colors.fullWhite};
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.checkboxGray};
  outline: none;
  font-family: 'Roboto', 'Helvetica', 'Arial';
  resize: none;
  overflow-y: scroll;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 80% !important;
  }
`;

const StyledInput = styled(motion.input)`
  background: ${props => props.theme.colors.fullWhite};
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : '2rem')};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.checkboxGray};
  font-family: 'Roboto', 'Helvetica', 'Arial';
  outline: none;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 80% !important;
  }
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

export default TextInput;
