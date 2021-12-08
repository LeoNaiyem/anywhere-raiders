import React, { useContext } from 'react';
import './SignUp.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';







initializeApp(firebaseConfig);
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleSubmit = (e) => {
        console.log('submit', e);
    }
    const handleInput = (e) => {
        console.log('input', e);
    }
    const handleGoogleSignIn = (e) => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const newUser = {name: displayName, email: email}
                setLoggedInUser(newUser);
                navigate(from, { replace: true });
                console.log(newUser.email);
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