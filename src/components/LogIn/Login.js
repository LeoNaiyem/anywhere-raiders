import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const handleSubmit = (e)=>{
        console.log('submit', e);
    }
    const handleInput = (e)=>{
        console.log('input', e);
    }
    return (
        <div className="login">

            <div className="login-area">
                <h2>Create An Account</h2>
                <form action="" onSubmit={handleSubmit} >
                    <input onBlur={handleInput} className='input-field' type="email" name="email" required placeholder="Enter Your Email" id="email" /> <br />
                    <input onBlur={handleInput} className='input-field' type="password" name="password" placeholder="Enter Your Password" /> <br />
                    <input className='input-field submit-btn' type="submit" value="Log In" />
                </form>
                <p><small>Don't have an account?<Link className='signUp-link' to="/signUp"> Create an account</Link> </small></p>
                <p style= {{color:'white'}} >Or</p>
                <button className="submit-btn"> <GoogleIcon style={{fill: "#4285F4", margin:'5px', fontSize: '25px'}}/>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;