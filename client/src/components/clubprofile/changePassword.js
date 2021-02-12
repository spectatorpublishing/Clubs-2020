import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import CustomInput from './input.js';
import { Header as EmailHeader, Form, Inputs, Operations, Change, Cancel } from './changeEmail.js';
import { Warning } from './manageAccount';
import checkPassword from '../../containers/FirebaseApiSetUpTest/signup/checkPassword';



const Header = styled(EmailHeader)`
    margin-bottom: 2em;
`
const ERROR1 = 'Incorrect existing password!';
const ERROR2 = 'New passwords do not match!';
const ERROR3 = 'Invalid new password format!'
const form = createRef();

export default function ChangePassword(props) {
    const [errMsg, setErrMsg] = useState('');

    function postPasswordRequest(e) {
        e.preventDefault();
        let data = new FormData(form.current);
        /* Todo: check email validity and password, then make API call to update account */
        const keys = ['Current Password','New Password', 'Confirm New Password'];

        if (false){
            // incorrect existing password
            /* Todo: call API to check password */
            setErrMsg(ERROR1);
            return;
        }else if (!checkPassword(data.get(keys[1]))) {
            // invalid new password format
            setErrMsg(ERROR3);
            return;
        }else if (data.get(keys[1]) !== data.get(keys[2])) {
            // new passwords don't match
            setErrMsg(ERROR2);
            return;
        }

        /* POST update account email request here */
        props.setPage('confirmation');
    }

    return (
        <div>
            <Header>Change Account Email</Header>
            <Form noValidate ref={form} onSubmit={postPasswordRequest}>
                <Inputs>
                    <CustomInput
                        label='Current Password'
                        type='text'
                        button={false}
                    />
                    <CustomInput
                        label='New Password'
                        type='password'
                        button={false}
                    />
                    <CustomInput
                        label='Confirm New Password'
                        type='password'
                        button={false}
                    />
                </Inputs>
                
                <Operations>
                    <Change type='submit' value='Save'/>
                    <Cancel onClick={()=>props.setPage('dashboard')}>Cancel</Cancel>
                </Operations>
            </Form>
            <Warning show={errMsg}>{errMsg}</Warning>
        </div>
    );
}
