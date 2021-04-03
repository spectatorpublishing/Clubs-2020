import React from 'react';
import { SignUpBox } from '../../components/signup';

export const ResetSuccess = ({userCred}) => {
    return(
        <SignUpBox
            id="emailResetSuccess"
            userCred={userCred}
        />
    )
}