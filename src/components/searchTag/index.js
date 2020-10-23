import React, { useState } from 'react';
import styled, {withTheme} from 'styled-components';
import { motion } from 'framer-motion';

const SearchTag = ({ text, theme }) => {
  const tagVariants = {
    active: { color: theme.colors.white, backgroundColor: theme.colors.red },
    inactive: { color: theme.colors.red, backgroundColor: 'rgba(236, 108, 82, 0.08)' }
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

const Tag = styled(motion.button)`
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  font-size: 1rem;
  border-radius: 1rem;
  border: 0.125rem ${props=>props.theme.colors.red} solid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  cursor: pointer;
`;

export default withTheme(SearchTag);
