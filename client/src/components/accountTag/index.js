import React from "react";
import styled from "styled-components";


export const AccountTag = () => {
    return(
      <BoxWrapper>
          <Emoji>🎉</Emoji>
          <Text>Thank you for creating an account! Here is a preview of what other students can see. Hit edit anytime to change your information.</Text>
      </BoxWrapper>
    );
};




const BoxWrapper = styled.div`
    margin: 20px;
    padding: 10px;
    width: auto;
    background-color: white;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 0px 15px 0px #C1C1C1;
    align-items: center;
`;

const Emoji = styled.div`
    margin: 10px 10px 10px 20px;
    font-size: 30px;
`;

const Text = styled.div`
    color: black;
    margin: 10px;
    font-weight: 600;



`;
