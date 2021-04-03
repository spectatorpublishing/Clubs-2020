import React from 'react';
import { SignUpBox } from '../../components/signup';

export const ResetEmail = ({userCred}) => {
    return(
        <SignUpBox
            id="resetEmail"
            userCred={userCred}
        />
    )
}