import React from 'react';
import { SignUpBox } from '../components/signup';

export const FindPassword = ({userCred}) => {
    return(
        <SignUpBox
            id="findpassword"
            userCred={userCred}
        />
    )
}