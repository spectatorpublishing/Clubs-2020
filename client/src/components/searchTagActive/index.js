import React, { useState, useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { useFocused } from '../customHooks/index';

const SearchTagActive = ({
  text,
  theme,
  data,
  setData,
  objId,
  dataLimitSize,
  margin,
  defaultValue,
}) => {
  const tagVariants = {
    active: { color: theme.colors.white, backgroundColor: theme.colors.red },
    inactive: {
      color: theme.colors.red,
      backgroundColor: 'rgba(236, 108, 82, 0.08)',
    },
  };
  const [clicked, setClicked] = useState(defaultValue);
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
    if (!data || !setData || !dataLimitSize) setClicked(!clicked);
    if (data && setData) {
      let tempData = { ...data };
      if (objId in tempData) {
        if (clicked) {
          // Removes Element
          const index = tempData[objId].indexOf(text);
          if (index >= -1) tempData[objId].splice(index, 1);
          setClicked(false);
          // Adds Element
        } else {
          // Limit of number of tags
          if (dataLimitSize && tempData[objId].length < dataLimitSize) {
            tempData[objId].push(text);
            setClicked(true);
          }
          // No limit on number of tags
          else if (!dataLimitSize) {
            tempData[objId].push(text);
            setClicked(true);
          }
        }
        setData(tempData);
      } else {
        console.error('objId not in the obj');
      }
    }
  };
  return (
    <Tag
      margin={margin}
      ref={searchTag}
      clicked={clicked}
      onClick={handleClick}
      variants={tagVariants}
      whileTap={{ scale: 0.95 }}
      initial='inactive'
      animate={clicked ? 'active' : 'inactive'}
    >
      {text ? text : 'no text entered'}
    </Tag>
  );
};

const Tag = styled(motion.button)`
  display: inline-block;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  margin: ${(props) => props.margin};
  border: 0.125rem ${(props) => props.theme.colors.red} solid;
  outline-color: ${(props) => props.theme.colors.blue};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export default withTheme(SearchTagActive);
