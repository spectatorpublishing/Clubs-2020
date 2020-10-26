import * as firebase from "firebase/app";
import "firebase/auth";

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

firebase.initializeApp(firebaseConfig);

/* re-exporting all non-default exports of firebase/app
 * To use firebase APIs, import the firebase namespace as follows:
 *      import * as firebase from <relative-path>
 */
export * from 'firebase/app';
