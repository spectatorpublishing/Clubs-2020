import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { getErrorMessage, getLabel, limitSize } from './helper';

const TextInput = ({
  height,
  width,
  multiline,
  labelHeader,
  labelDesc,
  compulsory,
  placeholder,
  characterMax,
  identifier,
  labelWidth,
  reference,
  defaultValue,
}) => {
  const [focused, setFocused] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [excessCharacters, setExcessCharacters] = useState(0);
  const inputVariants = {
    init: {
      boxShadow: 'rgba(0, 0, 0, 0.09) 2px 10px 30px',
      transition: { duration: 0.3 },
    },
    anim: {
      boxShadow: '2px 10px 30px rgba(120, 192, 245, 0.5)',
      transition: { duration: 0.3 },
    },
  };
  const whenChange = (e) => {
    limitSize(e, characterMax, setShowErrorMessage, setExcessCharacters);
  };

  return (
    <>
      {multiline ? (
        <TextContainer>
          {getLabel(compulsory, labelHeader, labelDesc, identifier, labelWidth)}
          <FlexCol width={width} multiline={multiline}>
            <StyledTextArea
              defaultValue={defaultValue}
              id={identifier}
              ref={reference}
              name={identifier}
              height={height}
              variants={inputVariants}
              focused={focused}
              placeholder={placeholder}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              onChange={whenChange}
              initial='init'
              animate={focused ? 'anim' : 'init'}
            />
            {getErrorMessage(showErrorMessage, excessCharacters)}
          </FlexCol>
        </TextContainer>
      ) : (
        <TextContainer>
          {getLabel(compulsory, labelHeader, labelDesc, identifier, labelWidth)}
          <FlexCol width={width}>
            <StyledInput
              defaultValue={defaultValue}
              id={identifier}
              ref={reference}
              name={identifier}
              height={height}
              variants={inputVariants}
              focused={focused}
              placeholder={placeholder}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              onChange={whenChange}
              initial='init'
              animate={focused ? 'anim' : 'init'}
            />
            {getErrorMessage(showErrorMessage, excessCharacters)}
          </FlexCol>
        </TextContainer>
      )}
    </>
  );
};
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0 0 0.3rem;
  @media only screen and (max-width: 801px) {
    flex-direction: column !important;
  }
`;

const FlexCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : 'auto')};

  @media only screen and (max-width: 801px) {
    ${(props) =>
      props.multiline &&
      css`
        height: calc(${(props) => props.height} + 5rem) !important;
      `}
  }
`;

const InputStyles = css`
  background: ${(props) => props.theme.colors.fullWhite};
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: 100%;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.checkboxGray};
  font-family: 'Manrope', 'Roboto', 'Helvetica', 'Arial';
  resize: none;
  outline-color: ${(props) => props.theme.colors.blue};
  overflow-y: auto;
  cursor: text;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.05) 2px 10px 30px;
`;

const StyledTextArea = styled(motion.textarea)`
  ${InputStyles}
`;

const StyledInput = styled(motion.input)`
  ${InputStyles}
`;

export default TextInput;
