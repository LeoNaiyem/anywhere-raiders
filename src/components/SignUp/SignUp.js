import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../App';







initializeApp(firebaseConfig);
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');


    const handleInput = (e) => {
        const { name, value } = e.currentTarget;
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        let isValid = false;
        if (name === "name") {
            const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
            isValid = regex.test(value);
            isValid ? setName(value) : setNameError('Name must contain one white space!');
        } else if (name === "email") {
            const regex = /\S+@\S+\.\S+/;
            isValid = regex.test(value);
            isValid ? setEmail(value) : setEmailError('Your email is not valid!');
        } else if (name === 'password') {
            const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
            isValid = regex.test(value);
            isValid ? setPassword(value) : setPasswordError('Your password must contain min 8 max 20 char, 1 upper and lower case,1 special char and 1 num');
        } else if (name === 'confirmPassword') {
            value === password ? setConfirmPassword(value) : setConfirmPasswordError('Password are not matching!');
        }
    }


    const handleSubmit = (e) => {
        if (name && email && password && confirmPassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setLoggedInUser(user);
                    updateUserName(name);
                    setFirebaseError('')
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFirebaseError(errorMessage);
                });
        }
        e.preventDefault();
    }


    const updateUserName = (userName) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: userName

        }).then(() => {
            console.log('profile updated')
        }).catch((error) => {
            console.log(error);
        });
    }


    const handleGoogleSignIn = (e) => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user)
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setFirebaseError(errorMessage);
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    return (
        <div className="login">
            <div className="signUp-area">
                <h2>Create An Account</h2>
                <form action="" onSubmit={handleSubmit} >
                    <input onChange={handleInput} className='input-field' type="text" name="name" required placeholder="Enter Your Name" id="name" /> <br />
                    <p><small className='input-error'> {nameError} </small></p>
                    <input onChange={handleInput} className='input-field' type="email" name="email" required placeholder="Enter Your Email" id="email" /> <br />
                    <p><small className='input-error'> {emailError} </small></p>
                    <input onChange={handleInput} className='input-field' type="password" name="password" placeholder="Enter Your Password" /> <br />
                    <p><small className='input-error'> {passwordError} </small></p>
                    <input onChange={handleInput} className='input-field' type="password" name="confirmPassword" placeholder="Confirm Your Password" />
                    <p><small className='input-error'> {confirmPasswordError} </small></p>
                    <input className='input-field submit-btn' type="submit" value="Sign Up" />
                </form>
                <p><small>Already have an account?<Link className='signUp-link' to="/login"> Login</Link> </small></p>
                <p style={{ color: 'white' }} >Or</p>
                <button onClick={handleGoogleSignIn} className="submit-btn"> <GoogleIcon style={{ fill: "green", margin: '5px', fontSize: '25px' }} />Continue with Google</button>
                <p><small className="input-error" style={{fontSize:'14px'}} >{firebaseError}</small></p>
            </div>
        </div>
    );
};

export default SignUp;