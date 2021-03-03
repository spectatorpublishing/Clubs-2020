import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_AUTH_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_API_DOMAIN,
    databaseURL: process.env.REACT_APP_SITE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_AUTH_API_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_AUTH_API_MSG_SENDER_ID,
    appId: process.env.REACT_APP_AUTH_API_APP_ID,
    measurementId: process.env.REACT_APP_AUTH_API_MEASURMENT_ID
};

firebase.initializeApp(firebaseConfig);

/* re-exporting all non-default exports of firebase/app
 * To use firebase APIs, import the firebase namespace as follows:
 *      import * as firebase from <relative-path>
 */
export * from 'firebase/app';
