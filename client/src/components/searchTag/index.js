import React, { useState, useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { useFocused } from '../customHooks/index';
const SearchTag = ({ text, theme, data, setData, objId }) => {
  const tagVariants = {
    active: { color: theme.colors.white, backgroundColor: theme.colors.red },
    inactive: {
      color: theme.colors.red,
      backgroundColor: 'rgba(236, 108, 82, 0.08)',
    },
  };
  const [clicked, setClicked] = useState(false);
  const searchTag = useRef(null);
  const searchTagFocused = useFocused(searchTag);
  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      searchTag.current.click();
    }
  };
  useEffect(() => {
    if (searchTagFocused) {
      document.addEventListener('keypress', onKeypress);
    }
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [searchTagFocused]);

  const handleClick = () => {
    setClicked(!clicked);
    if (data && setData) {
      let tempData = { ...data };
      if (objId in tempData) {
        if (clicked) {
          // Removes Element
          const index = tempData[objId].indexOf(text);
          if (index >= -1) tempData[objId].splice(index, 1);
          // Adds Element
        } else tempData[objId].push(text);
        setData(tempData);
      } else {
        console.error('objId not in the obj');
      }
    }
  };
  return (
    <Tag
      ref={searchTag}
      clicked={clicked}
      onClick={handleClick}
      variants={tagVariants}
      whileTap={{ scale: 0.95 }}
      initial='inactive'
      animate={clicked ? 'active' : 'inactive'}
    >
      {text}
    </Tag>
  );
};

const Tag = styled(motion.button)`
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  font-size: 1rem;
  border-radius: 1rem;
  border: 0.125rem ${(props) => props.theme.colors.red} solid;
  outline-color: ${(props) => props.theme.colors.blue};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export default withTheme(SearchTag);
