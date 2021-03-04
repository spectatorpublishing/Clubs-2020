import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { login } from '../../containers/FirebaseApiSetUpTest/firebase/signin';
import * as firebase from '../../UserAuthUtilities/firebase';

export function ErrorText({ marginTop, marginBottom, stateToCheck, text }) {
  const errorVariants = {
    init: { height: 0, marginTop: 0, marginBottom: 0 },
    anim: { height: 'auto', marginTop: marginTop, marginBottom: marginBottom },
    ex: {
      height: 0,
      marginTop: 0,
      marginBottom: 0,
    },
  };
  return (
    <AnimatePresence>
      {stateToCheck && (
        <Error variants={errorVariants} initial='init' animate='anim' exit='ex'>
          {text}
        </Error>
      )}
    </AnimatePresence>
  );
}

const Error = styled(motion.p)`
  color: ${(props) => props.theme.colors.red};
  overflow: hidden;
`;

const ErrorContainer = styled(motion.div)`
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.collapse && '0rem'};
  transition: margin-top 450ms;
`;

export function handleLogin(userCred, history) {
  let userId = userCred.userId;
  let userEmail = userCred.userEmail;
  console.log(userCred);
  //login(userCred)
  //history.push('/');
}
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

export function createUser(user) {
  const google = new firebase.auth.GoogleAuthProvider();
  // const db_root = 'http://localhost:8080';
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
    console.log(loginCred);

    return (
      fetch(`/api/clubAccounts/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(loginCred),
      })
        .then((res) => res.json())
        /* club profile not created, direct to profile creation page */
        .then((res) => {
          console.log("creating account....")
          console.log(res)
          // localStorage.setItem('clubProfileId', res.clubProfileID)
          return res.clubProfileID ? 'home' : 'profile'
        })
        .catch(function (err) {
          console.error(err);
        })
    );
  }
}
