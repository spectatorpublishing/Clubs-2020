
import React, { useState, useEffect } from 'react';
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

var google = new firebase.auth.GoogleAuthProvider();

export default function SendEmail(props) {
    const [message, setMessage] = useState();

    function handleSignin(e) {
        firebase.auth().signInWithPopup(google).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            var username = user.displayName;
            var email = user.email;

            setMessage(`Welcome to Clubs@CU, ${username}!`);
            console.log(token, user);

            // send welcome/verification Email
            // TODO: since the same API is used to log in and sign up Gmail
            // users, we need to manually check if the gmail user exists in our
            // application by searching our own database using the user token 
            firebase.auth().currentUser.sendEmailVerification()
                .then(() => setMessage(`Email sent to ${email}!`))
                .catch( (err) => setMessage(err.code));

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

    // Illustrates the use of onAuthStateChanged to perform some routine
    // whenever the user state changes
    useEffect( () => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                console.log(user);
            } else {
                console.log('No user is signed in');
            }
        });}, []);

    return (
        <Background>
            <button onClick={handleSignin}>Sign in with Google</button>
            <div>{message}</div>
        </Background>
    )
}

