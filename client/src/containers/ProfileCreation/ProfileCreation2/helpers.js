import React from 'react';
import styled from 'styled-components';
import TextInput from '../../../components/textInput/index';

export const Highlights = () => {
  const highlightsArr = [
    'highlight1',
    'highlight2',
    'highlight3',
    'highlight4',
    'highlight5',
  ];
  const highlights = highlightsArr.map((item, index) => {
    return (
      <TextInput
        key={item}
        identifier={item}
        labelWidth='1.35rem'
        width='100%'
        labelHeader={`${index + 1}`}
      />
    );
  });
  return (
    <TextSection>
      <TextHeader>Highlights:</TextHeader>
      <HighlightsContainer>{highlights}</HighlightsContainer>
    </TextSection>
  );
};

const TextSection = styled.section`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 801px){
   flex-direction: column;
  }
`;
const TextHeader = styled.h4`
  margin-right: 2rem;
  font-weight: 400;
  font-family: 'Manrope', 'Helvetica', 'Arial';
`;

const HighlightsContainer = styled.div`
  width: 100%;
`
