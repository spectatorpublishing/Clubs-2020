import React from "react";
import styled from "styled-components";


const AccountTag = () => {
    return(
      <BoxWrapper>
          <Emoji><span role="img" aria-label="tada">🎉</span></Emoji>
          <Text>Thank you for creating an account! Here is a preview of what other students can see. Hit edit anytime to change your information.</Text>
      </BoxWrapper>
    );
};

const BoxWrapper = styled.div`
    margin: 2rem 4rem 0rem 4rem;
    padding: 0.625rem;
    width: auto;
    background-color: white;
    border-radius: 0.625rem;
    display: flex;
    box-shadow: 0px 0px 15px 0px #C1C1C1;
    align-items: center;

    @media (max-width: 768px) {
        margin: 0rem 1rem 0rem 1rem;
    }
`;

const Emoji = styled.span`
    margin: 0.625rem 0.625rem 0.625rem 1.25rem;
    font-size: 2rem;
`;

const Text = styled.div`
    color: black;
    margin: 0.625rem;
    font-weight: 600;
    font-size: 1.125rem;
`;

export default AccountTag;
