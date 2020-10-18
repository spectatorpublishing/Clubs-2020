import React from "react";
import styled from "styled-components";
const Box = styled.div`
  background-color: ${props=>props.theme.colors.white};
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  /* text-align: left; */
  width: 30rem; /* 20 => 30 */
  margin: 5rem;
  padding: 2rem;
  font: Roboto;
  /* font-style: normal; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h2` /* div => h2, remove padding bottom  */
  font-weight: 500;
  margin-bottom: .5rem;
  /* color: black; */
  align-self: flex-start;
`;

const Button = styled.button` /* div => button */
  /* display: inline; */
  color: ${props=>props.theme.colors.red};
  background-color: white;
  /* text-align: center; */
  border: 2px solid ${props=>props.theme.colors.red};
  border-radius: 5px;
  padding: .3rem 2rem;
  /* padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 2rem;
  padding-right: 2rem; */
`;

const BoxText = styled.p` /* div => p */
  /* font-style: normal; */
  color: ${props=>props.theme.colors.gray};
  /* align-self: left; */
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
