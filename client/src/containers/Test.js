import React from 'react';
import TextInput from '../components/textInput/index';
import styled from 'styled-components';
const Test = () => {
  return (
    <Container>
      <TextInput/>
    </Container>
  );
};

const Container = styled.div`
  background: ${props => props.theme.colors.lightGray};
  height: 100vh;

`;

export default Test;
