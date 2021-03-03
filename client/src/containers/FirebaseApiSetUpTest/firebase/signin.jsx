import React, { useState } from 'react';
import styled from 'styled-components';
import * as firebase from '../../../UserAuthUtilities/firebase';
import Signout from './signout';
import { useHistory } from 'react-router-dom';

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

var google = new firebase.auth.GoogleAuthProvider();
var db_root = 'http://localhost:8080';

/* encodes an object into x-www-form-urlencode form for POST */
function encodeFormData(details) {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return formBody;
}

/* @param user: user object returned from firebase-auth
 *
 * gets called after user authenticates successfully with firebase-auth
 */
export function login(user) {
  /* unverified email address, send user to verify your email page */
  if (user.emailVerified === false) {
    return new Promise(function (resolve, reject) {
      console.log('waited 500 millis');
      resolve('verify!');
    })
      .then(function (someNumber) {
        console.log(someNumber);
      })
      .catch(function (err) {
        console.log('err', err);
      });
  } else {

    let loginCred = {
      firebaseId: user.uid,
      accountEmail: user.email,
    };
    console.log(loginCred)

    return (
      fetch(`${db_root}/api/clubAccounts/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(loginCred),
      })
        .then((res) => res.json())
        /* club profile not created, direct to profile creation page */
        .then((res) => (res.clubProfileID ? 'home' : 'profile'))
        .catch(function (err) {
          console.error(err);
        })
    );
  }
}

export default function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState('');
  let history = useHistory();

  function handleSignin(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithPopup(google)
      .then((result) => {
        login(result.user);
        history.push('/');
        //setRedirect(result.page);
        //console.log(result.user);
      })
      .catch((err) => console.log(err));
    //.then((user) => login(user))
    //.then((page) => setRedirect(page))
  }

  function signInWithPasswrod(e) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        login(result.user);
        setRedirect(result.page);
      })
      .catch((err) => setMessage(err));

    e.preventDefault();
  }

  return (
    <Background>
      <button onClick={handleSignin}>Sign in with Google</button>
      <div>{message}</div>
      <Signout />

      {/* Sign in with email and password */}
      <form onSubmit={signInWithPasswrod}>
        <label> email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label> password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input value='sign in' type='submit' />
      </form>
      <div>{redirect}</div>
    </Background>
  );
}
