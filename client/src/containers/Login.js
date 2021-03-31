import React from 'react';
import { SignUpBox } from '../components/signup';

export const Login = ({userCred, isProfileComplete }) => {
    return(
        <SignUpBox
            id="login"
            userCred={userCred}
            isProfileComplete = {isProfileComplete} 
        />
    )
}