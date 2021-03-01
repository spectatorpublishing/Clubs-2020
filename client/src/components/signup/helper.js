import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { login } from '../../containers/FirebaseApiSetUpTest/firebase/signin';

export function ErrorText({ marginTop, marginBottom, stateToCheck, text }) {
  const errorVariants = {
    init: { height: 0, marginTop: 0, marginBottom: 0 },
    anim: { height: 'auto', marginTop: marginTop, marginBottom: marginBottom },
    ex: {
      height: 0,
      marginTop: 0,
      marginBottom: 0,
    },
  };
  return (
    <AnimatePresence>
      {stateToCheck && (
        <Error variants={errorVariants} initial='init' animate='anim' exit='ex'>
          {text}
        </Error>
      )}
    </AnimatePresence>
  );
}

const Error = styled(motion.p)`
  color: ${(props) => props.theme.colors.red};
  overflow: hidden;
`;

const ErrorContainer = styled(motion.div)`
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.collapse && '0rem'};
  transition: margin-top 450ms;
`;

export function handleLogin(userCred, history){
  let userId = userCred.userId;
  let userEmail = userCred.userEmail;
  console.log(userCred)
  login(userCred)
  history.push('/');
}
