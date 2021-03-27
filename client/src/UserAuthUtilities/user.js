import * as firebase from './firebase'

export function getCurrUser() {
    return firebase.auth().currentUser;
}

export function getCurrUserEmail() {
    var user = getCurrUser();

    return user && user.email;
}

export function signInWithEmailPwd(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function updatePwd(new_password) {
    var user = getCurrUser();

    if (!user)
        return Promise.reject("auth/user-not-found");

    return user.updatePassword(new_password);
}