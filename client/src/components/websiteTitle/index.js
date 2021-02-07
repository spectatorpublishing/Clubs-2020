import React from 'react';
import styled from 'styled-components';

const WebsiteTitle = () => {
  return <Title>Clubs@CU</Title>;
};

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 1.25rem !important;
  }
`;
export default WebsiteTitle;
