import React from 'react';
import { SignUpBox } from '../../components/signup';

export const ManageAccount = ({userCred}) => {
    return(
        <SignUpBox
            id="manageAccount"
            userCred={userCred}
        />
    )
}