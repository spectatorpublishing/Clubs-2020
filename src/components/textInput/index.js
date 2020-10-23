import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextInput = ({ height, width, multiline, labelText }) => {
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
        <StyledTextArea
          variants={inputVariants}
          focused={focused}
          height={height}
          width={width}
          placeholder='bla bla bla'
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          initial='init'
          animate={focused ? 'anim' : 'init'}
        />
      ) : (
        <>
          <label>{labelText}</label>
          <StyledInput
            variants={inputVariants}
            focused={focused}
            height={height}
            width={width}
            placeholder='bla bla bla'
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            initial='init'
            animate={focused ? 'anim' : 'init'}
          />
        </>
      )}
    </>
  );
};

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
`;

const StyledInput = styled(motion.input)`
  background: ${props => props.theme.colors.fullWhite};
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.checkboxGray};
  font-family: 'Roboto', 'Helvetica', 'Arial';
  outline: none;
`;

export default TextInput;
