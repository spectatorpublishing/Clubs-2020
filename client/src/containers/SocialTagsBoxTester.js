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
          {
            key: "facebook",
            link: "https://www.facebook.com/CUBalletEnsemble/",
          },
          {
            key: "instagram",
            link: "https://www.instagram.com/cuballetensemble/",
          },
          {
            key: "email",
            link: "cuballetensemble@gmail.com",
          },
          {
            key: "website",
            link: "http://www.columbia.edu/cu/cuballetensemble/dancers",
          },
        ]}
      ></SocialTagsBox>

      <SocialTagsBox
        socialLinks={[
          {
            key: "facebook",
            link: "https://www.facebook.com/ecorepscu",
          },
          {
            key: "instagram",
            link: "https://www.instagram.com/columbia.ecoreps/",
          },
          {
            key: "twitter",
            link: "https://twitter.com/ColumbiaEcoReps",
          },
          {
            key: "email",
            link: "ecorepscu@gmail.com",
          },
          {
            key: "website",
            link: "https://alexiaalejos84.wixsite.com/ecoreps",
          },
        ]}
      ></SocialTagsBox>
    </PageWrapper>
  );
};
