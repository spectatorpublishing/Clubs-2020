import React from 'react';
import { SignUpBox } from '../components/signup';

export const Confirmation = () => {
    return(
        <SignUpBox
            title = "Club Profile Request Recieved!"
            desc = "Already have an account?"
            descLink = "https://media2.giphy.com/media/lSbTmUmQwxUmiExV4h/giphy.gif"
            descLinkText = "Login here"
            detail = "Your request is being processed. You will recieve an email with further instrcutions in 24 hours. If you have any questions, please contact "
            detailLink = "mailto:publisher@columbiaspectator.com"
            detailLinkText = "publisher@columbiaspectator.com"
            detailTwo = "."
            signUp = "none"
        />
    )
}