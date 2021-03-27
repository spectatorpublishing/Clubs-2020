import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    getCurrUserEmail
} from '../../UserAuthUtilities/user.js';
import CustomInput from './input.js';

const Header = styled.div`
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 1000;
    font-size: 1.5rem;
    line-height: 1.3em;
    color: ${props=>props.theme.colors.black};
    margin-bottom: 1.5em;
`

const Inputs = styled.div`
    width: 60%;
`

export const Warning = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 600;
    /* For PD: 18px = 1.125rem looked too big */
    font-size: 1rem;
    color: ${props=>props.theme.colors.red};
    line-height: 1em;
    padding-top: 0.5em;
    text-align: right;
    position: absolute;
    right: 1em;
    bottom: 0.5em;
`

const warnMsg = "Password may bot be changed when an account email change request is active!"

export default function ManageAccount(props) {
    const [emailReqStatus, setEmailReqStatus] = useState(false);

    /*
     * On page load, fetch user's email request status to determine
     * if a warning msg should be displayed
     */
    useEffect(() => {
        /* Todo: fetch email request status from the backend and set status */
        setEmailReqStatus(false);

        /* Todo: fetch user email and populate email field */
    },[]);

    return (
        <div>
            <Header>Manage Your Account</Header>
            <Inputs>
                <CustomInput
                    label='Email'
                    type='email'
                    to='email'
                    initVal={getCurrUserEmail}
                    button={true}
                    callback={props.setPage}
                />
                <CustomInput
                    label='Password'
                    type='password'
                    to='password'
                    button={true}
                    callback={props.setPage}
                />
            </Inputs>
            <Warning show={emailReqStatus}>{warnMsg}</Warning>
        </div>
    );
}
