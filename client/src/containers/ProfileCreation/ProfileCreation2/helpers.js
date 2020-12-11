import React from 'react';
import styled from 'styled-components';
import TextInput from '../../../components/textInput/index';

export const Highlights = ({ highlightRefs, clubProfile }) => {
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
        defaultValue={clubProfile.highlights[index]}
        key={item}
        reference={highlightRefs[index]}
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

export const Socials = ({ socialRefs, clubProfile }) => {
  const inputData = [
    'Website',
    'Facebook',
    'Instagram',
    'Twitter',
    'Club Email',
    'Link to join mailing list',
  ];
  const defaultVals = [
    clubProfile.website,
    clubProfile.facebook,
    clubProfile.instagram,
    clubProfile.twitter,
    clubProfile.clubEmail,
    clubProfile.mailingListLink,
  ];
  const inputs = inputData.map((item, index) => {
    return (
      <TextInput
        defaultValue={defaultVals[index]}
        key={`social-${index + 1}`}
        reference={socialRefs[index]}
        identifier={item}
        labelHeader={item + ':'}
        labelWidth='8.75rem'
        width='100%'
      />
    );
  });
  return <>{inputs}</>;
};

const TextSection = styled.section`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 801px) {
    flex-direction: column;
  }
`;
const TextHeader = styled.h4`
  margin-right: 2rem;
  font-weight: 400;
  font-family: 'Manrope', 'Helvetica', 'Arial';
  @media screen and (max-width: 801px) {
    margin: 0 0 0 0.5rem;
  }
`;

const HighlightsContainer = styled.div`
  width: 100%;
`;
