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


    const handleInput = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            if (value === password) {
                setConfirmPassword(value);
            } else {
                console.log('Passwords are not matching')
            }
        }
    }
    const handleSubmit = (e) => {
        if (name && email && password && confirmPassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setLoggedInUser(user)
                    updateUserName(name)
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
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
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    return (
        <div className="login">
            <div className="signUp-area">
                <h2>Create An Account</h2>
                <form action="" onSubmit={handleSubmit} >
                    <input onBlur={handleInput} className='input-field' type="text" name="name" required placeholder="Enter Your Name" id="name" /> <br />
                    <input onBlur={handleInput} className='input-field' type="email" name="email" required placeholder="Enter Your Email" id="email" /> <br />
                    <input onBlur={handleInput} className='input-field' type="password" name="password" placeholder="Enter Your Password" /> <br />
                    <input onBlur={handleInput} className='input-field' type="password" name="confirmPassword" placeholder="Confirm Your Password" />
                    <input className='input-field submit-btn' type="submit" value="Sign Up" />
                </form>
                <p><small>Already have an account?<Link className='signUp-link' to="/login"> Login</Link> </small></p>
                <p style={{ color: 'white' }} >Or</p>
                <button onClick={handleGoogleSignIn} className="submit-btn"> <GoogleIcon style={{ fill: "green", margin: '5px', fontSize: '25px' }} />Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;