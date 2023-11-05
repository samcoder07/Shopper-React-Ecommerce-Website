import React, { useState } from 'react'
import  './CSS/Registration.css'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let initialState = {
  name:'',
  email : '',
  password:''
}

const LoginSignup = () => {

  const [formdata , setFormData] = useState(initialState);

  let {name,email,password} = formdata;

  const inputChange = (event) =>{
      setFormData((prevProps)=>({
        ...prevProps,
        [event.target.name]: event.target.value 
      }))
  }

  const submit = (event) =>{
    createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className='registration'>
      <div className="registration-container">
        <h1>Registration Form</h1>
        <div className="registration-fields">
          <input type="text" name="name" placeholder='Your Name' value={name} onChange={inputChange}/>
          <input type="email" name="email" placeholder='Email address'  value={email} onChange={inputChange}/>
          <input type="password" name="password" placeholder='password' value={password} onChange={inputChange} />
          <input type='tel' name="telephone" placeholder='telephone'/>
        </div>
        <p className='loginsignup-login'>Already have an account? <span><Link to="/login">Sign Up</Link></span></p>
        <button  onSubmit={submit}>Continue</button>
      </div>
    </div>
  )
}

export default LoginSignup
