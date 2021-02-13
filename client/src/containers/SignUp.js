import React from 'react';
import { SignUpBox } from '../components/signup';

export const SignUp = () => {
    return(
        <SignUpBox
            title = "Welcome to Clubs@CU"
            desc = "Already have an account?"
            descLink = "https://media2.giphy.com/media/lSbTmUmQwxUmiExV4h/giphy.gif"
            descLinkText = "Login here"
            detail = "Email"
            detailDesc = "Club email preferred. Otherwise, use your personal .edu"
            detailTwo = "Password"
            detailThree = "Confirm Password"
            confirmation = "none"
        />
    )
}