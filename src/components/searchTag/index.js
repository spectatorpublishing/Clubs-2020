import React, { useState } from 'react';
import styled from 'styled-components';

const SearchTag = ({ text }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Tag
      clicked={clicked}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      {text}
    </Tag>
  );
};

const Tag = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: 'Roboto';
  background-color: ${props =>
    props.clicked ? '#ec6c52' : 'rgba(236, 108, 82, 0.08)'};
  /* TODO: Replace the color lines with theme values once theme provider is merged into master */
  color: ${props => (props.clicked ? 'white' : '#ec6c52')};
  font-size: 16px;
  line-height: 16.41px;
  border-radius: 1rem;
  border: 2px #ec6c52 solid;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 150ms cubic-bezier(0.79, 0.14, 0.15, 0.86);
`;

export default SearchTag;
