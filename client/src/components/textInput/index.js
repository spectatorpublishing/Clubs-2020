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
  identifier
}) => {
  const [focused, setFocused] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [excessCharacters, setExcessCharacters] = useState(0);
  const inputVariants = {
    init: {
      boxShadow: '2px 10px 30px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3 }
    },
    anim: {
      boxShadow: '2px 10px 30px rgba(120, 192, 245, 0.5)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {multiline ? (
        <TextContainer>
          {getLabel(compulsory, labelHeader, labelDesc, identifier)}
          <FlexCol width={width}>
            <FlexCol height={height} width={width} multiline={multiline}>
              <StyledTextArea
                id={identifier}
                variants={inputVariants}
                focused={focused}
                placeholder={placeholder}
                onFocus={() => {
                  setFocused(true);
                }}
                onBlur={() => {
                  setFocused(false);
                }}
                onChange={e => {
                  limitSize(
                    e,
                    characterMax,
                    setShowErrorMessage,
                    setExcessCharacters
                  );
                }}
                initial='init'
                animate={focused ? 'anim' : 'init'}
              />
            </FlexCol>
            {getErrorMessage(showErrorMessage, excessCharacters)}
          </FlexCol>
        </TextContainer>
      ) : (
        <TextContainer>
          {getLabel(compulsory, labelHeader, labelDesc, identifier)}
          <FlexCol width={width}>
            <FlexCol height={height} width={width}>
              <StyledInput
                id={identifier}
                variants={inputVariants}
                focused={focused}
                placeholder={placeholder}
                onFocus={() => {
                  setFocused(true);
                }}
                onBlur={() => {
                  setFocused(false);
                }}
                onChange={e => {
                  limitSize(
                    e,
                    characterMax,
                    setShowErrorMessage,
                    setExcessCharacters
                  );
                }}
                initial='init'
                animate={focused ? 'anim' : 'init'}
              />
            </FlexCol>
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
  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
  }
`;

const FlexCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  @media only screen and (max-width: 768px) {
    width: 95% !important;
    ${props =>
      props.multiline &&
      css`
        height: calc(${props => props.height} + 5rem) !important;
      `}
  }
`;

const InputStyles = css`
  background: ${props => props.theme.colors.fullWhite};
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.checkboxGray};
  font-family: 'Roboto', 'Helvetica', 'Arial';
  resize: none;
  outline-color: ${props => props.theme.colors.blue};
  overflow-y: auto;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const StyledTextArea = styled(motion.textarea)`
  ${InputStyles}
`;

const StyledInput = styled(motion.input)`
  ${InputStyles}
`;

export default TextInput;
