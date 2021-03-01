import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';

const SearchTag = ({
  text,
  theme,
  margin,
}) => {
  const tagVariants = {
    active: { color: theme.colors.white, backgroundColor: theme.colors.red },
    inactive: {
      color: theme.colors.red,
      backgroundColor: 'rgba(236, 108, 82, 0.08)',
    },
  };
  const searchTag = useRef(null);

  return (
    <Tag
      margin={margin}
      ref={searchTag}
      variants={tagVariants}
      initial='inactive'
    >
      {text ? text : 'no text entered'}
    </Tag>
  );
};

const Tag = styled(motion.button)`
  cursor: default;
  display: inline-block;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  margin: ${(props) => props.margin};
  border: 0.125rem ${(props) => props.theme.colors.red} solid;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export default withTheme(SearchTag);
