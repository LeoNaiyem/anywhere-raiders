import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = (e) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedInUser(user);
                setError('');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorCode, errorMessage);
            });
        e.preventDefault();
    }


    const handleInput = (e) => {
        const { name, value } = e.currentTarget;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleGoogleLogin = () => {
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
                setError(errorMessage);
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    
    return (
        <div className="login">

            <div className="login-area">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit} >
                    <input onBlur={handleInput} className='input-field' type="email" name="email" required placeholder="Enter Your Email" id="email" /> <br />
                    <input onBlur={handleInput} className='input-field' type="password" name="password" placeholder="Enter Your Password" /> <br />
                    <input className='input-field submit-btn' type="submit" value="Log In" />
                </form>
                <p><small>Don't have an account?<Link className='signUp-link' to="/signUp"> Create an account</Link> </small></p>
                <p style={{ color: 'white' }} >Or</p>
                <button onClick= {handleGoogleLogin} className="submit-btn"> <GoogleIcon style={{ fill: "#4285F4", margin: '5px', fontSize: '25px' }} />Continue with Google</button>
                <p style={{ marginTop: '10px'}}><small className="input-error" style={{fontSize:'16px'}} >{error}</small></p>
            </div>
        </div>
    );
};

export default Login;