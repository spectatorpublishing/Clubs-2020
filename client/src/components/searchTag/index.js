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
        variants={tagVariants}
        whileTap={{ scale: 0.95 }}
        initial='inactive'
        animate={""}
      >
        {text}
      </Tag>
  );
};

const Tag = styled.div`

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }

  margin: 0.3rem;
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  font-size: 1rem;
  font-weight: 500;
  border-radius: 1rem;
  background-color: rgba(236, 108, 82, 0.08);
  color: ${props=>props.theme.colors.red};
  border: 0.125rem ${props=>props.theme.colors.red} solid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default withTheme(SearchTag);
