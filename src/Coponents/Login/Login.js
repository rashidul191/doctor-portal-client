import React, { useState } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import loginBg from '../../images/Group 140.png';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
    })
    const provider = new firebase.auth.GoogleAuthProvider();

    // User User Google Sign In Part Start......
    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser);
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email,);
            });
    }
    // User User Google Sign In Part End......


    // User Sign Out Part Start......
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(result => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                }
                setUser(signOutUser);

            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email,);
            });
    }
    // User Sign Out Part End......

    return (
        <div>

            {/* user.isSignedIn ? <button onClick={handleSignOut}>sing Out</ button> : */}

            <div className="login-container">
                <div className="login-style">
                    <div className="row  login-from-style">
                        <div className="login-from col-md-4 p-5 mt-5">
                            <h5 className="text-center mb-5">Login</h5>
                            <div className="form-group ">
                                <input class="form-control" type="text" name="email" placeholder="Email" /><br />
                                <input class="form-control" type="password" name="password" placeholder="Password" />
                                <small className="forgat-text-style">Forgat your password?</small><br /><br />
                                <button className="btn btn-brand btn-lg btn-block text-white" onClick={handleGoogleSign}>Sign In With Google</button><br />
                            </div>
                        </div>
                        <div className="mr-auto">
                            <img className="imgSize" src={loginBg} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {
                user.isSignedIn && <div>

                </div>
            }
        </div>
    );
};

export default Login;