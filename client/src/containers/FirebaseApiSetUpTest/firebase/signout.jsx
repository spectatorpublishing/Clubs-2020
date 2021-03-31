// import styled from 'styled-components';
import React from 'react'
import * as firebase from '../../../UserAuthUtilities/firebase'

export default function Signout() {
    function signout() {
        firebase.auth().signOut().then(() => {
            console.log('Sign-out successful.')
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <button onClick={signout}>Sign Out</button>
    )
}