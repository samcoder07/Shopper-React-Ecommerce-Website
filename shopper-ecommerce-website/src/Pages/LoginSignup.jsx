import React, { useState } from 'react'
import  './CSS/LoginSignup.css'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase'
const LoginSignup = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const userCredential = await createUserWithEmailAndPassword(auth,email,password);
          console.log(userCredential);
          const user = userCredential.user;
          localStorage.setItem('token',user.accessToken);
          localStorage.setItem('user',JSON.stringify(user));
          navigate("/");
      } catch (error) {
          console.error(error);
      }
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form action="" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder='Email address' required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='password'  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button>Continue</button>
        </form>
        <p className='loginsignup-login'>Already have an account? <span><Link to="/loginsign">Login Here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
