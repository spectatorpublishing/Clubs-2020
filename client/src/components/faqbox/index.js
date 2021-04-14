import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30rem;
  border-radius: 7px;
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.fullWhite};
  padding: 0.5rem 1rem 1rem 1.5rem;

  margin: 1rem;

  a {
    text-decoration: none;
  }

  align-items: flex-end;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
    width: 80%;
  }
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  align-self: flex-start;

  @media screen and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

const BoxWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    align-content: stretch;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.fullWhite};
  color: ${(props) => props.theme.colors.red};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.red};
  border-radius: 6px;
  padding: 0.5rem 2rem;
  font-weight: 500;
  font-size: 1.2rem;

  :hover {
    box-shadow: 2px 7px 7px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 768px) {
    flex-grow: 2;
    align-self: center;
    display: block;
    width: 100%;
  }
`;

const BoxText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  padding-bottom: 0.8rem;
  display: block;
  font-weight: 500;
`;

export const FaqBox = ({ title, text, buttonText, buttonLink }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <BoxText>{text}</BoxText>
      <BoxWrapper>
        <a href={buttonLink}>
          <Button>{buttonText}</Button>
        </a>
      </BoxWrapper>
    </Box>
  );
};
