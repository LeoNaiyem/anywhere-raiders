import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
const SignUp = () => {
    const handleSubmit = (e)=>{
        console.log('submit', e);
    }
    const handleInput = (e)=>{
        console.log('input', e);
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
                <p style= {{color:'white'}} >Or</p>
                <button className="submit-btn"> <GoogleIcon style={{fill: "green", margin:'5px', fontSize: '25px'}}/>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;