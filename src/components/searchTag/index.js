import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SearchTag = ({ text }) => {
  const tagVariants = {
    active: { color: 'white', backgroundColor: '#ec6c52' },
    inactive: { color: '#ec6c52', backgroundColor: 'rgba(236, 108, 82, 0.08)' }
  };
  const [clicked, setClicked] = useState(false);
  return (
    <Tag
      clicked={clicked}
      onClick={() => {
        setClicked(!clicked);
      }}
      variants={tagVariants}
      whileTap={{ scale: 0.95 }}
      initial='inactive'
      animate={clicked ? 'active' : 'inactive'}
    >
      {text}
    </Tag>
  );
};

const Tag = styled(motion.div)`
  width: auto;
  height: auto;
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 16.41px;
  border-radius: 1rem;
  border: 2px #ec6c52 solid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default SearchTag;
