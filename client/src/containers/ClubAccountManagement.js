import React, { useState } from 'react';
import styled from 'styled-components';
import { SignUpBox } from '../components/signup';
import UpdateAccount from '../components/clubprofile/updateAccountInfo';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Trigger = styled.button`
    display: block;
    position: absolute;
    right: 5em;
    border: none;
    background-color: ${props=>props.theme.colors.white};
`;


export function ClubAccountManagement(props){
    const [display, setDisplay] = useState(false);

    return(
        <Container>
            <UpdateAccount 
                nodeId='root'
                display={display}
                toggle={setDisplay}
            />
            <Trigger onClick={()=>setDisplay(true)}>Manage Your Account</Trigger>
            <SignUpBox
                title = "Club Profile Request Received!"
                desc = "Already have an account?"
                descLink = "https://media2.giphy.com/media/lSbTmUmQwxUmiExV4h/giphy.gif"
                descLinkText = "Login here"
                detail = "Your request is being processed. You will receive an email with further instrcutions in 24 hours. If you have any questions, please contact "
                detailLink = "mailto:publisher@columbiaspectator.com"
                detailLinkText = "publisher@columbiaspectator.com"
                detailTwo = "."
                signUp = "none"
            />
        </Container>
    )
}
