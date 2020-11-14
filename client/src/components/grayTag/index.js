import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useFocused } from '../customHooks';
import { GrayTagContext } from '../contexts/index';

/* Component should only be used for situations for only one option can be selected
   Use checkbox for many options to be selected
   Must be enclosed by a GrayTagContainer component */

const GrayTag = ({ text, identifier }) => {
  const grayTag = useRef(null);
  const { handleClick, selectedTag, data, setData, objId } = useContext(
    GrayTagContext
  );
  const grayTagFocused = useFocused(grayTag);
  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      grayTag.current.click();
    }
  };
  useEffect(() => {
    if (grayTagFocused) {
      document.addEventListener('keypress', onKeypress);
    }
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [grayTagFocused]);

  const tagVariants = {
    active: {
      backgroundColor: 'rgba(226, 223, 223, 0.7)',
    },
    inactive: {
      backgroundColor: 'rgba(226, 223, 223, 0)',
    },
  };

  return (
    <Tag
      ref={grayTag}
      onClick={() => {
        handleClick(identifier, data, setData, objId, text);
      }}
      variants={tagVariants}
      clicked={selectedTag === identifier}
      initial='inactive'
      animate={selectedTag === identifier ? 'active' : 'inactive'}
    >
      {text ? text : 'no text entered'}
    </Tag>
  );
};

const Tag = styled(motion.button)`
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-size: 0.9rem;
  border-radius: 1rem;
  border: ${(props) => (props.clicked ? '.125rem' : '0.0625rem')}
    ${(props) => props.theme.colors.gray} solid;
  outline-color: ${(props) => props.theme.colors.blue};
  -webkit-user-select: none;
  -moz-user-select: none;
  margin: ${(props) => (props.clicked ? '-0.0625rem' : '0')};
  -ms-user-select: none;
  user-select: none;
  color: ${(props) => props.theme.colors.checkboxGray};
  cursor: pointer;
  min-width: 6rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export default GrayTag;
