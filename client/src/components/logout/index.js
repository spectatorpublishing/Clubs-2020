import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Logout = () => {
  const [hover, setHover] = useState(false);
  return (
    <LogoutButton
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
    >
      <svg
        width='28'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <LogoutPath d='M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9' />
        <LogoutPath
          d='M16 17L21 12L16 7'
          animate={hover ? { x: 3 } : { x: 0 }}
        />
        <LogoutPath d='M21 12H9' animate={hover ? { x: 3 } : { x: 0 }} />
      </svg>
      <Text>Log Out</Text>
    </LogoutButton>
  );
};

const LogoutButton = styled(motion.button)`
  display: flex;
  border: none;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0.25rem;
`;

const Text = styled.h3`
// font-family is necessary here
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-size: 1.25rem;
  margin-left: .35rem;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const LogoutPath = styled(motion.path)`
  stroke-width: 0.125rem;
  stroke-linecap: round;
  stroke: black;
`;

export default Logout;
