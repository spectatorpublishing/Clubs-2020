import { createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBpwMaEBw6fEuazbzVF0LV7waig2UZ8Ku4",
    authDomain: "clubs-2020.firebaseapp.com",
    databaseURL: "https://clubs-2020.firebaseio.com",
    projectId: "clubs-2020",
    storageBucket: "clubs-2020.appspot.com",
    messagingSenderId: "885333802443",
    appId: "1:885333802443:web:9564cab92de801bd95ca4e",
    measurementId: "G-RLXNF5EWFE"
};

export firebase.initializeApp(firebaseConfig);

// use firebase as the defaultValue for testing purposes
export const Firebase = createContext(firebase);
