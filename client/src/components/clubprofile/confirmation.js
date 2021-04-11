import React from 'react';
import styled from 'styled-components';
import { Header, Operations, Cancel } from './changeEmail';

const Confirmation = styled.div`
    background-color: #FFFFFF;
    padding: 8% 5%;
    white-space: pre-wrap;
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #696969;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media only screen and (max-device-width: 30rem) {
        width: 75%; 
    }
`;

const Icon = styled.div`
    position: relative;
    height: 2.67rem;
    width: 3.33rem;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #42B7CB;
    border-radius: 0.4rem;
    margin-top: 1rem;
`;

const Flap = styled.div`
    width: 0;
    height: 0;
    border-left: 1.76rem solid transparent;
    border-right: 1.76rem solid transparent;
    border-top: 1.4rem solid #42B7CB;
    border-bottom: 0.2rem solid transparent;
    margin-left: auto;
    margin-right: auto;
`;

const Dot = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: #EC6C52;
    margin-left: 0.8rem;
    margin-top: -2rem;
`
const EmailLink = styled.a`
    color: #87bff0;
    text-decoration: none;
`;


const DETAIL = `Request made to change account email to uni5678@barnard.edu! Check your email to confirm change. Request will expire in 30 minutes. 
If you have any questions, please contact `;
const EMAIL = `online@columbiaspectator.com`;

export default function Wrapper(props) {
    function resendEmail() {
        /* TODO: resend change account email confirmation email */
    }

    function cancelRequest() {
        /* TODO: create an API to invalidate change email request */
        
        /* Q for PD: which page should the user be redirected to? */
        props.setPage('dashboard');
    }

    return (
        <div>
            <Header>Change Account Email</Header>

            <Confirmation>
                <Icon><Flap><Dot></Dot></Flap></Icon>
                {DETAIL} 
                <EmailLink href={`mailto:${EMAIL}`}>
                    {EMAIL}
                </EmailLink>
                {`.\n\nSomething went wrong?\n`}
                <EmailLink onClick={resendEmail}>Resend Email</EmailLink>
            </Confirmation>

            <Operations><Cancel onClick={cancelRequest}>Cancel Request</Cancel></Operations>
        </div>
    );
}
