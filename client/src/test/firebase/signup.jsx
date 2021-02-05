import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from '../../firebase';

const Background = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();

    function handleSignup(e) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(value => {
                setMessage('success!');
                console.log(value);
            }, error => {
                setMessage(error.code);
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <Background>
            <form onSubmit={handleSignup}>
                <label> email:</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                <label> password:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input value="sign up" type="submit"/>
            </form>
            <div>{message}</div>
        </Background>
    )
}

