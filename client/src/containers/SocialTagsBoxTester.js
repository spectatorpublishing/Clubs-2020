import React from "react";
import { SocialTagsBox } from "../components/socialTagsBox";
import styled from "styled-components";

const PageWrapper = styled.main`
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100vw;
  font-family: "Roboto", sans-serif;
`;

export const SocialTagsBoxTester = () => {
  return (
    <PageWrapper>
      <Title>These are some a Social Tag Boxes</Title>
      <SocialTagsBox
        socialLinks={[
          { facebook: "https://www.facebook.com/CUBalletEnsemble/" },
          { email: "cuballetensemble@gmail.com" },
          { website: "http://www.columbia.edu/cu/cuballetensemble/dancers" },
        ]}
      ></SocialTagsBox>
    </PageWrapper>
  );
};
