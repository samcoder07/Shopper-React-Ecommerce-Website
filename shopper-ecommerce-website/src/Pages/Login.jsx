import React, { useState } from 'react'
import  './CSS/Login.css'
import {Link, useNavigate} from 'react-router-dom';
const LoginSignup = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="login-container">
       <form action="">
        <h1>Log In</h1>
        <div className="login-fields">
          <input type="email" placeholder='Email address'/>
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
       </form>
        <p className='loginsignup-login'>Are you a new user? <span><Link to='/login'>Sign Up</Link></span></p>
      </div>
    </div>
  )
}

export default LoginSignup
