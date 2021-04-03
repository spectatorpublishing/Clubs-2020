import React from 'react';
import { SignUpBox } from '../../components/signup';

export const ResetPassword = ({userCred}) => {
    return(
        <SignUpBox
            id="resetPassword"
            userCred={userCred}
        />
    )
}