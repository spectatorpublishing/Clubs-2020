
import React, { useState } from 'react';
import styled from 'styled-components';
import checkPassword from './checkPassword';

const Background = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Password(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSignup(e) {
        if (checkPassword(password)) {
            setMessage("Your password satisfies the requirement!");
        } else {
            setMessage("Doesn't satisfy the password requirement, please try again...");
        }
        
        e.preventDefault();
    }

    return (
        <Background>
            <div>{message}</div>
            <form onSubmit={handleSignup} noValidate>
                <label> email:</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                <label> password:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <p>password format requirements:</p>
                <ul>
                    <li>8-20 characters long</li>
                    <li>only alphanumerics are accepted</li>
                    <li>at least 1 digit, 1 lowercase and 1 uppercase character</li>
                </ul>

                <input value="sign up" type="submit"/>
            </form>
        </Background>
    )
}

