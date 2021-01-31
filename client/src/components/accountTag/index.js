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
    padding: 10px;
    width: auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 0px 15px 0px #C1C1C1;
    align-items: center;
`;

const Emoji = styled.span`
    margin: 10px 10px 10px 20px;
    font-size: 30px;
`;

const Text = styled.div`
    color: black;
    margin: 10px;
    font-weight: 600;
`;

export default AccountTag;
