import React from 'react';
import { SignUpBox } from '../components/signup';

export const SignUp = ({ userCred }) => {
  
  return <SignUpBox id='signup' userCred={userCred}/>;
};
