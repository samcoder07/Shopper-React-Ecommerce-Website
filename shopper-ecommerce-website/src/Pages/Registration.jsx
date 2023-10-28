import React from 'react'
import  './CSS/Registration.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div className='registration'>
      <div className="registration-container">
        <h1>Registration Form</h1>
        <div className="registration-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='password' />
          <input type='tel' placeholder='telephone'/>
        </div>
        <p className='loginsignup-login'>Already have an account? <span><Link to="/login">Sign Up</Link></span></p>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default LoginSignup
