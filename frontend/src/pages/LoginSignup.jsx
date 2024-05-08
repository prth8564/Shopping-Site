import React from 'react';
import './CSS/LoginSignup.css';
const LoginSignup= () =>{
return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your UserName' />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
                Already have an account? 
                <span>Log in</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" />
                <p>By Continuing , I agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
)
}
export default LoginSignup;