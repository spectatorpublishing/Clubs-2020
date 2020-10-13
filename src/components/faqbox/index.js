import React from "react";
import styled from "styled-components";
const Box = styled.div`
  background-color: white;
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  text-align: left;
  width: 20rem;
  margin: 5rem;
  padding: 2rem;
  font: Roboto;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.div`
  font-weight: 500;
  color: black;
  padding-bottom: 1rem;
  align-self: flex-start;
`;

const Button = styled.div`
  display: inline;
  color: #ec6c52;
  text-align: center;
  border: 2px solid #ec6c52;
  border-radius: 5px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const BoxText = styled.div`
  font-style: normal;
  color: #9a9a9a;
  align-self: left;
  padding-bottom: 0.8rem;
`;

export const FaqBox = ({ title, text, buttonText, buttonLink }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <BoxText>{text}</BoxText>
      <a href={buttonLink}>
        <Button>{buttonText}</Button>
      </a>
    </Box>
  );
};
