import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const Manage = () => {
  return (
    <ManageButton>
      <Icon><FontAwesomeIcon icon={faUser} />{' '}</Icon>
      <Text> Manage Account </Text>
    </ManageButton>
  );
};

const Text = styled.h3`
  margin-left: .35rem;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const ManageButton = styled.div`
  display: flex;
  border: none;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  font-weight: 600;

`;

const Icon = styled.div`
  font-size: 1.4rem;
  margin-right: .35rem;
`;

export default Manage;
