import * as firebase from '../../../UserAuthUtilities/firebase';

export function rememberMe(isChecked){
  if(!isChecked){
    console.log("remember me is checked")
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }
  else{
    console.log("remember me is not checked")
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }
}