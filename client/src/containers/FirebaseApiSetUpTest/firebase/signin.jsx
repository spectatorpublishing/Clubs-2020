import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from '../../../UserAuthUtilities/firebase';
import Signout from './signout'

const Background = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

var google = new firebase.auth.GoogleAuthProvider();

export default function Signin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSignin(e) {
        firebase.auth().signInWithPopup(google).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            var username = user.displayName;

            setMessage(`Welcome to Clubs@CU, ${username}!`);
            console.log(token, user);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            setMessage(errorMessage);
            console.log(errorCode, errorMessage, email, credential);
        });
        e.preventDefault();
    }

    function signInWithPasswrod(e) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                setMessage('password signin success!');
                console.log(userCredential);
                setMessage(`Welcome to Clubs@CU, ${userCredential.user.uid}!`)
            }, error => {
                setMessage(error.code);
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <Background>
            <button onClick={handleSignin}>Sign in with Google</button>
            <div>{message}</div>
            <Signout/>

            {/* Sign in with email and password */}
            <form onSubmit={signInWithPasswrod}>
                <label> email:</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                <label> password:</label>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input value="sign in" type="submit"/>
            </form>
            <div>{message}</div>
        </Background>
    )
}

