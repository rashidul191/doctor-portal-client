import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const handleGoogleSign =() => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
}
const Login = () => {
    return (
        <div>
            <button onClick={handleGoogleSign}>sing in</button>
        </div>
    );
};

export default Login;