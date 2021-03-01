import React from 'react';
import { SignUpBox } from '../components/signup';

export const Login = ({userCred}) => {
    return(
        <SignUpBox
            id="login"
            userCred={userCred}
        />
    )
}