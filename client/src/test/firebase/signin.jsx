import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from '../../UserAuthUtilities/firebase';

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
    const [message, setMessage] = useState();

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

    return (
        <Background>
            <button onClick={handleSignin}>Sign in with Google</button>
            <div>{message}</div>
        </Background>
    )
}
