import React from 'react';
import TomatoButton from '../tomatoButton';
import * as firebase from '../../UserAuthUtilities/firebase';

function Signout() {
  // Signs out
  function handleClick() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return <TomatoButton text='Sign Out' onClick={handleClick} />;
}

export default Signout;
